import axios from 'axios';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db} from "@/src/firebaseConfig";
import {FirebaseUser} from "@/src/shared/types/FirebaseUser";
import {doc, setDoc} from "firebase/firestore";
import {RegisterData} from "@/src/app/(public)/components/Modals/AuthModal/Registration";
import {LoginData} from "@/src/app/(public)/components/Modals/AuthModal/Login";

export const AuthRegisterUser = async (data: RegisterData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);

    await updateProfile(userCredential.user, { displayName: data.nickname });

    const user: FirebaseUser = userCredential.user;
    if (!user) {
      throw new Error('Ошибка регистрации пользователя');
    }

    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: data.nickname,
      resources: {
        silver: 1000,
        energy: 80,
        rubies: 20,
      },
      experience: 0,
      createdAt: new Date(),
    });

    return user;

  } catch (error) {
    console.error('Ошибка регистрации:', error);
    return null;
  }
};

export const AuthLoginUser = async (data:LoginData) => {
  const resp = await signInWithEmailAndPassword(auth, data.email, data.password);
  const user:FirebaseUser = resp.user
  return user
}



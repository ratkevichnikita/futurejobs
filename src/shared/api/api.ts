import axios from 'axios';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth";
import {auth, db} from "@/src/firebaseConfig";
import {FirebaseUser} from "@/src/shared/types/FirebaseUser";
import {doc, setDoc, getDoc, collection, getDocs, collectionGroup} from "firebase/firestore";
import {RegisterData} from "@/src/app/(public)/components/Modals/AuthModal/Registration";
import {LoginData} from "@/src/app/(public)/components/Modals/AuthModal/Login";
import {GiftForVisiting} from "@/src/shared/types/Gifts";

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
        silver: 50000,
        energy: 18,
        rubies: 20,
      },
      power: 100,
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
  const user:FirebaseUser = resp.user;
  return user
}

export const AuthLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Ошибка выхода из системы:', error);
  }
};

export const getUserData = async (uid: string) => {
  try {
    const userRef = doc(db, "users", uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.error('Пользователь не найден');
      return null;
    }
  } catch (error) {
    console.error('Ошибка получения данных пользователя:', error);
    return null;
  }
};

export const getGiftsByDayRange = async (): Promise<{ name: string; options: any[] }[]> => {
  try {
    const giftsCollectionRef = collection(db, 'gifts');
    const giftsSnapshot = await getDocs(giftsCollectionRef);

    const results: GiftForVisiting[] = [];

    giftsSnapshot.forEach((doc) => {
      const data = doc.data();
      const options = Object.keys(data).map((key) => data[key]);
      results.push({
        name: doc.id,
        options: options
      });
    });

    return results;
  } catch (error) {
    console.error("Ошибка при получении подарков:", error);
    return [];
  }
};

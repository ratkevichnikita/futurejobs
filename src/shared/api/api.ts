import axios from 'axios';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth";
import {auth, db} from "@/src/firebaseConfig";
import {FirebaseUser} from "@/src/shared/types/FirebaseUser";
import {doc, setDoc, getDoc, collection, getDocs, collectionGroup,updateDoc} from "firebase/firestore";
import {RegisterData} from "@/src/app/(public)/components/Modals/AuthModal/Registration";
import {LoginData} from "@/src/app/(public)/components/Modals/AuthModal/Login";
import {GiftForVisiting} from "@/src/shared/types/Gifts";
import { fromUnixTime } from 'date-fns';

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
      giftsClaimed: [],
      lastClaimedDate: null,
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
/**
 *
 * Вынести локику выдачи подарков на сервер
 */
export const getGiftsByDayRange = async (userData): Promise<{ name: string; options: any[] }[]> => {
  try {
    const giftsCollectionRef = collection(db, 'gifts');
    const giftsSnapshot = await getDocs(giftsCollectionRef);

    const claimedGifts = userData?.giftsClaimed || [];

    const results: GiftForVisiting[] = [];
    const getNextGayGift = nextDayGift(userData.lastClaimedDate.seconds)

    giftsSnapshot.forEach((doc) => {
      const data = doc.data();
      const options = Object.keys(data).map((key) => {
        const giftDay = data[key].day;
        const y = claimedGifts.map(item => item.options.includes(+giftDay))[0];
        const z = Math.max.apply(null, claimedGifts.map(item => item.options)[0])

        return {
          ...data[key],
          claimed: claimedGifts.map(item => item.options.includes(+giftDay))[0], // Подарок уже был забран
          toClaim: getNextGayGift && +giftDay === (z + 1),   // Подарок доступен для забора
        };
      });

      results.push({
        name: doc.id,
        isAllClaimed: false,
        options,
      });
    });

    return results;
  } catch (error) {
    console.error("Ошибка при получении подарков:", error);
    return [];
  }
};

export const claimGift = async (userId: string, day: number,userData: any, name) => {
  try {
    if(userData.giftsClaimed.length === 0) {
      userData.giftsClaimed.push({name,options:[day]})
    } else {
      userData.giftsClaimed.forEach(item => {
        if(item.name === name) {
          item.options.push(day)
        }
      })
    }
    console.log("Подарок успешно забран!");
  } catch (error) {
    console.error("Ошибка при забирании подарка:", error);
  }
};

const nextDayGift = (userLastClaimDate) => {
  const clickTime = new Date(userLastClaimDate * 1000);
  const currentTime = new Date();
  const clickDateStart = new Date(clickTime.getFullYear(), clickTime.getMonth(), clickTime.getDate());
  const currentDateStart = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
  return currentDateStart > clickDateStart
}
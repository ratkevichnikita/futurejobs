"use client"
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/src/firebaseConfig";
import { getUserData } from "@/src/shared/api/api";

export const useUserData = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          setLoading(true);
          const fetchedUserData = await getUserData(user.uid);
          setUserData(fetchedUserData);
        } catch (err) {
          console.error('Ошибка получения данных пользователя:', err);
          setError('Не удалось загрузить данные пользователя');
        } finally {
          setLoading(false);
        }
      } else {
        setUserData(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { userData, loading, error };
};

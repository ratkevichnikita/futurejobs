"use client"
import {useEffect, useState} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { AuthStore } from "@/shared/store/AuthStore";
import {useRouter} from "next/navigation";
import PrivateHome from "@/app/(private)/PrivateHome";
import PublicHome from "@/app/(public)/PublicHome";

const AuthListener = () => {
  const { user } = AuthStore.useState((store) => store);
  const [isAuth,setIsAuth] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if(user || accessToken) setIsAuth(true)
  }, [user])


  return (
    <>
      {isAuth ? <PrivateHome/> : <PublicHome />}
    </>
  )
};

export default AuthListener;
"use client";
import { useEffect, useState } from "react";
import { AuthStore } from "@/src/shared/store/AuthStore";
import PrivateHome from "@/src/app/(private)/PrivateHome";
import PublicHome from "@/src/app/(public)/PublicHome";

const AuthListener = () => {
  const { user } = AuthStore.useState((store) => store);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setIsAuth(!!user || !!accessToken);
  }, [user]); 

  return (
    <>
      {isAuth ? <PrivateHome /> : <PublicHome />}
    </>
  );
};

export default AuthListener;

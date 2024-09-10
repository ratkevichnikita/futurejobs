"use client"
import React from "react";
import PrivateHome from "@/src/app/(private)/PrivateHome";
import PublicHome from "@/src/app/(public)/PublicHome";
import {useUserData} from "@/src/shared/hooks/useUserData";

const AuthListener = () => {
  const { userData, loading } = useUserData();

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      {userData ? <PrivateHome /> : <PublicHome />}
    </>
  );
};

export default AuthListener;

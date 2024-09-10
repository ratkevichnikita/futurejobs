"use client"
import React from "react";
import PrivateHome from "@/src/app/(private)/PrivateHome";
import PublicHome from "@/src/app/(public)/PublicHome";
import {useUserData} from "@/src/shared/hooks/useUserData";
import Spinner from "@/src/shared/ui/Spinner/Spinner";

const AuthListener = () => {
  const { userData, loading } = useUserData();

  if (loading) {
    return <div className="h-full flex items-center justify-center"><Spinner/></div>;
  }

  return (
    <>
      {userData ? <PrivateHome /> : <PublicHome />}
    </>
  );
};

export default AuthListener;

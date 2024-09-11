"use client"
import React from "react";
import PrivateHome from "@/src/app/(private)/PrivateHome";
import PublicHome from "@/src/app/(public)/PublicHome";
import {useUserData} from "@/src/shared/hooks/useUserData";
import Spinner from "@/src/shared/ui/Spinner/Spinner";
import TempMessage from "@/src/shared/ui/TempMessage/TempMessage";

const AuthListener = () => {
  const { userData, loading, error } = useUserData();

  if (loading) {
    return <div className="h-full flex items-center justify-center"><Spinner/></div>;
  }

  if(error) {
    return <TempMessage message={error} />
  }

  return (
    <>
      {userData ? <PrivateHome /> : <PublicHome />}
    </>
  );
};

export default AuthListener;

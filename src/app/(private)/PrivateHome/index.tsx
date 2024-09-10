import React from 'react';
import Header from "@/src/app/(private)/components/Header";
import {useUserData} from "@/src/shared/hooks/useUserData";

const PrivateHome = () => {
  const { userData } = useUserData();

  return (
    <div>
      <Header />
      <div className="container">
        Основной контент
      </div>
    </div>
  );
};

export default PrivateHome;

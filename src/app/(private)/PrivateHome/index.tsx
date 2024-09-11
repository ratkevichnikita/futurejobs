import React from 'react';
import Header from "@/src/app/(private)/components/Header";
import {useUserData} from "@/src/shared/hooks/useUserData";
import EveryDayGiftsModal from "@/src/app/(private)/Modals/EverydayGifts";
import AsideMenu from "@/src/app/(private)/components/AsideMenu/AsideMenu";

const PrivateHome = () => {
  const { userData, gifts } = useUserData();

  return (
    <div>
      <EveryDayGiftsModal gifts={gifts} />
      <Header />
      <AsideMenu />
      <div className="container">
        Основной контент
      </div>
    </div>
  );
};

export default PrivateHome;

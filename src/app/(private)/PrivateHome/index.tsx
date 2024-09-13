import React from 'react';
import Image from "next/image";
import Header from "@/src/app/(private)/components/Header";
import {useUserData} from "@/src/shared/hooks/useUserData";
import EveryDayGiftsModal from "@/src/app/(private)/Modals/EverydayGifts";
import AsideMenu from "@/src/app/(private)/components/AsideMenu/AsideMenu";
import Main from "@/public/images/main.webp";

const PrivateHome = () => {
  const { userData, gifts } = useUserData();

  return (
    <div>
      <Image fill src={Main.src} unoptimized alt="Image" className="inset-0 z-10 h-full w-full rounded object-cover"/>
      <EveryDayGiftsModal userData={userData} gifts={gifts} />
      <Header />
      <AsideMenu />
      <div className="container relative z-[20]">
        Основной контент
      </div>
    </div>
  );
};

export default PrivateHome;

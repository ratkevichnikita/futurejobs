import React from 'react';
import User from '@/public/images/user.webp'
import Image from "next/image";
import clsx from "clsx";
import {SetUserAuth} from "@/src/shared/store/AuthStore";
import {AuthLogout} from "@/src/shared/api/api";
import {getUserLevel, UserProgress} from "@/src/shared/helper/calculateUserLevel";

const Profile = ({name,experience,power}) => {

  const userProgress: UserProgress = getUserLevel(experience);

  const logout = async () => {
    await AuthLogout();
    SetUserAuth(null);
    localStorage.removeItem('accessToken');
  }

  return (
    <div className={"flex items-center"}>
      <div className="relative group">
        <div className={clsx("bg-white px-[10px] py-[5px] absolute left-[50%] top-[50%] z-[20] cursor-pointer shadow-lg opacity-0 pointer-events-none transition-opacity group-hover:pointer-events-auto group-hover:opacity-100", {})}>
          <button type="button" onClick={logout} className="text-[0.781vw]">Выйти</button>
        </div>
        <div className="relative w-[2.572vw] h-[2.572vw] rounded-full overflow-hidden cursor-pointer duration-300 transition-transform hover:scale-[1.15] ">
          <Image
            src={User.src}
            fill
            unoptimized
            alt="Image"
            className="inset-0 z-10 h-full w-full rounded object-cover"
          />
        </div>
        <span className="text-[0.491vw] flex items-center justify-center w-[15px] h-[15px] bg-white z-[20] absolute right-[-7px] top-0 rounded-full border-[1px] border-accent">
          {userProgress.level}
        </span>
      </div>
      <div>
        <p className="text-[0.781vw] ml-[0.781vw]">{name}</p>
        <div className="relative w-[100px] h-[10px] text-[0.461vw] text-center border-[1px] border-accent rounded-[0.150vw] ml-[-5px] pl-[5px]">
          <span style={{width: `${userProgress.progressPercentage}%`}} className={clsx("block h-full transition-all bg-accent absolute left-0 top-0", {})} />
          {userProgress.progressPercentage}%
        </div>
        {/*<div>*/}
        {/*  <p className="text-[0.581vw]">Сила игрока: <span className="font-bold text-accent">{power}</span></p>*/}
        {/*</div>*/}
      </div>
      {/*<div className="relative ml-[10px] text-[0.781vw]">*/}
      {/*  XP*/}
      {/*  <span className="text-[0.461vw] text-accent absolute right-[-3px] bottom-0">x2</span>*/}
      {/*</div>*/}
    </div>
  );
};

export default Profile;
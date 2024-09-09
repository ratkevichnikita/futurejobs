import React from 'react';
import user from '../../../../../public/images/user.webp'
import Image from "next/image";

const Profile = () => {
  return (
    <div className={"flex items-center"}>
      <div className="relative">
        <div className="relative w-[2.572vw] h-[2.572vw] rounded-full overflow-hidden">
          <Image
            src={user.src}
            fill
            unoptimized
            alt="Image"
            className="inset-0 z-10 h-full w-full rounded object-cover"
          />
        </div>
        <span className="text-[0.491vw] flex items-center justify-center w-[15px] h-[15px] bg-white z-[20] absolute right-[-7px] top-0 rounded-full border-[1px] border-accent">1</span>
      </div>
      <div>
        <p className="text-[0.781vw] ml-[0.781vw]">user name</p>
        <div className="w-[100px] h-[10px] text-[0.461vw] text-center border-[1px] border-accent rounded-[0.150vw] ml-[-5px] pl-[5px]">
          20%
        </div>
        <div>
          <p className="text-[0.581vw]">Сила игрока: <span className="font-bold text-accent">1000</span></p>
        </div>
      </div>
      {/*<div className="relative ml-[10px] text-[0.781vw]">*/}
      {/*  XP*/}
      {/*  <span className="text-[0.461vw] text-accent absolute right-[-3px] bottom-0">x2</span>*/}
      {/*</div>*/}
    </div>
  );
};

export default Profile;
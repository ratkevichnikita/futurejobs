"use client"
import React, {useState} from 'react';
import clsx from "clsx";
import {setGiftsVisitingModalActive} from "@/src/shared/store/GiftsStore";
import Image from "next/image";
import icon1 from '@/public/images/icons/icon-every-day-visiting.svg';
import icon2 from '@/public/images/icons/icon-promocode.svg';
import icon3 from '@/public/images/icons/icon-progress.svg';
import icon4 from '@/public/images/icons/icon-news.svg';
import Arrow from '@/public/images/icons/icon_arrow.svg';


const AsideMenu = () => {
  const [showSideBar,setShowSideBar] = useState(false);
  const handleProgressReward = () => {
    console.log("Награды за прогресс"); // Логика обработки
  };

  const handlePromoCodes = () => {
    console.log("Промокоды"); // Логика обработки
  };

  const handleNews = () => {
    console.log("Новости"); // Логика обработки
  };
  const actions = [
    {
      name: "Награды за посещение",
      handle: () => setGiftsVisitingModalActive(true),
      image: icon1
    },
    {
      name: "Награды за прогресс",
      handle: handleProgressReward,
      image: icon3
    },
    {
      name: "Промокоды",
      handle: handlePromoCodes,
      image: icon2
    },
    {
      name: "Новости",
      handle: handleNews,
      image: icon4
    },
  ]

  const onSideBarHandle = () => {
    setShowSideBar(!showSideBar)
  }

  return (
    <div className={clsx("absolute left-0 top-0 w-[300px] z-[50] duration-300 translate-x-[-100%] transition-transform text-white h-full bg-[#080D26F2] rounded-r-[30px] border-[1px] border-[#FFA725]  border-l-0",{
      "!translate-x-0":showSideBar
    })}>
      <div className="relative h-full py-[20px] px-[20px]">
        <button onClick={onSideBarHandle} className={clsx("block w-[30px] h-[100px] bg-[#080D26F2] rounded-r-[23px] absolute top-[50%] translate-y-[-50%] right-0 translate-x-[100%] border-[1px] border-[#FFA725] border-l-0",{})} >
          <Image
            src={Arrow.src}
            width={Arrow.width}
            height={Arrow.height}
            alt={"arrow icon"}
            className={clsx("", {"rotate-[180deg]": showSideBar})}
          />
        </button>

        <div className="flex flex-col h-full">
          <div className="w-full grow">
            <div className="flex flex-wrap gap-[18px]">
              {actions.map(item => {
                return (
                  <div className="max-w-[70px] space-y-[5px]">
                    <button onClick={item.handle} className="flex transition-transform duration-300 hover:scale-[1.05] items-center justify-center rounded-full w-[70px] min-w-[70px] h-[70px] bg-[#141830] border-[1px] border-[#FFA72580]" type="button" key={item.name}>
                      <Image src={item.image.src} alt={item.name} width={item.image.width} height={item.image.height} />
                    </button>
                    <p className="text-[12px] text-center"> {item.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full py-[10px]">
            footer
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideMenu;
"use client"
import React, {useState} from 'react';
import clsx from "clsx";
import {setGiftsVisitingModalActive} from "@/src/shared/store/GiftsStore";

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
      image: ''
    },
    {
      name: "Награды за прогресс",
      handle: handleProgressReward,
      image: ''
    },
    {
      name: "Промокоды",
      handle: handlePromoCodes,
      image: ''
    },
    {
      name: "Новости",
      handle: handleNews,
      image: ''
    },
  ]

  const onSideBarHandle = () => {
    setShowSideBar(!showSideBar)
  }

  return (
    <div className={clsx("absolute left-0 top-0 w-[30%] z-[20] duration-300 translate-x-[-100%] transition-transform text-white h-full bg-[rgba(0,0,0,0.5)]",{
      "!translate-x-0":showSideBar
    })}>
      <div className="relative h-full py-[20px] px-[20px]">
        <button onClick={onSideBarHandle} className="absolute top-[50%] translate-y-[-50%] right-0 translate-x-[100%]">arrow</button>
        <div className="flex flex-col h-full">
          <div className="w-full grow">
            {actions.map(item => {
              return (
                <button onClick={item.handle} className="block text-left text-[12px]" type="button" key={item.name}>{item.name}</button>
              )
            })}
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
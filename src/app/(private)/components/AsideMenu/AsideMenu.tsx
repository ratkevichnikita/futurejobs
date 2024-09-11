"use client"
import React, {useState} from 'react';
import clsx from "clsx";

const AsideMenu = () => {
  const [showSideBar,setShowSideBar] = useState(false)
  const actions = [
    {
      name: "Награды за посещение",
      handle: 'action',
      image: ''
    },
    {
      name: "Награды за прогресс",
      handle: 'action',
      image: ''
    },
    {
      name: "Промокоды",
      handle: 'action',
      image: ''
    },
    {
      name: "Новости",
      handle: 'action',
      image: ''
    },
  ]

  const onSideBarHandle = () => {
    setShowSideBar(!showSideBar)
  }
  console.log('showSideBar',showSideBar)
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
                <button className="block text-left text-[12px]" type="button" key={item.name}>{item.name}</button>
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
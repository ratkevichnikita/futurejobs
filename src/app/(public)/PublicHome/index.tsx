import React from 'react';
import {storeSetModalActive,storeSetModalContent} from "@/src/shared/store/AuthStore";

const PublicHome = () => {

  const onHandleAuth = (value:'login' | 'register' | null) => {
    storeSetModalActive(true)
    storeSetModalContent(value)
  }

  return (
    <div>
      <p className="text-center mb-[0.781vw]">Домашняя страница</p>
      <div className="flex gap-[0.781vw] justify-center">
        <button className="block border-[1px] border-accent text-accent py-[5px] px-[20px]" onClick={() => onHandleAuth('register')}>Реристрация</button>
        <button className="block border-[1px] border-accent text-accent bg-accent text-white py-[5px] px-[20px]" onClick={() => onHandleAuth('login')}>Логин</button>
      </div>
    </div>
  );
};

export default PublicHome;
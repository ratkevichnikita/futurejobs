import React from 'react';

const AsideMenu = () => {
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

  return (
    <div className="fixed flex flex-col left-0 top-0 w-[30%] z-[20] text-white h-[100vh] bg-[rgba(0,0,0,0.5)] py-[20px] px-[20px]">
      <div className="w-full grow">
        {actions.map(item => {
          return (
            <div key={item.name}>{item.name}</div>
          )
        })}
      </div>
      <div className="w-full py-[10px]">
        footer
      </div>
    </div>
  );
};

export default AsideMenu;
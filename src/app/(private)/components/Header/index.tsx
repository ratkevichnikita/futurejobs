import React from 'react';
import Resources from "@/app/(private)/components/Resources";
import Profile from "@/app/(private)/components/Profile";

const Header = () => {
  const resources = [
    {name: "Energy", count: 100, image: ''},
    {name: "Silver", count: 100, image: ''},
    {name: "Rubies", count: 100, image: ''},
  ]
  return (
    <div className="flex items-center justify-between p-[0.781vw] text-center border-b-1 bg-slate-200 sm:p-[6.25vw]">
      <Profile />
      <Resources resources={resources} />
      <div>Чат</div>
    </div>
  );
};

export default Header;
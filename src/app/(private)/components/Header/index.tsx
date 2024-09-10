import React from 'react';
import Resources from "@/src/app/(private)/components/Resources";
import Profile from "@/src/app/(private)/components/Profile";
import {AuthStore} from "@/src/shared/store/AuthStore";

const Header = () => {
  const {userData} = AuthStore.useState((store) => store);

  return (
    <div className="flex items-center justify-between p-[0.781vw] text-center border-b-1 bg-slate-200 sm:p-[6.25vw]">
      <Profile />
      {(userData && userData.resources) && <Resources resources={userData.resources} />}
      <div>Чат</div>
    </div>
  );
};

export default Header;
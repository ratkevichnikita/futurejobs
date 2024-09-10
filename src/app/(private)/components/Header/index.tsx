import React from 'react';
import Resources from "@/src/app/(private)/components/Resources";
import Profile from "@/src/app/(private)/components/Profile";
import {useUserData} from "@/src/shared/hooks/useUserData";

const Header = () => {
  const { userData } = useUserData();
  return (
    <div className="flex items-center justify-between p-[0.781vw] text-center border-b-1 bg-slate-200 sm:p-[6.25vw]">
      {userData &&
        <Profile
          name={userData.displayName}
          experience={userData.experience}
          power={userData.power}
        />
      }
      {userData && <Resources resources={userData.resources} />}
      <div>Чат</div>
    </div>
  );
};

export default Header;
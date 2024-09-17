import React from 'react';
import Resources from "@/src/app/(private)/components/Resources";
import Profile from "@/src/app/(private)/components/Profile";
import {useUserData} from "@/src/shared/hooks/useUserData";
import {setChatModalActive} from "@/src/shared/store/ChatStore";

const Header = () => {
  const { userData } = useUserData();
  return (
    <div className="relative z-[20] flex items-center justify-between p-[0.781vw] text-center sm:p-[6.25vw]">
      {userData &&
        <Profile
          name={userData.displayName}
          experience={userData.experience}
          power={userData.power}
        />
      }
      {userData && <Resources resources={userData.resources} />}
      <div className="ml-[50px]" onClick={() => setChatModalActive(true)}>Чат</div>
    </div>
  );
};

export default Header;
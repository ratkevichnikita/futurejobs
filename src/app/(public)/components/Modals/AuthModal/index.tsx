"use client"
import {AuthStore} from "@/src/shared/store/AuthStore";
import Login from "@/src/app/(public)/components/Modals/AuthModal/Login";
import Registration from "@/src/app/(public)/components/Modals/AuthModal/Registration";

const AuthModal = () => {
  const {authModalContent } = AuthStore.useState((store) => store);

  const renderContent = () => {
    switch (authModalContent) {
      case "login":
        return <Login />
      case "register":
        return <Registration />
      default:
        return <Registration />
    }
  }

  return (
    <div className="flex flex-col h-full pt-[125px] items-center mx-auto max-w-[460px] w-full justify-center sm:flex-1">
      <div className="bg-[#080D26F2] rounded-[1.172vw] py-[30px] px-[75px] space-y-[10px] w-full max-h-[410px]">
        {renderContent()}
      </div>
    </div>
  )
};

export default AuthModal;

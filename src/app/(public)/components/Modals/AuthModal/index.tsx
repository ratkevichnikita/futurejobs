"use client"
import { Dialog, Transition } from "@headlessui/react"
import {AuthStore,storeSetModalContent,storeSetModalActive} from "@/src/shared/store/AuthStore";
import Login from "@/src/app/(public)/components/Modals/AuthModal/Login";
import Registration from "@/src/app/(public)/components/Modals/AuthModal/Registration";
import Image from "next/image";
import IconClose from "@/public/images/icons/icon-close.webp"

const AuthModal = () => {
  const { authModalActive, authModalContent } = AuthStore.useState((store) => store);

  const renderContent = () => {
    switch (authModalContent) {
      case "login":
        return <Login />
      case "register":
        return <Registration />
      default:
        return <Login />
    }
  }

  const closeAuthModal = () => storeSetModalActive(false)

  return (
    <Transition
      appear
      show={authModalActive}
      as="div"
    >
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={() => storeSetModalActive(false)}
      >
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] transition-all duration-300">
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-100"
          >
            <Dialog.Panel className="flex h-full w-full transform flex-col overflow-hidden overflow-y-auto pt-[8.566vw]  text-left align-middle transition-all sm:pt-[0]">
              <div className="flex flex-col items-center justify-center sm:flex-1">
                <div className="bg-white p-[50px] space-y-[10px] relative">
                  <Image
                    src={IconClose.src}
                    width={IconClose.width}
                    height={IconClose.height}
                    onClick={closeAuthModal}
                    alt="close icon"
                    className="absolute right-[10px] top-[10px] w-[0.981vw] h-[0.981vw] cursor-pointer transition-transform scale-[1.15]"
                  />
                  {renderContent()}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )

};

export default AuthModal;

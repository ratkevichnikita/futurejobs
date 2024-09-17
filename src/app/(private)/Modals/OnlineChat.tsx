"use client"
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import IconClose from "@/public/images/icons/icon-close.webp";
import Chat from "@/src/app/(private)/components/Chat/Chat";
import {ChatStore, setChatModalActive} from "@/src/shared/store/ChatStore";

interface ComponentProps {
  userData: any
}

const OnlineChat = ({userData}:ComponentProps) => {
  const { ChatModalActive } = ChatStore.useState((store) => store);
  const userId = userData && userData?.uid;

  return (
    <Transition
      appear
      show={ChatModalActive}
      as="div"
    >
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={() => setChatModalActive(false)}
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
                <div className="w-[50vw] bg-white space-y-[10px] relative">
                  <Image
                    src={IconClose.src}
                    width={IconClose.width}
                    height={IconClose.height}
                    onClick={() => setChatModalActive(false)}
                    alt="close icon"
                    className="absolute right-[10px] top-[10px] w-[0.981vw] h-[0.981vw] cursor-pointer transition-transform scale-[1.15]"
                  />
                  <div >
                    <Chat />
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )

};

export default OnlineChat;

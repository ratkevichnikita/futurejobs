"use client"
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import IconClose from "@/public/images/icons/icon-close.webp";
import {GiftForVisiting} from "@/src/shared/types/Gifts";
import {GiftsStore, setGiftsVisitingModalActive} from "@/src/shared/store/GiftsStore";
import clsx from "clsx";
import {GiftService} from "@/src/shared/api";

interface ComponentProps {
  gifts: GiftForVisiting[]
  userData: any
}

const EveryDayGiftsModal = ({gifts,userData}:ComponentProps) => {
  const { giftsVisitingModalActive } = GiftsStore.useState((store) => store);
  const closeAuthModal = () => setGiftsVisitingModalActive(false)
  const userId = userData && userData?.uid;
  return (
    <Transition
      appear
      show={giftsVisitingModalActive}
      as="div"
    >
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={closeAuthModal}
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
                    onClick={closeAuthModal}
                    alt="close icon"
                    className="absolute right-[10px] top-[10px] w-[0.981vw] h-[0.981vw] cursor-pointer transition-transform scale-[1.15]"
                  />
                  <div >
                    {gifts.map(item => {
                      return (
                        <div className="flex" key={item.name}>
                          <div className="px-10 py-[10px] border-[1px]">
                            <p>{item.name}</p>
                          </div>
                          <div className="flex">
                            {item.options.sort((a,b) => a.day - b.day).map(el => {
                              return (
                                <button onClick={() =>  GiftService.claimGift({ userId, day: +el.day, userData, name: item.name, gift: el })}
                                        disabled={el.claimed || !el.toClaim}
                                        type="button" className={clsx("p-[10px] border-[1px]",{
                                          "border-accent": el.toClaim
                                        })}
                                        key={el.day}
                                >
                                  <span>{el.value}</span>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
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

export default EveryDayGiftsModal;

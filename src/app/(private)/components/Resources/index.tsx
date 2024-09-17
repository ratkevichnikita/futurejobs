import React from 'react';
import Image from "next/image";
import Coin from "@/public/images/icons/icon-coin.svg";
import Poison from "@/public/images/icons/icon-poison.svg";
import Energy from "@/public/images/icons/icon-energy.svg";
import Plus from "@/public/images/icons/icon-plus.svg";
import {formatNumber} from "@/src/shared/api/helpers/formatNumber";


interface ComponentProps {
  resources: {
    silver: number
    energy: number
    rubies: number
  }
}

const Resources = ({resources}:ComponentProps) => {
  return (
    <div className="flex gap-[20px] ml-auto">
      <div className="relative w-[130px] rounded-[50px] border-[1px] border-[#FFA72580] bg-[#141830F2] py-[5px] px-[8px]">
        <div className="absolute left-[-2px] top-[-2px] w-[32px] h-[32px] flex items-center justify-center rounded-full border-[1px] border-[#FFA72580] bg-[#141830F2]">
          <Image
            src={Plus.src}
            width={Plus.width}
            height={Plus.height}
            alt={"icon Plus"}
          />
        </div>
        <p className="text-white text-[12px] text-right pr-[25px]">{resources.energy}/18</p>
        <Image
          src={Energy.src}
          width={Energy.width}
          height={Energy.height}
          alt={"icon Energy"}
          className="absolute right-[-8px] top-[-4px]"
        />
      </div>
      <div className="relative w-[130px] rounded-[50px] border-[1px] border-[#FFA72580] bg-[#141830F2] py-[5px] px-[8px]">
        <div className="absolute left-[-2px] top-[-2px] w-[32px] h-[32px] flex items-center justify-center rounded-full border-[1px] border-[#FFA72580] bg-[#141830F2]">
          <Image
            src={Plus.src}
            width={Plus.width}
            height={Plus.height}
            alt={"icon Plus"}
          />
        </div>
        <p className="text-white text-[12px] text-right pr-[25px]">{formatNumber(resources.silver)}</p>
        <Image
          src={Coin.src}
          width={Coin.width}
          height={Coin.height}
          alt={"icon coin"}
          className="absolute right-[-8px] top-[-4px]"
        />
      </div>
      <div className="relative w-[130px] rounded-[50px] border-[1px] border-[#FFA72580] bg-[#141830F2] py-[5px] px-[8px]">
        <div className="absolute left-[-2px] top-[-2px] w-[32px] h-[32px] flex items-center justify-center rounded-full border-[1px] border-[#FFA72580] bg-[#141830F2]">
          <Image
            src={Plus.src}
            width={Plus.width}
            height={Plus.height}
            alt={"icon Plus"}
          />
        </div>
        <p className="text-white text-[12px] text-right pr-[25px]">{resources.rubies}</p>
        <Image
          src={Poison.src}
          width={Poison.width}
          height={Poison.height}
          alt={"icon Posison"}
          className="absolute right-[-8px] top-[-4px]"
        />
      </div>
    </div>
  );
};

export default Resources;
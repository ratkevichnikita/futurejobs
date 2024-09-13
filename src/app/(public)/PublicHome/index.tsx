import React from 'react';
import Home from "@/public/images/home.webp";
import Image from "next/image"
import AuthModal from "@/src/app/(public)/components/Modals/AuthModal";

const PublicHome = () => {

  return (
    <div className="relative h-full">
      <Image fill src={Home.src} unoptimized alt="Image" className="inset-0 z-[-1] h-full w-full rounded object-cover"/>
      <AuthModal />
    </div>
  );
};

export default PublicHome;
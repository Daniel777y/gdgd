"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/banner.webp"
        alt="Banner background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute top-4 left-4 z-10 animate-pulse">
          <Image
            src="/images/logo2.png"
            alt="Logo"
            width={100}
            height={40}
            objectFit="contain"
          />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-[50%] flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Fenz AI Agent Guard</h1>
        <p className="text-xl md:text-2xl mb-10 text-center max-w-2xl">Ensure AI safety and integrity through AI Driven evaluation</p>
        <Link href="#tally-open=nrLkBv&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave">
        <Button 
          size="lg" 
          variant="custom" 
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Request a Demo
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
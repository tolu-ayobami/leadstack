"use client";

import Image from "next/image";
import { partners } from "@/utils/Usedata";
import { fadeInRightVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { Reveal } from '../animations/Reavel';
import { Section } from '../animations/Section';
import { MotionItem } from '../animations/MotionItems'

export default function LogoCarousel() {

  const logos = [...partners, ...partners, ...partners];

  return (
    <div className="bg-[#FAFAFC]">
    <div className=" w-[95%] m-auto py-6 overflow-hidden relative">

      <Reveal><p className="font-noto text-md text-center mb-8">Our Partners</p></Reveal>

      <MotionItem variants={scalePopVariants} >
      <div className="flex min-w-max animate-scroll gap-10 whitespace-nowrap">
        {logos.map((logo, idx) => (
          <div key={idx} className="flex items-center gap-2 flex-shrink-0">
            <Image
              src={logo.logo}
              alt={logo.name}
              width={56}
              height={56}
              className="h-10 w-auto object-contain"
            />
            <span className="text-sm font-medium">{logo.name}</span>
          </div>
        ))}
      </div>
      </MotionItem>

      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FAFAFC] to-transparent pointer-events-none z-10"/>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FAFAFC] to-transparent pointer-events-none z-10"/>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.3333%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
    </div>
  );
}
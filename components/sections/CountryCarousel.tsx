"use client";

import Image from "next/image";
import { countries } from "@/utils/Usedata";
import { fadeInRightVariants, fadeUpVariants } from "@/utils/Variants";
import { Reveal } from '../animations/Reavel';
import { Section } from '../animations/Section';
import { MotionItem } from '../animations/MotionItems';


export default function FlagsCarousel() {
 
  const flags = [...countries, ...countries, ...countries];

  return (
    <MotionItem variants={fadeInRightVariants} >
    <div className="w-screen overflow-hidden">
      <div className="flex min-w-max animate-scroll gap-4 whitespace-nowrap">
        {flags.map((flag, idx) => (
          <div key={idx} className="flex-shrink-0 flex">
            <Image
              src={flag.flag}
              alt={`flag-${idx}`}
              width={38}
              height={38}
              className="w-10 sm:w-12 h-auto rounded-full object-contain"
            />
          </div>
        ))}
      </div>

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
          display: flex;
          gap: 1rem;
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
    </MotionItem>
  );
}

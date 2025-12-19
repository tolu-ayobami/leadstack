"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeDownVariants, fadeInRightVariants, scalePopVariants } from "@/utils/Variants";
import { Reveal } from "../animations/Reavel";
import { MotionItem } from "../animations/MotionItems";

const Howitorks = () => {
    return (
        <div className="bg-[#EBF8FE] py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

                <Reveal>
                    <h1 className="font-noto text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0D1227]">
                        Learn how it works
                    </h1>
                </Reveal>

                <Reveal>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
                        Here is the end-to-end tutorial to guide you around our platform
                    </p>
                </Reveal>

                <MotionItem variants={fadeInRightVariants}
                    
                    className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-lg mt-8"
                >
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/PaHMV09TPGI?autoplay=1&mute=1&playsinline=1&rel=0"
                        title="How it works video"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        loading="lazy"
                        

                    />
                </MotionItem>

            </div>
        </div>
    );
};

export default Howitorks;

"use client"
import React from 'react'
import { pricing } from '@/utils/Usedata';
import Image from 'next/image';
import LogoCarousel from '@/components/sections/PartnersCarousel';
import Howitorks from '@/components/sections/Howitorks';
import { useRouter } from 'next/navigation';
import { fadeDownVariants, fadeInLeftVariants, fadeInRightVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { Reveal } from '@/components/animations/Reavel';
import { MotionItem } from '@/components/animations/MotionItems';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

const Page = () => {
    const router = useRouter()

    return (
        <div>
            <div className=''>
                <div className="relative bg-[#FAFAFC] py-20 mt-20 overflow-hidden">
                    {/* Bouncing Wave Background */}
                    <motion.div
                        className="absolute inset-0 w-full h-full pointer-events-none z-0"
                        animate={{ y: [0, -20, 0] }} // bounce effect
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg
                            viewBox="0 0 1200 200"
                            preserveAspectRatio="none"
                            className="w-full h-full"
                        >
                            <path
                                d="M0,80 C300,200 500,0 700,100 900,200 1100,50 1200,100 L1200,200 L0,200 Z"
                                className="fill-[#D0E9FA] opacity-60"
                            />
                            <path
                                d="M0,120 C400,0 600,150 1000,50 1100,20 1200,120 1200,200 L0,200 Z"
                                className="fill-[#EBF8FE] opacity-70"
                            />
                        </svg>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-10 mx-auto w-full max-w-5xl px-4 text-center">
                        <MotionItem variants={scalePopVariants}>
                            <h1 className="font-noto lg:text-5xl text-2xl max-w-3xl font-semibold lg:leading-[55px] animate-pulse">
                                With Our Cutting Edge Tools, Management of Staff Without Hassle is{" "}
                                <span className="text-[#1D8EE6]">Guaranteed</span>
                            </h1>
                        </MotionItem>

                        <MotionItem variants={fadeInLeftVariants} className="mt-6 md:mt-8 flex-wrap flex gap-4 justify-center items-center">
                            <button
                                onClick={() => router.push("/demo")}
                                className="bg-[#1D8EE6] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-[#1570b8] transition-all shadow-lg hover:scale-105"
                            >
                                Request a Demo
                            </button>

                            <button
                                onClick={() => router.push("https://leadhr.app/register")}
                                className="px-6 md:px-8 py-3 md:py-4 rounded-lg text-[#1D8EE6] border border-[#1D8EE6] font-medium transition-all shadow-lg hover:scale-105"
                            >
                                Get Started
                            </button>
                        </MotionItem>
                    </div>
                </div>

            </div>

            <div className="px-4 py-12">
                <div className="container px-4 mx-auto">

                    <MotionItem variants={fadeUpVariants} className="text-center mb-10">
                        <h1 className="md:leading-[32px] font-noto text-lg sm:text-xl md:text-2xl font-semibold text-[#0D1227]">
                            Enjoy our cutting-edge HR solution by choosing a flexible plan
                        </h1>

                        <p className="mt-2 text-sm sm:text-base text-[#535768] max-w-2xl mx-auto">
                            At Leadstack HR, we offer a range of flexible plans to suit your budget.
                        </p>
                    </MotionItem>

                    <div className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center m-auto">
                            {pricing.map((item, index) => (
                                <MotionItem variants={scalePopVariants} key={index} className="flex flex-col ">

                                    <div className="bg-white flex flex-col gap-2 rounded-xl p-6  border hover:shadow-lg transition-shadow">

                                        <div className="flex items-center gap-3 mb-4">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={48}
                                                height={48}
                                            />
                                            <h2 className="font-noto font-semibold text-xl text-[#0D1227]">
                                                {item.title}
                                            </h2>
                                        </div>

                                        <div className="flex items-end gap-1 mb-3">
                                            <h3 className="font-noto font-semibold text-2xl text-[#0D1227]">
                                                {item.plan}
                                            </h3>
                                            <span className={`text-md  ${index === 0 ? "text-gray-300" : "text-[#535768]"}`}>
                                                /{item.period}
                                            </span>
                                        </div>

                                        <p className="text-md text-[#535768] lg:max-w-[300px] flex flex-wrap">
                                            {item.description}
                                        </p>
                                    </div>
                                 
                                    <button
                                        type="button"
                                        onClick={() => router.push("https://leadhr.app/register")}
                                        className="w-full mt-4 bg-[#1D8EE6] text-white py-3 rounded-lg font-medium hover:bg-[#1678c2] transition"
                                    >
                                        Subscribe
                                    </button>
                                  

                                    <div className="bg-white rounded-xl p-5 mt-4 shadow-md">
                                        <ul className="flex flex-col gap-3">
                                            {item.options.map((opt, i) => (
                                                <MotionItem variants={fadeInRightVariants} key={i} className="flex items-center gap-3">
                                                    <Image
                                                        src={opt.icons}
                                                        alt="icon"
                                                        width={18}
                                                        height={18}
                                                    />
                                                    <p className="text-sm text-[#535768]" style={{ color: opt.color }}>
                                                        {opt.text1}
                                                    </p>
                                                </MotionItem>
                                            ))}
                                        </ul>
                                    </div>

                                </MotionItem>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

            <div className="mt-10 ">
                <LogoCarousel />
            </div>

            <Howitorks />

        </div>
    )
}

export default Page;

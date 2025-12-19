"use client"
import React from 'react'
import Image from 'next/image'
import { Jobs } from '@/utils/Usedata'
import Howitorks from '@/components/sections/Howitorks';
import { useRouter } from 'next/navigation';
import { fadeDownVariants, fadeInRightVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { Reveal } from '@/components/animations/Reavel';
import { MotionItem } from '@/components/animations/MotionItems';


const Page = () => {
    const router = useRouter()
    return (
        <div>
            <div className=''>
                <div className="relative bg-white py-10 overflow-hidden">
                   
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <svg
                            viewBox="0 0 1200 200"
                            preserveAspectRatio="none"
                            className="w-full h-full"
                        >
                            <path
                                d="M0,80 C300,200 500,0 700,100 900,200 1100,50 1200,100 L1200,200 L0,200 Z"
                                className="fill-[#EBF8FE] transition-all duration-500"
                            />
                            <path
                                d="M0,120 C400,0 600,150 1000,50 1100,20 1200,120 1200,200 L0,200 Z"
                                className="fill-[#D0E9FA] opacity-70 transition-all duration-500"
                            />
                        </svg>
                    </div>

                    
                    <div className="relative z-10 flex pt-20 flex-col lg:flex-row w-[85%] mx-auto items-center gap-10">
                        <MotionItem variants={fadeDownVariants} className="flex-1 flex flex-col gap-6 text-center lg:text-left">
                            <h1 className="font-noto xl:text-5xl text-xl lg:text-4xl font-semibold">
                                With Our Cutting Edge Tools, Management of Staff Without Hassle is{" "}
                                <span className="text-[#1D8EE6]">Guaranteed</span>
                            </h1>

                            <div className="mt-6 md:mt-8 flex gap-3 md:gap-4 justify-center lg:justify-start items-center">
                                <button
                                    onClick={() => router.push("/demo")}
                                    className="bg-[#1D8EE6] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-[#1570b8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Request a Demo
                                </button>

                                <button
                                    onClick={() => router.push("https://leadhr.app/register")}
                                    className="px-6 md:px-8 py-3 md:py-4 rounded-lg text-[#1D8EE6] border border-[#1D8EE6] font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Get Started
                                </button>
                            </div>
                        </MotionItem>

                        <MotionItem variants={scalePopVariants} className="flex-1">
                            <Image
                                src="/images/jobs.png"
                                alt="employee"
                                width={600}
                                height={600}
                                className='rounded-b-[10%]'
                            />
                        </MotionItem>
                    </div>
                </div>

            </div>

            <div className='bg-[#FFF9FC] w-full pb-20'>
                {Jobs.map((feature, index) => (
                    <MotionItem variants={scalePopVariants}
                        key={index}
                        className={`flex pt-20 flex-col lg:flex-row w-[90%] lg:px-6 mx-auto items-center gap-10 ${index % 2 !== 0 ? "lg:flex-row-reverse l:gap-40" : ""
                            }`} >
                        <div className='flex-1'>
                            <Image
                                src={feature.image || "/images/leave.svg"}
                                alt={feature.title || "Feature"}
                                width={500}
                                height={500}
                                className="flex-1 hidden lg:flex w-[500px] hover:shadow-lg"
                            />
                        </div>

                        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
                            <h1 className="font-nato text-xl lg:text-5xl font-semibold">{feature.title}</h1>
                            <p className="text-lg">{feature.description}</p>
                            <button
                                type="button"
                                className="bg-white text-[#1D8EE6] border border-[#1D8EE6] text-lg px-4 py-2 rounded-md hover:bg-[#1D8EE6] hover:text-white transition-colors w-32 max-lg:m-auto"
                            >
                                Read More
                            </button>
                        </div>
                    </MotionItem>
                ))}
            </div>

            <Howitorks />

        </div>
    )
}

export default Page;

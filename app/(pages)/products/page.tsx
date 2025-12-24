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


          <div className="relative z-10 flex pt-20 flex-col lg:flex-row container px-4 mx-auto items-center gap-10">
            <MotionItem variants={fadeDownVariants} className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <h1 className="font-noto xl:text-5xl text-xl lg:text-4xl font-semibold">
                With Our Cutting Edge Tools, Management of Staff Without Hassle is{" "}
                <span className="text-[#1D8EE6]">Guaranteed</span>
              </h1>

              <div className="mt-6 md:mt-8 flex gap-3 md:gap-4 justify-center flex-wrap lg:justify-start items-center">
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

            <MotionItem variants={scalePopVariants} className="flex-1 w-full">
              <Image
                src="/images/jobs.png"
                alt="employee"
                width={600}
                height={600}
                className='rounded-b-[10%] w-full'
              />
            </MotionItem>
          </div>
        </div>

      </div>
      <div className='bg-[#FFF9FC]'>
        {/* Container with same horizontal padding as header */}
        <div className='container mx-auto px-4 py-12 sm:py-16 lg:py-20'>
          {Jobs.map((feature, index) => (
            <MotionItem
              variants={fadeUpVariants}
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16 ${index === 0 ? 'pt-0' : 'pt-12 sm:pt-16 lg:pt-20'
                } ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Image */}
              <div className='w-1/2 hidden lg:flex'>
                <Image
                  src={feature.image || "/images/leave.svg"}
                  alt={feature.title || "Feature"}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>

              {/* Content */}
              <MotionItem
                variants={scalePopVariants}
                className="lg:w-1/2 flex flex-col gap-4 sm:gap-6 text-center lg:text-left"
              >
                <h1 className="font-noto text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                  {feature.title}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
                {/* <button
                       type="button"
                       className="bg-white text-[#1D8EE6] border-2 border-[#1D8EE6] text-sm sm:text-base lg:text-lg px-5 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-[#1D8EE6] hover:text-white transition-all duration-300 w-32 sm:w-36 mx-auto lg:mx-0 shadow-md hover:shadow-lg"
                     >
                       Read More
                     </button>*/}
              </MotionItem>
            </MotionItem>
          ))}
        </div>
      </div>

      <Howitorks />

    </div >
  )
}

export default Page;

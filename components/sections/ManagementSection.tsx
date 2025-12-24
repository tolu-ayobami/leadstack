import React from 'react';
import Image from 'next/image';
import { features } from '@/utils/Usedata';
import { fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { MotionItem } from '../animations/MotionItems';

export const ManagementSection = () => {
  return (
    <div className='bg-[#FFF9FC]'>
      {/* Container with same horizontal padding as header */}
      <div className='container mx-auto px-4 py-12 sm:py-16 lg:py-20'>
        {features.map((feature, index) => (
          <MotionItem 
            variants={fadeUpVariants}
            key={index}
            className={`flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16 ${
              index === 0 ? 'pt-0' : 'pt-12 sm:pt-16 lg:pt-20'
            } ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
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
  )
}

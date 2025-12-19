import React from 'react'
import Image from 'next/image'
import { features } from '@/utils/Usedata'
import { fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { MotionItem } from '../animations/MotionItems';

export const ManagementSection = () => {
  return (
    <div className='bg-[#FFF9FC] min-h-screen'>
    <div className=' w-full pb-20'>
      {features.map((feature, index) => (
        <MotionItem variants={fadeUpVariants}
        
          key={index}
          className={`flex pt-20 flex-col lg:flex-row w-[90%] lg:px-6 mx-auto items-center gap-10 ${
            index % 2 !== 0 ? "lg:flex-row-reverse l:gap-40" : ""
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
         
              
          <MotionItem variants={scalePopVariants} className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <h1 className="font-nato text-xl lg:text-5xl font-semibold">{feature.title}</h1>
            <p className="text-lg">{feature.description}</p>
            <button
              type="button"
              className="bg-white text-[#1D8EE6] border border-[#1D8EE6] text-lg px-4 py-2 rounded-md hover:bg-[#1D8EE6] hover:text-white transition-colors w-32 max-lg:m-auto"
            >
              Read More
            </button>
          </MotionItem>
        </MotionItem>
      ))}
    </div>
    </div>
  )
}

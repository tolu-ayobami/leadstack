"use client"
import React from 'react'
import Image from 'next/image'
import { MotionItem } from '@/components/animations/MotionItems'
import { partners } from '@/utils/Usedata'
import { fadeDownVariants } from '@/utils/Variants'
import { management1, management2 } from '@/utils/Managementdata'
import { MapPin, Search, Calendar, List, Grid } from "lucide-react";
import { CurrentOpening } from '@/components/sections/CurrentOpening'


const Page = () => {
  return (
    <div className='pt-20 bg-[#F5F6FA]'>

      <div className=' max-w-2xl m-auto'>

        <div className=' flex flex-col gap-4 text-center items-center m-auto justify-ceenter'>
          <div className=" border border-[5px] border-[#EFECFA] m-auto rounded-full w-fit px-2 py-1">
            <p className='font-inter text-[#6941C6]'>Hello there, Welcome home</p>
          </div>

          <h1 className='font-noto font-bold lg:text-4xl'>We are building a super team</h1>

          <p className='text-[#667085] font-inter text-sm'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>

          <button
            className="bg-[#1D8EE6]  m-auto text-white px-4 md:px-6 py-2 lg:py-3 rounded-lg font-medium hover:bg-[#1570b8] text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Current Jop Openings
          </button>
          <div className="relative z-40 mt-10">

            <div className="hidden lg:flex absolute top-[-45px] left-[-20px] w-[35%] z-10">
              <Image
                src="/images/content1.png"
                alt="top left"
                width={100}
                height={100}
                className="h-auto"
              />
            </div>

            <div className="flex justify-center relative gap-4">
              {/* Main image */}
              <div className="max-sm:w-full relative z-10">
                <Image
                  src="/images/content.png"
                  alt="main"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>

              {/* Bottom right image */}
              <div className="hidden lg:flex absolute right-[-100px] top-1/2 transform -translate-y-1/2 z-20">
                <Image
                  src="/images/contentbeside.png"
                  alt="bottom right"
                  width={200}
                  height={150}
                />
              </div>
            </div>
          </div>



        </div>
      </div>

      <div className="hidescroll-bar relative z-50 w-full overflow-x-auto flex bg-white justify-center py-20 gap-10 -mt-32">
        {partners.map((logo, idx) => (
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

      <div className="bg-[#F9FAFB] flex flex-col justify-center items-center text-center py-10  gap-6">

        <div className="flex gap-2 items-center">
          <Image src="/icons/sisyphus.svg" alt="sisyphus" width={20} height={20} />
          <p>Sisyphus</p>
        </div>

        <div>
          <h1 className="font-noto lg:text-2xl font-semibold max-w-xl">
            We’ve been using Leadstack to kick start every new lorem and can’t imagine working without it.
          </h1>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <Image src="/images/Avatar.png" alt="avatar" width={30} height={30} />
          <p>Candice Wu</p>
          <p className="text-[#667085] font-inter text-sm">Product Manager, Sisyphus</p>
        </div>
      </div>

      <div className='bg-[#F9FAFB] flex flex-col justify-center items-center text-center py-10  gap-6'>

        <h1 className="font-noto lg:text-4xl font-semibold max-w-xl text-[#0A2E65]">Efficient management of staff through our easy to use features</h1>


        <div className=" w-full overflow-x-auto flex  justify-center py-8 gap-10">
          {management1.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 flex-shrink-0">
              <div className='hidden lg:flex flex flex-col gap-1'>
                <span className="text-sm font-medium">{logo.name1}</span>
                <span className="text-sm font-medium">{logo.name2}</span>
              </div>
              <div className='p-3' style={{ backgroundColor: logo.color }}>
                <Image
                  src={logo.logo}
                  alt={logo.name1}
                  width={56}
                  height={56}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>


        <div className="w-full overflow-x-auto flex justify-center py-8 gap-12">
          {management2.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-3 flex-shrink-0"
            >
              <div className='hidden lg:flex flex flex-col gap-1 text-left'>
                <span className="text-sm font-medium">{logo.name1}</span>
                <span className="text-sm font-medium">{logo.name2}</span>
              </div>
              <div className='p-3' style={{ backgroundColor: logo.color }}>
                <Image
                  src={logo.logo}
                  alt={logo.name1}
                  width={56}
                  height={56}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h1 className="font-noto lg:text-4xl font-semibold max-w-xl text-[#0A2E65]">Looking for the next great chapter in your career, Check here</h1>
        </div>

        <div className='flex items-center mt-6 gap-2 flex-wrap max-sm:px-4'>

          <div className='flex items-center gap-2 border rounded-md w-[250px] p-3'>
            <Search className="w-4 h-4 text-[#535768]" />
            <input type='text' placeholder='Search Job, keywords, companies, skills...' className='text-[14px] borer-none outline-none' />
          </div>

          <div className=' flex items-center  justify-center gap-2 border rounded-md w-[200px] p-3'>
            <MapPin className="w-4 h-4 text-[#535768]" />
            <button type='button' className='text-[14px] text-[#535768]'>
              Select Locations
            </button>
          </div>

          <div className=' flex items-center gap-2 border justify-center rounded-md w-[200px] p-3'>
            <Calendar className="w-4 h-4 text-[#535768}" />
            <button type='button' className='text-[14px] text-[#535768]'>
              Date Range
            </button>
          </div>


          <button type='button' className='bg-[#1D8EE6] text-white p-3 rounded-lg'>
            Search
          </button>

        </div>

      </div>

      <CurrentOpening />


      <div className="bg-gray-100  w-full  py-8 flex flex-col gap-2 justify-center items-center">
          <Image src="/images/Avatar group.png" alt="avatar" width={80} height={80} />
          <p>Still have questions?</p>
          <p className="text-[#667085] font-inter text-sm flex-wrap max-w-sm text-cecnter">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>

          <button type='button' className='bg-[#1D8EE6]  px-4 text-white py-2 rounded-lg'>
           Get in touch
          </button>
        </div>


        <div className=' mt-10 flex flex-col justify-center gap-2 items-center'>

          <div className='flex items-center gap-1'>
            <p className='text-[#98A2B3] text-[14px]'>Powered by </p>
             <Image src="/images/jobslogo.png" alt="jobslogo" width={100} height={100} />
          </div>

          <p className='text-[#98A2B3] text-[14px]'>© 2077 Untitled UI. All rights reserved.</p>
        </div>



    </div>
  )
}

export default Page;
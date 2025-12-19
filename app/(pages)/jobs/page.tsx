"use client"
import React from 'react'
import Image from 'next/image'
import { MotionItem } from '@/components/animations/MotionItems'
import { partners } from '@/utils/Usedata'
import { fadeDownVariants } from '@/utils/Variants'


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
          <h1 className="font-noto text-2xl font-semibold max-w-xl">
            We’ve been using Leadstack to kick start every new lorem and can’t imagine working without it.
          </h1>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <Image src="/images/Avatar.png" alt="avatar" width={30} height={30} />
          <p>Candice Wu</p>
          <p className="text-[#667085] font-inter text-sm">Product Manager, Sisyphus</p>
        </div>
      </div>

      <div className=''>

        <h1 className="font-noto text-2xl font-semibold max-w-xl">Efficient management of staff through our easy to use features</h1>

      </div>



    </div>
  )
}

export default Page;
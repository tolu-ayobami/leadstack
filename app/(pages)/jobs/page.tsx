"use client"
import React from 'react'
import Image from 'next/image'
import { MotionItem } from '@/components/animations/MotionItems'
import { partners } from '@/utils/Usedata'
import { fadeDownVariants, scalePopVariants } from '@/utils/Variants'
import { management1, management2 } from '@/utils/Managementdata'
import { MapPin, Search, Calendar, List, Grid } from "lucide-react";
import { CurrentOpening } from '@/components/sections/CurrentOpening'
import { fadeInRightVariants, fadeUpVariants } from "@/utils/Variants";

const Page = () => {
  return (
    <div className='lg:pt-40 pt-28 bg-[#F5F6FA]'>

      {/* Hero Section */}
      <MotionItem variants={scalePopVariants} className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-4 text-center items-center justify-center'>
          <div className="border-4 border-[#EFECFA] mx-auto rounded-full w-fit px-3 py-1.5 sm:px-4 sm:py-2">
            <p className='font-inter text-[#6941C6] text-xs sm:text-sm'>Hello there, Welcome home</p>
          </div>


          <h1 className='font-noto font-bold text-2xl sm:text-3xl lg:text-4xl px-4'>
            We are building a super team
          </h1>

          <p className='text-[#667085] font-inter text-sm sm:text-base max-w-lg px-4'>
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>

          <button
            className="bg-[#1D8EE6] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-[#1570b8] text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Current Job Openings
          </button>

          {/* Image Section */}
          <div className="relative z-40 mt-6 sm:mt-8 lg:mt-10 w-full max-w-4xl">
            <div className="hidden lg:flex absolute top-[-45px] left-[-20px] w-[35%] z-10">
              <Image
                src="/images/content1.png"
                alt="top left"
                width={100}
                height={100}
                className="h-auto"
              />
            </div>

            <MotionItem variants={fadeInRightVariants} className="flex justify-center relative">
              {/* Main image */}
              <div className="w-full sm:w-4/5 md:w-3/4 lg:w-full relative z-10 px-4 sm:px-0">
                <Image
                  src="/images/content.png"
                  alt="main"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Bottom right image */}
              <div className="hidden lg:flex absolute right-[-100px] top-1/2 transform -translate-y-1/2 z-20">
                <Image
                  src="/images/contentbeside.png"
                  alt="bottom right"
                  width={200}
                  height={150}
                  className="w-auto h-auto"
                />
              </div>
            </MotionItem>
          </div>
        </div>
      </MotionItem>

      {/* Partners Section - Scrolls on mobile, static on desktop */}
      <div className="overflow-hidden lg:overflow-visible relative z-50 w-full bg-white py-12 sm:py-16 lg:py-20 -mt-20 sm:-mt-28 lg:-mt-32">
        {/* Mobile: Scrolling with duplicated items */}
        <div className="flex lg:hidden animate-scroll-left">
          {[...partners, ...partners, ...partners].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 flex-shrink-0 px-3 sm:px-5">
              <Image
                src={logo.logo}
                alt={logo.name}
                width={56}
                height={56}
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Desktop: Static with original items only */}
        <div className="hidden lg:flex justify-center flex-wrap gap-6 xl:gap-10">
          {partners.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Image
                src={logo.logo}
                alt={logo.name}
                width={56}
                height={56}
                className="h-10 w-auto object-contain"
              />
              <span className="text-sm font-medium whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      {/* Testimonial Section */}
      <div className="bg-[#F9FAFB] flex flex-col justify-center items-center text-center py-10 sm:py-12 lg:py-16 gap-4 sm:gap-6 px-4">
        <div className="flex gap-2 items-center">
          <Image src="/icons/sisyphus.svg" alt="sisyphus" width={20} height={20} className="w-5 h-5" />
          <p className="text-sm sm:text-base">Sisyphus</p>
        </div>

        <div className="max-w-3xl px-4">
          <h1 className="font-noto text-lg sm:text-xl lg:text-2xl font-semibold">
            We've been using Leadstack to kick start every new lorem and can't imagine working without it.
          </h1>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <Image src="/images/Avatar.png" alt="avatar" width={40} height={40} className="w-10 h-10 sm:w-12 sm:h-12" />
          <p className="text-sm sm:text-base font-medium">Candice Wu</p>
          <p className="text-[#667085] font-inter text-xs sm:text-sm">Product Manager, Sisyphus</p>
        </div>
      </div>

      {/* Management Features Section */}
      <div className='bg-[#F9FAFB] flex flex-col justify-center items-center text-center py-10 sm:py-12 lg:py-16 gap-6 sm:gap-8 px-4'>
        <h1 className="font-noto text-xl sm:text-2xl lg:text-4xl font-semibold max-w-3xl text-[#0A2E65] px-4">
          Efficient management of staff through our easy to use features
        </h1>

        {/* Management Row 1 - Scrolls left on mobile, static on desktop */}
        <div className="w-full overflow-hidden lg:overflow-visible relative py-4 sm:py-6 lg:py-8">
          {/* Mobile: Scrolling with duplicated items */}
          <div className="flex lg:hidden animate-scroll-left-management gap-4 sm:gap-6">
            {[...management1, ...management1, ...management1].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className='p-2 sm:p-3 rounded-lg' style={{ backgroundColor: logo.color }}>
                  <Image
                    src={logo.logo}
                    alt={logo.name1}
                    width={56}
                    height={56}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Static with original items only */}
          <div className="hidden lg:flex justify-center flex-wrap gap-10">
            {management1.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className='flex flex-col gap-1 whitespace-nowrap'>
                  <span className="text-sm font-medium">{logo.name1}</span>
                  <span className="text-sm font-medium">{logo.name2}</span>
                </div>
                <div className='p-3 rounded-lg' style={{ backgroundColor: logo.color }}>
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

          <style jsx>{`
            @keyframes scroll-left-management {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
            .animate-scroll-left-management {
              animation: scroll-left-management 25s linear infinite;
            }
            .animate-scroll-left-management:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>

        {/* Management Row 2 - Scrolls right on mobile, static on desktop */}
        <div className="w-full overflow-hidden lg:overflow-visible relative py-4 sm:py-6 lg:py-8">
          {/* Mobile: Scrolling with duplicated items */}
          <div className="flex lg:hidden animate-scroll-right-management gap-4 sm:gap-6">
            {[...management2, ...management2, ...management2].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className='p-2 sm:p-3 rounded-lg' style={{ backgroundColor: logo.color }}>
                  <Image
                    src={logo.logo}
                    alt={logo.name1}
                    width={56}
                    height={56}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Static with original items only */}
          <div className="hidden lg:flex justify-center flex-wrap gap-12">
            {management2.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className='flex flex-col gap-1 text-left whitespace-nowrap'>
                  <span className="text-sm font-medium">{logo.name1}</span>
                  <span className="text-sm font-medium">{logo.name2}</span>
                </div>
                <div className='p-3 rounded-lg' style={{ backgroundColor: logo.color }}>
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

          <style jsx>{`
            @keyframes scroll-right-management {
              0% {
                transform: translateX(-33.333%);
              }
              100% {
                transform: translateX(0);
              }
            }
            .animate-scroll-right-management {
              animation: scroll-right-management 25s linear infinite;
            }
            .animate-scroll-right-management:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>

        {/* Job Search Section Header */}
        <div className="mt-4 sm:mt-6 lg:mt-8 px-4">
          <h1 className="font-noto text-xl sm:text-2xl lg:text-4xl font-semibold max-w-3xl text-[#0A2E65]">
            Looking for the next great chapter in your career, Check here
          </h1>
        </div>

        {/* Search Filters */}
        <div className='flex flex-col sm:flex-row items-stretch sm:items-center mt-4 sm:mt-6 gap-2 sm:gap-2 w-full max-w-5xl px-4 justify-center'>
          <div className='flex items-center gap-2 border rounded-md w-full sm:flex-1 sm:max-w-[250px] p-3 bg-white shadow-sm hover:shadow-md transition-shadow'>
            <Search className="w-4 h-4 text-[#535768] flex-shrink-0" />
            <input 
              type='text' 
              placeholder='Search Job, keywords...' 
              className='text-xs sm:text-sm border-none outline-none w-full bg-transparent' 
            />
          </div>

          <div className='flex items-center justify-between sm:justify-center gap-2 border rounded-md w-full sm:w-auto sm:min-w-[180px] p-3 bg-white shadow-sm hover:shadow-md transition-shadow'>
            <MapPin className="w-4 h-4 text-[#535768] flex-shrink-0" />
            <button type='button' className='text-xs sm:text-sm text-[#535768]'>
              Select Locations
            </button>
          </div>

          <div className='flex items-center justify-between sm:justify-center gap-2 border rounded-md w-full sm:w-auto sm:min-w-[160px] p-3 bg-white shadow-sm hover:shadow-md transition-shadow'>
            <Calendar className="w-4 h-4 text-[#535768] flex-shrink-0" />
            <button type='button' className='text-xs sm:text-sm text-[#535768]'>
              Date Range
            </button>
          </div>

          <button type='button' className='bg-[#1D8EE6] text-white p-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#1570b8] transition-all shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto sm:px-6'>
            Search
          </button>
        </div>
      </div>

      {/* Current Openings */}
      <CurrentOpening />

      {/* CTA Section */}
      <div className="bg-gray-100 w-full py-8 sm:py-10 lg:py-12 flex flex-col gap-3 sm:gap-4 justify-center items-center px-4">
        <Image src="/images/Avatar group.png" alt="avatar" width={80} height={80} className="w-16 sm:w-20" />
        <p className="text-base sm:text-lg font-medium">Still have questions?</p>
        <p className="text-[#667085] font-inter text-xs sm:text-sm text-center max-w-sm px-4">
          Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
        <button type='button' className='bg-[#1D8EE6] px-4 sm:px-6 text-white py-2 sm:py-2.5 rounded-lg text-sm sm:text-base hover:bg-[#1570b8] transition-colors shadow-md hover:shadow-lg'>
          Get in touch
        </button>
      </div>

      {/* Footer */}
      <div className='mt-8 sm:mt-10 flex flex-col justify-center gap-2 sm:gap-3 items-center pb-6 sm:pb-8 px-4'>
        <div className='flex items-center gap-1 flex-wrap justify-center'>
          <p className='text-[#98A2B3] text-xs sm:text-sm'>Powered by</p>
          <Image src="/images/jobslogo.png" alt="jobslogo" width={100} height={100} className="w-20 sm:w-24 h-auto" />
        </div>
        <p className='text-[#98A2B3] text-xs sm:text-sm text-center'>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Page;
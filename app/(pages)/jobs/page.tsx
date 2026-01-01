"use client"
import React from 'react'
import Image from 'next/image'
import { MotionItem } from '@/components/animations/MotionItems'
import {  fadeInLeftVariants, scalePopVariants } from '@/utils/Variants'
import { management1, management2 } from '@/utils/Managementdata'
import { CurrentOpening } from '@/components/sections/CurrentOpening'
import { fadeInRightVariants, fadeUpVariants } from "@/utils/Variants";
import { useRouter } from 'next/navigation'

const Page = () => {
  const phoneNumber = "2349027622692";
  const message = "Hello! I have a question.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const router = useRouter()
  return (

    <div className='lg:pt-20 pt-10 bg-[#F5F6FA]'>

      {/* Hero Section - Side by Side Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <MotionItem
            variants={fadeInLeftVariants}
            className='lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start'
          >
            <div className="border-4 border-[#EFECFA] rounded-full w-fit px-4 py-2">
              <p className='font-inter text-[#6941C6] text-sm'>Hello there, Welcome home</p>
            </div>

            <h1 className='font-noto font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight'>
              We are building a super team
            </h1>

            <p className='text-[#667085] font-inter text-base sm:text-lg leading-relaxed max-w-xl'>
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
            </p>

            <button
              onClick={() => { router.push("/jobs/job-pool") }}
              className="bg-[#1D8EE6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1570b8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Current Job Openings
            </button>
          </MotionItem>

          {/* Right Image Section */}
          <MotionItem
            variants={fadeInRightVariants}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative w-full">
              {/* Decorative element top left */}
              <div className="hidden xl:block absolute -top-10 -left-16 w-32 opacity-50 z-0">
                <Image
                  src="/images/content1.png"
                  alt="decoration"
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
              </div>

              {/* Main image */}
              <div className="relative w-full z-10">
                <Image
                  src="/images/content.png"
                  alt="Team collaboration"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                  priority
                />
              </div>

              {/* Decorative element right side */}
              <div className="hidden xl:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-40 z-20">
                <Image
                  src="/images/contentbeside.png"
                  alt="decoration"
                  width={200}
                  height={150}
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#1D8EE6]/10 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-[#6941C6]/10 -z-10"></div>
            </div>
          </MotionItem>
        </div>
      </div>

      {/* Partners Section - Scrolls on mobile, static on desktop */}
      {/* <div className="overflow-hidden lg:overflow-visible relative z-50 w-full bg-white py-12 sm:py-16 lg:py-20">
       
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

      
        <div className="hidden lg:flex justify-center flex-wrap gap-6 xl:gap-10">
          {partners.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-10 justify-center">
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
      </div>*/}

      {/* Testimonial Section 
      <MotionItem variants={fadeInRightVariants}>
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
      </MotionItem>
      */}

      {/* Management Features Section */}
      <div className='bg-[#F9FAFB] flex flex-col justify-center items-center text-center py-10 sm:py-12 lg:py-16 gap-6 sm:gap-8 px-4'>
        <MotionItem variants={fadeUpVariants}>
          <h1 className="font-noto text-xl sm:text-2xl lg:text-4xl font-semibold max-w-3xl text-[#0A2E65] px-4">
            Efficient management of staff through our easy to use features
          </h1>
        </MotionItem>

        {/* Management Row 1 - Scrolls left on mobile, static on desktop */}
        <MotionItem variants={scalePopVariants}>
          <div className="w-full overflow-hidden lg:overflow-visible relative py-4 sm:py-6 lg:py-8">
            {/* Mobile: Scrolling with duplicated items */}
            <div className="flex lg:hidden animate-scroll-left-management px-4 gap-4 sm:gap-6">
              {management1.map((logo, idx) => (
                <div key={idx} className="flex items-center gap-6 sm:gap-3 flex-shrink-0">
                   <div className='flex flex-col gap-1 whitespace-nowrap'>
                    <span className="text-sm font-medium">{logo.name1}</span>
                    <span className="text-sm font-medium">{logo.name2}</span>
                  </div>
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
        </MotionItem>

        {/* Management Row 2 - Scrolls right on mobile, static on desktop */}
        <MotionItem variants={fadeUpVariants}>
          <div className="w-full overflow-hidden lg:overflow-visible relative py-4 sm:py-6 lg:py-8">
            {/* Mobile: Scrolling with duplicated items */}
            <div className="flex lg:hidden animate-scroll-right-management px-4 gap-4 sm:gap-6">
              {management2.map((logo, idx) => (
                <div key={idx} className="flex items-center gap-6 sm:gap-3 flex-shrink-0">
                   <div className='flex flex-col gap-1 whitespace-nowrap'>
                    <span className="text-sm font-medium">{logo.name1}</span>
                    <span className="text-sm font-medium">{logo.name2}</span>
                  </div>
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
                <div key={idx} className="flex items-center gap-6">
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
        </MotionItem>

        {/* Job Search Section Header */}
        <MotionItem variants={fadeInLeftVariants}>
          <div className="mt-4 sm:mt-6 lg:mt-8 px-4">
            <h1 className="font-noto text-xl sm:text-2xl lg:text-4xl font-semibold max-w-3xl text-[#0A2E65]">
              Looking for the next great chapter in your career, Check here
            </h1>
          </div>
        </MotionItem>

        {/* Search Filters
        <MotionItem variants={fadeInRightVariants}>
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
        </MotionItem> */}
      </div>


      {/* Current Openings */}
      <CurrentOpening />

      <div className='flex justify-center'>
        <button
          onClick={() => { router.push("/jobs/job-pool") }}
          className="bg-[#1D8EE6] text-white px-8 py-3 rounded-lg m-auto font-semibold hover:bg-[#1570b8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          View all jobs
        </button>
      </div>

      {/* CTA Section */}
      <MotionItem variants={fadeUpVariants}>
        <div className="bg-gray-100 w-full py-8 sm:py-10 lg:py-12 flex flex-col gap-3 sm:gap-4 justify-center items-center ">
          <Image src="/images/Avatar group.png" alt="avatar" width={80} height={80} className="w-16 sm:w-20" />
          <p className="text-base sm:text-lg font-medium">Still have questions?</p>
          <p className="text-[#667085] font-inter text-xs sm:text-sm text-center max-w-sm px-4">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button type='button' className='bg-[#1D8EE6] px-4 sm:px-6 text-white py-2 sm:py-2.5 rounded-lg text-sm sm:text-base hover:bg-[#1570b8] transition-colors shadow-md hover:shadow-lg'>
              Chat with us
            </button>
          </a>
        </div>
      </MotionItem>

      {/* Footer */}
      <MotionItem variants={fadeInRightVariants}>
        <div className='mt-8 sm:mt-10 flex flex-col justify-center gap-2 sm:gap-3 items-center pb-6 sm:pb-8 px-4'>
          <div className='flex items-center gap-1 flex-wrap justify-center'>
            <p className='text-[#98A2B3] text-xs sm:text-sm'>Powered by</p>
            <Image src="/images/Logo.png" alt="Logo" width={200} height={200} className="w-20 sm:w-40 h-auto" />
          </div>
          <p className='text-[#98A2B3] text-xs sm:text-sm text-center'>© 2025. All rights reserved.</p>
        </div>
      </MotionItem>

    </div>
  )
}

export default Page;
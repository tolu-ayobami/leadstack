"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { jobsData } from '@/utils/Usedata';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';
import { fadeDownVariants, fadeInLeftVariants, } from "@/utils/Variants";
import { Section } from '../animations/Section';
import { MotionItem } from '../animations/MotionItems';
import { MoreVertical, Share2, Bookmark, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const CurrentOpening = () => {

  const [showJobMenu, setShowJobMenu] = useState<number | null>(null);
  return (
    <div className="py-8 md:py-12 px-4 relative">

      <Section className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Current Openings
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          At Leadstack HR, we offer a range of flexible plans to suit your budget.
        </p>
      </Section>

      <MotionItem variants={fadeInLeftVariants} className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: '.custom-swiper-button-prev',
            nextEl: '.custom-swiper-button-next',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24
            },
          }}
          className="!pb-16 md:!pb-20 sm:w-[90%] "
        >
          {jobsData.map((job) => (
            <SwiperSlide key={job.id}>
              <div
                key={job.id}
                className="w-full flex flex-col max-xl:flex-wrap sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
              >
                {/* Image */}
                <div className="w-fit shrink-0">
                  <Image
                    src={job.picture}
                    alt={job.course}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 w-full min-w-0">
                  {/* Title + menu */}
                  <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg ">
                        {job.title}
                      </h3>
                      <div className='flex items-center gap-4 mt-1'>
                        <Link href={`/jobs/job-pool/company/${job.companyId}`}>
                         <p className="text-gray-500 text-xs cursor-pointer hover:underline truncate ">
                          {job.company}
                        </p>
                        </Link>
                        <div className='w-0.5 h-5 bg-gray-200' />

                        <p className="text-gray-500 text-xs truncate ">
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <div className="relative shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowJobMenu(showJobMenu === job.id ? null : job.id);
                        }}
                        className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>

                      {showJobMenu === job.id && (
                        <>
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setShowJobMenu(null)}
                          />
                          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 py-2">
                            <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm flex items-center gap-3">
                              <Share2 className="w-4 h-4" /> Share
                            </button>
                            <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm flex items-center gap-3">
                              <Bookmark className="w-4 h-4" /> Save
                            </button>
                            <Link href={`/jobs/job-pool/${job.id}`}>
                              <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm flex items-center gap-3">
                                <Eye className="w-4 h-4" /> View Details
                              </button>
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="space-y-2 text-gray-600 text-sm">
                    <div className="flex gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <Image src="/icons/year.svg" alt="year" width={18} height={18} />
                        <span className=" text-xs truncate ">{job.experience}</span>
                      </div>

                      <div className="flex items-center gap-2 min-w-0">
                        <Image src="/icons/course.svg" alt="course" width={18} height={18} />
                        <span className="text-xs truncate">{job.course}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2">
                        <Image src="/icons/time.svg" alt="salary" width={18} height={18} />
                        <span className='text-xs'>{job.salary}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Image src="/icons/time.svg" alt="type" width={18} height={18} />
                        <span className='text-xs'>{job.type}</span>
                      </div>
                    </div>
                    <hr />

                    <div className="flex items-center gap-2">
                      <Image src="/icons/Timecircle.svg" alt="timecircle" width={18} height={18} />
                      <span className='text-xs'>Posted {job.postedDays} days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MotionItem>

      <MotionItem variants={fadeDownVariants} className="flex justify-center items-center gap-4 md:gap-6 mt-4">
        <button className="custom-swiper-button-prev p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
          <ChevronLeft size={24} className="text-gray-700 md:w-7 md:h-7" />
        </button>

        <button className="custom-swiper-button-next p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
          <ChevronRight size={24} className="text-gray-700 md:w-7 md:h-7" />
        </button>
      </MotionItem>
    </div>
  );
};
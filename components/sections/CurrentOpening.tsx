"use client";
import Image from 'next/image';
import React from 'react';
import { jobs } from '@/utils/Usedata';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeDownVariants, fadeInLeftVariants,} from "@/utils/Variants";
import { Section } from '../animations/Section';
import { MotionItem } from '../animations/MotionItems';

export const CurrentOpening = () => {
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

            <MotionItem variants={fadeInLeftVariants}  className="relative">
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
                    {jobs.map((job) => (
                        <SwiperSlide key={job.id}>
                            <div className="flex justify-center gap-8 bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">

                                <div className="mb-4">
                                    <Image
                                        src={job.picture}
                                        alt={job.course}
                                        width={80}
                                        height={80}
                                        className="rounded-lg"
                                    />
                                </div>


                                <div className="flex flex-col gap-3">

                                    <div className="flex justify-between items-start gap-2">
                                        <h2 className="font-semibold text-lg md:text-xl text-gray-900 line-clamp-2">
                                            {job.course}
                                        </h2>
                                        <button className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition">
                                            <Image
                                                src="/icons/threedots.svg"
                                                alt="options"
                                                width={5}
                                                height={5}
                                            />
                                        </button>
                                    </div>


                                    <div className="space-y-2 text-sm md:text-base text-gray-600">

                                        <div className="flex flex-wrap gap-3 md:gap-4">
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src="/icons/year.svg"
                                                    alt="year"
                                                    width={18}
                                                    height={18}
                                                />
                                                <span className="text-xs md:text-sm">{job.year}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src="/icons/course.svg"
                                                    alt="course"
                                                    width={18}
                                                    height={18}
                                                />
                                                <span className="text-xs md:text-sm truncate">{job.course}</span>
                                            </div>
                                        </div>


                                        <div className="flex flex-wrap gap-3 md:gap-4">
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src="/icons/time.svg"
                                                    alt="price"
                                                    width={18}
                                                    height={18}
                                                />
                                                <span className="text-xs md:text-sm">{job.price}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src="/icons/time.svg"
                                                    alt="period"
                                                    width={18}
                                                    height={18}
                                                />
                                                <span className="text-xs md:text-sm">{job.period}</span>
                                            </div>
                                        </div>


                                        <div className="flex items-center gap-2">
                                            <Image
                                                src="/icons/Timecircle.svg"
                                                alt="timecircle"
                                                width={18}
                                                height={18}
                                            />
                                            <span className="text-xs md:text-sm">{job.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </MotionItem>

            <MotionItem  variants={fadeDownVariants}  className="flex justify-center items-center gap-4 md:gap-6 mt-4">
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
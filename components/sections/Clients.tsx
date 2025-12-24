"use client";
import Image from 'next/image';
import React from 'react';
import { client } from '@/utils/Usedata';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeInRightVariants, fadeUpVariants } from "@/utils/Variants";
import { Reveal } from '../animations/Reavel';
import { Section } from '../animations/Section';
import { MotionItem } from '../animations/MotionItems';

export const Client = () => {
    return (
        <div className="bg-white py-12 sm:py-16 lg:py-20">
            {/* Container matches header width */}
            <div className="container mx-auto px-4 ">

                {/* Section Header */}
                <Section className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
                    <Reveal>
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">
                            Hear our Client’s Speak
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="text-gray-600 text-sm md:text-base">
                            Discover the experiences of our satisfied clients as they share stories of success, collaboration, and the transformative impact of choosing Leadstack
                        </p>
                    </Reveal>
                </Section>

                {/* Swiper Carousel */}
                <MotionItem variants={fadeInRightVariants} className="relative">
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
                            320: { slidesPerView: 1, spaceBetween: 16 },
                            640: { slidesPerView: 1.5, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 2.5, spaceBetween: 24 },
                            1280: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        className="!pb-16 md:!pb-20"
                    >
                        {client.map((job) => (
                            <SwiperSlide key={job.id}>
                                <div className="flex w-full justify-center gap-8 bg-white  rounded-xl  transition-shadow duration-300 h-full">
                                    <div className='flex gap-3 items-center p-2 '>
                                        <Image src={job.picture} alt={job.name} width={200} height={200} className='object-contain w-40 h-40' />
                                        <div className=' flex gap-2 flex-col '>
                                            <div className='flex flex-col'>
                                                <Reveal><h1 className='font-noto text-lg'>{job.name}</h1>
                                                    <p className='text-[#535768] text-sm'>{job.title}</p></Reveal>
                                            </div>
                                            <Reveal><p className='text-[#7C8091] text-[13px]'>{job.text}</p></Reveal>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </MotionItem>

                {/* Swiper Navigation Buttons */}
                <MotionItem variants={fadeUpVariants} className="flex justify-center items-center gap-4 md:gap-6 mt-4">
                    <button className="custom-swiper-button-prev p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                        <ChevronLeft size={24} className="text-gray-700 md:w-7 md:h-7" />
                    </button>
                    <button className="custom-swiper-button-next p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                        <ChevronRight size={24} className="text-gray-700 md:w-7 md:h-7" />
                    </button>
                </MotionItem>

            </div>
        </div>
    );
};




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
        <div className="py-8 md:py-12 relative">

            <Section className="max-sm:w-[90%] text-center mb-8 md:mb-12 max-w-2xl mx-auto">
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

            <MotionItem  variants={fadeInRightVariants}  className="relative">
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
                    className="!pb-16 md:!pb-20  w-[88%] "
                >
                    {client.map((job) => (
                        <SwiperSlide key={job.id}>
                            <div className="flex w-fit justify-center gap-8 bg-white p-4  rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                                <div className='flex gap-2'>
                                    <Image src={job.picture} alt={job.name} width={170} height={170} className='object-cover' />
                                    <div className=' flex gap-2 flex-col'>
                                        <div className='flex flex-col pb-2'>
                                           <Reveal><h1 className='font-noto text-lg'>Jame Palmer</h1> 
                                           <p className='text-[#535768] text-md'>Leadway Plc</p></Reveal>
                                        </div>
                                      <Reveal><p className='text-[#7C8091] text-sm'>LeadStack HR Solution has revolutionized our hiring process!</p></Reveal>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </MotionItem>


            <MotionItem variants={fadeUpVariants}  className="flex justify-center items-center gap-4 md:gap-6 mt-4">
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
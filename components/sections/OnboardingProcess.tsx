import React from 'react'
import Image from 'next/image'
import { fadeInRightVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { Reveal } from '../animations/Reavel';
import { MotionItem } from '../animations/MotionItems';

export const OnboardingProcess = () => {
    return (
        <div className='bg-[#EBF8FE]'>

            <div className="w-full pt-12 pb-16 md:pb-20  overflow-hidden">

                <MotionItem variants={scalePopVariants}  className="w-full max-w-xl lg:max-w-2xl text-center flex justify-center gap-2 items-center mx-auto flex-col px-4">
                    <h1 className="font-noto font-semibold text-xl md:text-3xl lg:text-4xl">
                        Platform with seamless onboarding process
                    </h1>
                    <p className="text-sm md:text-base font-noto text-[#535768] mt-2">
                        With our easy to use management solution, onboarding of staff and other
                        team members is as seamless as possible.
                    </p>
                </MotionItem>


                <div className="mt-12 md:mt-16 lg:mt-20 container mx-auto w-[88%]">
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-20 items-center">
                        <MotionItem variants={scalePopVariants} >
                            <div className="flex-1 relative flex items-center justify-center order-1 lg:order-2">
                                <div className="relative w-full aspect-[6/5] md:aspect-[10/9]">

                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/images/onboarding.svg"
                                            alt="onboarding"
                                            fill
                                            className="object-cover w-full"
                                        />
                                    </div>

                                    <div className="absolute w-[40%] md:w-[50%] bottom-[17%] right-[20%] md:right-[10%]">
                                        <Image
                                            src="/images/onboarding1.svg"
                                            alt="dashboard card"
                                            width={300}
                                            height={300}
                                            className="w-full h-auto"
                                        />
                                    </div>

                                    <Image
                                        src="/images/onboarding3.svg"
                                        alt="onboarding3"
                                        width={500}
                                        height={500}
                                        className="absolute w-[45%] md:w-[50%] h-auto top-[28%] right-[-80px] lg:right-[-300px] lg:left-[90%] z-50 transform -translate-x-1/2 shadow-lg"
                                    />


                                    <Image
                                        src="/images/onboarding3.svg"
                                        alt="onboarding3"
                                        width={500}
                                        height={500}
                                        className="absolute w-[45%] md:w-[50%] h-auto top-[-5%] right-[-80px] lg:right-[-150px] transform -translate-x-1/2"
                                    />


                                    <Image
                                        src="/images/onboarding3.svg"
                                        alt="onboarding3"
                                        width={500}
                                        height={500}
                                        className="absolute w-[45%] md:w-[50%] h-auto md:top-[8%] top-[13%] right-[-90px] lg:right-[-200px] transform -translate-x-1/2"
                                    />

                                </div>
                            </div>
                        </MotionItem>

                        <MotionItem variants={scalePopVariants} >
                            <div className="flex-1 w-full relative flex flex-col items-center m-auto justify-center order-1 lg:order-2 ">

                                <div className="absolute inset-x-0 bottom-0 -z-10">
                                    <svg
                                        viewBox="0 0 1440 320"
                                        className="w-full h-48"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            fill="#FFF4E6"
                                            fillOpacity="0.15"
                                            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96"
                                            className="animate-wave-bg"
                                        />
                                    </svg>
                                </div>


                                <div className="relative flex justify-center mb-6 md:mb-8">


                                    <div
                                        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[250px] lg:h-[250px] w-[200px] h-[200px] rounded-full bg-[#FFB240] z-0 animate-wave"
                                    />

                                    <Image
                                        src="/images/onboardinghuman.png"
                                        alt="team member"
                                        width={400}
                                        height={400}
                                        className="lg:w-[800px] w-[600px] h-auto relative z-10"
                                    />

                                </div>

                                <div className="absolute bottom-[-20px] w-[90%]  z-20">
                                    <Image
                                        src="/images/onboarding2.svg"
                                        alt="onboarding stats"
                                        width={500}
                                        height={500}
                                        className="w-full  h-auto"
                                    />
                                </div>

                                <style jsx>{`
                           @keyframes wave {
                             0%, 100% {
                               transform: translate(-50%, -50%) scale(1);
                             }
                             50% {
                               transform: translate(-50%, -50%) scale(1.1);
                             }
                           }
                           
                           @keyframes wave-bg {
                             0% {
                               transform: translateX(0);
                             }
                             50% {
                               transform: translateX(-25px);
                             }
                             100% {
                               transform: translateX(0);
                             }
                           }
                           
                           .animate-wave {
                             animation: wave 3s ease-in-out infinite;
                           }
                           
                           .animate-wave-bg {
                             animation: wave-bg 8s ease-in-out infinite;
                           }
                         `}</style>
                            </div>
                        </MotionItem>

                    </div>
                </div>
            </div>


        </div>
    )
}

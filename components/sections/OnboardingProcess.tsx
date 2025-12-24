// OnboardingProcess Component
import React from 'react'
import Image from 'next/image'
import { fadeInRightVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { Reveal } from '../animations/Reavel';
import { MotionItem } from '../animations/MotionItems';

export const OnboardingProcess = () => {
    return (
        <div className='bg-[#EBF8FE]'>
            <div className="py-12 sm:py-16 lg:py-20 overflow-hidden">
                {/* Header Section - Full width with padding */}
                <MotionItem 
                    variants={scalePopVariants}  
                    className="w-full text-center flex justify-center gap-3 sm:gap-4 items-center flex-col px-4 sm:px-6 lg:px-8"
                >
                    <h1 className="font-noto font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        Platform with seamless onboarding process
                    </h1>
                    <p className="text-sm sm:text-base font-noto text-[#535768] mt-2 max-w-2xl">
                        With our easy to use management solution, onboarding of staff and other
                        team members is as seamless as possible.
                    </p>
                </MotionItem>

                {/* Content Section - Full width with padding */}
                <div className=" mt-12 sm:mt-16 lg:mt-20 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center max-w-[1400px] mx-auto">
                        
                        {/* Left Side - Onboarding Image */}
                        <MotionItem variants={scalePopVariants}>
                            <div className="flex-1 relative flex items-center justify-center order-2 lg:order-1">
                                <div className="relative w-full aspect-[6/5] sm:aspect-[10/9] max-w-[600px] lg:max-w-none">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/images/onboarding.svg"
                                            alt="onboarding"
                                            fill
                                            className="object-contain w-full"
                                        />
                                    </div>

                                    <div className="absolute w-[40%] sm:w-[45%] md:w-[50%] bottom-[17%] right-[15%] sm:right-[12%] md:right-[10%]">
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
                                        className="absolute w-[40%] sm:w-[45%] md:w-[50%] h-auto top-[28%] right-[-60px] sm:right-[-80px] lg:right-[-100px] xl:right-[-150px] z-50 transform -translate-x-1/2 shadow-lg"
                                    />

                                    <Image
                                        src="/images/onboarding3.svg"
                                        alt="onboarding3"
                                        width={500}
                                        height={500}
                                        className="absolute w-[40%] sm:w-[45%] md:w-[50%] h-auto top-[-5%] right-[-60px] sm:right-[-80px] lg:right-[-100px] xl:right-[-150px] transform -translate-x-1/2"
                                    />

                                    <Image
                                        src="/images/onboarding3.svg"
                                        alt="onboarding3"
                                        width={500}
                                        height={500}
                                        className="absolute w-[40%] sm:w-[45%] md:w-[50%] h-auto top-[13%] sm:top-[10%] md:top-[8%] right-[-70px] sm:right-[-90px] lg:right-[-120px] xl:right-[-200px] transform -translate-x-1/2"
                                    />
                                </div>
                            </div>
                        </MotionItem>

                        {/* Right Side - Team Member Image */}
                        <MotionItem variants={scalePopVariants}>
                            <div className="flex-1 w-full relative flex flex-col items-center justify-center order-1 lg:order-2">
                                <div className="absolute inset-x-0 bottom-0 -z-10">
                                    <svg
                                        viewBox="0 0 1440 320"
                                        className="w-full h-32 sm:h-40 md:h-48"
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

                                <div className="relative flex justify-center mb-6 sm:mb-8 w-full max-w-[500px] lg:max-w-none">
                                    <div
                                        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] rounded-full bg-[#FFB240] z-0 animate-wave"
                                    />

                                    <Image
                                        src="/images/onboardinghuman.png"
                                        alt="team member"
                                        width={600}
                                        height={600}
                                        className="w-full h-auto relative z-10"
                                    />
                                </div>

                                <div className="absolute bottom-[-15px] sm:bottom-[-20px] w-[90%] sm:w-[85%] max-w-[500px] lg:max-w-[600px] z-20">
                                    <Image
                                        src="/images/onboarding2.svg"
                                        alt="onboarding stats"
                                        width={500}
                                        height={500}
                                        className="w-full h-auto"
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
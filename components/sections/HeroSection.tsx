"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import FlagsCarousel from "./CountryCarousel";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  containerVariants,
  fadeUpVariants,
  fadeInRightVariants,
  fadeDownVariants,
  scalePopVariants,
  buttonVariants,
} from "@/utils/Variants";

export const HeroSection = () => {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    
   
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    
 
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    
 
    
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    
   
    const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
    const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.section
            ref={sectionRef}
            className={clsx(
                "relative transition-colors duration-500 overflow-hidden",
                "max-sm:pt-0 sm:pt-24 lg:pt-32",
                scrolled ? "bg-[#1D8EE6]" : "bg-white"
            )}
        >
            
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                <svg
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-full"
                >
                    <path
                        d="M0,400 C300,500 500,300 700,350 900,400 1050,300 1200,350 L1200,800 L0,800 Z"
                        className={clsx(
                            "transition-all duration-500",
                            scrolled ? "fill-[#1570b8] opacity-20" : "fill-[#E8F4FD] opacity-60"
                        )}
                    />
                    <path
                        d="M0,500 C250,600 450,450 650,500 850,550 1000,450 1200,500 L1200,800 L0,800 Z"
                        className={clsx(
                            "transition-all duration-500",
                            scrolled ? "fill-[#1570b8] opacity-30" : "fill-[#D0E9FA] opacity-70"
                        )}
                    />
                </svg>
            </div>

            
            <div className="lg:hidden relative pt-6 pb-8 z-10">
                <div className="max-w-md sm:max-w-lg mx-auto relative overflow-hidden px-4">
                    <FlagsCarousel />

                    <div className={clsx(
                        "absolute left-0 top-0 h-full w-16 pointer-events-none bg-gradient-to-r transition-colors duration-500",
                        scrolled ? "from-[#1D8EE6] to-transparent" : "from-white to-transparent"
                    )}></div>
                    <div className={clsx(
                        "absolute right-0 top-0 h-full w-16 pointer-events-none bg-gradient-to-l transition-colors duration-500",
                        scrolled ? "from-[#1D8EE6] to-transparent" : "from-white to-transparent"
                    )}></div>
                </div>
            </div>

            
            {/* Updated container padding to match header */}
            <div className="container mx-auto px-4  pb-12 md:pb-16 lg:pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-items-center lg:justify-items-start">

                    <motion.div
                        ref={contentRef}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isContentInView ? "visible" : "hidden"}
                        className="lg:col-span-7 relative text-center lg:text-left max-w-2xl w-full"
                    >
                      
                        <motion.div
                            variants={fadeDownVariants}
                            className="hidden lg:block mb-8"
                        >
                            <div className="max-w-lg relative overflow-hidden">
                                <FlagsCarousel />

                                <div className={clsx(
                                    "absolute left-0 top-0 h-full w-16 pointer-events-none bg-gradient-to-r transition-colors duration-500",
                                    scrolled ? "from-[#1D8EE6] to-transparent" : "from-white to-transparent"
                                )}></div>
                                <div className={clsx(
                                    "absolute right-0 top-0 h-full w-16 pointer-events-none bg-gradient-to-l transition-colors duration-500",
                                    scrolled ? "from-[#1D8EE6] to-transparent" : "from-white to-transparent"
                                )}></div>
                            </div>
                        </motion.div>

                       
                        <motion.div
                            variants={scalePopVariants}
                            className="hidden xl:block absolute -top-10 -left-16 opacity-50"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-20 rounded-full bg-[#1D8EE6]/20"
                            />
                        </motion.div>

                       
                        <motion.h1
                            variants={fadeUpVariants}
                            style={{ y }}
                            className={clsx(
                                "font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight transition-colors duration-500",
                                scrolled ? "text-white" : "text-gray-900"
                            )}
                        >
                            Unlocking Potential, Nurturing Growth: Your Partner in{" "}
                            <span className={clsx(
                                "transition-colors duration-500",
                                scrolled ? "text-white" : "text-[#1D8EE6]"
                            )}>
                                Human Resources
                            </span>{" "}
                            Excellence
                        </motion.h1>

                      
                        <motion.p
                            variants={fadeUpVariants}
                            className={clsx(
                                "mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-500",
                                scrolled ? "text-white/90" : "text-gray-700"
                            )}
                        >
                            As your partner in Human Resources Excellence, we underscore the
                            collaborative relationship between HR and organizations,
                            delivering excellence across all people operations.
                        </motion.p>

                        
                        <motion.div
                            variants={fadeUpVariants}
                            className="mt-6 md:mt-8 flex gap-3 md:gap-4 justify-center flex-wrap lg:justify-start items-center"
                        >
                            <motion.button
                                whileHover={buttonVariants.hover}
                                whileTap={buttonVariants.tap}
                                onClick={() => router.push("/demo")}
                                className={clsx(
                                    "bg-[#1D8EE6] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-[#1570b8] transition-all duration-300 shadow-lg hover:shadow-xl",
                                    scrolled && "ring-2 ring-white"
                                )}
                            >
                                Request a Demo
                            </motion.button>

                            <motion.button
                                whileHover={buttonVariants.hover}
                                whileTap={buttonVariants.tap}
                                onClick={() => router.push("https://leadhr.app/register")}
                                className={clsx(
                                    "px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl",
                                    scrolled
                                        ? "bg-white text-[#1D8EE6] hover:bg-gray-100"
                                        : "bg-white text-[#1D8EE6] border-2 border-[#1D8EE6] hover:bg-[#1D8EE6] hover:text-white"
                                )}
                            >
                                Get Started
                            </motion.button>
                        </motion.div>

                      
                        <motion.div
                            variants={scalePopVariants}
                            className="hidden xl:block absolute -bottom-10 -right-10 opacity-50"
                        >
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="w-24 h-24 rounded-full bg-[#1D8EE6]/20"
                            />
                        </motion.div>
                    </motion.div>

                    
                    <motion.div
                        ref={imageRef}
                        variants={fadeInRightVariants}
                        initial="hidden"
                        animate={isImageInView ? "visible" : "hidden"}
                        style={{ y: imageY }}
                        className="hidden lg:block lg:col-span-5 relative w-full"
                    >
                        <div className="relative w-full h-[450px] xl:h-[550px]">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className={clsx(
                                    "absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500",
                                    scrolled && "ring-4 ring-white/30"
                                )}
                            >
                                <Image
                                    src="/images/hrpics.jpg"
                                    alt="HR Excellence Team"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className={clsx(
                                    "absolute -bottom-6 -right-6 w-32 h-32 rounded-full transition-colors duration-500",
                                    scrolled ? "bg-white/20" : "bg-[#1D8EE6]/20"
                                )}
                            />
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className={clsx(
                                    "absolute -top-6 -left-6 w-24 h-24 rounded-full transition-colors duration-500",
                                    scrolled ? "bg-white/10" : "bg-[#1D8EE6]/10"
                                )}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
                className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0"
            >
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-16 md:h-24"
                >
                    <path
                        d="M0,0 C150,80 350,0 600,30 850,60 1050,10 1200,0 L1200,120 L0,120 Z"
                        className={clsx(
                            "transition-all duration-500",
                            scrolled ? "fill-[#1570b8]" : "fill-[#F0F8FF]"
                        )}
                    />
                </svg>
            </motion.div>
        </motion.section>
    );
};
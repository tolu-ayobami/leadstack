"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import {
    Facebook,
    Linkedin,
    Instagram,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MotionItem } from './animations/MotionItems';
import { fadeDownVariants, fadeInLeftVariants, fadeInRightVariants, fadeUpVariants, scalePopVariants } from '@/utils/Variants';
import { Reveal } from './animations/Reavel';

const Footer = () => {

    const [show, setShow] = useState()

    const router = useRouter()
    return (
        <div>
            <div className="bg-[#1A1D59] relative overflow-hidden">
                {/* Top Right Wave */}
                <Image
                    src="/icons/right.svg"
                    alt="rightwave"
                    width={400}
                    height={400}
                    className="absolute top-0 right-0 z-0 opacity-80 pointer-events-none"
                />

                {/* Bottom Left Wave */}
                <Image
                    src="/icons/left.svg"
                    alt="leftwave"
                    width={250}
                    height={250}
                    className="absolute bottom-0 left-0 z-0 opacity-80 pointer-events-none"
                />

                <div className="relative z-10 flex py-12 flex-col lg:flex-row w-[87%] mx-auto items-center gap-10">
                    <div className="flex-1 flex flex-col max-w-5xl gap-6 text-center lg:text-left">
                        <MotionItem variants={fadeInRightVariants} once={false}>
                            <h1 className="font-noto text-xl lg:text-4xl font-semibold text-white">
                                Enjoy seamless employee management with ease and excitement!
                            </h1>
                            <p className="text-sm text-white">
                                Discover the experiences of our satisfied clients as they share stories
                                of success, collaboration, and the transformative impact of choosing Leadstack
                            </p>
                        </MotionItem>

                        <MotionItem variants={fadeInLeftVariants} once={false}>
                            <button
                                type="button"
                                onClick={() => router.push("https://leadhr.app/register")}
                                className="bg-[#1A1D59] border border-white text-sm px-4 py-2 rounded-md hover:shadow-lg text-white transition-colors w-32 max-lg:m-auto"
                            >
                                Join us now
                            </button>
                        </MotionItem>
                    </div>

                    <MotionItem
                        variants={scalePopVariants}
                        once={false}
                        className="flex-1 flex relative justify-end"
                    >
                        <Image
                            src="/images/eplyee.svg"
                            alt="eplyee"
                            width={620}
                            height={620}
                            className="relative top-12 max-sm:pt-0 pt-10"
                        />
                    </MotionItem>
                </div>
            </div>


            <div className='bg-white'>
                <div className=' w-[87%] m-auto'>
                    <div className='flex max-lg:gap-8 max-lg:flex-col items-start py-6 mt-4  justify-between'>
                        <MotionItem variants={scalePopVariants} once={false}>
                            <div className='flex gap-1 flex-col lg:w-[300px] max-md:w-full max-md:justify-center'>
                                <Image src="/images/Logo.png" alt="logo" height={220} width={220} className="max-sm:w-[150px] max-sm:h-auto max-md:m-auto" />
                                <p className='font-noto text-sm text-[#656567] max-md:text-center'>Unlocking Potential, Nurturing Growth: Your Partner in Human Resources Excellence</p>
                            </div>
                        </MotionItem>
                        <MotionItem variants={fadeUpVariants} once={false}>
                            <div className="flex flex-col gap-2">
                                <h1 className='font-noto text-lg font-medium'>Our Product</h1>
                                <div className='flex gap-2 flex-col'>
                                    <Link href="/" className='text-[#1D8EE6]'><p className='text-sm font-noto text-[#656567] hover:text-[#1D8EE6]'>HR Tools</p></Link>
                                    <Link href="/" className='text-[#1D8EE6]'><p className='text-sm font-noto text-[#656567] hover:text-[#1D8EE6]'>Payroll</p></Link>
                                    <Link href="/" className=''><p className='text-sm font-noto text-[#656567] hover:text-[#1D8EE6]'>Finance Management</p></Link>
                                </div>
                            </div>
                        </MotionItem>
                        <MotionItem variants={fadeDownVariants} once={false}>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-noto text-lg font-medium'>Job Pool</h1>
                                <div className=''>
                                    <Link href="/jobs" className=''><p className='text-sm font-noto text-[#656567] hover:text-[#1D8EE6]'>Apply for Jobs</p>
                                    </Link>
                                </div>
                            </div>
                        </MotionItem>

                        <MotionItem variants={scalePopVariants} once={false}>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-noto text-lg font-medium'>Contact Us</h1>
                                <div className='flex flex-col gap-2'>
                                    <a
                                        href="mailto:helpme@leadstackhr.com"
                                        className="text-sm font-noto text-[#656567] hover:text-[#1D8EE6] transition-colors">
                                        helpme@leadstackhr.com
                                    </a>
                                </div>
                            </div>
                        </MotionItem>

                    </div>

                    <hr className='mt-4 ' />
                    <MotionItem variants={fadeInLeftVariants} once={false}>
                        <div className="flex justify-between py-6 flex-row max-md:flex-col-reverse gap-4">
                            <p className="font-noto text-sm font-medium text-[#656567] text-center max-md:text-center">
                                Terms & Conditions &nbsp;|&nbsp; <Link href="/" className='hover:text-[#1D8EE6]'>Privacy Policy</Link>
                            </p>

                            <div className="flex gap-4 max-md:justify-center">
                                <a href="https://facebook.com/lead_stack" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="w-6 h-6 text-white bg-[#1D8EE6] p-1 rounded-full hover:bg-white hover:text-[#1D8EE6] hover:shadow-2xl" />
                                </a>

                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-6 h-6 text-white bg-[#1D8EE6] rounded-lg p-1 hover:bg-white hover:text-[#1D8EE6] hover:shadow-2xl" />
                                </a>

                                <a href="https://www.linkedin.com/company/leadstacks" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-6 h-6 text-white bg-[#1D8EE6] rounded-md p-1 hover:bg-white hover:text-[#1D8EE6] hover:shadow-2xl" />
                                </a>

                                <a href="https://x.com/lead_stack" target="_blank" aria-label="X (Twitter)">
                                    <FaXTwitter className="w-6 h-6 text-[#1D8EE6] hover:bg-[#1D8EE6] hover:text-white hover:p-1 rounded-lg hover:shadow-2xl" />
                                </a>

                            </div>

                        </div>
                    </MotionItem>

                    <Reveal>
                        <p className='font-noto pb-6 sm:pb-8 lg:pb-10 text-xs sm:text-sm text-center font-medium text-[#656567]'>
                            © 2025 Leadstackhr. All rights reserved.
                        </p>
                    </Reveal>
                </div>
            </div>
        </div >
    )
}
export default Footer;





{/*   "use client"
import React, { useState } from 'react'
import Image from 'next/image';
import {
    Facebook,
    Linkedin,
    Instagram,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MotionItem } from './animations/MotionItems';
import { fadeDownVariants, fadeInLeftVariants, fadeInRightVariants, fadeUpVariants, scalePopVariants } from '@/utils/Variants';
import { Reveal } from './animations/Reavel';

const Footer = () => {

    const [show, setShow] = useState()

    const router = useRouter()
    return (
        <div>
            
            <div className="bg-[#1A1D59] relative overflow-hidden">
              
                <Image
                    src="/icons/right.svg"
                    alt="rightwave"
                    width={400}
                    height={400}
                    className="absolute top-0 right-0 z-0 opacity-80 pointer-events-none w-[200px] sm:w-[300px] lg:w-[400px] h-auto"
                />

                <Image
                    src="/icons/left.svg"
                    alt="leftwave"
                    width={250}
                    height={250}
                    className="absolute bottom-0 left-0 z-0 opacity-80 pointer-events-none w-[150px] sm:w-[200px] lg:w-[250px] h-auto"
                />

                <div className="relative z-10 flex py-8 sm:py-10 lg:py-12 flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center gap-6 sm:gap-8 lg:gap-10">
                    <div className="flex-1 flex flex-col w-full lg:max-w-xl gap-4 sm:gap-6 text-center lg:text-left">
                        <MotionItem variants={fadeInRightVariants} once={false}>
                            <h1 className="font-noto text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-tight">
                                Enjoy seamless employee management with ease and excitement!
                            </h1>
                            <p className="text-xs sm:text-sm text-white mt-3 sm:mt-4 opacity-90">
                                Discover the experiences of our satisfied clients as they share stories
                                of success, collaboration, and the transformative impact of choosing Leadstack
                            </p>
                        </MotionItem>

                        <MotionItem variants={fadeInLeftVariants} once={false}>
                            <button
                                type="button"
                                onClick={() => router.push("https://leadhr.app/register")}
                                className="bg-[#1A1D59] border-2 border-white text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-white hover:text-[#1A1D59] text-white transition-all duration-300 w-auto mx-auto lg:mx-0"
                            >
                                Join us now
                            </button>
                        </MotionItem>
                    </div>

                    <MotionItem
                        variants={scalePopVariants}
                        once={false}
                        className="flex-1 flex relative justify-center lg:justify-end w-full"
                    >
                        <Image
                            src="/images/eplyee.svg"
                            alt="eplyee"
                            width={620}
                            height={620}
                            className="relative w-[280px] sm:w-[400px] lg:w-[500px] xl:w-[620px] h-auto mt-4 sm:mt-8 lg:mt-12"
                        />
                    </MotionItem>
                </div>
            </div>

           
            <div className='bg-[#FDFDFD]'>
                <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-10 lg:py-12 mt-4'>
                       
                        <MotionItem variants={scalePopVariants} once={false} className="sm:col-span-2 lg:col-span-1">
                            <div className='flex gap-3 flex-col'>
                                <Image 
                                    src="/images/Logo.png" 
                                    alt="logo" 
                                    height={220} 
                                    width={220} 
                                    className="w-[150px] sm:w-[180px] lg:w-[220px] h-auto mx-auto sm:mx-0" 
                                />
                                <p className='font-noto text-xs sm:text-sm text-[#656567] text-center sm:text-left leading-relaxed'>
                                    Unlocking Potential, Nurturing Growth: Your Partner in Human Resources Excellence
                                </p>
                            </div>
                        </MotionItem>

                        <MotionItem variants={fadeUpVariants} once={false}>
                            <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
                                <h1 className='font-noto text-base sm:text-lg font-semibold'>Our Product</h1>
                                <div className='flex gap-2 sm:gap-2.5 flex-col'>
                                    <Link href="/" className='hover:translate-x-1 transition-transform'>
                                        <p className='text-sm font-noto text-[#656567] hover:text-[#1D8EE6] transition-colors'>HR Tools</p>
                                    </Link>
                                    <Link href="/" className='hover:translate-x-1 transition-transform'>
                                        <p className='text-sm font-noto text-[#656567] hover:text-[#1D8EE6] transition-colors'>Payroll</p>
                                    </Link>
                                    <Link href="/" className='hover:translate-x-1 transition-transform'>
                                        <p className='text-sm font-noto text-[#656567] hover:text-[#1D8EE6] transition-colors'>Finance Management</p>
                                    </Link>
                                </div>
                            </div>
                        </MotionItem>

                     
                        <MotionItem variants={fadeDownVariants} once={false}>
                            <div className='flex flex-col gap-3 sm:gap-4 text-center sm:text-left'>
                                <h1 className='font-noto text-base sm:text-lg font-semibold'>Job Pool</h1>
                                <div className=''>
                                    <Link href="/jobs" className='hover:translate-x-1 transition-transform inline-block'>
                                        <p className='text-sm font-noto text-[#656567] hover:text-[#1D8EE6] transition-colors'>Apply for Jobs</p>
                                    </Link>
                                </div>
                            </div>
                        </MotionItem>

                       
                        <MotionItem variants={scalePopVariants} once={false}>
                            <div className='flex flex-col gap-3 sm:gap-4 text-center sm:text-left'>
                                <h1 className='font-noto text-base sm:text-lg font-semibold'>Contact Us</h1>
                                <div className='flex flex-col gap-2'>
                                    <a
                                        href="mailto:helpme@leadstackhr.com"
                                        className="text-sm font-noto text-[#656567] hover:text-[#1D8EE6] transition-colors break-words">
                                        helpme@leadstackhr.com
                                    </a>
                                </div>
                            </div>
                        </MotionItem>
                    </div>

                   
                    <hr className='border-gray-200' />

                    
                    <MotionItem variants={fadeInLeftVariants} once={false}>
                        <div className="flex justify-between items-center py-6 sm:py-8 flex-col sm:flex-row gap-4 sm:gap-6">
                            <p className="font-noto text-xs sm:text-sm font-medium text-[#656567] text-center order-2 sm:order-1">
                                Terms & Conditions &nbsp;|&nbsp; 
                                <Link href="/" className='hover:text-[#1D8EE6] transition-colors'>Privacy Policy</Link>
                            </p>

                            <div className="flex gap-3 sm:gap-4 justify-center order-1 sm:order-2">
                                <a 
                                    href="https://facebook.com/lead_stack" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="transform hover:scale-110 transition-transform"
                                >
                                    <Facebook className="w-8 h-8 sm:w-9 sm:h-9 text-white bg-[#1D8EE6] p-1.5 sm:p-2 rounded-full hover:bg-white hover:text-[#1D8EE6] hover:shadow-lg transition-all" />
                                </a>

                                <a 
                                    href="https://instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="transform hover:scale-110 transition-transform"
                                >
                                    <Instagram className="w-8 h-8 sm:w-9 sm:h-9 text-white bg-[#1D8EE6] rounded-lg p-1.5 sm:p-2 hover:bg-white hover:text-[#1D8EE6] hover:shadow-lg transition-all" />
                                </a>

                                <a 
                                    href="https://www.linkedin.com/company/leadstacks" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="transform hover:scale-110 transition-transform"
                                >
                                    <Linkedin className="w-8 h-8 sm:w-9 sm:h-9 text-white bg-[#1D8EE6] rounded-md p-1.5 sm:p-2 hover:bg-white hover:text-[#1D8EE6] hover:shadow-lg transition-all" />
                                </a>

                                <a 
                                    href="https://x.com/lead_stack" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="X (Twitter)"
                                    className="transform hover:scale-110 transition-transform"
                                >
                                    <FaXTwitter className="w-8 h-8 sm:w-9 sm:h-9 text-[#1D8EE6] hover:bg-[#1D8EE6] hover:text-white p-1.5 sm:p-2 rounded-lg hover:shadow-lg transition-all" />
                                </a>
                            </div>
                        </div>
                    </MotionItem>

                    
                    <Reveal>
                        <p className='font-noto pb-6 sm:pb-8 lg:pb-10 text-xs sm:text-sm text-center font-medium text-[#656567]'>
                            © 2025 Leadstackhr. All rights reserved.
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default Footer; 
 */}

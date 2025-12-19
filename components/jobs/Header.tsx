"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import { job } from "@/utils/data";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useOutsideClick } from "@/hooks/Outsideclick";
 import { useActiveRoute } from "@/hooks/Activerout";

export default function Header() {

   
const { isActive } = useActiveRoute();


    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useOutsideClick(dropdownRef, () => setOpenDropdown(null));
    const [scrolled, setScrolled] = useState(false);


    return (
        <header className="max-sm:pt-4 shadow-sm border transition-all duration-300">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

                <Link href="/jobs" className="text-xl font-bold">
                    <Image src="/images/jobslogo.png" alt="logo" height={150} width={150} className="max-sm:w-[150px] max-sm:h-auto" />
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {job.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                        >
                            <Link
                                href={item.href}
                                className={`relative text-sm font-medium transition-colors ${isActive(item.href)
                                    ? "text-[#1D8EE6] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#1D8EE6] "
                                    : "text-gray-700 hover:text-[#1D8EE6]"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </div>
                    ))}

                </nav>

                <div className="flex gap-3 items-center">
                    <Link
                        href="/"
                        className="rounded-md hidden lg:flex  bg-white border border-[#1D8EE6]  px-4 py-2 text-sm font-medium text-[#1D8EE6] "
                    >
                        Signup
                    </Link>

                    <Link
                        href="/"
                        className="rounded-md hidden lg:flex  bg-[#1D8EE6] px-4 py-2 text-sm font-medium text-white "
                    >
                        Login
                    </Link>
                </div>


                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-2xl"
                >
                    {mobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu (Click-based) */}
            {mobileOpen && (
                <div className="w-full  absolute lg:hidden border-t bg-white px-4 py-4 z-50">

                   <div className="flex  gap-3 items-center justify-center gap-4 py-8">
                    <Link
                        href="/"
                        className="rounded-md w-[60%] text-center  bg-white border border-[#1D8EE6]  px-2 py-3 text-sm font-medium text-[#1D8EE6] "
                    >
                        Signup
                    </Link>

                    <Link
                        href="/"
                        className="rounded-md w-[60%] text-center  bg-[#1D8EE6] px-2 py-3 text-sm font-medium text-white "
                    >
                        Login
                    </Link>
                </div>

                    <nav className="flex flex-col gap-4">
                        {job.map((item) => (
                            <div key={item.label} className="">
                                <Link
                                    href={item.href!}
                                    className="text-xl font-medium text-gray-700"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}

                    </nav>
                </div>
            )}
        </header>
    );
}
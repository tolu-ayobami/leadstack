"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import { job } from "@/utils/data";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useOutsideClick } from "@/hooks/Outsideclick";
import { usePathname } from "next/navigation";

export default function JobsHeader() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useOutsideClick(dropdownRef, () => setOpenDropdown(null));
    const [scrolled, setScrolled] = useState(false);

    // Custom active route check specifically for jobs section
    const isJobActive = (href: string) => {
        if (href === '/jobs') {
            return pathname === '/jobs';
        }
        return pathname.startsWith(href);
    };

   
    const [hideHeader, setHideHeader] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const heroSectionHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            setScrolled(scrollPosition > 50);
            setHideHeader(scrollPosition > heroSectionHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
         <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled ? "bg-white/85 backdrop-blur-sm shadow-md" : ""
        } ${
            hideHeader ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image 
                        src="/images/Logo.png" 
                        alt="jobs logo" 
                        height={200} 
                        width={200} 
                        className="w-[120px] sm:w-[130px] lg:w-[150px] h-auto" 
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {job.map((item) => (
                        <div key={item.label} className="relative">
                            <Link
                                href={item.href}
                                className={`relative text-sm font-medium transition-colors ${
                                    isJobActive(item.href)
                                        ? "text-[#1D8EE6] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#1D8EE6]"
                                        : "text-gray-700 hover:text-[#1D8EE6]"
                                }`}
                            >
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden lg:flex gap-2 xl:gap-3 items-center flex-shrink-0">
                    <Link
                        href="/"
                        className="rounded-md bg-white border border-[#1D8EE6] px-3 xl:px-4 py-2 text-sm font-medium text-[#1D8EE6] hover:bg-[#1D8EE6] hover:text-white transition-colors"
                    >
                        Signup
                    </Link>

                    <Link
                        href="/"
                        className="rounded-md bg-[#1D8EE6] px-3 xl:px-4 py-2 text-sm font-medium text-white hover:bg-[#1570b8] transition-colors"
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-2xl text-gray-700 hover:text-[#1D8EE6] transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden border-t bg-white shadow-lg">
                    <div className="px-4 sm:px-6 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                        {/* Mobile Auth Buttons - Top */}
                        <div className="flex gap-3 items-center justify-center pb-6 border-b border-gray-100">
                            <Link
                                href="/"
                                className="rounded-md flex-1 text-center bg-white border border-[#1D8EE6] px-4 py-2.5 text-sm font-medium text-[#1D8EE6] hover:bg-[#1D8EE6] hover:text-white transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Signup
                            </Link>

                            <Link
                                href="/"
                                className="rounded-md flex-1 text-center bg-[#1D8EE6] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1570b8] transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Login
                            </Link>
                        </div>

                        {/* Mobile Navigation */}
                        <nav className="flex flex-col pt-4">
                            {job.map((item) => (
                                <div key={item.label} className="border-b border-gray-100 last:border-0">
                                    <Link
                                        href={item.href}
                                        className={`block py-3 text-base font-medium transition-colors ${
                                            isJobActive(item.href)
                                                ? "text-[#1D8EE6]"
                                                : "text-gray-700 hover:text-[#1D8EE6]"
                                        }`}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/utils/data";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useOutsideClick } from "@/hooks/Outsideclick";
import { usePathname } from "next/navigation";
import { useActiveRoute } from "@/hooks/Activerout";


export default function Header() {

    const pathname = usePathname();

    const { isActive } = useActiveRoute();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useOutsideClick(dropdownRef, () => setOpenDropdown(null));
    const [scrolled, setScrolled] = useState(false);
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
            scrolled ? "bg-white/85 backdrop-blur-sm shadow-md" : "bg-white"
        } ${
            hideHeader ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}>
            
            <div className="container mx-auto flex items-center justify-between px-4  py-3 sm:py-4">

                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image 
                        src="/images/Logo.png" 
                        alt="logo" 
                        height={200} 
                        width={200} 
                        className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto" 
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                            onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                        >
                            {item.dropdown ? (
                                <>
                                    <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                                        <Link 
                                            href={item.href} 
                                            className={`relative ${
                                                isActive(item.href)
                                                    ? "text-[#1D8EE6] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#1D8EE6]"
                                                    : "text-gray-700 hover:text-[#1D8EE6]"
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                        <FiChevronDown
                                            className={`transition-transform duration-200 ${
                                                openDropdown === item.label ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>

                                    {openDropdown === item.label && (
                                        <div className="absolute left-0 top-full pt-2">
                                            <div className="w-48 rounded-lg border bg-white shadow-lg">
                                                <ul className="py-2">
                                                    {item.dropdown.map((sub) => (
                                                        <li key={sub.label}>
                                                            <Link
                                                                href={sub.href}
                                                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                                                                onClick={() => setOpenDropdown(null)}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.href!}
                                    className={`relative text-sm font-medium transition-colors ${
                                        isActive(item.href)
                                            ? "text-[#1D8EE6] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#1D8EE6]"
                                            : "text-gray-700 hover:text-[#1D8EE6]"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden lg:flex gap-2 xl:gap-3 items-center flex-shrink-0">
                    <Link
                        href="https://leadhr.app/login"
                        className="rounded-md bg-[#1D8EE6] px-3 xl:px-4 py-2 text-sm font-medium text-white hover:bg-[#1570b8] transition-colors"
                    >
                        Login
                    </Link>

                    <Link
                        href="https://leadhr.app/register"
                        className="rounded-md bg-white border border-[#1D8EE6] px-3 xl:px-4 py-2 text-sm font-medium text-[#1D8EE6] hover:bg-[#1D8EE6] hover:text-white transition-colors whitespace-nowrap"
                    >
                        Create Account
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
                <div className="lg:hidden border-t bg-white">
                    <nav className="container mx-auto flex flex-col px-4 sm:px-6 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                        {navItems.map((item) => (
                            <div key={item.label} className="border-b border-gray-100 last:border-0">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setOpenDropdown(
                                                    openDropdown === item.label ? null : item.label
                                                )
                                            }
                                            className="flex w-full items-center justify-between py-3 text-sm font-medium text-gray-700"
                                        >
                                            <Link 
                                                href={item.href} 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setMobileOpen(false);
                                                }}
                                                className={`${
                                                    isActive(item.href)
                                                        ? "text-[#1D8EE6]"
                                                        : "text-gray-700 hover:text-[#1D8EE6]"
                                                }`}
                                            >
                                                {item.label}
                                            </Link>

                                            <FiChevronDown
                                                className={`transition-transform duration-200 ${
                                                    openDropdown === item.label ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>

                                        {openDropdown === item.label && (
                                            <div className="flex flex-col gap-2 pb-3 pl-4">
                                                {item.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        className="text-sm hover:bg-gray-100 py-2 px-3 rounded text-gray-600 hover:text-[#1D8EE6] transition-colors"
                                                        onClick={() => {
                                                            setOpenDropdown(null);
                                                            setMobileOpen(false);
                                                        }}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        className={`block py-3 text-sm font-medium ${
                                            isActive(item.href)
                                                ? "text-[#1D8EE6]"
                                                : "text-gray-700 hover:text-[#1D8EE6]"
                                        } transition-colors`}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile Auth Buttons */}
                        <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-gray-100">
                            <Link
                                href="https://leadhr.app/register"
                                className="rounded-md bg-white text-center border border-[#1D8EE6] px-4 py-2.5 text-sm font-medium text-[#1D8EE6] hover:bg-[#1D8EE6] hover:text-white transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Create Account
                            </Link>

                            <Link
                                href="https://leadhr.app/login"
                                className="rounded-md text-center bg-[#1D8EE6] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1570b8] transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Login
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
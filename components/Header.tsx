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


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={` max-sm:pt-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-sm " : "bg-white"
            }`}>

            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

                <Link href="/" className="text-xl font-bold">
                    <Image src="/images/Logo.png" alt="logo" height={200} width={200} className="max-sm:w-[150px] max-sm:h-auto" />
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                            onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                        >
                            {item.dropdown ? (
                                <>
                                    <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600">
                                        <Link href={item.href} className={`${isActive(item.href)
                                            ? "text-[#1D8EE6] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#1D8EE6] "
                                            : "text-gray-700 hover:text-[#1D8EE6]"
                                            }`}>{item.label}</Link>
                                        <FiChevronDown
                                            className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""
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
                                                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600"
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
                                    className={`relative text-sm font-medium transition-colors ${isActive(item.href)
                                        ? "text-[#1D8EE6] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#1D8EE6] "
                                        : "text-gray-700 hover:text-[#1D8EE6]"
                                        }`}
                                >
                                    {item.label}
                                </Link>


                            )}
                        </div>
                    ))}

                </nav>

                <div className="flex gap-3 items-center">
                    <Link
                        href="https://leadhr.app/login"
                        className="rounded-md hidden lg:flex  bg-[#1D8EE6] px-4 py-2 text-sm font-medium text-white "
                    >
                        Login
                    </Link>

                    <Link
                        href="https://leadhr.app/register"
                        className="rounded-md hidden lg:flex  bg-white border border-[#1D8EE6]  px-4 py-2 text-sm font-medium text-[#1D8EE6] "
                    >
                        Create Account
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
                <div className="lg:hidden border-t bg-white px-4 py-4">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setOpenDropdown(
                                                    openDropdown === item.label ? null : item.label
                                                )

                                            }

                                            className="flex w-full items-center justify-between text-sm font-medium text-gray-700"
                                        > <Link href={item.href} onClick={() => setMobileOpen(false)} className={`${isActive(item.href)
                                            ? "text-[#1D8EE6] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#1D8EE6] "
                                            : "text-gray-700 hover:text-[#1D8EE6]"
                                            }`}>{item.label}</Link>

                                            <FiChevronDown
                                                className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {openDropdown === item.label && (
                                            <div className="mt-4 ml-2 flex flex-col gap-4">
                                                {item.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        className="text-sm hover:bg-gray-100 py-3 px-3 text-gray-600"
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
                                        className="text-sm font-medium text-gray-700"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="flex w-full flex-col gap-3 items-center">
                            <Link
                                href="/"
                                className="rounded-md bg-white w-[60%] text-center border border-[#1D8EE6]  px-4 py-2 text-sm font-medium text-[#1D8EE6] "
                            >
                                Signup
                            </Link>

                            <Link
                                href="/"
                                className="rounded-md w-[60%] text-center bg-[#1D8EE6] px-4 py-2 text-sm font-medium text-white "
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
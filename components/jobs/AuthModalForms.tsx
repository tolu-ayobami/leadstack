"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import {
    X,
} from "lucide-react";


type Props = {
    authMode: "login" | "signup" | null;
    onClose: () => void;
    switchMode: (mode: "login" | "signup") => void;
}

const AuthModalForms = ({ authMode, onClose, switchMode }: Props) => {

    if (!authMode) return null;
    return (
        <div>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-12 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="flex gap-3 bg-[#FFF7E7] border-2 border-dashed border-[#FFA800]  p-3 mt-4 rounded-md">
                        <Image src="/icons/Icon.svg" alt='icons' width={20} height={20} className='flex justify-start' />

                        <div className=''>
                            <h2 className="text-md font-bold ">ATTENTION!!</h2>
                            <p className="text-gray-600 text-xs">You must log in to apply for jobs.</p>
                        </div>
                    </div>

                    {authMode === "signup" && (
                        <div className="">

                            <p className='text-[#535768] font-noto text-xs py-5'>Create an account with your email address or signup with your google account.</p>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="hello@stackworld.com"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8EE6]"
                                    />
                                </div>

                                <div className='flex glex-col lg:flex-row gap-2 '>
                                    <button className="w-full text-xs rounded-lg font-medium  py-2 flex items-center justify-center gap-3">
                                        <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
                                        Sign up with Google

                                    </button>

                                    <button className="w-full bg-[#1D8EE6] text-xs text-white py-2 rounded-md font-medium hover:bg-[#1570b8]">
                                        Continue
                                    </button>
                                </div>

                                <p className=" text-sm  text-gray-600">
                                    Already have an account? <span onClick={() => switchMode("login")} className="text-[#1D8EE6] font-medium cursor-pointer">Sign in</span>
                                </p>
                            </div>
                        </div>
                    )}


                    {authMode === "login" && (
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="hello@stackworld.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8EE6]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8EE6]"
                                />
                            </div>

                            <div className='flex glex-col lg:flex-row gap-2 '>
                                <button className="w-full text-xs rounded-lg font-medium  py-2 flex items-center justify-center gap-3">
                                    <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
                                    Sign up with Google

                                </button>

                                <button className="w-full bg-[#1D8EE6] text-xs text-white py-2 rounded-md font-medium hover:bg-[#1570b8]">
                                    Continue
                                </button>
                            </div>

                            <p className=" text-sm  text-gray-600">
                                Don't have an account? <span onClick={() => switchMode("signup")} className="text-[#1D8EE6] font-medium cursor-pointer">Sign Up</span>
                            </p>
                        </div>

                    )}
                </div>
            </div>

        </div>
    )
}

export default AuthModalForms
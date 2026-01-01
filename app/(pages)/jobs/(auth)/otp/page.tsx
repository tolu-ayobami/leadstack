"use client"
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';


const otpSchema = z.object({
    otp: z.string().length(6, 'OTP must be 6 digits'),
});

type OTPFormData = z.infer<typeof otpSchema>;

export default function LeadstackOTPVerify() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const {
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<OTPFormData>({
        resolver: zodResolver(otpSchema),
    });

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) {
            value = value.slice(0, 1);
        }

        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setValue('otp', newOtp.join(''));

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = pastedData.split('').concat(Array(6).fill('')).slice(0, 6);
        setOtp(newOtp);
        setValue('otp', newOtp.join(''));

        const nextEmptyIndex = newOtp.findIndex(val => !val);
        if (nextEmptyIndex !== -1) {
            inputRefs.current[nextEmptyIndex]?.focus();
        } else {
            inputRefs.current[5]?.focus();
        }
    };

    const onSubmit = async (data: OTPFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    otp: data.otp,
                }),
            });

            if (!response.ok) {
                throw new Error('OTP verification failed');
            }

            const result = await response.json();
            console.log('Verification successful:', result);

            alert('Email verified successfully!');
        } catch (error) {
            console.error('Verification error:', error);
            alert('Failed to verify OTP. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-8">
            <div className="container px-4 md:px-20 mx-auto lg:px-12">

                <div className="flex items-center gap-2 mb-8 ">
                    <img
                        src="/images/Logo.png"
                        alt="logo"
                        className="w-[150px] md:w-[180px] lg:w-[200px] h-auto"
                    />
                </div>

                <div className="flex flex-col lg:flex-row  relative">
                    {/* Left Section */}
                    <div className="lg:w-1/2 flex flex-col ">
                        <div className="mb-8 flex flex-col  gap-3 lg:mt-10">
                            <h1 className="text-3xl lg:text-6xl font-bold text-[#0A2E65] ">
                                Verify Email
                            </h1>
                            <p className="text-gray-600 max-w-lg text-md lg:text-lg">
                                We're committed to connecting you with the right opportunities.
                            </p>
                        </div>

                        <div className="hidden flex-1 lg:flex items-center justify-start">
                            <Image
                                src="/images/otp.png"
                                alt="signin illustration"
                                width={500}
                                height={500}
                                className=" h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Section - OTP Form */}
                    <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8  h-fit ">
                        <div className=" max-w-md mx-auto">
                            <div className="mb-6">
                                <p className="text-sm text-gray-600 mb-1">
                                    We sent a OTP to your email
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    olaoyeladamola02@gmail.com
                                    <span className="text-sm text-gray-500 mt-1">
                                        , please check your mail
                                    </span>
                                </p>

                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <div className="flex gap-2  mb-3">
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                ref={(el) => {
                                                    if (el) inputRefs.current[index] = el;
                                                }}
                                                type="password"
                                                inputMode="numeric"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(e) => handleChange(index, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(index, e)}
                                                onPaste={index === 0 ? handlePaste : undefined}
                                                className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500 ">
                                        Didn't receive the Code? Resend Code in 120s
                                    </p>
                                    {errors.otp && (
                                        <p className="mt-2 text-sm text-red-600 text-center">{errors.otp.message}</p>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    disabled={isSubmitting || otp.join('').length !== 6}
                                    className="w-fit px-6 py-2 bg-[#1D8EE6] float-right text-white font-medium rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Verifying...' : 'Verify'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>


                <div className="mt-6 text-center text-sm text-gray-400">
                    Leadstack® {new Date().getFullYear()}
                </div>
            </div>
        </div>
    );
}
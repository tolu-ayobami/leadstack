"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const signupSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password')
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function LeadstackSignup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstName: 'Kehinde',
            lastName: 'Afolabi',
        }
    });

    const onSubmit = async (data: SignupFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    password: data.password,
                }),
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const result = await response.json();
            console.log('Signup successful:', result);

            alert('Account created successfully!');
        } catch (error) {
            console.error('Signup error:', error);
            alert('Failed to create account. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-8">
            <div className="container px-4 md:px-20 mx-auto lg:px-10">

                <div className="flex items-center gap-2 mb-8 ">
                    <img
                        src="/images/Logo.png"
                        alt="logo"
                        className="w-[150px] md:w-[180px] lg:w-[200px] h-auto"
                    />
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-8 relative">
                    {/* Left Section */}
                    <div className="lg:w-1/2 flex flex-col">

                        <div className="mb-8 flex flex-col  gap-3 lg:mt-10">
                            <h1 className="text-3xl lg:text-5xl font-bold text-[#0A2E65] ">
                                Start using Leadstack
                            </h1>
                            <p className="text-gray-600 max-w-lg text-md lg:text-lg">
                                "Sign up for a free account. We'll match you with jobs that fit your skills and interests."
                            </p>
                        </div>

                        <div className="hidden flex-1 lg:flex items-center justify-start mt-12">
                            <Image
                                src="/images/signin.png"
                                alt="signin illustration"
                                width={500}
                                height={500}
                                className=" h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8  h-fit">
                        <button onClick={() => router.back()} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition">
                            <ArrowLeft className="w-7 h-7 text-[#1D8EE6] border border-[#1D8EE6] p-1 rounded-full" />
                        </button>

                        <div className="w-full">
                            <h2 className="text-md font-semibold text-[#535768] mb-6">
                                Almost there, please enter your name and create your password
                            </h2>

                            <div className="space-y-5">
                                <div className="w-full flex justify-between  gap-4">
                                    <div className='w-full'>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            {...register('firstName')}
                                            className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                                } rounded-lg focus:outline-none `}
                                        />
                                        {errors.firstName && (
                                            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                                        )}
                                    </div>

                                    <div className='w-full'>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            {...register('lastName')}
                                            className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                                } rounded-lg focus:outline-none`}
                                        />
                                        {errors.lastName && (
                                            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Create Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            {...register('password')}
                                            className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                                } rounded-lg focus:outline-none pr-10`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            {...register('confirmPassword')}
                                            className={`w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                                } rounded-lg focus:outline-none  pr-20`}
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="text-gray-500 hover:text-gray-700"
                                            >
                                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={isSubmitting}
                                    className="w-fit px-4 float-right bg-[#1D8EE6] text-white font-medium py-2 rounded-sm hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                >
                                    {isSubmitting ? 'Creating account...' : 'Continue'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-4 mb-4 text-center text-sm text-gray-400">
                    Interested?® {new Date().getFullYear()}
                </div>
            </div>
        </div>
    );
}
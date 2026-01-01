"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const signupSchema = z.object({
    email: z.string().email('email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters'),

});

type SignupFormData = z.infer<typeof signupSchema>;

export default function Login() {

    const router = useRouter()

    const [isSubmitting, setIsSubmitting] = useState(false);
     const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),

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
                    email: data.email,
                    password: data.password,
                }),
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const result = await response.json();
            console.log('Signup successful:', result);

            
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
                {/* Logo */}
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
                            <p className="text-gray-600 text-md lg:text-lg">
                                "Looking for the next great chapter in your career? "
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
                        <div className="w-full">
                            <button onClick={() => router.back()} className=" flex items-center gap-2 text-gray-600 hover:text-gray-800 transition">
                                <ArrowLeft className="w-7 h-7 text-[#1D8EE6] border border-[#1D8EE6] p-1 rounded-full" />
                            </button>
                            <p className='text-[#535768] font-noto text-xs py-5'>Create an account with your email address or signup with your google account.</p>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        {...register('email')}
                                        placeholder="hello@stackworld.com"
                                        className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                            } rounded-lg focus:outline-none`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
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

                                <div className='flex glex-col lg:flex-row gap-2 '>
                                    <button className="w-full text-xs rounded-lg font-medium  py-2 flex items-center justify-center gap-3">
                                        <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
                                        Sign up with Google

                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleSubmit(onSubmit)}
                                        disabled={isSubmitting}
                                        className="w-fit px-4 float-right bg-[#1D8EE6] text-white font-medium py-2 rounded-sm hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                    >
                                        {isSubmitting ? 'Creating...' : 'Continue'}
                                    </button>
                                </div>

                                <p className=" text-sm  text-gray-600">
                                    Don't have an account? <Link href="/jobs/get-started" className="text-[#1D8EE6] font-medium cursor-pointer">Sign Up</Link>
                                </p>
                            </form>

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
"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import Link from 'next/link';

const signupSchema = z.object({
    email: z.string().email('email is required'),
})

type SignupFormData = z.infer<typeof signupSchema>;

export default function GetStarted() {

    const [isSubmitting, setIsSubmitting] = useState(false);

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
                   email: data.email
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
                            <p className='text-[#535768] font-noto text-xs py-5'>Create an account with your email address or signup with your google account.</p>

                            <form  onSubmit={handleSubmit(onSubmit)}  className="">
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

                                <div className='flex glex-col lg:flex-row gap-2 mt-8 '>
                                    <button className="w-full text-xs rounded-lg font-medium  py-2 flex items-center justify-center gap-3">
                                        <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
                                        Sign up with Google

                                    </button>

                                     <button
                                    type="button"
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={isSubmitting}
                                   className="w-fit px-10 py-2 bg-[#1D8EE6] text-xs text-white py-2 rounded-md font-medium hover:bg-[#1570b8]">
                                    {isSubmitting ? 'Creating account...' : 'Continue'}
                                </button>
                                </div>

                                <p className="mt-12 text-sm  text-gray-600">
                                    Already have an account? <Link href="/jobs/login" className="text-[#1D8EE6] font-medium cursor-pointer">Sign in</Link>
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
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import LogoCarousel from "@/components/sections/PartnersCarousel";
import { countries } from "@/utils/CountriesData";
import { toast } from "react-toastify";

import Link from "next/link";

const contactSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    companyEmail: z.string().email("Please enter a valid email address"),
    phoneNumber: z.string().min(10, "Please enter a valid phone number"),
    companyName: z.string().min(2, "Company name is required"),
    country: z.string().min(2, "Country is required"),
    companyAddress: z.string().min(5, "Address must be at least 5 characters"),
    numberofEmployee: z.string().min(1, "Please select number of employees"),
    requestType: z.string().min(1, "Please select a product"),
    howDidYouHear: z.string().min(1, "Please tell us how you heard about us"),
    consent: z.boolean().refine(val => val === true, {
        message: "You must agree before continuing"
    }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
    });

    const onSubmit = async (data: ContactFormData) => {
        const payload = {
            ...data,
            _subject: "New Demo Form Submission",
            _replyto: data.companyEmail,
        };

        try {
            const response = await fetch("https://formspree.io/f/xykgowje", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            toast.success("Thank you! Your message has been sent.");
            reset();
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div>

            <div className="pt-28 px-4 sm:px-6 lg:px-8">
                <div className="container px-4 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10">

                    <div className="w-full lg:w-[30%] flex flex-col gap-3 lg:gap-4 text-center lg:text-left items-center lg:items-start">
                        <h1 className="font-semibold font-noto text-2xl sm:text-3xl md:text-4xl">
                            Request a demo
                        </h1>
                        <p className="text-[#535768] text-sm sm:text-base max-w-md">
                            Kindly fill out the form to request for a demo of any of our product you are interested in.
                        </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md w-full lg:w-[70%]">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">

                            {/* First Name & Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="firstName"
                                        {...register("firstName")}
                                        className="border border-gray-300 p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full focus:border-[#1D8EE6] focus:ring-1 focus:ring-[#1D8EE6] transition-colors"
                                        placeholder="First Name"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="lastName"
                                        {...register("lastName")}
                                        className="border border-gray-300 p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full focus:border-[#1D8EE6] focus:ring-1 focus:ring-[#1D8EE6] transition-colors"
                                        placeholder="Last Name"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Company Name & Country */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Company's name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="companyName"
                                        {...register("companyName")}
                                        className="border border-gray-300 p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full focus:border-[#1D8EE6] focus:ring-1 focus:ring-[#1D8EE6] transition-colors"
                                        placeholder="Company Name"
                                    />
                                    {errors.companyName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                                        Country <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="country"
                                        {...register("country")}
                                        className="border border-gray-300 p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full text-gray-600 focus:border-[#1D8EE6] focus:ring-1 focus:ring-[#1D8EE6] transition-colors"
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((country) => (
                                            <option key={country.code} value={country.name}>
                                                {country.flag} {country.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.country && (
                                        <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 mb-1">
                                        Company Email Address<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="companyEmail"
                                        type="email"
                                        {...register("companyEmail")}
                                        className="border border-gray-300 p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full focus:border-[#1D8EE6] focus:ring-1 focus:ring-[#1D8EE6] transition-colors"
                                        placeholder="Email Address"
                                    />
                                    {errors.companyEmail && (
                                        <p className="text-red-500 text-xs mt-1">{errors.companyEmail.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="phoneNumber"
                                        type="tel"
                                        {...register("phoneNumber")}
                                        className="border border-gray-300 p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full focus:border-[#1D8EE6] focus:ring-1 focus:ring-[#1D8EE6] transition-colors"
                                        placeholder="Phone Number"
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Company Address */}
                            <div>
                                <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700 mb-1">
                                    Company's Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="companyAddress"
                                    {...register("companyAddress")}
                                    className="border border-gray-300 p-3 sm:p-4 outline-none w-full rounded-lg text-sm sm:text-base focus:border-[#1D8EE6] focus:ring-1 focus:ring-[#1D8EE6] transition-colors"
                                    placeholder="Company's Address"
                                />
                                {errors.companyAddress && (
                                    <p className="text-red-500 text-xs mt-1">{errors.companyAddress.message}</p>
                                )}
                            </div>

                            {/* Number of Employees & Request Type */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="numberofEmployee" className="block text-sm font-medium text-gray-700 mb-1">
                                        Number of Employee <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="numberofEmployee"
                                        {...register("numberofEmployee")}
                                        className="border border-gray-300 p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base text-gray-600 w-full focus:border-[#1D8EE6] focus:ring-1 focus:ring-[#1D8EE6] transition-colors"
                                    >
                                        <option value="">Select Range</option>
                                        <option value="1-20">1 - 20</option>
                                        <option value="21-50">21 - 50</option>
                                        <option value="51-100">51 - 100</option>
                                        <option value="101-500">101 - 500</option>
                                        <option value="500+">More than 500</option>
                                    </select>
                                    {errors.numberofEmployee && (
                                        <p className="text-red-500 text-xs mt-1">{errors.numberofEmployee.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-1">
                                        Request Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="requestType"
                                        {...register("requestType")}
                                        className="border border-gray-300 p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base text-gray-600 w-full focus:border-[#1D8EE6] focus:ring-1 focus:ring-[#1D8EE6] transition-colors"
                                    >
                                        <option value="">Select Product</option>
                                        <option value="attendance">Attendance</option>
                                        <option value="performance">Performance Management</option>
                                        <option value="payroll">Payroll Management</option>
                                        <option value="finance">Finance Management</option>
                                    </select>
                                    {errors.requestType && (
                                        <p className="text-red-500 text-xs mt-1">{errors.requestType.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* How Did You Hear About Us - NEW FIELD */}
                            <div>
                                <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">
                                    How did you hear about us? <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="howDidYouHear"
                                    {...register("howDidYouHear")}
                                    className="border border-gray-300 p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base text-gray-600 w-full focus:border-[#1D8EE6] focus:ring-1 focus:ring-[#1D8EE6] transition-colors"
                                >
                                    <option value="">Select an option</option>
                                    <option value="search-engine">Search Engine (Google, Bing, etc.)</option>
                                    <option value="social-media">Social Media</option>
                                    <option value="linkedin">LinkedIn</option>
                                    <option value="twitter">Twitter/X</option>
                                    <option value="facebook">Facebook</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="referral">Referral from a friend/colleague</option>
                                    <option value="advertisement">Online Advertisement</option>
                                    <option value="blog">Blog or Article</option>
                                    <option value="event">Event or Conference</option>
                                    <option value="partner">Partner/Reseller</option>
                                    <option value="email">Email Campaign</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.howDidYouHear && (
                                    <p className="text-red-500 text-xs mt-1">{errors.howDidYouHear.message}</p>
                                )}
                            </div>

                            {/* Consent Checkbox */}
                            <div className="mt-4">
                                <div className="flex items-start items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        {...register("consent")}
                                        className="mt-1 h-5 w-5 cursor-pointer rounded border-gray-300 text-[#1D8EE6]  accent-[#1D8EE6] "
                                    />
                                    <label
                                        htmlFor="consent"
                                        className="text-sm text-[#7C8091] font-poppins leading-tight cursor-pointer"
                                    >
                                        By clicking continue, you accept the{" "}
                                        <Link href="https://leadstack.co/terms-of-use"> <span className="text-[#1D8EE6] hover:underline">Terms of Service</span> and{" "}</Link>
                                        <Link href="https://leadstack.co/privacy-policy"><span className="text-[#1D8EE6] hover:underline">Privacy Policy of Leadstack</span></Link>
                                    </label>
                                </div>
                                {errors.consent && (
                                    <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto sm:min-w-[160px] bg-[#1D8EE6] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#1678c2] transition text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mt-12 sm:mt-16">
                <LogoCarousel />
            </div>
        </div>
    );
};

export default Page;
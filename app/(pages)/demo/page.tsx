"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import LogoCarousel from "@/components/sections/PartnersCarousel";
import Howitorks from "@/components/sections/Howitorks";
import { countries } from "@/utils/CountriesData";
import { toast } from "react-toastify";


const contactSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    companyEmail: z.string().email("Please enter a valid email address"),
    phoneNumber: z.string().min(10, "Please enter a valid phone number"),
    companyName: z.string().min(2, "Company name is required"),
    country: z.string().min(2, "Country is required"),
    companyAddress: z.string().min(5, "Address must be at least 5 characters"),
    numberofEmployee: z.string().min(1, "Please select a request type"),
    products: z.string().min(1, "Please select a date"),
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
            const response = await fetch("https://formspree.io/f/mgowwgav", {
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
                <div className="max-w-7xl lg:px-4 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10">


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


                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="firstName"
                                        {...register("firstName")}
                                        className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full"
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
                                        className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full"
                                        placeholder="Last Name"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                                    )}
                                </div>
                            </div>



                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Company’s name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="companyName"
                                        {...register("companyName")}
                                        className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full"
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
                                        className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full text-gray-600"
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



                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Company Email Address<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="companyEmail"
                                        type="email"
                                        {...register("companyEmail")}
                                        className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full"
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
                                        className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full"
                                        placeholder="Phone Number"
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                                    )}
                                </div>
                            </div>


                            <div>
                                <label htmlFor="countryAddress" className="block text-sm font-medium text-gray-700 mb-1">
                                    Company's Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="countryAddress"
                                    {...register("companyAddress")}
                                    className="border p-3 sm:p-4 outline-none w-full rounded-lg text-sm sm:text-base"
                                    placeholder="Country's Address"
                                />
                                {errors.companyAddress && (
                                    <p className="text-red-500 text-xs mt-1">{errors.companyAddress.message}</p>
                                )}
                            </div>


                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-1">
                                        Number of Employee  <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="products"
                                        {...register("products")}
                                        className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base text-gray-600 w-full"
                                    >
                                        <option value="">Select Type</option>
                                        <option value="general">1 - 20</option>
                                        <option value="demo">21 - 50 </option>
                                        <option value="support">51 - 100</option>
                                        <option value="partnership">101 - 500</option>
                                        <option value="partnership">More than 500</option>
                                    </select>
                                    {errors.products && (
                                        <p className="text-red-500 text-xs mt-1">{errors.products.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                                        Product interested in <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="Products"
                                        type="text"
                                        placeholder="Enter product name"
                                        {...register("products")}
                                        className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full"
                                    />
                                    {errors.products && (
                                        <p className="text-red-500 text-xs mt-1">{errors.products.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4 flex items-start items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    {...register("consent")}
                                    className="mt-1 h-6 w-6 cursor-pointer"
                                    style={{
                                        accentColor: "#1D8EE6",
                                        borderRadius: "4px",
                                    }}
                                />

                                <label
                                    htmlFor="consent"
                                    className="text-sm text-[#7C8091] font-poppins leading-tight cursor-pointer"
                                >
                                By clicking continue, you accept the <span className="text-[#1D8EE6]">Terms of Service </span> and   <span className="text-[#1D8EE6]">Privacy Policy  of Leadsatck</span>
                                </label>
                            </div>

                            {errors.consent && (
                                <span className="text-red-500 text-sm">{errors.consent.message}</span>
                            )}


                            <div className="flex justify-end pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto sm:min-w-[160px] bg-[#1D8EE6] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#1678c2] transition text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
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
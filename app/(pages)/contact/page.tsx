"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import LogoCarousel from "@/components/sections/PartnersCarousel";
import Howitorks from "@/components/sections/Howitorks";
import { countries } from "@/utils/CountriesData";
import { toast } from "react-toastify";
import { fadeDownVariants, fadeInLeftVariants, fadeInRightVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { Reveal } from '@/components/animations/Reavel';
import { MotionItem } from '@/components/animations/MotionItems';



const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  companyName: z.string().min(2, "Company name is required"),
  country: z.string().min(2, "Country is required"),
  countryAddress: z.string().min(5, "Address must be at least 5 characters"),
  requestType: z.string().min(1, "Please select a request type"),
  preferredDate: z.string().min(1, "Please select a date"),
  specialRequest: z.string().min(2, "Please send your special request")
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
      _subject: "New Contact Form Submission",
      _replyto: data.email,
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

          <MotionItem variants={fadeDownVariants} className="w-full lg:w-[30%] flex flex-col gap-3 lg:gap-4 text-center lg:text-left items-center lg:items-start">
            <h1 className="font-semibold font-noto text-2xl sm:text-3xl md:text-4xl">
              Get in touch with us
            </h1>
            <p className="text-[#535768] text-sm sm:text-base max-w-md">
              Here is the end-to-end tutorial to guide you around our platform
            </p>
          </MotionItem>


          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md w-full lg:w-[70%]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <MotionItem variants={fadeUpVariants}>
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
                </MotionItem>

                <MotionItem variants={fadeDownVariants}>
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
                </MotionItem>
              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <MotionItem variants={fadeInLeftVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full"
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </MotionItem>

               <MotionItem variants={fadeInRightVariants}>
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
                </MotionItem>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
               <MotionItem variants={scalePopVariants}>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company's Name <span className="text-red-500">*</span>
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
                </MotionItem>

                <MotionItem variants={scalePopVariants}>
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
                </MotionItem>
              </div>


              <MotionItem variants={fadeInLeftVariants}>
                <label htmlFor="countryAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Company's Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="countryAddress"
                  {...register("countryAddress")}
                  className="border p-3 sm:p-4 outline-none w-full rounded-lg text-sm sm:text-base"
                  placeholder="Country's Address"
                />
                {errors.countryAddress && (
                  <p className="text-red-500 text-xs mt-1">{errors.countryAddress.message}</p>
                )}
              </MotionItem>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <MotionItem variants={fadeInRightVariants}>
                  <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-1">
                    Request Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="requestType"
                    {...register("requestType")}
                    className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base text-gray-600 w-full"
                  >
                    <option value="">Select Request Type</option>
                    <option value="general">Attendance</option>
                    <option value="demo">Performance Management </option>
                    <option value="support">Payroll Management</option>
                    <option value="partnership">Finance Management</option>
                  </select>
                  {errors.requestType && (
                    <p className="text-red-500 text-xs mt-1">{errors.requestType.message}</p>
                  )}
                </MotionItem>

                <MotionItem variants={scalePopVariants}>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                     Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    {...register("preferredDate")}
                    className="border p-3 sm:p-4 outline-none rounded-lg text-sm sm:text-base w-full"
                  />
                  {errors.preferredDate && (
                    <p className="text-red-500 text-xs mt-1">{errors.preferredDate.message}</p>
                  )}
                </MotionItem>
              </div>


              <MotionItem variants={fadeUpVariants}>
                <label htmlFor="specialRequest" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Request
                </label>
                <textarea
                  id="specialRequest"
                  rows={4}
                  {...register("specialRequest")}
                  placeholder="Send Special Request"
                  className="border p-3 sm:p-4 outline-none rounded-lg w-full resize-none text-sm sm:text-base"
                />
                {errors.specialRequest && (
                  <p className="text-red-500 text-xs mt-1">{errors.specialRequest.message}</p>
                )}
              </MotionItem>


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

      <Howitorks />
    </div>
  );
};

export default Page;
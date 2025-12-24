"use client";
import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { faqsData } from '@/utils/Usedata';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { faqFormSchema, FaqFormType } from "@/components/Schema"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { fadeInRightVariants, fadeUpVariants, scalePopVariants } from "@/utils/Variants";
import { Reveal } from '../animations/Reavel';
import { Section } from '../animations/Section';
import { MotionItem } from '../animations/MotionItems';


export const FAQsSection = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FaqFormType>({
        resolver: zodResolver(faqFormSchema),
        mode:"onChange"
    });

    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };


    const onSubmit = async (data: FaqFormType) => {

        const payload = {
            ...data,
            _subject: "New Faqs Form Submission",
            _replyto: data.email,
        };  //"https://formspree.io/f/mgowwgav"
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
        <section className="py-12 md:py-16 lg:py-20 px-4 bg-[#0D1227] ">
            <div className="container px-4 mx-auto">
                <Section>
                    <div className="text-center mb-8 md:mb-12">
                        {/*<h2 className="text-xl md:text-4xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>*/}
                        <p className="text-sm md:text-2xl text-white max-w-xl mx-auto">
                            Do you have any questions? Contact our Team via <Link href="mailto:hello@leadstackhr.com " className='text-[#1D8EE6]'>support@leadstackhr.com</Link>
                        </p>
                    </div>
                </Section>

                <div className='flex gap-10 max-lg:flex-col  '>
                    <div className="space-y-4 flex-1">
                        {faqsData.map((faq) => {
                            const isOpen = openId === faq.id;

                            return (
                                <MotionItem variants={scalePopVariants}  key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md">

                                    <button
                                        onClick={() => handleToggle(faq.id)}
                                        className="w-full flex justify-between items-center p-4 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <h3 className="font-semibold text-base md:text-lg text-gray-900 pr-4">
                                            {faq.question}
                                        </h3>
                                        <span className="flex-shrink-0 text-[#1D8EE6]">
                                            {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                                        </span>
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-4 md:p-6 pt-0 bg-gray-50">
                                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>

                                </MotionItem>
                            );
                        })}
                    </div>

                    <div className='flex-1 flex flex-col gap-6'>
                        <Reveal>
                            <div className='bg-white p-4 rounded-xl'>
                                <h1 className='font-noto font-medium text-xl '>Ask your question</h1>
                                <p className='text-sm text-gray-500 mt-3'>If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. </p>
                            </div>
                        </Reveal>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            <MotionItem variants={fadeInRightVariants} >
                                <div className="rounded-xl bg-white p-4 shadow">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        {...register("email")}
                                        className="w-full border-none outline-none p-2 text-sm"
                                    />
                                </div>
                            </MotionItem>

                            {errors.email && (
                                <p className="mt-1 text-xs text-white">
                                    {errors.email.message}
                                </p>
                            )}
                            <MotionItem variants={fadeUpVariants} >
                                <div>
                                    <textarea
                                        rows={6}
                                        placeholder="Write your message here..."
                                        {...register("message")}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                                    />

                                    {errors.message && (
                                        <p className="mt-1 text-xs text-white">
                                            {errors.message.message}
                                        </p>
                                    )}

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-6 py-2 bg-[#0D1227] border border-white text-white rounded-lg disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Sending..." : "Send"}
                                        </button>
                                    </div>
                                </div>
                            </MotionItem>

                        </form>


                    </div>

                </div>
            </div>
        </section>
    );
};

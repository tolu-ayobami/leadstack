"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Job = {
  id: number;
  title: string;
  company: string;
  type: string;
  course: string;
  salary: string;
  experience: string;
};

type Props = {
  job: Job;
  showBackButton?: boolean;
};

const JobDetails = ({ job, showBackButton = true }: Props) => {
  const router = useRouter();
  const jobUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const encodedUrl = encodeURIComponent(jobUrl);
  const encodedTitle = encodeURIComponent(
    `${job.title} at ${job.company}`
  );

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
  };

  return (
    <div className="bg-[#F5F6FA]">
      <div className=" w-full py-10">
        <div className="max-w-6xl mx-auto px-4 lg:px-20">

          <section className="mb-12">
            <h2 className="text-xl font-medium font-noto mb-5">Job Description</h2>
            <p className="text-gray-700 leading-relaxed flex flex-wrap">
              As a {job.title} at {job.company}, you will design, build, and
              maintain high-quality scalable solutions.
            </p>
          </section>


          {/* Responsibilities */}
          <section className="mb-12">
            <h2 className="text-xl font-medium font-noto text-gray-900 mb-5">Responsibilities</h2>
            <ul className="list-decimal pl-5 space-y-3 text-gray-700">
              <li>Design, develop, and maintain robust and scalable web applications</li>
              <li>Collaborate with product managers, designers, and other developers to define and implement innovative solutions</li>
              <li>Write clean, maintainable, and efficient code following best practices</li>
              <li>Participate in code reviews and contribute to improving team standards</li>
              <li>Troubleshoot, debug, and optimize application performance</li>
              <li>Stay up-to-date with emerging technologies and apply them when appropriate</li>
            </ul>
          </section>

          {/* Qualifications */}
          <section className="mb-12">
            <h2 className="text-xl font-medium font-noto text-gray-900 mb-5">Qualifications</h2>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>{job.experience} of professional experience in software development</li>
              <li>Strong proficiency in JavaScript/TypeScript, React, Node.js, or similar technologies</li>
              <li>Experience with modern frontend and backend frameworks</li>
              <li>Familiarity with RESTful APIs and microservices architecture</li>
              <li>Knowledge of databases (SQL and NoSQL)</li>
              <li>Excellent problem-solving and communication skills</li>
              <li>Ability to work effectively in a team environment</li>
            </ul>
          </section>

          {/* Salary (if available) */}
          {job.salary && (
            <section className="mb-12">
              <h2 className="text-xl font-medium font-noto text-gray-900 mb-5">Required Skills</h2>
              <p className="text-xl font-semibold text-gray-700">{job.course}</p>
            </section>
          )}

          {/* Share Section */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-medium font-noto text-gray-900 mb-6">
              Share Openings
            </h2>
            <div className="max-w-sm flex items-center justify-between  gap-4">
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Image src="/icons/twi.svg" alt="Twitter" width={40} height={40}
                  className="bg-[#CAE1F6] p-2 rounded-full hover:scale-110 transition" />
              </a>

              <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkdn.svg" alt="LinkedIn" width={40} height={40}
                  className="bg-[#CAE1F6] p-2 rounded-full hover:scale-110 transition" />
              </a>

              <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={40} height={40}
                  className="bg-[#CAE1F6] p-2 rounded-full hover:scale-110 transition" />
              </a>

              <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Image src="/icons/fb.svg" alt="Facebook" width={40} height={40}
                  className="bg-[#CAE1F6] p-2 rounded-full hover:scale-110 transition" />
              </a>

              <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer">
                <Image src="/icons/tg.svg" alt="Telegram" width={40} height={40}
                  className="bg-[#CAE1F6] p-2 rounded-full hover:scale-110 transition" />
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default JobDetails;

"use client";
import React from 'react';
import { use } from "react";
import { Briefcase, MapPin, Clock, Bookmark, Eye } from 'lucide-react';
import Image from 'next/image';
import { jobsData } from '@/utils/Usedata';

const JobDetailsPage = ({ params
}: {
  params: Promise<{ id: string }>;
}) => {

  const { id } = use(params);

  const job = jobsData.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Job not found</h2>
          <p className="text-gray-600">The job you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 lg:px-20 py-12 mt-20">
        <div className="">
          {/* Job Title & Company */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              {job.title}
            </h1>
            <p className="text-xl text-gray-700 font-medium">{job.company}</p>
          </div>

          {/* Job Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-10">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#1D8EE6]" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#1D8EE6]" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#1D8EE6]" />
              <span>Posted {job.postedDays} days ago</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-[#1D8EE6] text-white px-5 py-3 rounded-md font-semibold hover:bg-[#1570b8] transition-colors  text-sm">
              Apply Now
            </button>
            <button className="border border-gray-300 px-5 py-3 rounded-md text-gray-700 hover:border-[#1D8EE6] hover:text-[#1D8EE6] transition-colors flex items-center justify-center gap-3">
              <Bookmark className="w-5 h-5" />
              Save Job
            </button>
            <button className="border border-gray-300 px-5 py-3 rounded-md text-gray-700 hover:border-[#1D8EE6] hover:text-[#1D8EE6] transition-colors flex items-center justify-center gap-3">
              <Eye className="w-5 h-5" />
              Report Job
            </button>
          </div>
          <div className="bg-[#F5F6FA]">
            {/* Job Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Job Description</h2>
              <p className="text-gray-700 leading-relaxed">
                As a {job.title} at {job.company}, you will have the opportunity to design, build, test, maintain, and have a direct and meaningful impact on the roadmap of the digital platform. You will be responsible for delivering high-quality, scalable solutions and collaborating with cross-functional teams to bring innovative features to life.
              </p>
            </section>

            {/* Responsibilities */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Responsibilities</h2>
              <ul className="list-disc pl-8 space-y-3 text-gray-700">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Qualifications</h2>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Salary Range</h2>
                <p className="text-2xl font-semibold text-[#1D8EE6]">{job.salary}</p>
              </section>
            )}

            {/* Share Section */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Share this job</h2>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  {/* Replace with actual icons or use lucide-social if available */}
                  <span className="text-xl">X</span>
                </button>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-xl">f</span>
                </button>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-xl">in</span>
                </button>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-xl">WhatsApp</span>
                </button>
              </div>
            </section>
            </div>
          </div>
        </div>
      </div>
      );
};

      export default JobDetailsPage;
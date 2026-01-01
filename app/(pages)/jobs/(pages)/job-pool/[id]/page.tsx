"use client";
import React, { useState } from 'react';
import { use } from "react";
import { jobsData } from '@/utils/Usedata';
import {
  ArrowLeft,
  X,
} from "lucide-react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import JobDetails from '@/components/jobs/JobSingleDetails';
import ApplicationFormPage from '@/components/jobs/ApplicationForm';
import AuthModalForms from '@/components/jobs/AuthModalForms';

const JobDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const router = useRouter();

  const job = jobsData.find((job) => job.id === Number(id));
  if (!job) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <h2 className="text-2xl font-bold">Job not found</h2>
      </div>
    );
  }

  const [isActive, setIsActive] = useState(true);
  const [activeTab, setActiveTab] = useState<"details" | "form">("details");
  const [showReportModal, setShowReportModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  const user = false;

  const [reportReason, setReportReason] = useState<string>('');

  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);

  const handleApplyClick = () => {
    if (user) {
      setActiveTab("form");
    } else {
      setAuthMode("login"); 
    }
  };
  
  const handleReportSubmit = () => {
    console.log("Report submitted:", { reason: reportReason, jobId: job.id });
    setShowReportModal(false);
    setReportReason('');
  };

  return (
    <div className="mt-10">

      <div className="max-w-6xl mx-auto px-4 lg:px-20 py-8">
        <div className="bg-white pb-10 sticky top-0 z-10">
          <div className="py-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-[#1D8EE6] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Jobs</span>
            </button>
          </div>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold mb-3">{job.title}</h1>
        <div className='flex flex-col gap-6'>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Image src="/icons/time.svg" alt="type" width={18} height={18} />
              <span className='text-sm text-[#AFB1B6]'>{job.type}</span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <Image src="/icons/course.svg" alt="course" width={18} height={18} />
              <span className="text-sm truncate text-[#AFB1B6]">{job.course}</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/time.svg" alt="salary" width={18} height={18} />
              <span className='text-sm text-[#AFB1B6]'>{job.salary}</span>
            </div>
          </div>

          <p className="text-xl font-medium font-noto text-gray-700">{job.company}</p>

          <div className="flex items-center gap-3  ">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`relative inline-flex h-4 max-sm:w-10 w-8  items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D8EE6] focus:ring-offset-2 ${isActive ? 'bg-[#1D8EE6]' : 'bg-gray-300'
                }`}
            >
              <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${isActive ? 'translate-x-4' : 'translate-x-1'
                  }`}
              />
            </button>
            <p className='text-[#1D8EE6] flex  flex-wrap'>Would like to receive job opportunities alert similar to this one.</p>

          </div>

          <div className="flex gap-4 flex-wrap">
            {activeTab === "details" && <button
              onClick={handleApplyClick}
              className="flex items-center gap-2 bg-[#1D8EE6] text-white px-5 py-2 rounded-md">
              <Image src="/icons/Edit.svg" alt="edit" width={15} height={15} />
              Apply
            </button>}

            <button onClick={() => setShowSaveModal(true)} className="border border-[#1D8EE6] text-[#1D8EE6] px-5 py-2 rounded-md flex items-center gap-2">
              <Image src="/icons/Bookmark.svg" alt="bookmark" width={10} height={10} />
              Save
            </button>

            <button
              onClick={() => setShowReportModal(true)}
              className="border border-[#1D8EE6] text-[#1D8EE6] px-5 py-2 rounded-md flex items-center gap-2">
              <Image src="/icons/Flag.svg" alt="flag" width={17} height={17} />
              Report Job
            </button>
          </div>
        </div>
      </div>

      {activeTab === "details" ? <JobDetails job={job} /> : <ApplicationFormPage />}

      <AuthModalForms
        authMode={authMode}
        onClose={() => setAuthMode(null)}
        switchMode={(mode) => setAuthMode(mode)}
      />

      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 relative">
            <button
              onClick={() => setShowReportModal(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-center mb-2">Report Job</h2>
            <p className=" text-gray-600 mb-6">
              <span className="font-semibold">{job.title}</span><br />
              {job.company}
            </p>

            <p className=" font-semibold text-gray-700 mb-4">
              Please fill out the form below and let us know more.<span className="text-red-500">*</span>
            </p>

            <div className="space-y-4 mb-6">
              {['Offensive', 'Fraudulent', 'Job no longer available', 'Other'].map((reason) => (
                <label key={reason} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="reportReason"
                    value={reason}
                    checked={reportReason === reason}
                    onChange={(e) => setReportReason(e.target.value)}
                    className="w-5 h-5 text-[#1D8EE6] focus:ring-[#1D8EE6]"
                  />
                  <span className="text-gray-800">{reason}</span>
                </label>
              ))}
            </div>
            <div className=''>
              <p className='font-semibold text-gray-700 mb-1'>Add more details</p>
              <textarea
                placeholder="Comment"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none  resize-none"
              />
            </div>

            <div className="flex gap-3 mt-8 justify-end">

              <button
                onClick={handleReportSubmit}
                disabled={!reportReason}
                className="px-6 py-1  bg-[#1D8EE6] text-white rounded-md font-medium hover:bg-[#1570b8] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>

              <button
                onClick={() => setShowReportModal(false)}
                className=" px-6 py-1 border border-[#1D8EE6] rounded-md text-[#1D8EE6]  hover:bg-gray-50"
              >
                Back
              </button>

            </div>
          </div>
        </div>
      )}

      {showSaveModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-12 text-center">
            <div className=" rounded-full flex items-center justify-center mx-auto mb-6">
              <Image src="/icons/check.svg" alt='check' width={80} height={80} />
            </div>
            <h2 className="text-2xl font-bold mb-3">Job Opening Saved</h2>
            <button
              onClick={() => setShowSaveModal(false)}
              className="w-fit  bg-[#1D8EE6] text-white py-2 mt-10 px-4 rounded-lg font-semibold hover:bg-[#1570b8]"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailsPage;
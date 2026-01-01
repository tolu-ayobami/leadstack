import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Search, MoreVertical, Share2, Bookmark, Eye } from 'lucide-react';
import { jobsData } from '@/utils/Usedata';

const AppliedJobs = () => {

    const [showJobMenu, setShowJobMenu] = useState<number | null>(null);

    return (
        <div className='flex flex-col gap-4'>
            {jobsData.map((job) => (
                <div
                    key={job.id}
                    className="w-full flex flex-col max-xl:flex-wrap sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                >
                    {/* Image */}
                    <div className="hidden lg:flex w-fit shrink-0">
                        <Image
                            src={job.picture}
                            alt={job.course}
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-3 w-full min-w-0">
                        {/* Title + menu */}
                        <div className="flex justify-between items-start gap-2">
                            <div className="min-w-0">
                                <h3 className="font-bold text-gray-900 text-base sm:text-lg ">
                                    {job.title}
                                </h3>
                                <div className='flex items-center gap-4 mt-1'>

                                    <Link href={`/jobs/job-pool/company/${job.companyId}`}>
                                        <p className="text-gray-500 text-xs cursor-pointer hover:underline truncate ">
                                            {job.company}
                                        </p>
                                    </Link>

                                    <div className='w-0.5 h-5 bg-gray-200' />

                                    <p className="text-gray-500 text-xs truncate ">
                                        {job.location}
                                    </p>
                                </div>
                            </div>

                            <div className="relative shrink-0">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowJobMenu(showJobMenu === job.id ? null : job.id);
                                    }}
                                    className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <MoreVertical className="w-5 h-5" />
                                </button>

                                {showJobMenu === job.id && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setShowJobMenu(null)}
                                        />
                                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 py-2">
                                            <Link href={`/jobs/job-pool/${job.id}`}>
                                                <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm flex items-center gap-3">
                                                    <Eye className="w-4 h-4" /> View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Meta info */}
                        <div className="space-y-2 text-gray-600 text-sm">
                            <div className="flex gap-3">
                                <div className="flex items-center gap-2 min-w-0">
                                    <Image src="/icons/year.svg" alt="year" width={18} height={18} />
                                    <span className=" text-xs truncate ">{job.experience}</span>
                                </div>

                                <div className="flex items-center gap-2 min-w-0">
                                    <Image src="/icons/course.svg" alt="course" width={18} height={18} />
                                    <span className="text-xs truncate">{job.course}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2">
                                    <Image src="/icons/time.svg" alt="salary" width={18} height={18} />
                                    <span className='text-xs'>{job.salary}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Image src="/icons/time.svg" alt="type" width={18} height={18} />
                                    <span className='text-xs'>{job.type}</span>
                                </div>
                            </div>
                            <hr />

                            <div className="flex items-center gap-2">
                                <Image src="/icons/Timecircle.svg" alt="timecircle" width={18} height={18} />
                                <span className='text-xs'>Status: <span className='text-green-500 font-semibold text-base'>{job.status}</span></span>
                            </div>
                        </div>
                    </div>
                </div>

            ))}

            {jobsData.length === 0 && (
                <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                    <div className="text-gray-400 mb-4">
                        <Search className="w-16 h-16 mx-auto" />
                    </div>
                    <p className="text-gray-600 text-lg font-semibold mb-2">No jobs found</p>
                    <p className="text-gray-500 text-sm mb-4">Get started by searching for jobs on from the job pool</p>
                </div>
            )}
            
        </div >
    )
}

export default AppliedJobs
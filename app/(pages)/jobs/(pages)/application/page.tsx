"use client"

import React, {useState} from 'react'
import AppliedJobs from '@/components/applications/AppliedJobs';
import SavedJobs from '@/components/applications/SavedJobs';

const MyAplication = () => {

 const [activeTab, setActiveTab] = useState("application");

  return (
    <div className='bg-[#F5F6FA] min-h-screen'>
      <div className="lg:w-[78%] mx-auto   px-4 h-auto lg:px-20 pt-28 pb-8">
      <h1 className='font-noto  font-semibold'>My Application</h1>
      <p className='text-[#61646B] font-noto mt-2'>Track your job application status</p>
     

      <div className=' mt-3 mb-2'>
        <div className="flex items-center flex-nowrap pt-5 border-b border-gray-300 overflow-x-auto whitespace-nowrap hide-scrollbar">
          {[
            { id: "application", label: "Applied Jobs" },
            { id: "saved", label: "Saved Jobs" },
        
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 relative font-inter px-6 pb-2 text-sm sm:text-base transition-all ${activeTab === tab.id
                ? "font-medium text-[#1D8EE6] text-base"
                : "font-normal text-[#9E9E9E] text-base"
                }`}
            >
              {tab.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-10/12 transition-all ${activeTab === tab.id ? "bg-[#1D8EE6] h-[2px]" : ""
                  }`}
              />
            </button>
          ))}
        </div>

        <div className="overflow-x-auto mt-10">
          {activeTab === "application" && <AppliedJobs />}
          {activeTab === "saved" && <SavedJobs />}
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default MyAplication;
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, MapPin, Calendar, ChevronDown, List, X, Globe, MoreVertical, Share2, Bookmark, Eye, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { use } from "react";
import { jobsData } from '@/utils/Usedata';
import { number } from 'zod';
import { CiGrid41 } from "react-icons/ci";


// Sample company data - replace with your actual data or API call
const companyData = {
  id: 1,
  name: "Leadstack Limited",
  logo: "/images/Logo.png",
  location: "Port A, Akinola, Abule-Egba Street, Ojodu, Off GRA, Ikeja, Lagos, Nigeria",
  website: "www.leadstackhrsystem.com.ng",
  about: "LeadStack Limited is a leading HR management software company dedicated to providing comprehensive HR solutions to businesses of all sizes. With a team of experienced professionals, we specialize in streamlining HR processes, enhancing workforce productivity, ensuring efficient employee management, and contributing to the overall success of our client organizations.",
  mission: "Our mission at LeadStack Limited is to empower organizations by providing them with innovative tools. We strive to be a trusted partner, delivering HR solutions that contribute to our clients' growth, employee satisfaction, and organizational excellence.",
  socialLinks: {
    twitter: "#",
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    whatsapp: "#"
  },
  totalJobs: 25
};

const CompanyJobsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showJobMenu, setShowJobMenu] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  //const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedDateRange, setSelectedDateRange] = useState('Date Range');

  const [showDateModal, setShowDateModal] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedJobStyles, setSelectedJobStyles] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


  // Collapsible states for each section
  const [openSections, setOpenSections] = useState({
    jobType: true,
    remote: true,
    experience: true,
    categories: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const jobTypes = ['Full Time', 'Part Time', 'Contract', 'Remote'];
  const experienceLevels = ['1-2 Years', '2-3 Years', '3-5 Years', '4-6 Years', '5+ Years'];
  const jobStyles = ['Hybrid', 'On-site', 'Remote'];
  const categories = ['Development', 'Designer', 'Marketing', 'Admin'];
  const dateRanges = ['Today', 'Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 6 months', 'Date Range'];

  const companyJobs = jobsData.filter(job => job.companyId === Number(id));

  const filteredJobs = companyJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesJobType = selectedJobType.length === 0 || selectedJobType.includes(job.type);
    const matchesExperience = selectedExperience.length === 0 || selectedExperience.includes(job.experience);
    return matchesSearch && matchesLocation && matchesJobType && matchesExperience;
  });

  const title = companyJobs[0].company || "Jobs";

  const clearAllFilters = () => {
    setSelectedJobType([]);
    setSelectedExperience([]);
    setSelectedJobStyles([]);
    setSelectedCategories([]);
    setSelectedDateRange('Date Range');
    setStartDate("")
    setEndDate("")
  };

  const activeFiltersCount = selectedJobType.length + selectedExperience.length +
    selectedJobStyles.length + selectedCategories.length;

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header with Back Button and Search */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto  flex-shrink-0 px-4 h-auto lg:px-20 pt-28 pb-8">
          <div className="bg-white py-8">
            <div className=" mx-auto px-4 lg:px-20 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
              <p className="text-xl text-gray-600">{companyJobs.length} jobs currently open</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap gap-3 items-stretch ">
            <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
              <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search job, keywords, companies, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
              <MapPin className="text-gray-400 w-5 h-5 flex-shrink-0" />
              <input
                type="text"
                placeholder="Select Locations"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400"
              />
            </div>
            <div className="relative">
              <button
                onClick={() => setShowDateDropdown(!showDateDropdown)}
                className="h-full w-full flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{selectedDateRange}</span>
                <ChevronDown className={`w-4 h-4 max-lg:ml-auto transition-transform ${showDateDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showDateDropdown && (
                <div className="absolute top-full mt-2 right-0  w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  {dateRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => {
                        if (range === 'Date Range') {
                          setShowDateDropdown(false);
                          setShowDateModal(true);
                        } else {
                          setSelectedDateRange(range);
                          setShowDateDropdown(false);
                        }
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 hover:text-[#1D8EE6] transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {range}
                    </button>
                  ))}
                </div>
              )}

              {showDateModal && (
                <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black/40">
                  <div className="bg-white max-sm:w-[90%] w-full rounded-lg max-w-sm p-6 shadow-xl">
                    <div className='flex justify-between'>
                      <h3 className="text-lg font-semibold mb-4 text-[#0A2E65]">
                        Select date range
                      </h3>

                      <X onClick={() => { setShowDateModal(false); clearAllFilters() }} className='cursor-pointer' />

                    </div>

                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="text-sm text-gray-600">Start date</label>
                        <input
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-gray-600">End date</label>
                        <input
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
            <button className="w-fit  bg-[#1D8EE6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1570b8] transition-colors text-sm whitespace-nowrap shadow-lg">
              Search
            </button>
           {/* <div className="w-fit max-lg:hidden flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-[#1D8EE6] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                title="Grid view"
              >
                <CiGrid41 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-[#1D8EE6] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                title="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>*/}
            {/* Filter Toggle Button - Works on both mobile and desktop */}
            <button
              onClick={() => setShowFilterSidebar(!showFilterSidebar)}
              className="w-fit flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 hover:border-[#1D8EE6] rounded-lg text-gray-700 font-medium transition-all text-sm whitespace-nowrap"
            >
              <Image src="/icons/filter.svg" alt="filter" width={20} height={20} />
              <span>Filter</span>
              {activeFiltersCount > 0 && (
                <span className="bg-[#1D8EE6] text-white text-xs px-2 py-0.5 rounded-full ml-1">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-20 py-8">
        <div className="flex flex-col-reverse lg:flex-row gap-6 items-start">
          {/* Job Listings - Left Side */}
          <main className=" w-full">
            <div className="flex flex-col gap-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#1D8EE6] transition-all duration-300"
                >
                  {/* Image */}
                  <div className="hidden lg:flex w-fit shrink-0">
                    <Image
                      src={job.picture || "/images/Logo.png"}
                      alt={job.title}
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
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                          {job.title}
                        </h3>
                        <div className='flex items-center gap-4 mt-1'>
                          <p className="text-gray-500 text-xs">{job.company}</p>
                          <div className='w-0.5 h-5 bg-gray-200' />
                          <p className="text-gray-500 text-xs truncate">{job.location}</p>
                        </div>
                      </div>

                      {/* Three Dots Menu */}
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
                              <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm flex items-center gap-3">
                                <Share2 className="w-4 h-4" /> Share
                              </button>
                              <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm flex items-center gap-3">
                                <Bookmark className="w-4 h-4" /> Save
                              </button>
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
                        <div className="flex items-center gap-2">
                          <Image src="/icons/year.svg" alt="year" width={18} height={18} />
                          <span className="text-xs">{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Image src="/icons/course.svg" alt="course" width={18} height={18} />
                          <span className="text-xs">{job.course}</span>
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
                        <span className='text-xs'>Posted {job.postedDays} days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredJobs.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <p className="text-gray-600 text-lg font-semibold mb-2">No jobs found for this company</p>
                <p className="text-gray-500 text-sm mb-4">
                  Company ID: {id}<br />
                  Please check if this company has any job listings.
                </p>
                <button
                  onClick={() => router.push('/jobs/job-pool')}
                  className="text-[#1D8EE6] hover:text-[#1570b8] font-semibold"
                >
                  View all jobs
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredJobs.length > 0 && (
              <div className="mt-8 flex flex-col lg:flex-row  gap-3 lg:justify-between  items-center">
                <p className="text-gray-500 text-sm">
                  1-{filteredJobs.length} of {companyJobs.length}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all ${currentPage === page
                        ? 'bg-[#1D8EE6] text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage >= 3}
                    className="p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </main>

          {/* Company Information Sidebar - Right Side */}
          <aside className=" w-full">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

              <h4 className="font-semibold text-[#7C8091] mb-2">Company's Information</h4>

              <div className="flex flex-col mt-6">
                <Image src={companyData.logo} alt={companyData.name} width={150} height={150} className="object-contain mb-4" />
                <h3 className="font-bold text-gray-900 text-lg ">{companyData.name}</h3>
              </div>

              {/* Company Info Section */}
              <div className="space-y-6">
                <div className='mt-6'>
                  <hr />
                  <p className="text-sm mt-5 text-gray-600 leading-relaxed">
                    {companyData.about}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mission</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {companyData.mission}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {companyData.location}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Website</h4>
                  <a
                    href={`https://${companyData.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#1D8EE6] hover:underline flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    {companyData.website}
                  </a>
                </div>

                {/* Social Media Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Social media handles</h4>
                  <div className="max-w-sm flex items-center justify-between  gap-4">
                    <a href={companyData.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      <Image src="/icons/twi.svg" alt="Twitter" width={40} height={40}
                        className="bg-[#CAE1F6] p-2 rounded-full hover:scale-110 transition" />
                    </a>

                    <a href={companyData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Image src="/icons/linkdn.svg" alt="LinkedIn" width={40} height={40}
                        className="bg-[#CAE1F6] p-2 rounded-full hover:scale-110 transition" />
                    </a>

                    <a href={companyData.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={40} height={40}
                        className="bg-[#CAE1F6] p-2 rounded-full hover:scale-110 transition" />
                    </a>

                    <a href={companyData.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                      <Image src="/icons/fb.svg" alt="Facebook" width={40} height={40}
                        className="bg-[#CAE1F6] p-2 rounded-full hover:scale-110 transition" />
                    </a>

                    <a href={companyData.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Image src="/icons/tg.svg" alt="Telegram" width={40} height={40}
                        className="bg-[#CAE1F6] p-2 rounded-full hover:scale-110 transition" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {showFilterSidebar && (
            <>
              {/* FILTER CONTAINER */}
              <aside
                className="
        fixed inset-0 lg:z-40 z-50 flex items-center justify-center
        lg:static lg:inset-auto lg:block 
      "
              >
                {/* FILTER CARD */}
                <div
                  className="
          max-sm:w-[90%] lg:w-60 bg-white shadow-2xl
           lg:shadow-sm lg:h-auto
          max-sm:max-h-[90vh] overflow-y-auto
        "
                >
                  {/* Header */}
                  <div className="p-5 border-b flex items-center justify-between">
                    <h3 className="font-bold text-gray-800 text-lg">Filters</h3>

                    <div className="flex justify-end">
                      <button
                        onClick={clearAllFilters}
                        className="text-[#1D8EE6] hidden lg:flex text-sm font-medium"
                      >
                        Clear all
                      </button>

                      <button
                        onClick={() => setShowFilterSidebar(false)}
                        className="lg:hidden  flex"
                      >
                        <X className="w-6 h-6 text-gray-600" />
                      </button>

                    </div>


                  </div>

                  {/* Clear */}
                  <div className="px-5 py-3 lg:py-1 flex justify-end">
                    <button
                      onClick={clearAllFilters}
                      className="text-[#1D8EE6] lg:hidden text-sm font-medium"
                    >
                      Clear all
                    </button>

                  </div>
                  {/* Filter content */}
                  <div className="p-5 space-y-6">
                    {/* Job Type */}
                    <div>
                      <button
                        onClick={() => toggleSection('jobType')}
                        className="w-full flex items-center justify-between mb-3"
                      >
                        <h4 className="font-semibold text-gray-800">Job Type</h4>
                        {openSections.jobType ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>

                      {openSections.jobType && (
                        <div className="space-y-3">
                          {jobTypes.map((type) => (
                            <label key={type} className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={selectedJobType.includes(type)}
                                onChange={(e) =>
                                  e.target.checked
                                    ? setSelectedJobType([...selectedJobType, type])
                                    : setSelectedJobType(
                                      selectedJobType.filter((t) => t !== type)
                                    )
                                }
                                className="w-4 h-4 text-[#1D8EE6]"
                              />
                              <span className="text-sm text-gray-600">{type}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Repeat same pattern for Experience, Remote, Categories */}
                    {/* Remote */}
                    <div>
                      <button onClick={() => toggleSection('remote')} className="w-full flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-800">Remote</h4>
                        {openSections.remote ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                      </button>
                      {openSections.remote && (
                        <div className="space-y-3">
                          {jobStyles.map((style) => (
                            <label key={style} className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={selectedJobStyles.includes(style)}
                                onChange={(e) => e.target.checked ? setSelectedJobStyles([...selectedJobStyles, style]) : setSelectedJobStyles(selectedJobStyles.filter(s => s !== style))}
                                className="w-4 h-4 text-[#1D8EE6] rounded focus:ring-[#1D8EE6]"
                              />
                              <span className="text-sm text-gray-600">{style}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Experience */}
                    <div>
                      <button onClick={() => toggleSection('experience')} className="w-full flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-800">Experience</h4>
                        {openSections.experience ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                      </button>
                      {openSections.experience && (
                        <div className="space-y-3">
                          {experienceLevels.map((level) => (
                            <label key={level} className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={selectedExperience.includes(level)}
                                onChange={(e) => e.target.checked ? setSelectedExperience([...selectedExperience, level]) : setSelectedExperience(selectedExperience.filter(l => l !== level))}
                                className="w-4 h-4 text-[#1D8EE6] rounded focus:ring-[#1D8EE6]"
                              />
                              <span className="text-sm text-gray-600">{level}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Categories */}
                    <div>
                      <button onClick={() => toggleSection('categories')} className="w-full flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-800">Job Categories</h4>
                        {openSections.categories ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                      </button>
                      {openSections.categories && (
                        <div className="space-y-3">
                          {categories.map((category) => (
                            <label key={category} className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={(e) => e.target.checked ? setSelectedCategories([...selectedCategories, category]) : setSelectedCategories(selectedCategories.filter(c => c !== category))}
                                className="w-4 h-4 text-[#1D8EE6] rounded focus:ring-[#1D8EE6]"
                              />
                              <span className="text-sm text-gray-600">{category}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </aside>

              {/* BACKDROP (mobile only) */}
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setShowFilterSidebar(false)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyJobsPage;
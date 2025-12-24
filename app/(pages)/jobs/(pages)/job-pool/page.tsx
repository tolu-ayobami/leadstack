"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Search, MapPin, Calendar, Briefcase, DollarSign, Clock, Filter, ChevronDown, List, X, MoreVertical, Share2, Bookmark, Eye, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import { CiGrid41 } from "react-icons/ci";
import { jobsData } from '@/utils/Usedata';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const JobListPage = () => {

  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [showFilterSidebar, setShowFilterSidebar] = useState(true); // true by default so it's visible on desktop initially
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showJobMenu, setShowJobMenu] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedDateRange, setSelectedDateRange] = useState('Date Range');

  // Filter states
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
  const dateRanges = ['Today', 'Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 6 months'];

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesJobType = selectedJobType.length === 0 || selectedJobType.includes(job.type);
    const matchesExperience = selectedExperience.length === 0 || selectedExperience.includes(job.experience);
    return matchesSearch && matchesLocation && matchesJobType && matchesExperience;
  });

  const clearAllFilters = () => {
    setSelectedJobType([]);
    setSelectedExperience([]);
    setSelectedJobStyles([]);
    setSelectedCategories([]);
    setSelectedDateRange('Date Range');
  };

  const activeFiltersCount = selectedJobType.length + selectedExperience.length +
    selectedJobStyles.length + selectedCategories.length;

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto  flex-shrink-0 px-4 h-auto lg:px-20 pt-28 pb-8">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl text-[#0A2E65] sm:text-4xl lg:text-5xl font-bold mb-8">
              Looking for the next great chapter<br />in your career
            </h1>
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
                <ChevronDown className={`w-4 h-4 transition-transform ${showDateDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showDateDropdown && (
                <div className="absolute top-full mt-2 right-0  w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  {dateRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => {
                        setSelectedDateRange(range);
                        setShowDateDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 hover:text-[#1D8EE6] transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {range}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="bg-[#1D8EE6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1570b8] transition-colors text-sm whitespace-nowrap shadow-lg">
              Search
            </button>
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
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
            </div>
            {/* Filter Toggle Button - Works on both mobile and desktop */}
            <button
              onClick={() => setShowFilterSidebar(!showFilterSidebar)}
              className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 hover:border-[#1D8EE6] rounded-lg text-gray-700 font-medium transition-all text-sm whitespace-nowrap"
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
        <div className={`flex  gap-6 items-start transition-all duration-300 ${showFilterSidebar ? 'lg:pr-0' : ''}`}>
          <div className='container'>
          <main className={`flex-1 min-w-0 ${!showFilterSidebar ? 'container ' : ''}`}>
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-5' : 'flex flex-col gap-4'}>
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#1D8EE6] transition-all duration-300 p-5 cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-400 via-purple-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white font-bold text-xl">LS</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#1D8EE6] transition-colors">{job.title}</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{job.company}</p>
                      </div>
                    </div>
                    <div className="relative">
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
                          <div className="fixed inset-0 z-40" onClick={() => setShowJobMenu(null)} />
                          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 py-2">
                            <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 hover:text-[#1D8EE6] transition-colors flex items-center gap-3">
                              <Share2 className="w-4 h-4" /> <span>Share</span>
                            </button>
                            <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 hover:text-[#1D8EE6] transition-colors flex items-center gap-3">
                              <Bookmark className="w-4 h-4" /> <span>Save</span>
                            </button>
                            <Link href={`/jobs/job-pool/${job.id}`}>
                            <button  className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 hover:text-[#1D8EE6] transition-colors flex items-center gap-3">
                              <Eye className="w-4 h-4" /> <span>View Details</span>
                            </button>
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2.5 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Briefcase className="w-4 h-4 text-[#1D8EE6]" />
                      <span>{job.experience}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-xs px-2 py-1 bg-blue-50 text-[#1D8EE6] rounded font-medium">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 text-[#1D8EE6]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <DollarSign className="w-4 h-4 text-[#1D8EE6]" />
                      <span className="font-semibold text-gray-900">{job.salary}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500 flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      Posted {job.postedDays} days ago
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <p className="text-gray-600 text-lg font-semibold mb-2">No jobs found</p>
                <p className="text-gray-500 text-sm mb-4">Try adjusting your filters or search criteria</p>
                <button onClick={clearAllFilters} className="text-[#1D8EE6] hover:text-[#1570b8] font-semibold">
                  Clear all filters
                </button>
              </div>
            )}
          </main>


               {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className=" container mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              1-{filteredJobs.length} of 25
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg  disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${currentPage === page ? 'bg-[#1D8EE6] text-white shadow-md' : ' text-gray-600 hover:bg-gray-100 '}`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                disabled={currentPage >= 5}
                className="p-2 rounded-lg  disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}


          </div>

          {/* Unified Filter Sidebar - Toggleable on both mobile and desktop */}
          {showFilterSidebar && (
            <aside className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 lg:relative lg:inset-auto lg:shadow-sm lg:z-auto lg:flex-shrink-0 overflow-y-auto transition-transform duration-300">
              {/* Mobile Header */}
              <div className="p-5 border-b border-gray-200 flex items-center justify-between lg:hidden">
                <button onClick={() => setShowFilterSidebar(false)}>
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Desktop & Mobile Shared Header */}
              <div className="p-5 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-bold text-gray-800 text-lg">Filter</h3>
                <button onClick={clearAllFilters} className="text-[#1D8EE6] hover:underline">
                  clear
                </button>
              </div>

              <div className="p-5 space-y-6">
                {/* Job Type */}
                <div>
                  <button onClick={() => toggleSection('jobType')} className="w-full flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800">Job Type</h4>
                    {openSections.jobType ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                  </button>
                  {openSections.jobType && (
                    <div className="space-y-3">
                      {jobTypes.map((type) => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedJobType.includes(type)}
                            onChange={(e) => e.target.checked ? setSelectedJobType([...selectedJobType, type]) : setSelectedJobType(selectedJobType.filter(t => t !== type))}
                            className="w-4 h-4 text-[#1D8EE6] rounded focus:ring-[#1D8EE6]"
                          />
                          <span className="text-sm text-gray-600">{type}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

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
            </aside>
          )}
        </div>

        {/* Mobile Backdrop */}
        {showFilterSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setShowFilterSidebar(false)}
          />
        )}

  
      </div>
    </div>
  );
};

export default JobListPage;
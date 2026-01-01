"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload, X, FileText, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// === Zod Schema ===
const applicationSchema = z.object({
  // Personal Info (you can add these fields if needed later)
  // fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  // email: z.string().email('Invalid email'),
  // phone: z.string().min(10, 'Valid phone number required'),

  resume: z
    .instanceof(File, { message: 'Resume is required' })
    .refine((file) => file.size <= 10 * 1024 * 1024, 'Max 10MB')
    .refine(
      (file) => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'].includes(file.type),
      'Only PDF, DOC, DOCX, JPEG, PNG allowed'
    ),

  coverLetter: z
    .instanceof(File)
    .or(z.null()),

  portfolioLink: z
    .string()
    .url('Invalid URL'),
  //.or(z.literal('')),

  yearsOfExperienceNumber: z
    .number({ message: 'Years of experience is required' })
    .min(0, 'Must be 0 or more')
    .max(50, 'Seems too high'),

  salaryExpectation: z
    .number({ message: 'Salary expectation is required' })
    .min(0, 'Must be positive'),

  programmingLanguages: z
    .array(z.string())
    .min(1, 'Select at least one language'),

  willingToRelocate: z.enum(['yes', 'no', 'cant-say'], {
    message: 'Please select an option',
  }),

  experience: z
    .string()
    .min(1, 'Please tell us how many years'),

  resumeTimeline: z.enum(['Immediately', '1 month', '2 month'], {
    message: 'Please select when you can resume',
  }),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const ApplicationFormPage = () => {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      programmingLanguages: [],
      portfolioLink: '',
      willingToRelocate: undefined,
      resumeTimeline: undefined,
    },
  });

  // Handle Resume Upload
  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
      setValue('resume', file, { shouldValidate: true });
    }
  };

  // Handle Cover Letter Upload
  const handleCoverLetterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverLetterFile(file);
      setValue('coverLetter', file, { shouldValidate: true });
    }
  };

  const removeResume = () => {
    setResumeFile(null);
    setValue('resume', null as any, { shouldValidate: true });
  };

  const removeCoverLetter = () => {
    setCoverLetterFile(null);
    setValue('coverLetter', null, { shouldValidate: true });
  };

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      // Prepare FormData for backend (multipart/form-data)
      const formData = new FormData();

      formData.append('resume', data.resume);
      if (data.coverLetter) formData.append('coverLetter', data.coverLetter);
      if (data.portfolioLink) formData.append('portfolioLink', data.portfolioLink);
      formData.append('yearsOfExperienceNumber', data.yearsOfExperienceNumber.toString());
      formData.append('salaryExpectation', data.salaryExpectation.toString());
      formData.append('programmingLanguages', JSON.stringify(data.programmingLanguages));
      formData.append('willingToRelocate', data.willingToRelocate);
      formData.append('availableToStart', data.experience);
      formData.append('resumeTimeline', data.resumeTimeline);

      // Simulate API call (replace with real fetch/axios)
      // await fetch('/api/apply', { method: 'POST', body: formData });

      console.log('Submitting to backend:', Object.fromEntries(formData));
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setShowSuccessModal(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="bg-[#F5F6FA] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 lg:px-20 py-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Resume Upload */}
          <div className="lg:w-1/2">
            <label className="text-xl font-bold text-gray-900">
              Resume or CV <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-3">Upload Resume or CV</p>

            {!resumeFile ? (
              <div className="border-2 bg-white border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#1D8EE6] transition-colors">
                <div className="flex flex-col items-center gap-3">
                  <Image src="/icons/cloud.svg" alt="cloud" width={50} height={50} />
                  <label htmlFor="resume-upload" className="font-medium cursor-pointer">
                    Drag your file here, or <span className="text-[#1D8EE6]">browse</span>
                    <p className="text-gray-400 text-xs">Supports: PDF, DOC, DOCX, JPEG, PNG</p>
                  </label>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpeg,.jpg,.png"
                    className="hidden"
                    onChange={handleResumeUpload}
                  />
                </div>
              </div>
            ) : (
              <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#1D8EE6]" />
                  <div>
                    <p className="font-medium">{resumeFile.name}</p>
                    <p className="text-sm text-gray-500">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
                <button type="button" onClick={removeResume}>
                  <X className="w-5 h-5 text-red-500" />
                </button>
              </div>
            )}
            {errors.resume && <p className="text-red-500 text-sm mt-2">{errors.resume.message}</p>}
          </div>

          {/* Cover Letter (Optional) */}
          <div className="lg:w-1/2">
            <label className="text-xl font-bold text-gray-900">Cover Letter</label>

            <p className="text-sm text-gray-500 mb-3">Upload your cover letter</p>

            {!coverLetterFile ? (
              <div className="border-2 bg-white border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#1D8EE6] transition-colors cursor-pointer">
                <div className="flex flex-col items-center gap-3">
                  <Upload className="w-10 h-10 text-gray-400" />
                  <label htmlFor="cover-letter-upload" className="font-medium">
                    Drag your file here, or <span className="text-[#1D8EE6]">browse</span>
                    <p className="text-gray-400 text-xs mt-1">
                      Supports: PDF, DOC, DOCX
                    </p>
                  </label>
                  <input
                    id="cover-letter-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleCoverLetterUpload}
                  />
                </div>
              </div>
            ) : (
              <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#1D8EE6]" />
                  <div>
                    <p className="font-medium text-gray-900">{coverLetterFile.name}</p>
                    <p className="text-sm text-gray-500">
                      {(coverLetterFile.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeCoverLetter}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Portfolio Link */}
          <div className="lg:w-1/2">
            <label className="text-lg font-bold mb-6">
              Portfolio Link
            </label>
            <p className="text-sm text-gray-500 mb-3">Kindly enter the link to your portfolio</p>
            <input
              type="url"
              {...register('portfolioLink')}
              placeholder="https://yourportfolio.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8EE6]"
            />
            {errors.portfolioLink && <p className="text-red-500 text-sm mt-1">{errors.portfolioLink.message}</p>}
          </div>

          {/* Survey Questions */}
          <div className="">
            <h3 className="text-lg font-semibold mb-3">Answer the following questions from the employer</h3>

            <div className="lg:w-[50%] flex flex-col lg:flex-row gap-6">
              <div className=''>
                <label className="text-sm text-gray-500 mb-3">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  {...register('yearsOfExperienceNumber', { valueAsNumber: true })}
                  placeholder="e.g. 3"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8EE6]"
                />
                {errors.yearsOfExperienceNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.yearsOfExperienceNumber.message}</p>
                )}
              </div>

              <div className=''>
                <label className="text-sm text-gray-500 mb-3">
                  Salary Expectation (NGN) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  {...register('salaryExpectation', { valueAsNumber: true })}
                  placeholder="220000"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8EE6]"
                />
                {errors.salaryExpectation && (
                  <p className="text-red-500 text-sm mt-1">{errors.salaryExpectation.message}</p>
                )}
              </div>
            </div>

            {/* Programming Languages - Checkbox Group */}
            <div className="mt-6">
              <label className="block font-semibold mb-3 text-[#535768]">
                Which of these programming languages do you use?* <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {['JavaScript', 'Reactjs', 'CSS'].map((lang) => (
                  <label key={lang} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      value={lang}
                      {...register('programmingLanguages')}
                      className="w-4 h-4 text-[#1D8EE6] rounded"
                    />
                    <span className='text-[#AFB1B6]'>{lang}</span>
                  </label>
                ))}
              </div>
              {errors.programmingLanguages && (
                <p className="text-red-500 text-sm mt-2">{errors.programmingLanguages.message}</p>
              )}
            </div>

            {/* Willing to Relocate - Radio */}
            <div className="mt-6">
              <label className="block font-semibold mb-3 text-[#535768]">
                Are you willing to relocate? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                  { value: 'cant-say', label: "Can't say" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3">
                    <input
                      type="radio"
                      value={opt.value}
                      {...register('willingToRelocate')}
                      className="w-4 h-4 text-[#1D8EE6]"
                    />
                    <span className='text-[#AFB1B6]'>{opt.label}</span>
                  </label>
                ))}
              </div>
              {errors.willingToRelocate && (
                <p className="text-red-500 text-sm mt-2">{errors.willingToRelocate.message}</p>
              )}
            </div>

            {/* When can you start? */}
            <div className="mt-6 lg:w-1/2">
              <label className="block font-semibold mb-2 text-[#535768]">
                How many years of experience do you have? <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                {...register('experience')}

                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8EE6]"
              />
              {errors.experience && (
                <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
              )}
            </div>

            {/* Resume Timeline - Radio */}
            <div className="mt-6">
              <label className="block font-semibold mb-3 text-[#535768]">
                When are you willing to resume?* <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {[
                  { value: 'Immediately', label: 'Immediately' },
                  { value: '1 month', label: '1 month' },
                  { value: '2 month', label: '2 months' },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3">
                    <input
                      type="radio"
                      value={opt.value}
                      {...register('resumeTimeline')}
                      className="w-4 h-4 text-[#1D8EE6]"
                    />
                    <span className='text-[#AFB1B6]'>{opt.label}</span>
                  </label>
                ))}
              </div>
              {errors.resumeTimeline && (
                <p className="text-red-500 text-sm mt-2">{errors.resumeTimeline.message}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1D8EE6] max-sm:justify-center flex max-sm:m-auto text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#1570b8] disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-12 text-center">
              <div className=" rounded-full flex items-center justify-center mx-auto mb-6">
              <Image src="/icons/check.svg" alt='check' width={80} height={80} />
              </div>
              <h2 className="text-2xl font-bold mb-3">Application Successfully
                Submitted</h2>
              <button
                onClick={() => router.push('/jobs/job-pool')}
                className="w-fit  bg-[#1D8EE6] text-white py-2 mt-10 px-4 rounded-lg font-semibold hover:bg-[#1570b8]"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationFormPage;
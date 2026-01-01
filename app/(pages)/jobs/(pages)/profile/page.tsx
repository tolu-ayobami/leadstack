"use client"
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, FileText, X } from 'lucide-react';
import Image from 'next/image';

const profileSchema = z.object({
  firstname: z.string().min(2, 'First name must be at least 2 characters'),
  lastname: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  brief: z.string().min(20, 'Brief must be at least 20 characters'),
  gender: z.enum(['Male', 'Female', 'Other'], {
    message: 'Please select a gender',
  }),
  country: z.string().min(1, 'Please select a country'),
  city: z.string().min(2, 'City/State is required'),
  cv: z
    .instanceof(File, { message: 'Resume is required' })
    .refine((file) => file.size <= 10 * 1024 * 1024, 'Max 10MB')
    .refine(
      (file) => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'].includes(file.type),
      'Only PDF, DOC, DOCX, JPEG, PNG allowed'
    ),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface ProfileData extends ProfileFormData {
  roles: string[];
}

export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['UI/UX Designer', 'Product Designer']);
  const [cvFileName, setCvFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [profileData, setProfileData] = useState<ProfileData>({
    firstname: 'Vincent',
    lastname: 'Okon',
    email: 'vincentokon@email.com',
    phone: '+1234567890',
    gender: 'Male',
    country: 'Nigeria',
    city: 'Lagos',
    brief: 'Passionate UI/UX Designer with 5 years of experience...',
    cv: "" as any,
    roles: ['UI/UX Designer', 'Product Designer']
  });

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstname: profileData.firstname,
      lastname: profileData.lastname,
      email: profileData.email,
      phone: profileData.phone,
      brief: profileData.brief,
      gender: profileData.gender,
      country: profileData.country,
      city: profileData.city,
    }
  });

  const availableRoles: string[] = [
    'UI/UX Designer',
    'Product Designer',
    'Graphic Designer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer'
  ];

  const addRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value;
    if (role && !selectedRoles.includes(role)) {
      setSelectedRoles([...selectedRoles, role]);
    }
    e.target.value = '';
  };

  const removeRole = (roleToRemove: string) => {
    setSelectedRoles(selectedRoles.filter(role => role !== roleToRemove));
  };

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFileName(file.name);
      setValue('cv', file);
    }
  };

  const removeResume = () => {
    setCvFileName('');
    setValue('cv', null as any, { shouldValidate: true });
  };


  const onSubmit = async (data: ProfileFormData) => {
    setIsSubmitting(true);

    try {

      const formData = new FormData();
      formData.append('firstname', data.firstname);
      formData.append('lastname', data.lastname);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('brief', data.brief);
      formData.append('gender', data.gender);
      formData.append('country', data.country);
      formData.append('city', data.city);
      formData.append('roles', JSON.stringify(selectedRoles));

      if (data.cv) {
        formData.append('cv', data.cv);
      }

      // API call would go here
      // const response = await fetch('/api/profile/update', {
      //   method: 'PUT',
      //   body: formData,
      // });
      // const result = await response.json();

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update profile data
      setProfileData({
        ...data,
        roles: selectedRoles
      });

      setIsModalOpen(false);

      // You can add a success toast notification here
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      // You can add an error toast notification here
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => {
    reset({
      firstname: profileData.firstname,
      lastname: profileData.lastname,
      email: profileData.email,
      phone: profileData.phone,
      brief: profileData.brief,
      gender: profileData.gender,
      country: profileData.country,
      city: profileData.city,
    });
    setSelectedRoles(profileData.roles);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCvFileName('');
  };

  return (
    <div className='bg-[#F5F6FA] min-h-screen'>
      <div className="lg:w-[80%] w-[90%] mx-auto  h-auto lg:px-20 pt-28 pb-8">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-1">Profile</h1>
          <p className="text-md text-gray-500">Your profile Information</p>
          <hr className='mt-4' />
        </div>

        <div className="mb-8 flex justify-between items-center">
          <p className="text-sm text-gray-600">Profile Information</p>
          <button
            onClick={openModal}
            className="bg-[#1D8EE6] flex gap-2 hover:bg-[#1669BB] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            <Image src="/icons/Edit.svg" alt="edit" width={15} height={15} />
            Update Profile
          </button>
        </div>

        {/* Profile Layout */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Section - Profile Completion */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-5 h-fit">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#1D8EE6] flex items-center justify-center text-white text-xl font-semibold">
                {profileData.firstname.charAt(0)}{profileData.lastname.charAt(0)}
              </div>
              <div>
                <div className='flex items-center gap-3 mb-1'>
                  <h3 className="text-base font-semibold text-gray-800">{profileData.firstname} {profileData.lastname}</h3>
                  <p className='text-[#1EAA79] bg-[#D2EEE4] py-1 px-1 rounded-md text-center text-[10px] font-semibold'>Active</p>
                </div>

                <p className="text-sm text-gray-500">UI/UX Designer</p>
              </div>
            </div>

            <div className="mb-5 border p-2 flex flex-col gap-3 rounded-md">
              <div className="flex justify-between mb-2">
                <span className="text-sm  font-semibold">Profile Status</span>
                <span className="text-sm font-semibold text-gray-800">75%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-500 rounded-full" style={{ width: '75%' }}></div>
              </div>

              <button
                onClick={openModal}
                className="text-end text-[#1D8EE6] px-4 py-2 rounded-md text-sm font-medium transition-colors "
              >
                Update Profile
                <ArrowRight className='inline-block ml-1' size={16} />
              </button>
            </div>



            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Brief</h4>
              <div className="text-xs font-medium text-[#7C8091]">{profileData.brief}</div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Contacts</h4>
              <div className='flex gap-5'>
                <div className=" border p-1 rounded-md flex justify-center ">
                  <Image src="/icons/Mail.svg" alt="email" width={16} height={16} className="mr-2" />
                  <p className="text-sm font-medium text-gray-800 truncate">{profileData.email}</p>
                </div>
                <div className=" border p-1  rounded-md flex justify-center">
                  <Image src="/icons/Phonecall.svg" alt="Phonecall" width={16} height={16} className="" />
                  <p className="text-sm font-medium text-gray-800 truncate">{profileData.phone}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Job Roles</h4>
              <div className="flex flex-wrap gap-2">
                {profileData.roles.map((role, index) => (
                  <span key={index} className="border rounded-md p-1 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Profile Details */}
          <div className="w-full lg:w-3/3 flex flex-col gap-4">
            <div className="w-full lg:w-3/3 bg-white rounded-lg p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-[#7C8091]">Personal Information</h2>
              </div>
              <div className="space-y-0">
                <div className="grid grid-cols-[150px_1fr] py-4 border-b border-gray-100">
                  <div className="text-sm font-semibold">First Name</div>
                  <div className="text-sm font-medium text-[#7C8091] ">{profileData.firstname}</div>
                </div>
                <div className="grid grid-cols-[150px_1fr] py-4 border-b border-gray-100">
                  <div className="text-sm font-semibold">Last Name</div>
                  <div className="text-sm font-medium text-[#7C8091] ">{profileData.lastname}</div>
                </div>
                <div className="grid grid-cols-[150px_1fr] py-4 border-b border-gray-100">
                  <div className="text-sm font-semibold">Email Address</div>
                  <div className="text-sm font-medium text-[#7C8091]">{profileData.email}</div>
                </div>
                <div className="grid grid-cols-[150px_1fr] py-4 border-b border-gray-100">
                  <div className="text-sm font-semibold">Phone Number</div>
                  <div className="text-sm font-medium text-[#7C8091] ">{profileData.phone}</div>
                </div>
                <div className="grid grid-cols-[150px_1fr] py-4 border-b border-gray-100">
                  <div className="text-sm font-semibold">Gender</div>
                  <div className="text-sm font-medium text-[#7C8091]">{profileData.gender}</div>
                </div>
                <div className="grid grid-cols-[150px_1fr] py-4 border-b border-gray-100">
                  <div className="text-sm font-semibold">Country</div>
                  <div className="text-sm font-medium text-[#7C8091]">{profileData.country}</div>
                </div>
                <div className="grid grid-cols-[150px_1fr] py-4 border-b border-gray-100">
                  <div className="text-sm font-semibold">City/State</div>
                  <div className="text-sm font-medium text-[#7C8091]">{profileData.city}</div>
                </div>
              </div>

            </div>

            <div className=' bg-white rounded-lg p-8 w-full lg:w-3/3'>
              <div className="text-sm font-semibold text-[#7C8091]">Documents</div>
              <div className=" py-4 border-b border-gray-100">
                <div className="text-sm font-semibold">CV/Resume</div>
                <div className="w-full mt-3">

                    <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between bg-white">
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-[#1D8EE6]" />
                        <div>
                          <p className="font-medium">{cvFileName}</p>
                          <p className="text-sm text-gray-500">{profileData.cv ? (profileData.cv.size / 1024).toFixed(1) + ' KB' : ''}</p>
                        </div>
                      </div>
                      <button type="button" onClick={removeResume}>
                        <X className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                
                  {errors.cv && <p className="text-red-500 text-sm mt-2">{errors.cv.message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Update Profile</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 font-medium mb-2">
                      First Name
                    </label>
                    <Controller
                      name="firstname"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className={`w-full px-3 py-2.5 border rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500 ${errors.firstname ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                      )}
                    />
                    {errors.firstname && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstname.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 font-medium mb-2">
                      Last Name
                    </label>
                    <Controller
                      name="lastname"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className={`w-full px-3 py-2.5 border rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500 ${errors.lastname ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                      )}
                    />
                    {errors.lastname && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastname.message}</p>
                    )}
                  </div>
                </div>



                <div>
                  <label className="block text-sm text-gray-600 font-medium mb-2">
                    Brief
                  </label>
                  <Controller
                    name="brief"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        rows={4}
                        className={`w-full px-3 py-2.5 border rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500 resize-none ${errors.brief ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="Tell us about yourself..."
                      />
                    )}
                  />
                  {errors.brief && (
                    <p className="text-red-500 text-xs mt-1">{errors.brief.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-600 font-medium mb-2">
                    Email Address
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="email"
                        className={`w-full px-3 py-2.5 border rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-600 font-medium mb-2">
                    Phone Number
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="tel"
                        className={`w-full px-3 py-2.5 border rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>


                <div>
                  <label className="block text-sm text-gray-600 font-medium mb-2">
                    Roles
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2 min-h-[35px]">
                    {selectedRoles.map((role, index) => (
                      <div
                        key={index}
                        className="bg-green-50 text-green-700 px-2.5 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5"
                      >
                        {role}
                        <button
                          type="button"
                          onClick={() => removeRole(role)}
                          className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-green-100 text-green-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <select
                    onChange={addRole}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500"
                    defaultValue=""
                  >
                    <option value="">Select roles</option>
                    {availableRoles.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 font-medium mb-2">
                    Gender
                  </label>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className={`w-full px-3 py-2.5 border rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500 ${errors.gender ? 'border-red-500' : 'border-gray-300'
                          }`}
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    )}
                  />
                  {errors.gender && (
                    <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>
                  )}
                </div>

                <div className="w-full mt-3">

                  <p className='mb-2'>Update Resume</p>

                  {!cvFileName ? (
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
                          onChange={handleCvUpload}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between bg-white">
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-[#1D8EE6]" />
                        <div>
                          <p className="font-medium">{cvFileName}</p>
                          <p className="text-sm text-gray-500">{profileData.cv ? (profileData.cv.size / 1024).toFixed(1) + ' KB' : ''}</p>
                        </div>
                      </div>
                      <button type="button" onClick={removeResume}>
                        <X className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  )}
                  {errors.cv && <p className="text-red-500 text-sm mt-2">{errors.cv.message}</p>}
                </div>



                <div>
                  <label className="block text-sm text-gray-600 font-medium mb-2">
                    Country
                  </label>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className={`w-full px-3 py-2.5 border rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500 ${errors.country ? 'border-red-500' : 'border-gray-300'
                          }`}
                      >
                        <option value="">Select country</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                      </select>
                    )}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-600 font-medium mb-2">
                    City/State
                  </label>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className={`w-full px-3 py-2.5 border rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500 ${errors.city ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                    )}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                  )}
                </div>
              </div>

              <div className="sticky bottom-0 bg-white p-6 border-t border-gray-100">
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    disabled={isSubmitting}
                    className="px-5 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Saving...
                      </>
                    ) : (
                      'Save'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
'use client';

import { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setProfileData } from '@/store/slices/profileSlice';
import Image from 'next/image';
import { Header } from '../components/Header';
import { CloudArrowUpIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface ProfileForm {
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  currentLocation: string;
  primaryRole: string;
  yearsExperience: string;
  openRoles: string[];
  currentCompany: string;
  currentRole: string;
  employmentDuration: string;
  roleSummary: string;
  bio: string;
  website: string;
  linkedin: string;
  github: string;
  twitter: string;
  other: string;
  resume: File | string | null;
  skills: string[];
  highestEducation: string;
  openRelocation: string;
  workStyle: string;
  jobType: string;
  companySizes: string[];
  avatar: string | null;
}

const rolesOptions = ['Software Developer', 'Backend Engineer', 'Frontend Engineer', 'Full Stack Developer', 'Product Manager', 'UI/UX Designer', 'Data Scientist'];
const yearsOptions = ['0-1', '1-3', '3-5', '5-7', '7-10', '10+'];
const openRelocationOptions = ['Yes', 'No', 'Prefer not to say'];
const workStyleOptions = ['Remote', 'On-site', 'Hybrid'];
const jobTypeOptions = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
const companySizeOptions = ['Startup (1-10)', 'Small (11-50)', 'Medium (51-200)', 'Large (201+)'];
const educationOptions = ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Other'].map((edu) => edu.replace('\'', '&apos;'));
const genderOptions = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

const CreateProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);
  const [form, setForm] = useState<ProfileForm>({
    fullName: profile.fullName || '',
    phone: profile.phone || '',
    email: profile.email || '',
    dob: profile.dob || '',
    gender: profile.gender || '',
    currentLocation: profile.currentLocation || '',
    primaryRole: profile.primaryRole || '',
    yearsExperience: profile.yearsExperience || '',
    openRoles: profile.openRoles || [],
    currentCompany: profile.currentCompany || '',
    currentRole: profile.currentRole || '',
    employmentDuration: profile.employmentDuration || '',
    roleSummary: profile.roleSummary || '',
    bio: profile.bio || '',
    website: profile.website || '',
    linkedin: profile.linkedin || '',
    github: profile.github || '',
    twitter: profile.twitter || '',
    other: profile.other || '',
    resume: null,
    skills: profile.skills || [],
    highestEducation: profile.highestEducation || '',
    openRelocation: profile.openRelocation || '',
    workStyle: profile.workStyle || '',
    jobType: profile.jobType || '',
    companySizes: profile.companySizes || [],
    avatar: profile.avatar || null,
  });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(profile.avatar || null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(form.skills);
  const [selectedCompanySizes, setSelectedCompanySizes] = useState<string[]>(form.companySizes);
  const [resumePreview, setResumePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (field: 'skills' | 'companySizes', option: string, checked: boolean) => {
    setForm((prev) => ({
      ...prev,
      [field]: checked ? [...prev[field], option] : prev[field].filter((item) => item !== option),
    }));
    if (field === 'skills') {
      setSelectedSkills(checked ? [...selectedSkills, option] : selectedSkills.filter((item) => item !== option));
    } else {
      setSelectedCompanySizes(checked ? [...selectedCompanySizes, option] : selectedCompanySizes.filter((item) => item !== option));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'avatar' | 'resume') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'avatar') {
          setAvatarPreview(reader.result as string);
          setForm((prev) => ({ ...prev, avatar: reader.result as string }));
        } else {
          setResumePreview(reader.result as string); // Set preview for resume
          setForm((prev) => ({ ...prev, resume: file })); // Keep File object for API upload
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, dob: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let resumeBase64: string | null = null;
    if (form.resume instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        resumeBase64 = reader.result as string;
        dispatch(setProfileData({
          ...form,
          resume: resumeBase64,
          skills: selectedSkills,
          companySizes: selectedCompanySizes,
        }));
        alert('Profile submitted successfully!');
      };
      reader.readAsDataURL(form.resume);
    } else {
      dispatch(setProfileData({
        ...form,
        resume: resumeBase64,
        skills: selectedSkills,
        companySizes: selectedCompanySizes,
      }));
      alert('Profile submitted successfully!');
    }
  };

  return (
    <div className="items-center min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-start space-x-8">
          <div className="flex-1">
            <div className="">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create a Profile</h1>
              <p className="text-gray-600 mb-8 max-w-2xl">
                Providing accurate details makes it easier for us to send jobs you are more than 80% fit for
              </p>
            </div>

            <form onSubmit={handleSubmit} className="items-center justify-center space-y-8">
              <div className="flex flex-row gap-x-20 bg-white border-t-2 border-gray-200 p-6">
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Photo</h2>
                  <p className="w-xs text-lg text-wrap text-gray-600 mb-4">
                    This image will be shown publicly as your profile picture, it will help recruiters recognize you!
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gray-50">
                      {avatarPreview ? (
                        <Image
                          src={avatarPreview}
                          alt="Profile Preview"
                          width={128}
                          height={128}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="text-center text-gray-500">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'avatar')}
                            className="hidden"
                            id="avatar-upload"
                          />
                          <label
                            htmlFor="avatar-upload"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-blue-700 cursor-pointer"
                          >
                            <CloudArrowUpIcon className="size-8 mr-2 stroke-gray-500" />
                            Upload photo
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 border-2 border-gray-600 border-dashed w-xs p-8">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'avatar')}
                      className="hidden"
                      id="avatar-upload-alternative"
                    />
                    <label
                      htmlFor="avatar-upload-alternative"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-blue-700 cursor-pointer"
                    >
                      <CloudArrowUpIcon className="size-8 mr-2" />
                      <span className="text-blue-600">Click to replace</span>
                    </label>
                    <span>or drag and drop</span>
                    <p className="text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 400x400)</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-white border-t-2 border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Personal Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                  <div className="md:col-span-2 grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                      <div className="relative">
                        <input
                          type="date"
                          name="dob"
                          value={form.dob}
                          onChange={handleDateChange}
                          required
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
                        />
                        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                      <select
                        name="gender"
                        value={form.gender}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
                      >
                        <option value="">Select</option>
                        {genderOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Location & Experience</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Role *</label>
                    <select
                      name="primaryRole"
                      value={form.primaryRole}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
                    >
                      <option value="">Select</option>
                      {rolesOptions.map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                    <select
                      name="yearsExperience"
                      value={form.yearsExperience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
                    >
                      <option value="">Select</option>
                      {yearsOptions.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Highest level of education *</label>
                    <select
                      name="highestEducation"
                      value={form.highestEducation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
                    >
                      <option value="">Select an option</option>
                      {educationOptions.map((edu) => (
                        <option key={edu} value={edu}>{edu}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Current Place of Employment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Where are you currently working? *</label>
                    <input
                      type="text"
                      name="currentLocation"
                      value={form.currentLocation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
                      placeholder="Lagos, Nigeria"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Role *</label>
                    <select
                      name="currentRole"
                      value={form.currentRole}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
                    >
                      <option value="">Select</option>
                      {rolesOptions.map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">How long have you been employed *</label>
                    <select
                      name="employmentDuration"
                      value={form.employmentDuration}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500"
                    >
                      <option value="">Select</option>
                      {yearsOptions.map((duration) => (
                        <option key={duration} value={duration}>{duration}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">In summary what do you do here?</label>
                    <textarea
                      name="roleSummary"
                      value={form.roleSummary}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-400 resize-none"
                      placeholder="Describe your current responsibilities..."
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Add a Bio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Let recruiters know you at glance *</label>
                    <textarea
                      name="bio"
                      value={form.bio}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 space-y-4">
                <h3 className="font-medium text-gray-900">Where can people find you online?</h3>
                <div className="grid grid-cols-1 gap-10">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website or Portfolio</label>
                    <input
                      type="url"
                      name="website"
                      value={form.website}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={form.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://linkedin.com/in/"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
                    <input
                      type="url"
                      name="github"
                      value={form.github}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://github.com/"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                    <input
                      type="url"
                      name="twitter"
                      value={form.twitter}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://twitter.com/"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Other</label>
                    <input
                      type="url"
                      name="other"
                      value={form.other}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-white p-6">
                <div className="">
                  <p className="text-lg font-semibold text-black b-4">
                    You can update your resume
                  </p>
                  <p className="text-lg underline text-blue-800 font-medium">
                    (click to view our advised resume format)
                  </p>
                </div>
                <div className="relative w-2xl border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-gray-400 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.svg,.png,.jpg,.gif"
                    onChange={(e) => handleFileChange(e, 'resume')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    id="resume-upload"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <CloudArrowUpIcon className="h-8 w-8 stroke-blue-600 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-900 mb-1">Click to upload your CV or drag & drop files here</p>
                    <p className="text-xs text-gray-500">PDF, SVG, PNG, JPG or GIF</p>
                  </div>
                  {resumePreview && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-700">Preview: <span className="font-medium">{resumePreview.substring(0, 30)}...</span></p>
                      {/* For image-based resumes (e.g., PDF thumbnails or images), you could use: */}
                      {/* <Image src={resumePreview} alt="Resume Preview" width={100} height={100} className="mt-2" /> */}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Your Skills & Tools</h2>
                <div className="relative w-xl">
                  <p className="text-lg font-semibold text-gray-600 mb-4">This will help businesses know your strength too *</p>
                  <select
                    multiple
                    value={selectedSkills}
                    onChange={(e) => {
                      const options = Array.from(e.target.selectedOptions).map((option) => option.value);
                      setSelectedSkills(options);
                      setForm((prev) => ({ ...prev, skills: options }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {['Kubernetes', 'Go (Golang)', 'Technical Writing', 'Market Research', 'Continuous Integration'].map((skill) => (
                      <option key={skill} value={skill}>{skill}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Location & Experience</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Are you open to relocation? *</label>
                    <select
                      name="openRelocation"
                      value={form.openRelocation}
                      onChange={handleInputChange}
                      required
                      className="w-xl px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select an option</option>
                      {openRelocationOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">What style of work do you prefer? *</label>
                    <select
                      name="workStyle"
                      value={form.workStyle}
                      onChange={handleInputChange}
                      required
                      className="w-xl px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select an option</option>
                      {workStyleOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">What type of job are you interested in? *</label>
                    <select
                      name="jobType"
                      value={form.jobType}
                      onChange={handleInputChange}
                      required
                      className="w-xl px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select an option</option>
                      {jobTypeOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Would you like to work at companies of these sizes?</label>
                    <p className="text-xs text-gray-500 mb-2">You can select multiple options</p>
                    <div className="space-y-2">
                      {companySizeOptions.map((size) => (
                        <label key={size} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedCompanySizes.includes(size)}
                            onChange={(e) => handleMultiSelectChange('companySizes', size, e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Submit My Profile
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar - Dots (commented out) */}
          {/* <div className="hidden md:block w-16 lg:flex flex-col space-y-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex-1 flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${step === 1 ? 'bg-blue-600' : 'bg-gray-300'}`} />
              </div>
            ))}
            <div className="w-2 h-8 bg-blue-600" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CreateProfilePage;
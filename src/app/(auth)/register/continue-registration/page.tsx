"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ThemeToggleButton from "../../../components/ThemeToggle";

export default function ApplicantRegisterPage() {
    const router = useRouter(); 

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [industry, setIndustry] = useState("")
    const [preferredRole, setPreferredRole] = useState("")
    const [error, setError] = useState("");
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            /*const res = await fetch("https://your-backend-api.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });*/
            //if (!res.ok) throw new Error("Login failed");
            router.push ('/register/verify-account')
            // Handle successful login (e.g., save token, redirect)
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // You can handle the uploaded file here
        const file = e.target.files?.[0];
        // For now, just log the file or handle as needed
        if (file) {
            console.log("Selected file:", file);
        }
    };
    
    return (
    <div className="flex items-center justify-center min-h-screen bg-white">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center bg-white p-8 mt-12 w-full rounded shadow-md">
            
            <div className="flex items-center justify-between mx-10 mb-5">
                <Image src="/skillinq_logo.png" width={200} height={200} alt="Logo" />
            </div>

            <h2 className="dark:text-black text-3xl font-semibold mb-1 mx-4">Continue to Skillinq</h2>
            <span className="mb-2 dark:text-black text-md font-normal mx-9">Let's help you find your next role</span>
            {error && <div className="mb-4 text-red-500">{error}</div>} 
            
            <div className="flex flex-row items-center justify-center gap-8 w-2xl">
                <div className="flex flex-col mb-2 gap-2 w-full">
                    <label htmlFor="firstName" className="mb-2 mt-6 block font-semibold dark:text-black text-sm">First Name</label>
                    <input
                    type="text"
                    placeholder="Enter your first name"
                    className="mb-4 w-full max-w-xs p-2 border-2 border-gray-300 rounded dark:text-black"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                    />
                    <label htmlFor="email" className="mb-2 block font-semibold dark:text-black text-sm">Email</label>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="mb-4 w-full max-w-xs p-2 border-2 border-gray-300 dark:border-gray-400 dark:text-gray-700 rounded"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    />
                    <label htmlFor="industry" className="mb-2 block font-semibold dark:text-black text-sm">Industry</label>
                    <div className="mb-2 w-full max-w-xs p-2 border-2 border-gray-300 dark:border-gray-400 rounded">
                        <select
                                id="industry"
                                className="w-full border-none outline-none dark:text-black"
                                value={industry}
                                onChange={e => setIndustry(e.target.value)}
                            >
                                <option className="dark:text-gray-200" value="">Select your industry</option>
                                <option className="dark:text-black" value="tech">Technology</option>
                                <option className="dark:text-black" value="finance">Finance</option>
                            <option className="dark:text-black" value="health">Healthcare</option>
                            <option className="dark:text-black" value="education">Education</option>
                        </select>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2  w-full">
                    <label htmlFor="lastName" className="mb-2 mt-6 block font-semibold dark:text-black text-sm">Last Name</label>
                    <input
                    type="text"
                    placeholder="Enter your last name"
                    className="mb-4 w-full max-w-xs p-2 border-2 border-gray-300 rounded dark:text-black"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                    />
                    <label htmlFor="password" className="mb-2 block font-semibold dark:text-black text-sm">Password</label>
                    <input
                    type="password"
                    placeholder="********"
                    className="mb-4 w-full max-w-xs p-2 border-2 dark:text-black border-gray-300 rounded"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    />
                    <label htmlFor="preferredRole" className="mb-2 block font-semibold dark:text-black text-sm">Preferred Role</label>
                    <div className="mb-4 w-full max-w-xs p-2 border-2 border-gray-300 rounded">
                        <select 
                        className="w-full border-none outline-none dark:text-black" 
                        id="preferredRole" 
                        value={preferredRole} 
                        onChange={e => setPreferredRole(e.target.value)} 
                        required>
                            <option>Software Engineer</option>
                            <option>Data Engineer</option>
                            <option>Data Analyst</option>
                            <option>UI/UX Designer</option>
                            <option>Project Manager</option>
                            <option>Cybersecurity Analyst</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center border-2 w-2xl max-h-full my-6 border-gray-200 border-dashed">
                <div className="flex flex-col items-center justify-center my-8">
                    <button 
                        className="mb-3 w-12 h-12 flex flex-col items-center justify-center rounded-full cursor-pointer bg-gray-100" 
                        type="button" onClick={() => document.getElementById("cvUpload")?.click()}  
                    >
                        <svg className="my-2 w-[30px] h-[30px] text-gray-800 mb-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4584E9" viewBox="0 0 24 24">
                          <path d="M13.383 4.076a6.5 6.5 0 0 0-6.887 3.95A5 5 0 0 0 7 18h3v-4a2 2 0 0 1-1.414-3.414l2-2a2 2 0 0 1 2.828 0l2 2A2 2 0 0 1 14 14v4h4a4 4 0 0 0 .988-7.876 6.5 6.5 0 0 0-5.605-6.048Z"/>
                          <path d="M12.707 9.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414l.293-.293V19a1 1 0 1 0 2 0v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-2-2Z"/>
                        </svg>
                    </button>
                    <input
                        type="file" 
                        accept=".pdf, .svg, .png, .jpg, .gif"
                        multiple={false}
                        className="hidden"
                        id="cvUpload"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="cvUpload" className="sr-only">
                        <svg className="my-2 w-[30px] h-[30px] text-gray-800 mb-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4584E9" viewBox="0 0 24 24">
                          <path d="M13.383 4.076a6.5 6.5 0 0 0-6.887 3.95A5 5 0 0 0 7 18h3v-4a2 2 0 0 1-1.414-3.414l2-2a2 2 0 0 1 2.828 0l2 2A2 2 0 0 1 14 14v4h4a4 4 0 0 0 .988-7.876 6.5 6.5 0 0 0-5.605-6.048Z"/>
                          <path d="M12.707 9.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414l.293-.293V19a1 1 0 1 0 2 0v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-2-2Z"/>
                        </svg>
                    </label>
                    <span className="text-gray-400 text-center text-sm"><a href="#" className="text-blue-800 hover:underline">Click to upload your CV</a> or drag and drop files here<br />PDF, SVG, PNG, JPG or GIF</span>
                </div>
            </div>
            <div className="flex flex-col gap-6 place-items-center">
                <button type="submit" className="w-2xl justify-center bg-blue-800 text-white py-2 rounded hover:bg-blue-700">
                    Verify your account
                </button>
                <span className="text-sm dark:text-black font-normal mx-3">Already have an account? <a href="/login" className="text-blue-800 hover:underline">Sign in</a></span>
            </div>
        </form>
    </div>
    );
}
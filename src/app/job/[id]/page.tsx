'use client';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitApplication } from "@/store/slices/applicationsSlice";
import { jobsData } from "@/app/data/jobs";
import { notFound } from "next/navigation";
import { AppDispatch } from "@/store/store";

export default function JobDetailsPage(_props: { params?: Promise<unknown> }) {
  // props may contain params as a Promise (Next generated types). We extract id if present.
  // When navigating client-side we fall back to reading the id from the pathname via window.location.
  const maybeParams = (_props as unknown as { params?: { id?: string } })?.params;
  const propId: string | undefined = maybeParams && typeof maybeParams === 'object' ? (maybeParams as { id?: string }).id : undefined;
  const dispatch = useDispatch<AppDispatch>();

  // Keep hooks at the top level
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    coverLetter: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const jobId = propId ?? (typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : undefined);
  const job = jobsData.find((j) => String(j.id) === String(jobId) || j.id === `job-${jobId}` || Number(j.id) === Number(jobId));

  if (!job) return notFound();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const numericJobId = Number(job.id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      submitApplication({
        id: crypto.randomUUID(),
        jobId: numericJobId,
        ...form,
      })
    );

    setSubmitted(true);
    setForm({ fullName: "", email: "", coverLetter: "" });
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mb-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{job.title}</h1>

      <div className="mb-4 text-gray-700 space-y-1">
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.jobLocation}</p>
        <p><strong>Type:</strong> {job.type}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
      </div>

      <hr className="my-4" />

      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Job Description</h2>
        <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
          {job.description}
        </p>
      </section>

      <hr className="my-6" />

      {/* Apply Now Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Apply Now</h2>

        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
            🎉 Application submitted successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-1">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={5}
                value={form.coverLetter}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        )}
      </section>

      <div className="mt-8">
        <a
          href="/find-job"
          className="inline-block bg-gray-100 text-gray-800 px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          ← Back to Jobs
        </a>
      </div>
    </main>
  );
}

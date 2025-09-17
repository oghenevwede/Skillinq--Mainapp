import React from 'react'

export default function ResetPassword() {
  return (
  <div className="bg-white">
    <div className="flex flex-col items-center justify-center mx-90  min-h-screen  gap-8">
      <img src="/skillinq_logo.png" alt="Logo" className="h-8" />
      <div className="gap-3 flex flex-col items-center">
        <h2 className='text-3xl font-semibold'>Reset password</h2>
        <span className='text-justify text-md line-clamp-4'>
          Please input the OTP we just sent to you.
        </span>
      </div>
      <form className="flex flex-col gap-1 w-full max-w-sm">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">Email</label>
          <input
          id='email'
          name='email'
          type="email"
          placeholder="Enter the OTP"
          className="dark:text-black mb-4 w-full p-2 border border-gray-400 rounded"
          required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">OTP</label>
          <input
          id='otp'
          name='otp'
          type="password"
          placeholder="******"
          className="dark:text-black mb-4 w-full p-2 border border-gray-400 rounded"
          required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newPassword" className="font-medium">New Password</label>
          <input
          id='newPassword'
          name='newPassword'
          type="password"
          placeholder="******"
          className="dark:text-black mb-4 w-full p-2 border border-gray-400 rounded"
          required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="font-medium">Confirm Password</label>
          <input
          id='confirmPassword'
          name='confirmPassword'
          type="password"
          placeholder="******"
          className="dark:text-black mb-4 w-full p-2 border border-gray-400 rounded"
          required
          />
        </div>
        <button type="submit" className="w-full justify-center bg-blue-900 text-white py-2 rounded-md hover:bg-blue-700">
          Reset Password
        </button>
      </form>
    </div>
  </div>
  )
  
}

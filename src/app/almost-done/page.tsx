import React from 'react'
import Spinner from '../components/GradientSpinner/page'
import GradientSpinner from '../components/GradientSpinner/page'


export default function AlmostDone() {
    return (
        <div className="flex flex-col items-center justify-center mx-90  min-h-screen  gap-8 mt-20">
            <GradientSpinner />
            <h2 className='text-3xl font-semibold'>Setting up your Dashboard</h2>
            <span className='text-center w-3/4 text-xl line-clamp-2'>
                I'm Zainab. Thank you for setting up your Profile! Right now, we are searching for Jobs that you may be fit for, Sit tight.
            </span> 
        </div>
    )
}
import React from 'react'
import Image from 'next/image'
import Buttons from '../components/Buttons'


export default function WelcomePage() {
    return (
        <div className="flex flex-col items-center justify-center mx-90  min-h-screen  gap-8">
            <Image src={'./next.svg'} width={200} height={200} alt='Picture'></Image>
            <h2 className='text-3xl font-semibold'>Nice to meet you, Andre</h2>
            <span className='text-justify text-xl line-clamp-4'>
                I'm Zainab, and the Skillinq team is happy to have you onboard! 
                However to proceed we will need a few more information
                I'm Zainab, and the Skillinq team is happy to have you onboard! 
                However to proceed we will need a few more information
                I'm Zainab, and the Skillinq team is happy to have you onboard! 
                However to proceed we will need a few more information
                I'm Zainab, and the Skillinq team is happy to have you onboard! 
                However to proceed we will need a few more information
                I'm Zainab, and the Skillinq team is happy to have you onboard! 
                However to proceed we will need a few more information
                I'm Zainab, and the Skillinq team is happy to have you onboard! 
                However to proceed we will need a few more information
                I'm Zainab, and the Skillinq team is happy to have you onboard! 
                However to proceed we will need a few more information
            </span>
            <Buttons 
                title="Create my Profile"
            />
        </div>
    )
}
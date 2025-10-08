//import { title } from 'process';
import React from 'react'

interface ButtonsProps {
    title: string;
}

const Buttons = ({title}: ButtonsProps) => {
  return (
    <div className="bg-blue-800 text-white py-2 px-8 w-fit border rounded">
        {title}
    </div>
  )
}

export default Buttons

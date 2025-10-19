//import { title } from 'process';
import React from 'react'

interface ButtonsProps {
  title: string;
  onClick?: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ title, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-800 text-white py-2 px-8 w-fit border rounded"
    >
      {title}
    </button>
  )
}

export default Buttons

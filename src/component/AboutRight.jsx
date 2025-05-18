import React from 'react'
import right from '../assets/about_right_img_left.jpg'
import left from '../assets/about_right_img_right.jpg'

export const AboutRight = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-4 p-4">
      <img
        className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:opacity-90"
        src={right}
        alt="Right"
      />
      <img
        className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:opacity-90"
        src={left}
        alt="Left"
      />
    </div>
  )
}

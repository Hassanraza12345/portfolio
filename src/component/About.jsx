import React from 'react'
import { AboutLeft } from './AboutLeft'
import { AboutRight } from './AboutRight'

export const About = () => {
  return (
    <div className="w-screen min-h-screen mb-3 px-4 bg-gray-50">
      <div className="mt-10 text-4xl font-bold text-center">
        <div>
          <span className="pb-2 border-b-4 border-blue-500">About</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-10">
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  )
}

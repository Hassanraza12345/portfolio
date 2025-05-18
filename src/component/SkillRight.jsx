import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiJavascript, SiScrapy, SiSelenium } from 'react-icons/si';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const mainSkills = [
  { name: 'Django', icon: <SiDjango size={40} /> },
  { name: 'Scrapy', icon: <SiScrapy size={40} /> },
  { name: 'FastAPI', icon: <SiFastapi size={40} /> },
  { name: 'Selenium', icon: <SiSelenium size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> }
];

const additionalSkills = [
  'Responsive Design',
  'UI/UX Design',
  'RESTful APIs',
  'Git/GitHub',
  'CI/CD',
];

export const SkillRight = () => {
  return (
    <div className="w-full lg:w-1/2 px-4 py-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-8">Tools & Framework</h1>

      {/* Main Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
        {mainSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1f2937] p-4 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-blue-500/50 transition duration-300"
          >
            <div className="text-blue-400 mb-2">{skill.icon}</div>
            <p className="text-sm sm:text-base font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Additional Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {additionalSkills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            <BsFillCheckCircleFill className="text-blue-400" />
            <span className="text-sm sm:text-base">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

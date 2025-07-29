import React from 'react';
import { FaPython, FaReact,FaBrain  } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { SiPytorch,SiDjango, SiFastapi, SiTensorflow } from "react-icons/si";
import { TbBrandGraphql } from "react-icons/tb";
const mainSkills = [
{ name: 'Python', icon: <FaPython size={40} /> },
  { name: 'JavaScript (React)', icon: <FaReact size={40} /> },
  { name: 'Django', icon: <SiDjango size={40} /> },
  { name: 'Flask / FastAPI / DRF', icon: <SiFastapi size={40} /> },
  { name: 'PyTorch / TensorFlow', icon: <><SiPytorch size={40} className='mr-3'/> <SiTensorflow size={40} className='ml-3'/></>  }, // or use SiTensorflow
  { name: 'Scikit-learn / OpenCV', icon: <FaBrain  size={40} /> }, // could combine with SiOpencv
  { name: 'Data Visualization', icon: <TbBrandGraphql size={40} /> },
];

const additionalSkills = [
  'Responsive Design',
  'UI/UX Design',
  'RESTful APIs',
  'Git/GitHub',
  'CI/CD',
];
const additional_Skills_blob=false

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
            <div className="text-blue-400 mb-2 flex ">{skill.icon}</div>
            <p className="text-sm sm:text-base font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      {additional_Skills_blob &&(
        <>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Additional Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <BsFillCheckCircleFill className="text-blue-400" />
                <span className="text-sm sm:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

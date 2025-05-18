import React from 'react';
import { SkillLeft } from './SkillLeft';
import { SkillRight } from './SkillRight';

export const Skill = () => {
  return (
    <div className="w-screen h-full text-white bg-gray-900 ">
      <div className="flex justify-center mt-20">
        <h2 className="text-white text-4xl font-bold border-b-4 border-blue-400" style={{marginTop: '30px'}}>
          Skills
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 gap-8">
        <SkillLeft />
        <SkillRight />
      </div>
    </div>
  );
};

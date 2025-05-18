import React from 'react';

export const SkillLeft = () => {
  const skill = [
    { name: 'React (JavaScript)', level: '70' },
    { name: 'Django (Python)', level: '60' },
    { name: 'REST API', level: '65' },
    { name: 'Web Scraping', level: '70' },
  ];

  return (
    <div className="w-full lg:w-1/2 px-4 py-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-8">Technical Skills</h1>
      {skill.map((skill, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-1 text-white text-sm sm:text-base">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div
              className="bg-blue-500 h-2 rounded"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

import React from 'react';

export const SkillLeft = () => {
  const skill = [
  { name: 'Python', level: 80 },
  { name: 'JavaScript (React)', level: 70 },
  { name: 'Django', level: 30 },
  { name: 'Flask / FastAPI / DRF', level: 30 },
  { name: 'REST API', level: 25 },
  { name: 'PyTorch / TensorFlow', level: 60 },
  { name: 'Scikit-learn / OpenCV', level: 60 },
  { name: 'Data Visualization (Matplotlib / Seaborn)', level: 65 }
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

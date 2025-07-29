import React from 'react';
import Intro_background from '../assets/Intro_background.jpeg';


export const Intro = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Intro_background})` }}
    >
        <div className="w-full h-full bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-6 py-12 opacity-85">
            <div className="max-w-4xl text-center">
                <h1 className="text-blue-500 text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Muhammad Hassan Raza
                </h1>
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl mb-8">
                AI/ML Engineer | Full Stack Developer | Data Science Enthusiast
                </h2>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                I'm a passionate and results-driven developer with 1+ year of experience building intelligent, data-powered solutions.
                My work spans Machine Learning, Deep Learning, and Full-Stack Web Development using technologies like Python, React, Django, and PyTorch. 
                I specialize in creating impactful projects such as retail surveillance systems, spam filters, and sentiment analyzers, combining powerful functionality with clean design.
                </p>
                <p className="text-gray-400 text-sm mt-4">
                Based in Lahore, Pakistan | Open to Remote & On-Site Roles | Available Immediately
                </p>
            </div>
        </div>


    </div>
  );
};

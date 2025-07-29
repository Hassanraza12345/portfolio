import React from 'react'

export const AboutLeft = () => {
  return (
<div className=" py-16 px-6 md:px-20" id="about">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-blue-500 mb-8 text-center">About Me</h2>
    <p className="text-lg leading-relaxed">
      Hello! I'm <span className=" font-semibold">Muhammad Hassan Raza</span>, a passionate <span className="text-blue-400">AI/ML Engineer</span> and <span className="text-blue-400">Full Stack Developer</span> based in Lahore, Pakistan.
      I hold a BS in Software Engineering from Lahore Garrison University and have 1+ year of hands-on experience building intelligent, scalable web and machine learning applications.
    </p>

    <p className="text-lg leading-relaxed mt-6">
      My expertise lies in Python, Django, React.js, Flask, SQL, and various ML/DL frameworks like PyTorch and TensorFlow.
      I’ve built solutions like a real-time retail surveillance system using YOLOv8, an email spam detector, and sentiment analysis tools using natural language processing.
    </p>

    <p className="text-lg leading-relaxed mt-6">
      I enjoy solving real-world problems through clean code, creative design, and data-driven approaches.
      Whether it's front-end development or deploying AI models, I strive to deliver high-quality, user-centric solutions.
    </p>
  </div>
</div>

  )
}

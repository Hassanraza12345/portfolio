import React from 'react'

export const AboutLeft = () => {
  return (
    <div className="w-full flex flex-col justify-between text-left">
      <div className="px-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-5 mt-6 md:mt-0">Who I AM</h1>
        <p className="mb-6">
          I'm a passionate full-stack developer with over 5 years of experience creating robust web applications and intuitive user interfaces.
        </p>
        <p>
          My approach combines technical expertise with creative problem-solving to deliver solutions that exceed client expectations.
        </p>
      </div>

      <div className="mt-10 px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">My Experience</h1>
        <div className="flex flex-col sm:flex-row gap-6">
          <ul className="list-disc marker:text-blue-500 text-black ml-4 space-y-2">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>Django</li>
          </ul>
          <ul className="list-disc marker:text-blue-500 text-black ml-4 space-y-2">
            <li>REST APIs</li>
            <li>Python</li>
            <li>Scrapy</li>
            <li>BeautifulSoup</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

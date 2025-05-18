import React from 'react'
import service1 from '../assets/Service-1.jpeg'
import service2 from '../assets/Service-2.jpeg'
import service3 from '../assets/Service-3.jpeg'

const Services = () => {
    const services= [
        {title: 'Web Development',
        desc: 'Custom websites and web applications built with modern technologies and best practices.',
        features: ['Responsive website development','Single-page applications (SPAs)','Progressive web apps (PWAs)'],
        img: service1
        },
        {title: 'Web Scraping',
        desc: 'Custom web scraping solutions built with modern technologies and best practices to extract, process, and deliver structured data from websites',
        features: [
            'Custom web scraping scripts',
            'Automated data extraction',
            'Structured data delivery (CSV, JSON, etc.)',
            ],
        img: service2
        },
        {
            title: 'API Development & Integration',
            desc: 'Robust API development and integration services using modern Python frameworks like FastAPI, following RESTful best practices for scalable and high-performance systems.',
            features: [
                'Custom REST API development',
                'FastAPI-based high-performance APIs',
                'Third-party API integration',
            ],
            img: service3
        }

    ]


  return (
    <div className="w-screen h-full mb-3 bg-gray-50">
        <div className="mt-10 text-4xl font-bold text-center">
            <div>
            <h1 className="pb-2pt-10"><span className=' border-b-4 pb-5 border-blue-500'>Services</span></h1>
            </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-5 py-10 mt-5">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-50 h-[31rem] w-full sm:w-[22rem] rounded-2xl shadow-md 
                      transform transition duration-300 
                      hover:-translate-y-1 overflow-hidden"
          >
            <img src={item.img} alt="" className="h-48 w-full object-cover" />
            <div className="p-5 text-left">
              <h1 className="text-2xl font-bold pt-1">{item.title}</h1>
              <p className="text-sm mt-2">
                {item.desc}
              </p>
              <div className="space-y-2 text-gray-800 mt-4">
                  {item.features.map((feature, ind) => (
                  <div key={ind} className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>



    </div>
  )
}

export default Services
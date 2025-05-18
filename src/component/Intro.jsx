import React from 'react';
import Intro_background from '../assets/Intro_background.jpeg';
import { MdOutlineArrowDownward } from 'react-icons/md';
import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Intro_background})` }}
    >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-75">
            <div className="text-center px-4 mb-7">
                <h1 className="text-blue-600 text-6xl font-bold mb-10 mt-10 pt-7">Muhammad Hassan Raza</h1>
                <h2 className="text-white text-4xl mt-2 mb-9">Full Stack Developer & Web Scraper</h2>

                <div>
                <h2 className="text-white text-2xl mt-7">
                    I build exceptional digital experiences that combine elegant design with powerful functionality.
                </h2>
                </div>
            <div className='flex justify-center mt-50'>
                <motion.div
                    animate={{ y: [0, 15, 0] }} // Moves down 15px and back
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    >
                    <MdOutlineArrowDownward size={40} color="white" />
                </motion.div>

            </div>
            </div>
        </div>
    </div>
  );
};

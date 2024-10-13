import React from 'react';
import { motion } from 'framer-motion';
import heroImage from "../assets/logoagency.png";



const Hero = () => {
  
  return (
    <section className="bg-blue-500 min-h-screen flex flex-col lg:flex-row justify-center items-center lg:text-left text-center text-white p-4 pt-10 lg:pt-0">
      <div className="w-full lg:w-1/2 p-6 lg:p-9">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Empower Your Brand, Achieve Excellence</h1>
        <p className="text-base sm:text-lg lg:text-xl mb-6">
          Transform your business with data-driven marketing strategies designed to maximize impact and growth.
        </p>
        <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">
          Start Your Success Journey
        </button>
      </div>
      <motion.div 
        className="w-full lg:w-1/2 p-4 flex justify-center"
        animate={{
          y: ["0%", "-5%", "0%", "-3%", "0%"]
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity
        }}
      >
        <img 
          src={heroImage} 
          alt="Hero" 
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md h-auto object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

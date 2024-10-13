import React from 'react';
import about from "../assets/aboutus.png";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8">
          <h2 className="text-4xl font-bold mb-4 text-blue-600 text-center md:text-left">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            At our agency, we harness the power of digital marketing, innovative branding, and creative solutions to elevate your business. 
            Our team is dedicated to crafting strategies that resonate with your audience and drive measurable results.
          </p>
          <p className="text-lg text-gray-700">
            With years of experience, we blend creativity with data-driven insights to help you stand out in a crowded market.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={about} 
            alt="About Us" 
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm h-auto object-contain rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

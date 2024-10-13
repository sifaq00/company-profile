import React from 'react';
import project1 from '../assets/project.png'; 
import project2 from '../assets/project.png'; 
import project3 from '../assets/project.png'; 

const Portfolio = () => {
  const projects = [
    { title: 'Website Redesign', image: project1 },
    { title: 'Social Media Campaign', image: project2 },
    { title: 'Brand Identity Design', image: project3 },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Our Portfolio</h2>
        <p className="text-lg text-center mb-12 text-gray-700">
          Check out some of our latest projects that showcase our expertise in digital marketing and branding.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow duration-300 transform hover:scale-105 hover:shadow-lg p-4">
              <div className="flex items-center justify-center w-full h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover rounded-md transition-transform duration-300 transform hover:scale-110" // Tambahkan transisi pada gambar
                />
              </div>
              <h3 className="text-lg font-semibold text-center mt-4">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Sifaq Qiwqiw', feedback: 'Great service and amazing results!' },
    { name: 'Albert Camus', feedback: 'Our business has never been better.' },
    { name: 'Nicola Tesla', feedback: 'Highly recommended marketing agency!' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-4xl md:text-4xl font-bold text-center mb-8 text-white text-2xl"> 
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg p-6 m-4 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
              <p className="italic text-gray-600 mb-4">"{testimonial.feedback}"</p>
              <h3 className="font-bold mt-4 text-blue-600">{testimonial.name}</h3>
              <div className="mt-2 border-t border-gray-300 pt-2">
                <span className="text-xs text-gray-500">⭐️⭐️⭐️⭐️⭐️</span> {/* Rating */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

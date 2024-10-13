import React from 'react';

const Services = () => {
  const services = [
    { title: 'Digital Marketing', description: 'Boost your online presence with our effective strategies.' },
    { title: 'SEO Optimization', description: 'Improve your website ranking on search engines.' },
    { title: 'Branding', description: 'Create a strong brand identity that resonates with your audience.' },
    { title: 'Content Creation', description: 'Engaging content that tells your brand story.' },
    { title: 'Social Media Management', description: 'Manage and grow your social media presence effectively.' },
    { title: 'Email Marketing', description: 'Reach your audience with targeted email campaigns.' },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Our Services</h2>
        <p className="text-lg text-center mb-12 text-gray-700">
          Explore our comprehensive range of marketing services designed to help your business thrive.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-500">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-gray-500 text-sm italic">Discover how we can help you achieve your goals.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

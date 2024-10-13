import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50" data-aos="fade-up"> {/* Ganti latar belakang */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-gradient-to-br from-blue-300 to-teal-300 p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            ></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200 transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

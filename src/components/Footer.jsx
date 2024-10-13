import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Faqtech Digital Marketing. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://github.com/sifaq00" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-asifaq" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/m.asfq_" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
        <div className="mt-4">
          <a href="#" className="text-white mx-2 hover:text-gray-300 transition duration-300">Privacy Policy</a>
          <span className="text-white">|</span>
          <a href="#" className="text-white mx-2 hover:text-gray-300 transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

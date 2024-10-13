import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onPageScroll = () => {
    setScrolling(window.pageYOffset > 200);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close menu after clicking
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <header className={`${scrolling ? 'border-b border-gray-900' : ''} fixed left-0 right-0 top-0 z-20`} id="home">
      <nav className="bg-white shadow-md fixed w-full z-10 top-0 transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent">
            Faqtech.id
          </div>
          
          <ul className="hidden sm:flex space-x-8">
            <li>
              <a href="#" onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110 font-semibold">Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110 font-semibold">About Us</a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110 font-semibold">Services</a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => scrollToSection('portfolio')} className="text-gray-800 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110 font-semibold">Portfolio</a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110 font-semibold">Contact</a>
            </li>
          </ul>
          
          <button
            className="text-gray-400 hover:text-black sm:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>

          <ul
            className={`${
              isOpen ? 'translate-y-2 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
            } transition-all duration-300 ease-in-out transform absolute top-14 right-4 w-48 bg-white/90 backdrop-blur-md rounded-md shadow-lg p-4 space-y-2 sm:hidden`}
          >
            <li><a href="#" onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-blue-500">Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-blue-500">About Us</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-blue-500">Services</a></li>
            <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')} className="text-gray-800 hover:text-blue-500">Portfolio</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

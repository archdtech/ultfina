import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/ultirov1.png" alt="Ultiro" className="h-8 w-auto" />
              </Link>
            </div>
            <div className="hidden md:ml-4 lg:ml-6 md:flex md:items-center md:space-x-2 lg:space-x-3">
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/scale"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                Scale
              </Link>
              <Link
                to="/programs"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                Programs
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                Portfolio
              </Link>
              <Link
                to="/insights"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                Insights
              </Link>
              <Link
                to="/careers"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex md:items-center md:space-x-3 lg:space-x-4">
            <Link
              to="/apply-founder"
              className="whitespace-nowrap inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 border border-[#FF3D22] text-xs lg:text-sm font-medium rounded-full text-white bg-[#FF3D22] hover:bg-transparent hover:text-[#FF3D22] transition-colors duration-200"
            >
              Apply as Founder
            </Link>
            <Link
              to="/apply-partner"
              className="whitespace-nowrap inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 border border-white text-xs lg:text-sm font-medium rounded-full text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Apply as Partner
            </Link>
          </div>

          {/* Mobile menu button - Only shows hamburger icon, not X */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FF3D22] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF3D22] relative ${isOpen ? 'opacity-0' : 'z-50'}`}
              aria-expanded={isOpen ? "true" : "false"}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Full Screen */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden flex flex-col overflow-y-auto animate-fadeIn">
          {/* Close button at the top right */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:text-[#FF3D22] transition-colors"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Logo in mobile menu */}
          <div className="px-4 pt-20 pb-6">
            <Link to="/" className="inline-block mb-8" onClick={() => setIsOpen(false)}>
              <img src="/ultirov1.png" alt="Ultiro" className="h-10 w-auto" />
            </Link>
            <div className="space-y-4">
              <Link
                to="/about"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/scale"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Scale
              </Link>
              <Link
                to="/programs"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/insights"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Insights
              </Link>
              <Link
                to="/careers"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
            </div>
          </div>

          <div className="px-4 py-8 border-t border-gray-800">
            <div className="flex flex-col gap-5">
              <Link
                to="/apply-founder"
                className="block w-full text-center py-4 px-6 border-2 border-[#FF3D22] text-lg font-medium rounded-full text-white bg-[#FF3D22] hover:bg-transparent hover:text-[#FF3D22] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Apply as Founder
              </Link>
              <Link
                to="/apply-partner"
                className="block w-full text-center py-4 px-6 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Apply as Partner
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
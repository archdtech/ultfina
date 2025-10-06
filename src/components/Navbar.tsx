import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/ultirov1.png" alt="Ultiro Logo" className="h-7 sm:h-8" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/studio" className="text-gray-900 hover:text-[#E63946] transition-colors">Studio</Link>
            <Link to="/programs" className="text-gray-900 hover:text-[#E63946] transition-colors">Programs</Link>
            <Link to="/portfolio" className="text-gray-900 hover:text-[#E63946] transition-colors">Portfolio</Link>
            <Link to="/insights" className="text-gray-900 hover:text-[#E63946] transition-colors">Insights</Link>
            <Link to="/about" className="text-gray-900 hover:text-[#E63946] transition-colors">About</Link>
            <Link to="/careers" className="text-gray-900 hover:text-[#E63946] transition-colors">Careers</Link>
            <div className="ml-4 flex items-center space-x-3">
              <Link 
                to="#apply-founder"
                className="px-4 py-2 text-sm text-[#FF3D22] border border-[#FF3D22] rounded-full hover:bg-[#FF3D22]/10 transition-colors"
              >
                Apply as Founder
              </Link>
              <Link 
                to="#apply-partner"
                className="px-4 py-2 text-sm text-white bg-[#FF3D22] rounded-full hover:bg-[#FF3D22] transition-colors"
              >
                Apply as Partner
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-[#FF3D22] focus:outline-none z-50 relative p-3 -mr-3"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-30 overflow-y-auto h-[100vh] w-screen">
          <div className="w-full mx-auto px-6 pt-24 pb-8 flex flex-col h-full">
            <div className="flex-1">
              <Link to="/studio" className="block px-4 py-4 text-xl text-gray-900 hover:text-[#FF3D22] border-b border-gray-100 font-medium">Studio</Link>
              <Link to="/programs" className="block px-4 py-4 text-xl text-gray-900 hover:text-[#FF3D22] border-b border-gray-100 font-medium">Programs</Link>
              <Link to="/portfolio" className="block px-4 py-4 text-xl text-gray-900 hover:text-[#FF3D22] border-b border-gray-100 font-medium">Portfolio</Link>
              <Link to="/insights" className="block px-4 py-4 text-xl text-gray-900 hover:text-[#FF3D22] border-b border-gray-100 font-medium">Insights</Link>
              <Link to="/about" className="block px-4 py-4 text-xl text-gray-900 hover:text-[#FF3D22] border-b border-gray-100 font-medium">About</Link>
              <Link to="/careers" className="block px-4 py-4 text-xl text-gray-900 hover:text-[#FF3D22] border-b border-gray-100 font-medium">Careers</Link>
            </div>
            <div className="mt-auto space-y-4 px-4 pt-6">
              <Link 
                to="#apply-founder"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3.5 text-center text-[#FF3D22] border-2 border-[#FF3D22] rounded-full hover:bg-[#FF3D22]/10 transition-colors text-lg font-medium"
              >
                Apply as Founder
              </Link>
              <Link 
                to="#apply-partner"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3.5 text-center text-white bg-[#FF3D22] rounded-full hover:bg-opacity-90 transition-colors text-lg font-medium"
              >
                Apply as Partner
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
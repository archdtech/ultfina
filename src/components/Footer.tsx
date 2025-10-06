import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img src="/ultirov1w.png" alt="Ultiro" className="h-8" />
            </Link>
            <p className="text-gray-400">
              Where Nordic Innovation Meets Global Ambition
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF3D22]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF3D22]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/scale" className="text-gray-400 hover:text-[#FF3D22] transition-colors">
                  Scale
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-[#FF3D22] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/apply-founder" className="text-gray-400 hover:text-[#FF3D22] transition-colors">
                  Apply as Founder
                </Link>
              </li>
              <li>
                <Link to="/apply-partner" className="text-gray-400 hover:text-[#FF3D22] transition-colors">
                  Apply as Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FF3D22] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-[#FF3D22] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-400 hover:text-[#FF3D22] transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-[#FF3D22] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FF3D22] mt-1" />
                <div className="text-gray-400">
                  <strong className="text-white">Sweden</strong><br />
                  Drottninggatan 86<br />
                  111 36 Stockholm, SE
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF3D22]" />
                <a href="tel:+46823032" className="text-gray-400 hover:text-[#FF3D22] transition-colors">
                  +46 8 23 03 23
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF3D22]" />
                <a href="mailto:info@ultiro.se" className="text-gray-400 hover:text-[#FF3D22] transition-colors">
                  info@ultiro.se
                </a>
              </li>
            </ul>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Ultiro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
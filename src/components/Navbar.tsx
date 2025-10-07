import { useState } from "react";
import { BirdIcon, LinkedinIcon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-black py-4 sm:py-6 m-3.5">
      <nav className="bg-white container mx-auto max-w-4xl rounded-lg sm:rounded-full p-3 shadow-lg border-b-2 border-green-400 shadow-teal-500/50">
        {/* Desktop & Mobile Header */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Company logo"
            className="flex items-center gap-1.5 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <span className="font-bold text-xl sm:text-2xl flex items-center gap-1">
              <BirdIcon /> Ambitrove
            </span>
          </Link>

          {/* Desktop Links - Hidden on mobile */}
          <ul className="hidden md:flex justify-evenly gap-6 text-lg font-semibold">
            <li>
              <Link to="/" className="hover:text-teal-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-teal-600 transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-600 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-teal-600 transition-colors">
                Services
              </Link>
            </li>
          </ul>

          {/* Desktop Follow Button - Hidden on mobile */}
          <button className="hidden md:block bg-gradient outline-1 outline-cyan-300 font-medium text-white px-4 py-2 rounded-md shadow-md shadow-black hover:scale-105 transition-transform duration-300 ease-in-out">
            <a
              href="https://www.linkedin.com/company/ambitrove-innovation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Follow us
              <span className="text-teal-500 h-6 w-6 hover:text-white">
                <LinkedinIcon />
              </span>
            </a>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black hover:text-teal-600 transition-colors "
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} className="text-red-500 " /> : <Menu size={28} className="text-green-500 " />}
          </button>
        </div>


        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block hover:text-teal-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className="block hover:text-teal-600 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="block hover:text-teal-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={toggleMenu}
                  className="block hover:text-teal-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.linkedin.com/company/ambitrove-innovation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient outline-1 outline-cyan-300 font-medium text-white px-4 py-2 rounded-md shadow-md shadow-black hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Follow us
                  <span className="text-teal-500 h-6 w-6">
                    <LinkedinIcon />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
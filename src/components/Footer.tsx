import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className=" text-gray-400 border-t border-neutral-800  mt-auto"
      aria-roledescription="Footer">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand Info */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-inter text-white mb-3">
              Ambitrove Innovation
            </h2>
            <p className="leading-relaxed text-gray-400 mb-6">
              A South African technology company building scalable software,
              SaaS products, and digital solutions for the evolving world.
            </p>

            {/* Social Links */}
            <div className="flex space-x-5">
              <a
                href="https://www.youtube.com/@AmbitroveInnovation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ambitrove YouTube Channel"
                className="hover:text-red-500 transition">
                <Youtube size={20} />
              </a>
              <a
                href="https://x.com/ambitrove"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ambitrove Twitter Profile"
                className="hover:text-blue-500 transition">
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/ambitrove-innovation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ambitrove LinkedIn Company Page"
                className="hover:text-blue-600 transition">
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Ambitrove-Innovation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ambitrove GitHub Repository"
                className="hover:text-green-500 transition">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:w-1/3 flex justify-between">
            <div>
              <h3 className="text-sm font-inter text-white uppercase mb-4 tracking-wide">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-inter text-white uppercase mb-4 tracking-wide">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="hover:text-white transition">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className=" space-y-4">
            <h3 className="text-sm font-inter text-white uppercase mb-4  tracking-wide">
              Contact
            </h3>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-white" />
              <a
                href="mailto:contact@ambitrove.com"
                className="hover:text-white transition">
                contact@ambitrove.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-white" />
              <a
                href="tel:+27761972861"
                className="hover:text-white transition">
                +27 76 197 2861
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={18} className="text-white" />
              <span>Pretoria, South Africa</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {year} Ambitrove Innovation (Pty) Ltd. All rights reserved.</p>
          <p className="mt-3 md:mt-0">
            Designed & Developed by
            <span className="text-white font-inter"> Ambitrove Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

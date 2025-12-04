import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className=" text-gray-400 border-t border-neutral-800"
      aria-roledescription="Footer">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand Info */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-semibold text-white mb-3">
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
                className="hover:text-red-500 transition">
                <Youtube size={20} />
              </a>
              <a
                href="https://x.com/ambitrove"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition">
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/ambitrove-innovation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition">
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Ambitrove-Innovation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:w-1/3 flex justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase mb-4 tracking-wide">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase mb-4 tracking-wide">
                Resources
              </h3>
              <ul className="space-y-2" aria-disabled={true}>
                 {/*<li>
                  <a href="/careers" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                */}
                <li>
                  <a href="/blog" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-white transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className=" space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase mb-4  tracking-wide">
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
            <span className="text-white font-medium"> Ambitrove Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

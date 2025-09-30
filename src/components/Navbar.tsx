import { BirdIcon, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-black py-4 sm:py-6 m-3.5">
      <nav className="bg-white container mx-auto flex flex-col sm:flex-row max-w-4xl justify-between sm:justify-evenly items-center gap-4 sm:gap-0 sm:rounded-full rounded-lg p-3 shadow-lg border-b-2 border-green-400 shadow-teal-500/50">
        {/* Logo */}
        <label
          aria-label="Company logo"
          className="flex items-center gap-1.5 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <span className="font-bold text-xl sm:text-2xl flex items-center gap-1">
            <BirdIcon /> Ambitrove
          </span>
        </label>

        {/* Links */}
        <ul className="flex flex-col sm:flex-row justify-center sm:justify-evenly gap-3 sm:gap-6 text-base sm:text-lg md:text-[1.3rem] font-semibold text-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <a href="#contact-us">Contact</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>

        {/* Follow Button */}
        <button className="bg-gradient outline-1 outline-cyan-300 font-medium text-white px-4 py-2 rounded-md shadow-md shadow-black hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link
            to="https://www.linkedin.com/company/ambitrove-innovation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Follow us
            <span className="text-teal-500 delay-200 h-6 hover:text-white w-6 ">
              <LinkedinIcon />
            </span>
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

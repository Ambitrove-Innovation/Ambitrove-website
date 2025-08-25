import { BirdIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-black py-6">
      <nav className="bg-white container mx-auto flex justify-evenly items-center rounded-full p-2.5 shadow-lg border-b-2 border-cyan-500 shadow-cyan-500/50">
        <label aria-label="Company logo" className="flex items-center gap-1.5">
          <span className="font-semibold text-2xl flex">
            <BirdIcon /> Ambitrove
          </span>
        </label>
        <ul className="flex justify-evenly gap-3.5 font-medium text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <button className="bg-gray-800 outline-2 outline-cyan-400 font-medium text-white  px-4 py-2 rounded-sm ">
          Follow us
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

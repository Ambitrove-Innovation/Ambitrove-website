import { BirdIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-black py-6">
      <nav className="bg-white container mx-auto flex  max-w-4xl justify-evenly items-center rounded-full p-2.5 shadow-lg border-b-2 border-green-400 shadow-teal-500/50">
        <label aria-label="Company logo" className="flex items-center gap-1.5">
          <span className="font-bold text-2xl flex">
            <BirdIcon /> Ambitrove
          </span>
        </label>
        <ul className="flex justify-evenly gap-3.5 text-[1.3rem] font-semibold">
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
        <button className="bg-gradient outline-1 outline-cyan-300 font-medium text-white w-30  px-4 py-2 rounded-sm ">
          Follow us
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-12 border-t border-gray-800 mt-8 pt-6 text-cente">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between">
        
        {/* Logo + Description */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-bold text-white mb-2">Ambitrove Innovation</h2>
          <p className="text-gray-400">
            Providing innovative solutions that empower your business to grow in the digital age.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info + Socials */}
        <div className="md:w-1/3 ">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p>Email: <a href="mailto:info@ambitrove.com" className="hover:text-white transition">info@ambitrove.com</a></p>
          <p>Phone: <a href="tel:+27761972861" className="hover:text-white transition">+27 761972861</a></p>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 Ambitrove-Innovation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Homepage = () => {
  return (
    <div className="space-y-4 text-center flex flex-col justify-center items-center">
      <Button className="w-fit outline-1 outline-double  bg-gradient-to-r from-blue-950 via-teal-600 to-cyan-950  outline-gray rounded-full shadow-md shadow-cyan-500/50 transition-transform duration-300 hover:scale-105 ease-in-out">
        ✓ Trusted Innovative Solutions⚡
      </Button>
      <h1 className="text-5xl font-bold text-gradient w-200 bg-clip-text text-transparent bg-gradient-to-r from-black via-white to-teal-500">
        Enhancing your ideas with Innovative digital Solutions
      </h1>
      <p className="font-light text-2xl w-120 py-5">
        You think it, we build it - with precision and creative digital
        solutions that build to scale.
      </p>
      <Button
        variant={"default"}
        disabled={true}
        className="outline-solid outline-1 bg-transparent outline-gray-500 w-35 "
      >
        <Link to="/contact">Contact Us</Link>
      </Button>

      <div className="text-gray-500 animate-pulse py-16">
        <span>page content coming soon...</span>
      </div>
    </div>
  );
};

export default Homepage;

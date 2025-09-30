import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./features/home/homePage";
import AboutUs from "./features/about/aboutUs";
import Navbar from "./components/Navbar";

const Routespath = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default Routespath;

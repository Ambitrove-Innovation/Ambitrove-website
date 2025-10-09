import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./features/home/homePage";
import AboutPage from "./features/about/aboutpage";
import ContactPage from "./features/contact/contactpage";
import Navbar from "./components/Navbar";
import PageErrorRedirect from "./features/pageNotFound/PageErrorRedirect";

const Routespath = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PageErrorRedirect />} />
      </Routes>
    </Router>
  );
};

export default Routespath;

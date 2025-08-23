import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./features/home/homePage";

const Routespath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default Routespath;

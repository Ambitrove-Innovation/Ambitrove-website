import "./index.css";
import Routespath from "./routes";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { HelmetProvider } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <HelmetProvider>
      <Routespath />
    </HelmetProvider>
  );
}

export default App;

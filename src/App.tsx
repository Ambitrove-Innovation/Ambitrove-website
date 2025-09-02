import "./index.css";
import Routespath from "./routes";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return <Routespath />;
}

export default App;

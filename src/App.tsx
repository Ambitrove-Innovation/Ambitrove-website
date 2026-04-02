import Routespath from "./routes";
import { HelmetProvider } from "react-helmet-async";
import "@/lib/gsap";
function App() {
  return (
    <HelmetProvider>
      <Routespath />
    </HelmetProvider>
  );
}

export default App;

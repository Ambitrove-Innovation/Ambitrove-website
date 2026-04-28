import Routespath from "./routes";
import { HelmetProvider } from "react-helmet-async";
import "@/lib/gsap";
import AiChatBot from "@/features/support/components/AiChatBot";

function App() {
  return (
    <HelmetProvider>
      <Routespath />
      <AiChatBot />
    </HelmetProvider>
  );
}

export default App;

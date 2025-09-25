import { useState } from "react";
import { Button } from "./components/ui/button";
import TimelineComponent from "./TimelineComponent";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ParticleButton from "./components/kokonutui/particle-button";
import BentoGrid from "./components/kokonutui/bento-grid";

function App() {
  const [count, setCount] = useState(0);

  useGSAP(() => {
    gsap.from(".btn", {
      x: 250,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "bounce.inOut",
    });
  }, []);

  return (
    <>
      {" "}
      <div className="card">
        <h1 className="text-2xl font-bold heading-title">
          Ambitrove prototype
        </h1>

        <Button
          className="btn"
          variant={"secondary"}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>

        <ParticleButton className="bg-white text-black">Click</ParticleButton>
      </div>
      <TimelineComponent />
      <BentoGrid />
    </>
  );
}

export default App;

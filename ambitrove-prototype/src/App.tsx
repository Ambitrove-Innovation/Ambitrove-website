// import TimelineComponent from "./TimelineComponent";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
import Homepage from "./pages/home/homePage";

function App() {
  // useGSAP(() => {
  //   gsap.from(".btn", {
  //     x: 250,
  //     duration: 2,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "bounce.inOut",
  //   });
  // }, []);

  return (
    <>
      <Homepage />
      {/* <TimelineComponent /> */}
    </>
  );
}

export default App;

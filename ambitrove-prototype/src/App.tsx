import { useState } from "react";
import { Button } from "./components/ui/button";
import TimelineComponent from "./TimelineComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <div className="card">
        <h1>Vite React</h1>

        <Button
          variant={"secondary"}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
      <TimelineComponent />
    </>
  );
}

export default App;

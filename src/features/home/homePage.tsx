import { Button } from "@/components/ui/button";

const Homepage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Ambitrove</h1>
      <Button
        variant={"default"}
        disabled={true}
        className="outline-dashed outline-1 outline-white w-fit "
      >
        Page under construction
      </Button>

      <div className="text-gray-500 animate-pulse ">
        page content coming soon...
      </div>
    </div>
  );
};

export default Homepage;

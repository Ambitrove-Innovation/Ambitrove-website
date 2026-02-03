interface Props {
  active: string;
  setActive: (v: string) => void;
}

export function PricingNavbar({ active, setActive }: Props) {
  const tabs = ["Plans", "Team Plan", "Team Scale"];

  return (
    <div className="relative flex gap-4 border-b border-neutral-800">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className="relative px-4 py-2 text-sm">
          {tab}

          {active === tab && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-400" />
          )}
        </button>
      ))}
    </div>
  );
}

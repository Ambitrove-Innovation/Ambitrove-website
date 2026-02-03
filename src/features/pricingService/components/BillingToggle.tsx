export function BillingToggle({ billing, setBilling }: Props) {
  const options: BillingType[] = ["once", "monthly", "yearly"];

  return (
    <div className="flex bg-neutral-900 p-1 rounded-full">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setBilling(opt)}
          className={`px-4 py-2 rounded-full transition ${
            billing === opt ? "bg-lime-400 text-black" : "text-neutral-400"
          }`}>
          {opt.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

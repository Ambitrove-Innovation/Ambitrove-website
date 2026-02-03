// PricingCard.tsx
function PricingCard({ plan, billing }: Props) {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
      {plan.popular && (
        <span className="text-xs text-lime-400">MOST POPULAR</span>
      )}

      <h3 className="text-xl font-semibold mt-2">{plan.name}</h3>
      <p className="text-neutral-400">{plan.description}</p>

      <div className="text-3xl font-bold mt-4">R{plan.pricing[billing]}</div>

      <ul className="mt-6 space-y-2 text-sm">
        {plan.features.map((f) => (
          <li key={f}>✔ {f}</li>
        ))}
      </ul>

      <button className="mt-6 w-full bg-lime-400 text-black py-2 rounded-lg">
        Select Plan
      </button>
    </div>
  );
}

export default PricingCard;

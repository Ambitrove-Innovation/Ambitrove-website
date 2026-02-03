// PricingGrid.tsx
import PricingCard from "./PricingCard";


function PricingGrid({ plans, billing }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {plans.map((plan) => (
        <PricingCard key={plan.name} plan={plan} billing={billing} />
      ))}
    </div>
  );
}

export default PricingGrid;

// PricingPage.tsx
import { AudienceToggle } from "./components/AudienceToggle";
import { BillingToggle } from "./components/BillingToggle";
import PricingGrid from "./components/PricingGrid";
import { PricingNavbar } from "./components/PricingNavbar";

import { useState } from "react";
import { pricingConfig } from "./priceData/pricingData";

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingType>("once");
  const [audience, setAudience] = useState<AudienceType>("individual");
  const [activeTab, setActiveTab] = useState("Plans");

  const data = pricingConfig[audience];

  const getPlans = () => {
    if (activeTab === "Plans") return data.individualPlans;
    if (activeTab === "Team Plan") return data.teamPlans;
    return data.teamScalePlans;
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center">Pick Your Plan</h1>

      <div className="flex justify-center mt-6 gap-6">
        <AudienceToggle audience={audience} setAudience={setAudience} />
        <BillingToggle billing={billing} setBilling={setBilling} />
      </div>

      <div className="mt-10">
        <PricingNavbar active={activeTab} setActive={setActiveTab} />
      </div>

      <PricingGrid plans={getPlans()} billing={billing} />
    </div>
  );
}

// Website Build Package (One-time purchase)
interface WebsiteBuildPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  features: Array<{
    text: string;
    included: boolean;
    badge?: string;
  }>;
  trialAccess: {
    label: string;
    items: Array<{
      service: string;
      duration: string;
      highlight?: boolean;
    }>;
  };
  highlighted?: boolean;
  highlightLabel?: string;
  ctaLabel: string;
  theme: "dark" | "blue" | "green" | "purple";
}

// Service Care Plan (Subscription)
 interface ServiceCarePlan {
  name: string;
  monthlyPrice?: string;
  yearlyPrice?: string;
  features: {
    [key: string]: boolean;
  };
}

interface ServiceFeature {
  name: string;
  description?: string;
  tooltip?: string;
}

// Add-on Service
interface AddOnService {
  id: string;
  title: string;
  description: string;
  pricing: {
    type: "one-time" | "recurring" | "custom";
    amount?: string;
    period?: string;
  };
  complexity?: "low" | "medium" | "high";
  category:
    | "branding"
    | "marketing"
    | "security"
    | "performance"
    | "integration";
  features?: string[];
}

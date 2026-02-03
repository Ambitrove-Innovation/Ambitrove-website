interface CompanyService {
  image?: string;
  title: string;
  description: string;
  alt?: string;
  badgeTitle?: string;
}

interface LeadershipCard {
  image: string;
  alt: string;
  name: string;
  position: string;
  linkedInUrl: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content?: string;
}

interface Props {
  plan: Plan;
  billing: BillingType;
}

type BillingType = "once" | "monthly" | "yearly";
type AudienceType = "individual" | "team";

interface Plan {
  name: string;
  popular?: boolean;
  bestValue?: boolean;
  pricing: Record<BillingType, number>;
  description: string;
  features: string[];
}
interface PricingFeature {
  name: string;
  included: boolean;
  value?: string;
}
interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  cta: string;
  ctaLink?: string;
}

// BillingToggle.tsx

interface Props {
  billing: BillingType;
  setBilling: (b: BillingType) => void;
}

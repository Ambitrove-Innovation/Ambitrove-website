export interface CompanyService {
  image?: string;
  title: string;
  description: string;
  alt?: string;
  badgeTitle?: string;
}

export interface LeadershipCard {
  image: string;
  alt: string;
  name: string;
  position: string;
  linkedInUrl: string;
  bio: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

export interface BlogPost {
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

export type BillingType = "once" | "monthly" | "yearly";
export type AudienceType = "individual" | "team";

export interface Plan {
  name: string;
  popular?: boolean;
  bestValue?: boolean;
  pricing: Record<BillingType, number>;
  description: string;
  features: string[];
}

export interface PlanCardProps {
  plan: Plan;
  billing: BillingType;
}

export interface BillingToggleProps {
  billing: BillingType;
  setBilling: (b: BillingType) => void;
}

export interface PricingFeature {
  name: string;
  included: boolean;
  value?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  cta: string;
  ctaLink?: string;
}

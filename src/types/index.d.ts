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

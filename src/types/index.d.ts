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

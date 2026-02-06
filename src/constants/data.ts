// Pricing Packages Data
export const PACKAGES: WebsiteBuildPackage[] = [
  {
    id: "starter",
    name: "Starter Package",
    description:
      "Essential static website for individuals and small portfolios. ",
    price: "R1,500",
    priceNote: "Once-off",
    features: [
      { text: "2-3 Day Delivery", included: true },
      { text: "1 Page Single Scroll", included: true },
      { text: "Basic SEO Setup", included: true },
      { text: "Contact Form", included: true },
      { text: "5 Social Media Icons", included: true },
      { text: "E-commerce Functionality", included: false },
      { text: "Responsive Design", included: true },
      { text: "Ongoing Maintenance", included: false },
      { text: "Free Static Cloud Hosting", included: true },
      { text: "WhatsApp Integration", included: false },
      { text: "Stock Media Included", included: false },
    ],
    trialAccess: {
      label: "LIMITED TRIAL ACCESS",
      items: [{ service: "Priority Support", duration: "4 months free" }],
    },
    ctaLabel: "Select Deal",
    theme: "dark",
  },
  {
    id: "standard",
    name: "Standard Package",
    description:
      "Perfect for small businesses needing a robust multi-page site.",
    price: "R3,500",
    priceNote: "Once-off",
    features: [
      { text: "7-12 Days Delivery", included: true },
      { text: "Up to 6 Pages", included: true },
      { text: "Basic Web animations", included: true },
      { text: "Ecommerce Functionality", included: false },
      { text: "Contact Forms & Google Maps", included: true, badge: "NEW" },
      { text: "Advanced SEO Optimization", included: true },
      { text: "Responsive Design", included: true },
      { text: "Stock Media Included", included: false },
      { text: "Basic ADA Compliance", included: true },
      { text: "10 Social Media Icons", included: true },
      { text: "WhatsApp Integration", included: true },
    ],
    trialAccess: {
      label: "LIMITED TRIAL ACCESS",
      items: [
        {
          service: "Cloud Hosting",
          duration: "6 months Free",
          highlight: true,
        },
        {
          service: "Ongoing Maintenance",
          duration: "6 months free",
          highlight: true,
        },
        { service: "Priority Support", duration: "6 months Free" },
        { service: "Security", duration: "2 months Free" },
      ],
    },
    ctaLabel: "Select Deal",
    theme: "blue",
  },
  {
    id: "premium",
    name: "Premium Package",
    description: "Full-scale business solution with advanced operations.",
    price: "R6,500",
    priceNote: "Once-off",
    features: [
      { text: "12-30 Days Delivery", included: true },
      { text: "Advance SEO Optimization", included: true },
      { text: "E-commerce Ready", included: true },
      { text: "Responsive Design", included: true },
      { text: "Google Business Profile", included: true, badge: "NEW" },
      { text: "Social Media Ready", included: true },
      { text: "Payment Integration", included: true },
      { text: "Social Media Icons", included: true },
      { text: "AI Integrations", included: true },
      { text: "Up to 10 Pages", included: true },
      { text: "Advance ADA Compliance", included: true },
    ],
    trialAccess: {
      label: "LIMITED TRIAL ACCESS",
      items: [
        { service: "Priority Support", duration: "6 month free" },
        {
          service: "Cloud Hosting",
          duration: "6 months Free",
          highlight: true,
        },
        {
          service: "Ongoing Maintenance",
          duration: "6 months free",
          highlight: true,
        },
        { service: "Security", duration: "3 months Free" },
      ],
    },
    highlighted: true,
    highlightLabel: "Most Popular",
    ctaLabel: "Select Deal",
    theme: "green",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom tailored solutions for large scale applications.",
    price: "Custom",
    priceNote: "Contact for specific quote",
    features: [
      { text: "Custom Timeline", included: true },
      { text: "Unlimited Pages", included: true },
      { text: "Custom Web App Development", included: true },
      { text: "Database Design & API Integration", included: true },
      { text: "Google Business Profile", included: true, badge: "NEW" },
      { text: "SLA & 24/7 Support", included: true },
      { text: "Cloud Architecture Setup", included: true },
      { text: "Custom Integrations", included: true },
      { text: "Custom animations", included: true },
    ],
    trialAccess: {
      label: "LIMITED TRIAL ACCESS",
      items: [
        { service: "Security", duration: "6 months free" },
        {
          service: "Ongoing Maintenance",
          duration: "6 months free",
          highlight: true,
        },
        { service: "Priority Support", duration: "6 months free" },
        { service: "Cloud Hosting", duration: "12 months free" },
      ],
    },
    highlighted: true,
    highlightLabel: "BEST VALUE",
    ctaLabel: "Contact Us",
    theme: "purple",
  },
];

export const SERVICESFEATURES: ServiceFeature[] = [
  {
    name: "Priority Support",
    description: "Get faster response times and dedicated assistance",
    tooltip: "24-48 hour response time with dedicated support channel",
  },
  {
    name: "Security",
    description: "SSL certificates, malware scanning, and firewall protection",
    tooltip: "Includes security monitoring, updates, and threat protection",
  },
  {
    name: "Ongoing Maintenance",
    description: "Regular updates, bug fixes, and performance optimization",
    tooltip:
      "Monthly maintenance including plugin updates and compatibility checks",
  },
  {
    name: "Cloud Hosting",
    description: "Fast, reliable hosting on premium infrastructure",
    tooltip: "99.9% uptime guarantee with automatic backups and CDN",
  },
  {
    name: "Performance Monitoring",
    description: "Track uptime, speed, and user experience metrics",
    tooltip: "Real-time monitoring with monthly performance reports",
  },
  {
    name: "Content Updates",
    description: "Regular content changes and adjustments",
    tooltip: "Up to 2 hours of content updates per month",
  },
];

export const CAREPLANS: ServiceCarePlan[] = [
  {
    name: "Starter Package",
    monthlyPrice: "R250",
    yearlyPrice: "R3,000",
    features: {
      "Priority Support": true,
      Security: true,
      "Ongoing Maintenance": true,
      "Cloud Hosting": true,
      "Performance Monitoring": true,
      "Content Updates": true,
    },
  },
  {
    name: "Standard Package",
    monthlyPrice: "R450",
    yearlyPrice: "R5,400",
    features: {
      "Priority Support": true,
      Security: true,
      "Ongoing Maintenance": true,
      "Cloud Hosting": true,
      "Performance Monitoring": true,
      "Content Updates": true,
    },
  },
  {
    name: "Premium Package",
    monthlyPrice: "R650",
    yearlyPrice: "R7,800",
    features: {
      "Priority Support": true,
      Security: true,
      "Ongoing Maintenance": true,
      "Cloud Hosting": true,
      "Performance Monitoring": true,
      "Content Updates": true,
    },
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    features: {
      "Priority Support": true,
      Security: true,
      "Ongoing Maintenance": true,
      "Cloud Hosting": true,
      "Performance Monitoring": true,
      "Content Updates": true,
    },
  },
];

export const FEATURESFAQ: FAQItem[] = [
  {
    question:
      "What's the difference between a one-time website build and a service care plan?",
    answer:
      "A one-time website build is a single payment that covers the design, development, and launch of your website. It includes the initial setup and a limited trial period for certain services. Service care plans are optional monthly or yearly subscriptions that provide ongoing maintenance, security updates, hosting, and support after your trial period ends. You own the website after the build, but the care plan keeps it running smoothly.",
  },
  {
    question: "Do I need a service care plan after my website is built?",
    answer:
      "It's highly recommended but not required. Your website will continue to function after the build, but without ongoing maintenance, you'll be responsible for security updates, backups, performance optimization, and technical issues. Most clients opt for a care plan to ensure their site stays secure, fast, and up-to-date without the technical hassle.",
  },
  {
    question: "What happens to hosting after the free trial period?",
    answer:
      "Each website build package includes free hosting for a specific period (typically 3-12 months depending on your package). After this trial ends, you'll need to either subscribe to a service care plan that includes hosting, or transition to your own hosting provider. We'll notify you well in advance before your trial period expires.",
  },
  {
    question: "Can I upgrade or downgrade my service care plan later?",
    answer:
      "Yes! You can upgrade or downgrade your service care plan at any time. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle. There are no penalties for changing plans, and we'll work with you to find the right fit as your needs evolve.",
  },
  {
    question: "What if I cancel my service care plan?",
    answer:
      "You can cancel your service care plan at any time with 30 days' notice. Your website will remain functional, but you'll lose access to maintenance, security updates, and support. If your plan includes hosting, we'll help you migrate to another provider or you can choose to reactivate your care plan later.",
  },
  {
    question: "Who owns the website after it's built?",
    answer:
      "You own the website completely. Once final payment is made, all source code, designs, and assets belong to you. You're free to host it anywhere, modify it, or work with other developers. The service care plan is simply for ongoing support and maintenance, not ownership.",
  },
  {
    question: "Are add-ons a one-time purchase or recurring?",
    answer:
      "It depends on the add-on. Some services like logo design, SEO setup, or performance optimization are one-time purchases. Others like monthly content updates, email marketing, or advanced security monitoring are recurring subscriptions. Each add-on clearly states whether it's one-time, recurring, or custom pricing.",
  },
  {
    question: "What's included in the 'Limited Trial Access'?",
    answer:
      "Limited Trial Access gives you free access to certain premium services for a set period after your website launches. This typically includes priority support, cloud hosting, ongoing maintenance, and security for 2-12 months depending on your package. It's a way for you to experience the full service without commitment before deciding on a care plan.",
  },
  {
    question: "Can I mix and match packages with add-ons?",
    answer:
      "Absolutely! Our packages are designed to be flexible. You can start with any base package (Starter, Standard, Premium, or Enterprise) and add any combination of add-on services. We'll help you create a custom solution that fits your budget and requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers (EFT), credit/debit cards, and can set up payment plans for larger projects. For recurring service care plans, we typically use automated monthly billing via card or debit order. Enterprise clients can also arrange invoice-based billing.",
  },
];

export const ADDONS: AddOnService[] = [
  {
    id: "logo-design",
    title: "Logo & Brand Identity",
    description:
      "Professional logo design with brand guidelines, color palette, and typography recommendations.",
    pricing: {
      type: "one-time",
      amount: "R2,500 - R8,000",
    },
    complexity: "medium",
    category: "branding",
    features: [
      "3-5 logo concepts",
      "Unlimited revisions",
      "Brand style guide",
      "Multiple file formats",
    ],
  },
  {
    id: "seo-package",
    title: "Advanced SEO Optimization",
    description:
      "Comprehensive SEO strategy including keyword research, on-page optimization, and monthly reporting.",
    pricing: {
      type: "recurring",
      amount: "R3,000/month",
    },
    complexity: "high",
    category: "marketing",
    features: [
      "Keyword research",
      "Technical SEO audit",
      "Content optimization",
      "Monthly analytics reports",
    ],
  },
  {
    id: "content-writing",
    title: "Professional Content Writing",
    description:
      "SEO-optimized content creation for blogs, landing pages, and product descriptions.",
    pricing: {
      type: "recurring",
      amount: "R800/page",
    },
    complexity: "low",
    category: "marketing",
    features: [
      "SEO-optimized copy",
      "Industry research",
      "2 rounds of revisions",
      "Plagiarism-free guarantee",
    ],
  },
  {
    id: "ssl-security",
    title: "Enhanced Security Package",
    description:
      "Advanced security measures including SSL certificates, malware scanning, and DDoS protection.",
    pricing: {
      type: "recurring",
      amount: "R800/month",
    },
    complexity: "medium",
    category: "security",
    features: [
      "SSL certificate setup",
      "Daily malware scans",
      "Firewall configuration",
      "Security monitoring",
    ],
  },
  {
    id: "speed-optimization",
    title: "Performance Optimization",
    description:
      "Technical improvements to boost site speed, including image optimization and caching.",
    pricing: {
      type: "one-time",
      amount: "R3,500",
    },
    complexity: "high",
    category: "performance",
    features: [
      "Image compression",
      "Code minification",
      "Caching setup",
      "CDN integration",
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing Integration",
    description:
      "Set up automated email campaigns with newsletter design and mailing list management.",
    pricing: {
      type: "recurring",
      amount: "R2,500/month",
    },
    complexity: "medium",
    category: "marketing",
    features: [
      "Email template design",
      "Automation setup",
      "List management",
      "Analytics tracking",
    ],
  },
  {
    id: "analytics-setup",
    title: "Analytics & Tracking Setup",
    description:
      "Comprehensive analytics implementation with custom dashboards and conversion tracking.",
    pricing: {
      type: "one-time",
      amount: "R2,000",
    },
    complexity: "medium",
    category: "performance",
    features: [
      "Google Analytics 4 setup",
      "Event tracking",
      "Custom dashboards",
      "Goal configuration",
    ],
  },
  {
    id: "api-integration",
    title: "Third-Party API Integration",
    description:
      "Connect your website with external services like payment gateways, CRMs, or social platforms.",
    pricing: {
      type: "custom",
      amount: "From R5,000",
    },
    complexity: "high",
    category: "integration",
    features: [
      "Custom API development",
      "Data synchronization",
      "Error handling",
      "Documentation",
    ],
  },
  // {
  //   id: "photography",
  //   title: "Professional Photography",
  //   description:
  //     "Custom product photography or corporate headshots for your website and marketing materials.",
  //   pricing: {
  //     type: "one-time",
  //     amount: "R3,500/session",
  //   },
  //   complexity: "low",
  //   category: "branding",
  //   features: [
  //     "2-hour photo session",
  //     "20+ edited photos",
  //     "High-resolution files",
  //     "Commercial usage rights",
  //   ],
  // },
  {
    id: "database-design",
    title: "Custom Database Design",
    description:
      "Design and implement custom database solutions for complex data management needs.",
    pricing: {
      type: "custom",
      amount: "From R8,000",
    },
    complexity: "high",
    category: "integration",
    features: [
      "Database architecture",
      "Data modeling",
      "Query optimization",
      "Backup solutions",
    ],
  },
];

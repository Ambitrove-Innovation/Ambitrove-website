import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Settings, Lock, Share2, AlertTriangle } from "lucide-react";

const PolicyAccordion = () => {
  const policySections = [
    {
      id: "information-collect",
      icon: FileText,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      title: "1. Information We Collect",
      content: (
        <div className="space-y-4 ">
          <p className="leading-relaxed ">
            We collect information to provide better services to all our users.
            This includes:
          </p>

          <div className="space-y-3 ">
            <div>
              <p className="font-semibold ">
                Personal Identification:
              </p>
              <p className="leading-relaxed">
                Name, email address, phone number, and company details when you
                sign up for our services.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">
                Technical Data:
              </p>
              <p className="leading-relaxed">
                IP address, browser type, operating system, and interaction
                logs.
              </p>
            </div>

            <div>
              <p className="font-semibold  mb-2">Usage Data:</p>
              <p className="leading-relaxed">
                Information on how you interact with our SaaS dashboards,
                feature usage frequency, and error logs.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "how-use-data",
      icon: Settings,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      title: "2. How We Use Your Data",
      content: (
        <div className="space-y-4 ">
          <p className="leading-relaxed">
            We use the information we collect or receive to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your transactions and manage projects</li>
            <li>Communicate with you about services, updates, and marketing</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze usage patterns and optimize user experience</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>
        </div>
      ),
    },
    {
      id: "storage-security",
      icon: Lock,
      iconBg: "bg-teal-50",
      iconColor: "text-teal-500",
      title: "3. Data Storage & Security",
      content: (
        <div className="space-y-4 ">
          <p className="leading-relaxed">
            We implement appropriate technical and organizational security
            measures to protect your personal information, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication protocols</li>
            <li>Employee training on data protection practices</li>
            <li>Secure cloud infrastructure and backups</li>
          </ul>
          <p className="leading-relaxed mt-4">
            However, no method of transmission over the internet is 100% secure.
            While we strive to protect your information, we cannot guarantee
            absolute security.
          </p>
        </div>
      ),
    },
    {
      id: "third-party",
      icon: Share2,
      iconBg: "bg-pink-50",
      iconColor: "text-pink-500",
      title: "4. Third-Party Disclosure",
      content: (
        <div className="space-y-4 ">
          <p className="leading-relaxed">
            We do not sell, trade, or rent your personal information to third
            parties. We may share information with:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
            <li>Service providers who assist in operating our platform</li>
            <li>Cloud infrastructure providers (AWS, Firebase, Vercel)</li>
            <li>Payment processors for transaction handling</li>
            <li>Analytics services to improve our offerings</li>
          </ul>
          <p className="leading-relaxed mt-4">
            All third-party partners are contractually obligated to maintain the
            confidentiality and security of your information and may only use it
            for the purposes we specify.
          </p>
        </div>
      ),
    },
    {
      id: "your-rights",
      icon: AlertTriangle,
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      title: "5. Your Rights Under POPIA",
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            As a South African company, we comply with the Protection of
            Personal Information Act (POPIA). You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
            <li>Access your personal information we hold</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the Information Regulator</li>
          </ul>
          <p className="leading-relaxed mt-4">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:contact@ambitrove.com"
              className="text-teal-600 hover:text-teal-700 underline font-medium">
              contact@ambitrove.com
            </a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4 fade-in">
      <Accordion
        type="single"
        collapsible
        defaultValue="information-collect"
        className="space-y-4">
        {policySections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            id={section.id}
            className="bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition overflow-hidden">
            <AccordionTrigger className="px-6 py-5 hover:bg-neutral-800 data-[data-state=open]]:bg-neutral-900 transition">
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full ${section.iconBg} flex items-center justify-center shrink-0`}>
                  <section.icon className={`w-5 h-5 ${section.iconColor}`} />
                </div>
                <span className="text-left font-semibold font-inter ">
                  {section.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2">
              {section.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PolicyAccordion;

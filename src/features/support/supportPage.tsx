import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Book,
  FileText,
  Users,
  ExternalLink,
} from "lucide-react";
import SupportMetaData from "./components/SupportMetaData";
import HeroSection from "./components/HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const SupportPage = () => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".fade-in", {
      opacity: 0,
      y: 70,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const faqs: FAQItem[] = [
    {
      question: "What services does Ambitrove Innovation offer?",
      answer:
        "We specialize in Custom Software Development, SaaS Product Development, Web3 & Emerging Tech Solutions, Business Technology Consulting, and Ongoing Maintenance & Support. We build scalable web, mobile, and desktop applications tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a full SaaS platform could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing based on project requirements. This includes project-based pricing, monthly retainers for ongoing support, and consulting hourly rates. Contact us for a customized quote tailored to your specific needs and budget.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes! We offer comprehensive post-launch support including bug fixes, performance optimization, feature updates, and technical assistance. We provide both one-time maintenance packages and ongoing support retainers.",
    },
    {
      question: "Can you work with existing codebases?",
      answer:
        "Absolutely. Our team is experienced in taking over existing projects, performing code audits, refactoring legacy code, and implementing new features while maintaining system stability and performance.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with modern tech stacks including React, TypeScript, Python, Node.js, and cloud platforms like Netlify, Vercel, and Firebase. We also specialize in Web3 technologies including blockchain and smart contracts.",
    },
    {
      question: "Do you sign NDAs and protect intellectual property?",
      answer:
        "Yes, we take confidentiality seriously. We're happy to sign NDAs before discussing project details. All intellectual property created for your project belongs to you upon project completion and final payment.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client demos. Our agile methodology ensures transparency and allows for iterative improvements based on your feedback.",
    },
  ];

  return (
    <>
      <SupportMetaData />
      <HeroSection />

      {/* Quick Support Options */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Email Support */}
          <div className="bg-linear-to-br from-blue-500/10 to-blue-600/10 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get detailed responses to your inquiries within 24 hours
            </p>

            <a
              href="mailto:contact@ambitrove.com"
              className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2">
              contact@ambitrove.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Phone Support */}
          <div className=" bg-linear-to-br from-green-500/10 to-green-600/10 p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
            <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Speak directly with our team during business hours
            </p>

            <a
              href="tel:+27761972861"
              className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2">
              +27 76 197 2861
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Business Hours */}
          <div className=" bg-linear-to-br from-purple-500/10 to-purple-600/10 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
            <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Business Hours
            </h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4 cursor-pointer">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full fade-in ">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="fade-in bg-neutral-900 rounded-xl border border-neutral-800 mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-5 hover:bg-neutral-800/50 text-left">
                    <span className="text-white font-semibold pr-4 cursor-pointer">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-gray-300 border-t border-neutral-800 pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto fade-in">
          <div className="bg-linear-to-r from-blue-500/10 to-teal-500/10 p-8 md:p-12 rounded-2xl border border-blue-500/20 text-center">
            <MessageSquare className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to
              assist.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all">
              Contact Support
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 px-6 md:px-12 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="fade-in">
            <Book className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              View Docs →
            </a>
          </div>

          <div className="fade-in">
            <FileText className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Blog</h3>
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Read Blog →
            </a>
          </div>

          <div className="fade-in">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <a href="#" className="text-green-400 hover:text-green-300">
              Join Community →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;

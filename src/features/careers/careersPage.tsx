import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import CareersMetaData from "./components/CareersMetaData";
import WhyJoinUs from "./components/WhyJoinUs";
import CareersCTA from "./components/CareersCTA";

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".fade-in", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const jobListings: JobListing[] = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Pretoria, SA (Hybrid)",
      type: "Full-Time",
      salary: "Competitive",
      description:
        "Join our engineering team to build scalable SaaS products and innovative digital solutions. You'll work with modern tech stacks and collaborate with talented developers.",
      requirements: [
        "5+ years of experience in full-stack development",
        "Proficiency in React, TypeScript, Node.js",
        "Experience with cloud platforms (AWS, Firebase, Vercel)",
        "Strong understanding of software architecture",
        "Excellent problem-solving skills",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Pretoria, SA (Remote)",
      type: "Full-Time",
      salary: "Competitive",
      description:
        "Create beautiful, intuitive user experiences for our clients' products. You'll work closely with developers and stakeholders to bring designs to life.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe XD, or similar tools",
        "Strong portfolio showcasing your work",
        "Understanding of design systems and best practices",
        "Excellent communication skills",
      ],
    },
    {
      id: 3,
      title: "Junior Software Engineer",
      department: "Engineering",
      location: "Pretoria, SA (On-site)",
      type: "Full-Time",
      salary: "Entry Level",
      description:
        "Start your career in tech with Ambitrove. We're looking for passionate junior developers eager to learn and grow in a supportive environment.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Basic knowledge of JavaScript, React, or Python",
        "Strong willingness to learn and adapt",
        "Good problem-solving abilities",
        "Team player with good communication skills",
      ],
    },
  ];

  return (
    <>
      {/* SEO Metadata */}
      <CareersMetaData />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Join Us */}
      <WhyJoinUs />

      {/* Job Listings */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 fade-in">
            Open Positions
          </h2>
          <div className="space-y-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className=" bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-teal-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all whitespace-nowrap">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-neutral-900 rounded-2xl max-w-2xl w-full p-8 relative border border-neutral-800 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-4">
              {selectedJob.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {selectedJob.department}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {selectedJob.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {selectedJob.type}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  About the Role
                </h3>
                <p className="text-gray-300">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href={`/contact?subject=Application: ${encodeURIComponent(
                    selectedJob.title
                  )}`}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-gray-400 text-sm text-center mt-3">
                  Or email your CV to{" "}
                  <a
                    href={`mailto:contact@ambitrove.com?subject=Application: ${encodeURIComponent(
                      selectedJob.title
                    )}`}
                    className="text-teal-400 hover:text-teal-300 underline">
                    contact@ambitrove.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CareersCTA />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CareersPage;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Timeline,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const OurJourney = () => {
  useGSAP(() => {
    gsap.from(".pop-in", {
      opacity: 0, // start invisible
      y: 30, // start slightly below
      scale: 0.95, // start a bit smaller
      duration: 0.8, // animation duration
      ease: "back.out(1.7)", // bouncy pop effect
      stagger: 0.2, // stagger multiple elements
    });
  }, []);

  const items = [
    {
      id: 1,
      date: "18 July 2025",
      title: "Ambitrove company initial creation.",
      description: "Writing company documents & legal structure.",
    },
    {
      id: 2,
      date: "August 2025",
      title: "Building core team and foundational",
      description: "Launched first Full-stack project.",
    },
    {
      id: 3,
      date: "August 2025",
      title: "Designed Company's official website.",
      description:
        "Created a modern and user-friendly website to showcase our services.",
    },
    {
      id: 4,
      date: "September 2025",
      title: "Networking establishing social media",
      description: "Expanding operations and reaching new markets",
      isFuture: true,
    },
    {
      id: 5,
      date: "October 2025",
      title: "Connecting & working with clients.",
      description: "Collecting project details and setting up agreements",
    },
    {
      id: 6,
      date: "November, 2025",
      title: "Client project completions",
      description: "And announcing big milestone ",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12" id="ourJourney">
      <div className="bg-gradient-radial from-green-400 text-white min-h-screen p-8 md:p-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Timeline */}
          <div className="pop-in">
            {/* Header */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-bold">Our Journey</h2>
            </div>

            {/* Timeline */}
            <Timeline className="pop-in" defaultValue={3}>
              {items.map((item) => (
                <TimelineItem
                  key={item.id}
                  step={item.id}
                  className="w-[calc(50%-1.5rem)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2">
                  <TimelineHeader>
                    <TimelineSeparator />
                    <TimelineDate>{item.date}</TimelineDate>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineTitle>{item.description}</TimelineTitle>
                    <TimelineIndicator />
                  </TimelineHeader>
                </TimelineItem>
              ))}
            </Timeline>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className="space-y-8 fade-in">
            {/* Mission Section */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-6">Our Mission.</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses and entrepreneurs by delivering innovative
                digital products, providing expert consulting services, and
                fostering a collaborative ecosystem where creativity,
                technology, and business solutions converge driving impactful
                software development and sustainable growth in South Africa and
                globally.
              </p>
            </div>

            {/* Vision Section */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-6">Our Vision.</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  To establish Ambitrove as a leading South African technology
                  powerhouse, recognized for pioneering cutting-edge software
                  solutions, advancing the digital economy, and shaping the
                  future of tech in Africa through collaboration, excellence,
                  and bold innovation.
                </p>
                <p>
                  We combine agility and affordability with close partnerships,
                  using open-source technologies like React.js, Python, and
                  cloud platforms (Netlify, Vercel, Firebase) to deliver
                  high-impact results.
                </p>
                <p>
                  From custom software development and business consulting to
                  ongoing maintenance and collaborative product building, we're
                  here to help you scale while building lasting value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;

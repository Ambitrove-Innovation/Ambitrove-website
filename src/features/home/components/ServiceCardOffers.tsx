import { Badge } from "@/components/ui/badge";

const ServiceCardOffers = () => {
  const services: CompanyService[] = [
    {
      image: "/images/pexels-harold-vasquez-853421-2653362.jpg",
      title: "Software Development",
      description: "Turn your ideas into scalable web, mobile, and desktop apps from concept to launch, tailored for your business needs.",
      alt:"Code on laptop screen",
      badgeTitle:"Available!"
    },
    {
      image: "/images/pexels-nappy-935977.jpg",
      title: "SaaS Product Development",
      description: "Build and deploy powerful Software-as a Service platforms with seamless backend, frontend, and cloud integration to drive growth.",
      alt:"Two business professionals representing SaaS product development.",
      badgeTitle:"New!"
    },
    {
      image: "/images/Web3-Banking-Defined.avif",
      title: "Web3 & Emerging Tech",
      description: "Innovate with decentralized apps, smart contracts, and blockchain solutions for the future of finance, logistics, and beyond.",
      alt:"An abstract digital visualization of interconnected nodes and data streams, symbolizing blockchain technology, decentralized networks, and emerging tech.",
      badgeTitle:"New!"
    },
    {
      image: "/images/pexels-pavel-danilyuk-7658414.jpg",
      title: "Business Consulting",
      description: "Get expert advice on digital transformation, plus ongoing maintenance to keep your tech running smoothly and scalably.",
      alt:"A professional consultation taking place at a table.",
      badgeTitle:"Available!"
    }
  ];

  return (
    <div className=" text-white px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24 min-h-screen" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Left column - Title and Services List */}
          <div className="xl:col-span-1 mb-8 xl:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 md:-translate-x-4 leading-tight ">
              What We Offer.
            </h2>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="service_card">
                <div className="title_wrapper">
                  <span className="bold_title">Custom</span>
                  <span className="card_title">Software Development.</span>
                </div>
              </div>
              
              <div className="service_card">
                <div className="title_wrapper">
                  <span className="bold_title">SaaS</span>
                  <span className="card_title">Product Development.</span>
                </div>
              </div>
              
              <div className="service_card ">
                <div className="title_wrapper">
                  <span className="bold_title">Web3</span>
                  <span className="card_title">& Emerging Tech.</span>
                </div>
              </div>
              
              <div className="service_card">
                <div className="title_wrapper">
                  <span className="bold_title">Business</span>
                  <span className="card_title">Consulting & Support.</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right columns - Service Cards */}
          <div className="xl:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-60 backdrop-blur-sm border border-gray-600 rounded-2xl sm:rounded-3xl hover:bg-opacity-80 transition-all duration-300 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col"
                >
                <Badge className="translate-x-68 sm:translate-x-70 translate-y-3.5 md:translate-x-68 lg:md:translate-x-80 -rotate-4 z-10 outline-green-400 outline-1 text-green-400 ">{service.badgeTitle}</Badge>
                  
                 <img className="w-fit h-fit object-contain rounded-t-2xl -translate-y-6 sm:rounded-t-3xl" loading="lazy" decoding="async" src={service.image} alt={service.alt} /> 

                  <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-3 sm:mb-4 text-black flex-shrink-0 px-4 pt-4">
                    {service.title}
                  </h3>
                  <p className="text-black leading-relaxed text-sm sm:text-base flex-grow px-4 pb-4">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardOffers;
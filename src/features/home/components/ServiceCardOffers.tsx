import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/constants/data";

const ServiceCardOffers = () => {
  return (
    <div
      className=" text-white px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24 min-h-screen"
      id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Left column - Title and Services List */}
          <div className="xl:col-span-1 mb-8 xl:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter mb-8 sm:mb-10 md:mb-12 md:-translate-x-4 leading-tight ">
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
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-60 backdrop-blur-sm border border-gray-600 rounded-2xl sm:rounded-3xl hover:bg-opacity-80 transition-all duration-300 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl min-h-[200px] sm:min-h-[220px] md:min-h-60 flex flex-col group">
                  <Badge className="absolute top-4 right-4 -rotate-3 z-10 outline-green-400 outline-1 text-green-400 bg-white/10 backdrop-blur-md">
                    {service.badgeTitle}
                  </Badge>

                  {service.image && (
                    <img
                      className="w-full h-48 object-cover rounded-t-2xl sm:rounded-t-3xl mb-4"
                      loading="lazy"
                      decoding="async"
                      src={service.image}
                      alt={service.alt || service.title}
                    />
                  )}

                  <div className="px-5 pb-6 flex flex-col grow">
                    <h3 className="text-xl font-bold font-inter mb-3 text-black">
                      {service.title}
                    </h3>
                    <p className="text-black/80 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
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
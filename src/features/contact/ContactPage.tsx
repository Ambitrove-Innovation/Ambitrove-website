import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  LoaderCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import SEO from "@/components/SEO";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = import.meta.env.VITE_SERVICE_ID!;
    const templateID = import.meta.env.VITE_TEMPLATE_ID!;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY!;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          subject: formData.subject,
          name: formData.name,
          email: formData.email,
          number: formData.phone,
          message: formData.message,
        },
        {
          publicKey: publicKey,
        },
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Something went wrong while sending your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className=" text-gray-300 py-20 px-6"
      id="contact"
      aria-labelledby="contact-heading">
      <SEO 
        title="Contact Us"
        description="Get in touch with Ambitrove Innovation. Reach out for software development, SaaS, or digital solutions. Let's collaborate to build South Africa's tech future."
        url="/contact"
        keywords="Ambitrove contact, tech company South Africa, Ambitrove Innovation, contact form, Kamogelo Mogasoa, Dean Meyer"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-inter text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to bring your project to life? We'd love to hear from you.
            Reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 font-inter">
                Contact Information
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                A South African technology company building scalable software,
                SaaS products, and digital solutions for the evolving world.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition group">
                <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition">
                  <Mail
                    aria-hidden="true"
                    className="text-blue-500"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a
                    href="mailto:contact@ambitrove.com"
                    className="text-gray-400 hover:text-blue-400 transition break-all">
                    contact@ambitrove.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition group">
                <div className="bg-green-500/10 p-3 rounded-lg group-hover:bg-green-500/20 transition">
                  <Phone className="text-green-500" size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+27761972861"
                    className="text-gray-400 hover:text-green-400 transition">
                    +27 76 197 2861
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition group">
                <div className="bg-purple-500/10 p-3 rounded-lg group-hover:bg-purple-500/20 transition">
                  <MapPin className="text-purple-500" size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-400">Pretoria, South Africa</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-neutral-800/30 p-6 rounded-lg border border-neutral-800">
              <h4 className="text-white font-semibold mb-4 font-inter">
                Business Hours
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 order-1 lg:order-2">
            <h3 className="text-2xl font-semibold text-white mb-6 font-inter">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 animate-in fade-in zoom-in duration-300">
                <CheckCircle className="text-green-500 mb-4" size={64} />
                <h4 className="text-xl font-semibold text-white mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-400 text-center">
                  Your message has been sent successfully. We'll get back to you
                  soon.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-blue-400 hover:text-blue-300 transition underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="form-name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-name"
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form-email"
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                      placeholder="+27..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-subject"
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition resize-none"
                    placeholder="Tell us about your project or inquiry..."></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-800 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20 active:scale-[0.98]">
                  {loading ? (
                    <>
                      <LoaderCircle className="animate-spin" size={20} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

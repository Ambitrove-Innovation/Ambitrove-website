import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  LoaderCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { Turnstile } from "@marsidev/react-turnstile";
import Footer from "@/components/Footer";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Verify Turnstile token
    if (!turnstileToken) {
      alert("Please complete the security verification");
      return;
    }

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
        }
      );

      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      alert("Error: " + JSON.stringify(err));
      setSubmitted(false);
      setLoading(false);
    }

    setTimeout(() => {
      setSubmitted(false);
      setTurnstileToken(""); // Reset token
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      className=" text-gray-300 py-20 px-6"
      id="contact"
      aria-labelledby="contact-heading">
      <title>Contact Us</title>
      <meta
        name="description"
        content="Get in touch with Ambitrove Innovation. Reach out for software development, SaaS, or digital solutions. Let's collaborate to build South Africa's tech future."
      />
      <meta
        name="keywords"
        content="Ambitrove contact, tech company South Africa, Ambitrove Innovation, contact form, Kamogelo Mogasoa, Dean Meyer"
      />
      <meta property="og:title" content="Contact | Ambitrove Innovation" />
      <meta
        property="og:description"
        content="Connect with Ambitrove Innovation to discuss your next project or partnership."
      />
      <meta property="og:url" content="https://ambitrove.com/contact" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://ambitrove.com/contact" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to bring your project to life? We'd love to hear from you.
            Reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                A South African technology company building scalable software,
                SaaS products, and digital solutions for the evolving world.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition">
                <div className="bg-blue-500/10 p-3 rounded-lg">
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
                    className="text-gray-400 hover:text-blue-500 transition">
                    contact@ambitrove.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <Phone className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>

                  <a
                    href="tel:+27761972861"
                    className="text-gray-400 hover:text-green-500 transition">
                    +27 76 197 2861
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <MapPin className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-400">Pretoria, South Africa</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient p-6 rounded-lg border border-neutral-800">
              <h4 className="text-white font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
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
          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 mb-12 md:mb-32">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="text-green-500 mb-4" size={64} />
                <h4 className="text-xl font-semibold text-white mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-400 text-center">
                  Your message has been sent successfully. We'll get back to you
                  soon.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </div>
                  <input
                    required={true}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </div>
                  <input
                    required={true}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </div>
                  <input
                    required={true}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </div>
                  <input
                    required={true}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition resize-none"
                    placeholder="Tell us about your project..."></textarea>
                </div>

                {/* Cloudflare Turnstile Widget */}
                <div className="flex justify-center py-2">
                  <Turnstile
                  className="rounded-md"
                    siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY!}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken("")}
                    onExpire={() => setTurnstileToken("")}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!turnstileToken || loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center space-x-2">
                  {loading ? (
                    <span>
                      <LoaderCircle className="animate-spin" size={18} />
                    </span>
                  ) : (
                    <div className="flex flex-row gap-2">
                      <span>Send Message</span>
                      <Send size={18} />
                    </div>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;

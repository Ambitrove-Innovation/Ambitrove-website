import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageErrorRedirect from "./features/pageNotFound/PageErrorRedirect";
import { Loader2 } from "lucide-react";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loading pages for performance optimization
const HomePage = lazy(() => import("./features/home/HomePage"));
const AboutPage = lazy(() => import("./features/about/AboutPage"));
const ContactPage = lazy(() => import("./features/contact/ContactPage"));
const PrivacyPage = lazy(() => import("./features/policy/PrivacyPage"));
const SupportPage = lazy(() => import("./features/support/SupportPage"));
const CareersPage = lazy(() => import("./features/careers/CareersPage"));
const BlogPage = lazy(() => import("./features/blog/BlogPage"));
const ServicesPage = lazy(() => import("./features/services/ServicesPage"));

// Simple loading fallback
const PageLoader = () => (
  <div className="flex h-[60vh] w-full items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-teal-500" />
  </div>
);

const Routespath = () => {
  return (
    <Router>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded-md focus:shadow-lg">
        Skip to content
      </a>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="grow" tabIndex={-1}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="*" element={<PageErrorRedirect />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Routespath;

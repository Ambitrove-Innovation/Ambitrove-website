import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Calendar, Clock, ArrowRight, Tag, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/types";
import { blogPosts } from "./data/blogPosts";
import NewLetterCTA from "./components/NewLetterCTA";
import HeroSection from "./components/HeroSection";
import SEO from "@/components/SEO";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".fade-in", {
      opacity: 0,
      y: 50,
      stagger: 0.25,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const categories = [
    "All",
    "Technology",
    "Development",
    "Web3",
    "Business",
    "Design",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Blogs"
        description="Read the latest insights on technology, software development, Web3, and digital innovation from the Ambitrove team."
        url="/blog"
        image="/images/board-meeting.webp"
        keywords="Ambitrove blog, tech insights, software development, Web3, South Africa tech"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Category Filter */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white"
                    : "bg-neutral-900 text-gray-300 hover:bg-neutral-800 border border-neutral-800"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === "All" && (
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-6xl mx-auto fade-in">
            <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-teal-500/50 transition-all">
              <div className="grid md:grid-cols-2 gap-6">
                <Link to={`/blog/${blogPosts[0].slug}`} className="relative h-64 md:h-full block overflow-hidden group">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </Link>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {blogPosts[0].category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    <Link to={`/blog/${blogPosts[0].slug}`} className="hover:text-teal-400 transition-colors">
                      {blogPosts[0].title}
                    </Link>
                  </h2>
                  <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      By {blogPosts[0].author}
                    </span>
                    <Link
                      to={`/blog/${blogPosts[0].slug}`}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .slice(selectedCategory === "All" ? 1 : 0)
              .map((post) => (
                <article
                  key={post.id}
                  className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-teal-500/50 transition-all hover:scale-105 duration-300">
                  <Link to={`/blog/${post.slug}`} className="relative h-48 block overflow-hidden group">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-neutral-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-teal-400 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        By {post.author}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-sm font-medium transition-all">
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-neutral-900 rounded-2xl max-w-4xl w-full my-8 relative border border-neutral-800">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10 bg-neutral-800 rounded-full p-2">
              <X className="w-5 h-5" />
            </button>

            {/* Header Image */}
            <div className="relative h-64 md:h-80 rounded-t-2xl overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </span>
                <span>By {selectedPost.author}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {selectedPost.title}
              </h1>

              <div className="prose prose-invert prose-lg max-w-none">
                {selectedPost.content?.split("\n").map(
                  (paragraph, index) =>
                    paragraph.trim() && (
                      <p
                        key={index}
                        className="text-gray-300 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ),
                )}
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-6 border-t border-neutral-800">
                <p className="text-gray-400 text-sm">
                  Enjoyed this article? Share your thoughts with us on our{" "}
                  <Link
                    to="/contact"
                    className="text-teal-400 hover:text-teal-300 underline">
                    contact page
                  </Link>{" "}
                  or email{" "}
                  <a
                    href="mailto:contact@ambitrove.com"
                    className="text-teal-400 hover:text-teal-300 underline">
                    contact@ambitrove.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <NewLetterCTA />
    </>
  );
};

export default BlogPage;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Calendar, Clock, ArrowRight, Tag, X } from "lucide-react";
import { useState } from "react";
import BlogPageMetaData from "./components/BlogPageMetaData";
import NewLetterCTA from "./components/NewLetterCTA";
import HeroSection from "./components/HeroSection";

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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of SaaS Development in South Africa",
      excerpt:
        "Exploring how South African tech companies are revolutionizing the SaaS landscape with innovative solutions and local expertise.",
      category: "Technology",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "/images/pexels-nappy-935977.jpg",
      author: "Kamogelo Mogasoa",
      content: `South Africa's technology sector is experiencing unprecedented growth, with SaaS companies leading the charge. Local developers are creating solutions that address both continental and global challenges.

The rise of cloud computing has democratized access to enterprise-grade software, allowing South African startups to compete on the global stage. Companies like Ambitrove Innovation are pioneering this movement by building scalable, affordable solutions tailored to African businesses.

Key trends shaping the future:
• Increased investment in local tech talent
• Growing adoption of cloud-native architectures
• Focus on solving uniquely African problems
• Integration with mobile-first platforms
• Emphasis on data sovereignty and security

As internet penetration continues to grow across the continent, we're seeing a surge in demand for localized SaaS products. This presents an enormous opportunity for South African developers to create solutions that resonate with African users while maintaining global standards.

The future is bright for SaaS in South Africa, and we're proud to be part of this transformation.`,
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with React",
      excerpt:
        "A comprehensive guide to building performant and scalable web applications using React, TypeScript, and modern best practices.",
      category: "Development",
      date: "January 10, 2025",
      readTime: "8 min read",
      image: "/images/pexels-harold-vasquez-853421-2653362.jpg",
      author: "Dean Meyer",
      content: `React has become the de facto standard for building modern web applications, but creating truly scalable applications requires more than just knowing the basics. In this guide, we explore advanced patterns and best practices that separate good React applications from great ones. From proper state management to code splitting and lazy loading, we cover everything you need to build production-ready applications.

Key topics covered:
• Component architecture and composition
• State management with Context and Redux
• Performance optimization techniques
• Code splitting and lazy loading
• TypeScript integration best practices
• Testing strategies for React applications

We also discuss real-world examples from our projects at Ambitrove, where we've built scalable SaaS platforms serving thousands of users. These lessons learned can help you avoid common pitfalls and build better applications from day one.Whether you're building a simple dashboard or a complex enterprise application, these principles will serve you well.`,
    },
    {
      id: 3,
      title: "Web3: The Next Evolution of the Internet",
      excerpt:
        "Understanding blockchain technology, decentralized applications, and how Web3 is reshaping the digital landscape.",
      category: "Web3",
      date: "January 5, 2025",
      readTime: "6 min read",
      image: "/images/Web3-Banking-Defined.avif",
      author: "Emmanuel Bediako",
      content: `Web3 represents a fundamental shift in how we think about the internet. Moving from centralized platforms to decentralized networks powered by blockchain technology opens up new possibilities for users and developers alike. At its core, Web3 is about ownership and control. Users own their data, their digital assets, and their online identity. This paradigm shift has profound implications for everything from finance to social media to gaming.

Understanding Web3 fundamentals:
• Blockchain technology and smart contracts
• Decentralized applications (dApps)
• Cryptocurrency and digital assets
• NFTs and digital ownership
• Decentralized finance (DeFi)
• Web3 wallets and security

For African businesses, Web3 presents unique opportunities. Cross-border payments become faster and cheaper, digital identity solutions can reach the unbanked, and new economic models emerge that benefit creators directly. At Ambitrove, we're exploring how Web3 technologies can solve real problems for our clients while maintaining user-friendly experiences that don't require deep technical knowledge.`,
    },
    {
      id: 4,
      title: "From Idea to Launch: Our Product Development Process",
      excerpt:
        "An inside look at how Ambitrove transforms client ideas into successful digital products through our proven development methodology.",
      category: "Business",
      date: "December 28, 2024",
      readTime: "7 min read",
      image: "/images/pexels-pavel-danilyuk-7658414.jpg",
      author: "Kamogelo Mogasoa",
      content: `Turning an idea into a successful digital product requires more than just good code. It demands a structured approach that balances creativity with discipline, innovation with practicality. At Ambitrove, we've refined our product development process through dozens of successful projects. Our methodology ensures clear communication, predictable timelines, and products that exceed expectations.

Our Development Process:
1. Discovery Phase - Understanding your vision and requirements
2. Planning & Architecture - Defining scope and technical approach
3. Design & Prototyping - Creating user-centered experiences
4. Development Sprints - Building in iterative cycles
5. Testing & Quality Assurance - Ensuring reliability
6. Launch & Deployment - Taking your product live
7. Maintenance & Support - Ongoing optimization

Each phase involves close collaboration with our clients. We believe in transparency and regular communication, ensuring you're never left wondering about progress or direction. This process has helped us deliver everything from simple business websites to complex SaaS platforms. The key is flexibility - we adapt our approach to each project's unique needs while maintaining high standards throughout.`,
    },
    {
      id: 5,
      title: "The Importance of UI/UX in Modern Software",
      excerpt:
        "Why user experience matters more than ever and how great design drives product success in competitive markets.",
      category: "Design",
      date: "December 20, 2024",
      readTime: "5 min read",
      image: "/images/team office.jpg",
      author: "Dean Meyer",
      content: `In today's competitive digital landscape, having a functional product isn't enough. Users expect intuitive, beautiful interfaces that make complex tasks feel simple. Great UI/UX design is the difference between a product users love and one they abandon. It affects everything from user acquisition to retention to word-of-mouth marketing.

Why UI/UX Matters:
• First impressions are lasting impressions
• Good design reduces support costs
• Intuitive interfaces increase productivity
• Beautiful design builds trust and credibility
• User-centered design drives engagement 

We've seen countless examples where improving the UI/UX of an existing product led to dramatic increases in user satisfaction and business metrics. Sometimes the difference between success and failure isn't the technology - it's how users interact with it. At Ambitrove, we approach design as a problem-solving discipline. Every design decision is backed by user research, usability testing, and data. We don't just make things look good - we make them work better. Investing in quality UI/UX isn't optional anymore. It's essential for any product that wants to succeed in today's market.`,
    },
    {
      id: 6,
      title: "Data-Driven Decision Making for Startups",
      excerpt:
        "How to leverage data analytics and business intelligence to make informed decisions that drive growth and innovation.",
      category: "Business",
      date: "December 15, 2024",
      readTime: "6 min read",
      image: "/images/board-meeting.jpg",
      author: "Phemelo Mokone",
      content: `In the startup world, every decision can make or break your business. Data-driven decision making removes guesswork and provides objective insights that guide strategy. Many startups fail not because they lack good ideas, but because they make decisions based on assumptions rather than data. Building a culture of data-driven decision making from day one sets you up for sustainable growth.

Key Areas to Track:
• User acquisition and retention metrics
• Product usage patterns and engagement
• Financial performance and burn rate
• Customer feedback and satisfaction scores
• Market trends and competitive analysis

The tools and techniques for data analysis are more accessible than ever. From simple analytics platforms to sophisticated business intelligence tools, startups can now access insights that were once only available to large enterprises. But data is only valuable if you act on it. The best startups combine quantitative data with qualitative insights from customer conversations. They test hypotheses, measure results, and iterate quickly based on what they learn. At Ambitrove, we help our clients implement analytics from the start, ensuring they have the insights needed to make smart decisions as they scale.`,
    },
  ];

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
      {/* SEO Metadata */}
      <BlogPageMetaData />

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
                <div className="relative h-64 md:h-full">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
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
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      By {blogPosts[0].author}
                    </span>
                    <button
                      onClick={() => setSelectedPost(blogPosts[0])}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-neutral-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
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
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        By {post.author}
                      </span>
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-sm font-medium transition-all">
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </button>
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
                  Enjoyed this article? Share your thoughts with us at{" "}
                  <a
                    href="/contact"
                    className="text-teal-400 hover:text-teal-300 underline">
                    contact@ambitrove.com
                  </a>
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

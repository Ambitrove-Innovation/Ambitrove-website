import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Check,
  Tag,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "./data/blogPosts";
import SEO from "@/components/SEO";
import NewLetterCTA from "./components/NewLetterCTA";

const BlogPostDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".blog-animate", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`"${post.title}" by ${post.author} on Ambitrove`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        keywords={`${post.category}, Ambitrove blog, tech insights, software development, ${post.title}`}
      />

      <article className="min-h-screen py-16 px-6 md:px-12 text-gray-200">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs & Back Button */}
          <div className="mb-8 flex items-center justify-between blog-animate">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors text-sm group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-400 truncate max-w-[200px]">{post.category}</span>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-10 blog-animate">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/30">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light mb-8">
              {post.excerpt}
            </p>

            {/* Author Bar & Social Share */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-600/30 border border-teal-500/40 flex items-center justify-center text-teal-300 font-bold text-sm">
                  <User className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author}</p>
                  <p className="text-xs text-teal-400">Ambitrove Innovation Team</p>
                </div>
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 mr-1 flex items-center gap-1">
                  <Share2 className="w-3.5 h-3.5" /> Share:
                </span>
                <button
                  onClick={handleShareTwitter}
                  aria-label="Share on X"
                  className="px-2.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-gray-300 hover:text-white text-xs font-medium transition-colors">
                  X
                </button>
                <button
                  onClick={handleShareLinkedIn}
                  aria-label="Share on LinkedIn"
                  className="px-2.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-gray-300 hover:text-white text-xs font-medium transition-colors">
                  LinkedIn
                </button>
                <button
                  onClick={handleCopyLink}
                  aria-label="Copy article link"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 text-xs font-medium border border-teal-500/30 transition-colors">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-teal-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <span>Copy link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 mb-12 shadow-2xl blog-animate max-h-[460px]">
            <img
              src={post.image}
              alt={post.title}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center max-h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-invert prose-lg max-w-none space-y-6 leading-relaxed text-gray-300 blog-animate">
            {post.content?.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("•") || trimmed.includes("\n•")) {
                const items = trimmed.split("\n").filter((l) => l.trim().length > 0);
                const titleLine = !items[0].startsWith("•") ? items.shift() : null;

                return (
                  <div key={idx} className="my-6 space-y-3">
                    {titleLine && (
                      <h3 className="text-xl font-bold text-white tracking-wide">
                        {titleLine}
                      </h3>
                    )}
                    <ul className="space-y-2.5 bg-neutral-900/50 p-6 rounded-xl border border-neutral-800/80">
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3 text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2.5 shrink-0" />
                          <span>{item.replace(/^[•\s]+/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              if (trimmed.match(/^\d+\./m)) {
                const items = trimmed.split("\n").filter((l) => l.trim().length > 0);
                const titleLine = !items[0].match(/^\d+\./) ? items.shift() : null;

                return (
                  <div key={idx} className="my-6 space-y-3">
                    {titleLine && (
                      <h3 className="text-xl font-bold text-white tracking-wide">
                        {titleLine}
                      </h3>
                    )}
                    <ol className="space-y-3 bg-neutral-900/50 p-6 rounded-xl border border-neutral-800/80">
                      {items.map((item, itemIdx) => {
                        const parts = item.replace(/^\d+\.\s*/, "").split(" - ");
                        return (
                          <li key={itemIdx} className="flex items-start gap-3 text-gray-300">
                            <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-xs font-bold shrink-0 mt-0.5">
                              {itemIdx + 1}
                            </span>
                            <span>
                              {parts.length > 1 ? (
                                <>
                                  <strong className="text-white">{parts[0]}</strong> — {parts.slice(1).join(" - ")}
                                </>
                              ) : (
                                item.replace(/^\d+\.\s*/, "")
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                );
              }

              return (
                <p key={idx} className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Article Footer & Discussion CTA */}
          <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 blog-animate bg-neutral-900/40 p-6 rounded-2xl border">
            <div>
              <h4 className="text-white font-semibold text-base mb-1">
                Have questions or thoughts on this topic?
              </h4>
              <p className="text-gray-400 text-sm">
                We'd love to chat with you about technology, engineering, or collaboration.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-colors shrink-0 shadow-lg shadow-teal-900/30">
              <MessageSquare className="w-4 h-4" />
              Get in touch
            </Link>
          </div>

          {/* Related Articles Section */}
          <section className="mt-20 blog-animate">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Recommended Articles
              </h3>
              <Link
                to="/blog"
                className="text-teal-400 hover:text-teal-300 text-sm font-medium inline-flex items-center gap-1">
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-teal-500/50 transition-all flex flex-col">
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={related.image}
                      alt={related.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-neutral-900/90 text-teal-400 text-xs px-2.5 py-0.5 rounded-full font-medium">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] text-gray-500 block mb-2">{related.date}</span>
                      <h4 className="text-white font-semibold text-sm group-hover:text-teal-300 transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h4>
                      <p className="text-gray-400 text-xs line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center text-teal-400 text-xs font-medium gap-1">
                      Read article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <NewLetterCTA />
    </>
  );
};

export default BlogPostDetailPage;

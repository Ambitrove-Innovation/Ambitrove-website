import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";

const NewLetterCTA = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Simulate async submission; ready for Netlify Forms / Dean's newsletter endpoint
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 md:p-12 rounded-2xl border border-blue-500/20 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4 text-teal-400">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles,
            insights, and tech updates directly in your inbox.
          </p>

          {status === "success" ? (
            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span className="font-medium">
                Thank you for subscribing! We'll keep you in the loop.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  required
                  className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-all whitespace-nowrap inline-flex items-center justify-center gap-2">
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              {status === "error" && (
                <p className="text-red-400 text-sm text-left mt-2">{errorMessage}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewLetterCTA;

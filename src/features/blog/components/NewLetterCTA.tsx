const NewLetterCTA = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 md:p-12 rounded-2xl border border-blue-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles,
            insights, and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-teal-500 transition"
            />
            <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLetterCTA;

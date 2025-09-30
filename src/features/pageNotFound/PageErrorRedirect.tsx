

const PageErrorRedirect = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-bold text-white drop-shadow-lg">
        404 
      </h1>

      {/* Title */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-200">
        Page Not Found ❌
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-400 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.  
      </p>

  
    </section>
  );
};

export default PageErrorRedirect;

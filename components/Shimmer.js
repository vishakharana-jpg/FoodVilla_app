const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-orange-100 to-pink-100 h-64 sm:h-80 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title skeleton */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-7 w-36 bg-gray-200 rounded-xl animate-pulse" />
          <div className="h-4 w-24 bg-gray-100 rounded-xl animate-pulse" />
        </div>

        {/* Cards grid skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                {/* Image skeleton */}
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-100 animate-pulse" />

                {/* Content skeleton */}
                <div className="p-3 space-y-2">
                  <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-full" />
                  <div className="h-3 bg-gray-100 rounded-lg animate-pulse w-2/3" />
                  <div className="pt-2 border-t border-gray-100 flex justify-between">
                    <div className="h-3 w-16 bg-green-100 rounded-full animate-pulse" />
                    <div className="h-3 w-8 bg-orange-100 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
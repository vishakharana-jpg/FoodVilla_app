import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      {/* Error illustration */}
      <div className="relative mb-6">
        <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center">
          <span className="text-6xl">😵</span>
        </div>
        <div className="absolute -top-1 -right-1 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-xl">
          ⚠️
        </div>
      </div>

      <h1 className="text-6xl font-extrabold text-orange-500 mb-2">
        {err?.status || "Oops!"}
      </h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        Something went wrong
      </h2>
      <p className="text-gray-500 text-base mb-2 max-w-sm">
        {err?.statusText || "An unexpected error occurred."}
      </p>
      <p className="text-xs text-gray-400 bg-gray-100 px-4 py-2 rounded-xl mb-8 font-mono">
        {err?.status} : {err?.statusText}
      </p>

      <Link
        to="/"
        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold rounded-2xl transition-all duration-200 active:scale-95 shadow-md shadow-orange-200"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default Error;
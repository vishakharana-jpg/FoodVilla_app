import React from "react";

const About = () => {
  const stats = [
    { label: "Meals Available", value: "500+", icon: "🍽️" },
    { label: "Happy Users", value: "10K+", icon: "😊" },
    { label: "Cuisines", value: "50+", icon: "🌍" },
    { label: "Cities", value: "20+", icon: "📍" },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Real-time data fetching with smooth loading experience.",
    },
    {
      icon: "🎨",
      title: "Clean UI",
      desc: "Modern, intuitive interface designed for food lovers.",
    },
    {
      icon: "🔍",
      title: "Easy Discovery",
      desc: "Search and explore hundreds of dishes in seconds.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-pink-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/30">
            🍕 Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            About <span className="text-yellow-300">FoodVilla</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto leading-relaxed">
            Passionate about bringing you a smooth and enjoyable food-ordering experience.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map(({ label, value, icon }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-5 text-center shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-3xl">{icon}</span>
              <p className="text-2xl font-extrabold text-orange-500 mt-2">{value}</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Text */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Welcome to our Food Hub! 👋
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            We are passionate about bringing you a smooth and enjoyable food-ordering experience.
            Our platform showcases a variety of delicious dishes, presented with clean UI and
            real-time data fetching. This project is designed to provide a fast, user-friendly,
            and visually appealing interface where users can explore restaurants, browse menus,
            and find their favorite meals with ease.
          </p>
          <p className="text-gray-600 leading-relaxed text-base mt-4">
            Our goal is simple — to make food discovery <span className="text-orange-500 font-bold">easy, intuitive, and delightful.</span>
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-3xl">{icon}</span>
              <h3 className="text-base font-extrabold text-gray-900 mt-3 group-hover:text-orange-500 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
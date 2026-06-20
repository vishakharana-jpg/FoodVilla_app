import React from "react";

const Contact = () => {
  const contactInfo = [
    { icon: "📧", label: "Email", value: "support@foodvilla.com" },
    { icon: "📞", label: "Phone", value: "+91 9876543210" },
    { icon: "📍", label: "Address", value: "FoodVilla HQ, New Delhi, India" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-pink-500 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/20 rounded-full translate-y-1/2 translate-x-1/4 blur-2xl" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/30">
            💬 Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Contact <span className="text-yellow-300">Us</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-md mx-auto">
            Thank you for visiting FoodVilla! We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {contactInfo.map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-100 transition-all duration-200 text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center text-2xl mx-auto mb-3 transition-colors">
                {icon}
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
              <p className="text-sm font-semibold text-gray-800">{value}</p>
            </div>
          ))}
        </div>

        {/* Message Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">Send us a message</h2>
          <p className="text-sm text-gray-400 mb-6">
            If you have questions, suggestions, or feedback — we'd love to hear!
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Gayatri Palyal"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm text-gray-800 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm text-gray-800 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm text-gray-800 transition-all duration-200 resize-none"
              />
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold rounded-2xl transition-all duration-200 active:scale-[0.98] shadow-md shadow-orange-200 text-sm">
              Send Message 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
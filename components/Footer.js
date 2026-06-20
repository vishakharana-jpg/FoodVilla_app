import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* Top CTA Strip */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white text-xl font-extrabold">Hungry right now?</h3>
            <p className="text-orange-100 text-sm mt-1">Order in minutes — delivered fresh.</p>
          </div>
          <button
            onClick={handleOrderNow}
            className="px-6 py-3 bg-white text-orange-500 font-extrabold rounded-2xl hover:bg-orange-50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg text-sm whitespace-nowrap cursor-pointer"
          >
            Order Now 🍕
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="col-span-2 sm:col-span-1">
          <Link to="/">
            <h2 className="text-2xl font-extrabold text-white tracking-tight hover:text-orange-400 transition-colors">
              Food<span className="text-orange-500">Villa</span>
            </h2>
          </Link>
          <p className="mt-3 text-sm leading-relaxed">
            Order delicious food from your favourite restaurants. Fast, fresh & reliable.
          </p>
          <div className="flex gap-3 mt-5">
            {["📸", "👤", "🐦", "💼"].map((icon, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-orange-500 hover:scale-110 flex items-center justify-center text-base transition-all duration-200 cursor-pointer"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-orange-400 transition-colors duration-150 cursor-pointer">About Us</Link></li>
            <li><span className="hover:text-orange-400 cursor-pointer transition-colors duration-150">Careers</span></li>
            <li><span className="hover:text-orange-400 cursor-pointer transition-colors duration-150">Blog</span></li>
            <li><Link to="/contact" className="hover:text-orange-400 transition-colors duration-150 cursor-pointer">Help & Support</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Legal</h3>
          <ul className="space-y-3 text-sm">
            {["Terms & Conditions", "Privacy Policy", "Cancellations & Refunds", "Cookie Policy"].map((item) => (
              <li key={item}>
                <span className="hover:text-orange-400 cursor-pointer transition-colors duration-150">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-orange-400 cursor-pointer transition-colors">
              <span className="text-orange-400">📧</span> support@foodvilla.in
            </li>
            <li className="flex items-center gap-2 hover:text-orange-400 cursor-pointer transition-colors">
              <span className="text-orange-400">📞</span> 1800-123-4567
            </li>
            <li className="flex items-center gap-2 hover:text-orange-400 cursor-pointer transition-colors">
              <span className="text-orange-400">📍</span> India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} FoodVilla — Made with ❤️ by Vishakha</p>
          <p className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
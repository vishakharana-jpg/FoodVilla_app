import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LoginButton } from "./LoginButton";

export const Title = () => (
  <Link to="/">
    <img
      className="h-12 w-12 rounded-full object-cover ring-2 ring-orange-400 shadow-lg"
      alt="FoodVilla Logo"
      src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
    />
  </Link>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/cart", label: "🛒 Cart" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Brand Name */}
          <div className="flex items-center gap-3">
            <Title />
            <div className="leading-tight">
              <span className="block text-xl font-extrabold text-orange-500 tracking-tight">
                FoodVilla
              </span>
              <span className="block text-xs text-gray-400 font-medium">
                Delicious at your door
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                    ${isActive
                      ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                      : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <LoginButton />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-orange-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-orange-50 animate-in slide-in-from-top-2">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl mb-1 text-sm font-semibold transition-all duration-200
                    ${isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="px-4 pt-2">
              <LoginButton />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Foodvilaa</h2>
          <p className="mt-3 text-sm">
            Order delicious food from your favourite restaurants.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help & Support</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellations & Refunds</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Foodvilaa — Made with ❤️ by Vishakha</p>
      </div>
    </footer>
  );
};

export default Footer;

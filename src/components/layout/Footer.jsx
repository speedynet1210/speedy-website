import React from "react";

const Footer = () => {
  return (
    <footer className="bg-speedy-navy text-slate-400 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Speedynet Inc. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

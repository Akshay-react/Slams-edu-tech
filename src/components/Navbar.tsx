import React from "react";
import GooeyNav from "./GooeyNav ";

const Navbar: React.FC = () => {

  const items = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Works", href: "#works" },
    { label: "Careers", href: "#careers" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Gooey Navigation */}
        <div className="hidden lg:flex items-center">
          <GooeyNav
            items={items}
            particleCount={5}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <button className="px-6 py-2.5 rounded-full border border-white text-white text-[15px] font-medium hover:bg-white hover:text-black transition-all">
            Get a Quote
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
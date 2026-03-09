import GooeyNav from "./GooeyNav ";
import React, { useEffect, useState } from "react";


const Navbar: React.FC = () => {

  const items = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Works", href: "#works" },
    { label: "Careers", href: "#careers" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}>
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
            colors={[1, 2, 3, 1, 4, 3, 1, 2]}
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
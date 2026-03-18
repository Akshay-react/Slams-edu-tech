import GooeyNav from "./GooeyNav ";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const items = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/service" },
    { label: "Works", to: "/works" },
    { label: "Careers", to: "/careers" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Desktop Gooey Navigation */}
        <div className="hidden lg:flex items-center">
          <GooeyNav
            key={location.pathname} // forces remount on route change
            items={items}
            particleCount={5}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={
              items.findIndex((item) => item.to === location.pathname) || 0
            }
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 4, 3, 1, 2]}
          />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <button className="px-6 py-2.5 rounded-full border border-white text-white text-[15px] font-medium hover:bg-white hover:text-black transition-all">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-[200px] h-screen bg-black/95 backdrop-blur-xl transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Back Button */}
        <div className="flex items-center px-4 py-4 border-b border-white/10">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white border rounded-[50px] gap-3 p-2 text-sm hover:text-gray-300 transition"
          >
            Back
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-60px)] gap-8 text-white text-xl font-medium">
          {items.map((item, index) =>
            item.to ? (
              <Link
                key={index}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300 transition"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300 transition"
              >
                {item.label}
              </a>
            )
          )}

          <button className="mt-6 px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchPanel from "./SearchPanel";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-navbar  mx-auto px-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center space-x-3"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/assets/logo.png"
              alt="Krushi Trading Logo"
              className="h-10 w-auto object-contain"
              loading="lazy"
            />
            <span className="text-2xl font-bold text-earth-brown">
              Krushi Trading LLC
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium text-base hover:text-earth-brown transition-colors link-underline ${
                    isActive ? "text-earth-brown" : "text-earth-dark"
                  }`
                }
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {link.name}
              </NavLink>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="ml-2"
            >
              <Search className="h-5 w-5" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="mr-2"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium text-lg py-2 ${
                    isActive ? "text-earth-brown" : "text-earth-dark"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}

      {/* Search Panel */}
      {isSearchOpen && <SearchPanel onClose={toggleSearch} />}
    </header>
  );
};

export default Header;

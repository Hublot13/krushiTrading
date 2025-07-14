import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Krushi Trading LLC-FZ</h3>
            <p className="text-earth-cream opacity-80">
              A leading Dubai-based export company specializing in high-quality
              agricultural products for global markets.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-earth-cream hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-earth-cream hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.053 10.053 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/"
                  className="flex items-center text-earth-cream hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/about"
                  className="flex items-center text-earth-cream hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>About Us</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/products"
                  className="flex items-center text-earth-cream hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Products</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/contact"
                  className="flex items-center text-earth-cream hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Contact</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/faq"
                  className="flex items-center text-earth-cream hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>FAQ</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/products?category=unprocessed-raw-pulses"
                  className="flex items-center text-earth-cream hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Unprocessed Raw Pulses</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/products?category=oil-seeds"
                  className="flex items-center text-earth-cream hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Oil Seeds</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/products?category=beans"
                  className="flex items-center text-earth-cream hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Beans</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/products?category=spices"
                  className="flex items-center text-earth-cream hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Spices</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/products"
                  className="flex items-center text-earth-cream hover:text-white transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>View All Products</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-earth-sand flex-shrink-0" />
                <span className="text-earth-cream">
                  Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba,
                  Dubai, UAE
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-earth-sand flex-shrink-0" />
                <a
                  href="tel:+919825225021"
                  className="text-earth-cream hover:text-white transition-colors"
                >
                  +91 98252 25021 [Narendra Patel]
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-earth-sand flex-shrink-0" />
                <a
                  href="tel:+919737814800"
                  className="text-earth-cream hover:text-white transition-colors"
                >
                  +91 97378 14800 [Rishi Vanparia]
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-earth-sand flex-shrink-0" />
                <a
                  href="tel:+918980042002"
                  className="text-earth-cream hover:text-white transition-colors"
                >
                  +91 89800 42002 [Hiren Mavani]
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-earth-sand flex-shrink-0" />
                <a
                  href="mailto:krushitradingllc@gmail.com"
                  className="text-earth-cream hover:text-white transition-colors"
                >
                  krushitradingllc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-brown/30 mt-12 pt-6 text-center md:text-left md:flex md:justify-between text-earth-cream/70">
          <p>© {currentYear} Krushi Trading LLC-FZ All rights reserved.</p>
          <div className="mt-2 md:mt-0">
            <a href="#" className="hover:text-white mr-4">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

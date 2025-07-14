import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Section,
  SectionTitle,
  BackgroundImage,
} from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";
import { placeholderImages } from "@/assets/placeholder";

const Index = () => {
  // Function to trigger animations when elements come into view
  useEffect(() => {
    const sections = document.querySelectorAll(".section-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <BackgroundImage
          src="/assets/images/hero.png"
          alt="Agricultural fields"
          overlayColor="bg-earth-dark/60"
        />

        <Container className="relative z-20 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Premium Agricultural Products for Global Markets
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Krushi Trading LLC — Your trusted partner for high-quality
              agricultural exports from Dubai
            </p>
            <div
              className="flex flex-wrap justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-earth-brown hover:bg-earth-dark border-2 border-white text-white"
              >
                <Link to="/products">Explore Our Products</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-earth-dark"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <Section className="bg-earth-beige section-animate">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-earth-dark">
                About Krushi Trading
              </h2>
              <p className="mb-4 text-earth-dark/80">
                Founded with a vision to connect global markets with premium
                agricultural products, Krushi Trading LLC-FZ has established
                itself as a leading exporter based in Dubai, UAE.
              </p>
              <p className="mb-6 text-earth-dark/80">
                We specialize in sourcing and exporting high-quality
                agricultural commodities including pulses, oil seeds, spices,
                grains, and animal feed to markets worldwide.
              </p>
              <Button
                asChild
                className="bg-earth-brown hover:bg-earth-dark text-white"
              >
                <Link to="/about" className="inline-flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/assets/images/about1.avif"
                  alt="Agricultural Fields"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Products Section */}
      <Section className="section-animate">
        <Container>
          <SectionTitle>
            <h2 className="text-3xl font-bold text-earth-dark">
              Our Product Categories
            </h2>
            <p className="mt-4 text-lg text-earth-dark/70 max-w-2xl mx-auto">
              We offer a wide range of premium agricultural products across
              various categories to meet global market demands
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.slice(0, 3).map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image || placeholderImages.pulses}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <div className="flex items-center text-earth-cream group-hover:text-white transition-colors">
                      <span>View Products</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-earth-brown hover:bg-earth-dark text-white"
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-earth-beige section-animate">
        <Container>
          <SectionTitle>
            <h2 className="text-3xl font-bold text-earth-dark">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-earth-dark/70 max-w-2xl mx-auto">
              At Krushi Trading, we are committed to providing the highest
              quality agricultural products with reliable service
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-earth-brown/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-earth-brown"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-earth-dark">
                Premium Quality
              </h3>
              <p className="text-earth-dark/70">
                We source only the highest quality agricultural products,
                ensuring they meet international standards and specifications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-earth-brown/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-earth-brown"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-earth-dark">
                Customized Solutions
              </h3>
              <p className="text-earth-dark/70">
                We understand that each customer has unique requirements, so we
                offer customized packaging, specifications, and logistics
                solutions tailored to their needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-earth-brown/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-earth-brown"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-earth-dark">
                Global Network
              </h3>
              <p className="text-earth-dark/70">
                With our extensive global network, we can efficiently deliver
                products to customers in various regions worldwide.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-earth-brown text-white section-animate">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Source Premium Agricultural Products?
            </h2>
            <p className="text-xl mb-8 text-earth-cream">
              Contact us today to discuss your requirements and discover how
              Krushi Trading can be your trusted supplier.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-earth-brown"
              >
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/contact"
                >
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-earth-brown hover:bg-earth-cream"
              >
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/products"
                >
                  Explore Products
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Index;

import React, { useEffect } from "react";
import {
  Container,
  Section,
  SectionTitle,
  BackgroundImage,
} from "@/components/ui/container";
import { Link } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Animation for sections
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <BackgroundImage
          src="/assets/images/about3.avif"
          alt="Agricultural fields"
          // overlayColor="bg-earth-brown/70"
        />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Company
            </h1>
            <p className="text-xl text-earth-cream">
              Learn more about Krushi Trading LLC-FZ and our commitment to
              quality agricultural exports
            </p>
          </div>
        </Container>
      </section>

      {/* Company Overview */}
      <Section className="section-animate">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/assets/images/about1.avif"
                  alt="Agricultural fields"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-earth-dark">
                Our Story
              </h2>
              <p className="mb-4 text-earth-dark/80">
                Krushi Trading LLC-FZ is a newly established company in Dubai,
                UAE, with a mission to connect global markets with premium
                agricultural products from India and surrounding regions.
              </p>
              <p className="mb-4 text-earth-dark/80">
                Although newly founded, we are driven by a strong vision and
                commitment to quality, reliability, and customer satisfaction as
                we enter the international export market.
              </p>
              <p className="text-earth-dark/80">
                Krushi Trading specializes in sourcing and exporting
                high-quality agricultural commodities including pulses, oil
                seeds, spices, grains, and animal feed to customers worldwide.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-earth-beige section-animate">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white rounded-lg p-8 shadow-sm">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-earth-dark">
                Our Mission
              </h3>
              <p className="text-earth-dark/80">
                To be the preferred supplier of premium agricultural products by
                delivering consistent quality and exceptional service to our
                global customers. We aim to create sustainable value for all our
                stakeholders through ethical business practices and innovation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-earth-dark">
                Our Vision
              </h3>
              <p className="text-earth-dark/80">
                To be a globally recognized leader in agricultural exports,
                known for product excellence and transformative impact on the
                agricultural supply chain. We envision a future where we
                contribute to the sustainable growth of the agricultural sector
                while meeting the evolving needs of global markets.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section className="section-animate">
        <Container>
          <SectionTitle>
            <h2 className="text-3xl font-bold text-earth-dark">Our Values</h2>
            <p className="mt-4 text-lg text-earth-dark/70 max-w-2xl mx-auto">
              The principles that guide everything we do at Krushi Trading
            </p>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border-l-4 border-earth-brown">
              <h3 className="text-xl font-bold mb-3 text-earth-dark">
                Quality Excellence
              </h3>
              <p className="text-earth-dark/80">
                We are committed to providing products of the highest quality
                that meet international standards and exceed customer
                expectations.
              </p>
            </div>

            <div className="p-6 border-l-4 border-earth-brown">
              <h3 className="text-xl font-bold mb-3 text-earth-dark">
                Integrity & Transparency
              </h3>
              <p className="text-earth-dark/80">
                We conduct our business with utmost integrity and transparency,
                building trust and long-lasting relationships with all our
                stakeholders.
              </p>
            </div>

            <div className="p-6 border-l-4 border-earth-brown">
              <h3 className="text-xl font-bold mb-3 text-earth-dark">
                Customer Focus
              </h3>
              <p className="text-earth-dark/80">
                We are dedicated to understanding and meeting our customers'
                needs, providing personalized service and timely solutions.
              </p>
            </div>

            <div className="p-6 border-l-4 border-earth-brown">
              <h3 className="text-xl font-bold mb-3 text-earth-dark">
                Innovation
              </h3>
              <p className="text-earth-dark/80">
                We continuously seek innovative ways to improve our products,
                processes, and services to deliver greater value to our
                customers.
              </p>
            </div>

            <div className="p-6 border-l-4 border-earth-brown">
              <h3 className="text-xl font-bold mb-3 text-earth-dark">
                Sustainability
              </h3>
              <p className="text-earth-dark/80">
                We are committed to environmentally responsible practices
                throughout our supply chain, promoting sustainable agriculture.
              </p>
            </div>

            <div className="p-6 border-l-4 border-earth-brown">
              <h3 className="text-xl font-bold mb-3 text-earth-dark">
                Global Perspective
              </h3>
              <p className="text-earth-dark/80">
                We embrace cultural diversity and maintain a global perspective,
                adapting to the unique needs of different markets worldwide.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Team */}
      <Section className="bg-earth-beige section-animate">
        <Container>
          <SectionTitle>
            <h2 className="text-3xl font-bold text-earth-dark">Our Approach</h2>
            <p className="mt-4 text-lg text-earth-dark/70 max-w-2xl mx-auto">
              What makes Krushi Trading different from other agricultural
              exporters
            </p>
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-earth-dark">
                  Direct Sourcing
                </h3>
                <p className="text-earth-dark/80">
                  We maintain direct relationships with farmers and producers,
                  ensuring quality control from the source and supporting local
                  agricultural communities.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-earth-dark">
                  Rigorous Quality Testing
                </h3>
                <p className="text-earth-dark/80">
                  Every batch of products undergoes stringent testing in
                  state-of-the-art facilities to ensure they meet the highest
                  international standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-earth-dark">
                  Customized Solutions
                </h3>
                <p className="text-earth-dark/80">
                  We understand that each customer has unique requirements, so
                  we offer customized packaging, specifications, and logistics
                  solutions tailored to their needs.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/assets/images/about4.avif"
                  alt="Agricultural Products"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global Presence */}
      <Section className="section-animate">
        <Container>
          <SectionTitle>
            <h2 className="text-3xl font-bold text-earth-dark">
              Our Global Presence
            </h2>
            <p className="mt-4 text-lg text-earth-dark/70 max-w-2xl mx-auto">
              From our strategic location in Dubai, we serve customers across
              the globe
            </p>
          </SectionTitle>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-earth-dark">
                Key Markets
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-earth-dark">Middle East</h4>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-earth-dark">Europe</h4>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-earth-dark">Asia</h4>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-earth-dark">Africa</h4>
                </div>
              </div>
            </div>

            <div>
              <p className="text-center text-earth-dark/80">
                With our headquarters strategically located in Dubai, UAE, we
                leverage the city's position as a global trade hub to
                efficiently serve customers across various regions. Our
                extensive logistics network ensures reliable and timely delivery
                of products to destinations worldwide.
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
              Partner with Krushi Trading
            </h2>
            <p className="text-xl mb-8 text-earth-cream">
              Join our growing network of global customers and experience the
              difference of working with a trusted agricultural exporter.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-earth-brown font-medium rounded-md hover:bg-earth-cream transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutPage;

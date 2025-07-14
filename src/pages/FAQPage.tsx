import React from "react";
import { Container, Section } from "@/components/ui/container";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Products & Ordering",
    questions: [
      {
        question: "What types of agricultural products do you offer?",
        answer:
          "Krushi Trading specializes in a wide range of agricultural products including pulses (chickpeas, lentils, etc.), oil seeds (sesame, groundnuts, etc.), spices (coriander, cumin, etc.), grains & cereals (rice, wheat, etc.), and animal feed. Each category offers various specific products to meet different market requirements.",
      },
      {
        question: "What is the minimum order quantity?",
        answer:
          "Our minimum order quantities vary by product type. For most products, we offer container load options (20ft or 40ft) as well as smaller quantities depending on your specific needs. Please contact our sales team for detailed information on minimum order quantities for specific products.",
      },
      {
        question: "Can I request samples before placing a bulk order?",
        answer:
          "Yes, we provide samples for most of our products to qualified buyers. Sample requests are subject to availability and shipping costs. Please contact us with your specific requirements, and our team will assist you with the sample request process.",
      },
      {
        question: "Do you offer customized packaging options?",
        answer:
          "Yes, we offer various packaging options to meet your specific requirements. We can customize packaging size, material, and branding according to your needs and local market regulations. Please discuss your packaging requirements with our sales team when placing an order.",
      },
    ],
  },
  {
    title: "Quality & Certification",
    questions: [
      {
        question: "What quality standards do your products meet?",
        answer:
          "Our products meet international quality standards and comply with various global certifications. We conduct rigorous quality control processes to ensure our products meet the highest standards of purity, cleanliness, and nutritional value. Specific certifications vary by product type and destination market.",
      },
      {
        question: "How do you ensure product quality?",
        answer:
          "We maintain strict quality control measures throughout our supply chain. This includes careful selection of sources, regular testing at various stages of processing, proper storage practices, and final inspections before shipping. Our quality assurance team oversees these processes to ensure consistent quality across all our products.",
      },
      {
        question: "Are your products certified organic?",
        answer:
          "We offer both conventional and organic products in select categories. Our organic products are certified by relevant authorities based on international organic standards. Please specify your requirements for organic certification when inquiring about specific products.",
      },
    ],
  },
  {
    title: "Shipping & Logistics",
    questions: [
      {
        question: "What shipping methods do you use?",
        answer:
          "We ship our products worldwide via sea freight, which is the most common method for bulk agricultural products. Depending on quantity and urgency, we can also arrange air freight for smaller shipments. Our logistics team coordinates all shipping arrangements to ensure timely delivery.",
      },
      {
        question: "How long does shipping take?",
        answer:
          "Shipping times vary based on destination, quantity, and current global logistics conditions. Generally, sea freight shipments take 2-6 weeks depending on the destination port. We provide estimated delivery times when processing your order and keep you updated throughout the shipping process.",
      },
      {
        question: "Do you handle customs clearance?",
        answer:
          "We can assist with export documentation from our side, but typically the buyer is responsible for import customs clearance in their country. We can work with your customs broker to provide necessary documentation for smooth customs processing. We recommend discussing specific requirements for your market during the ordering process.",
      },
    ],
  },
  {
    title: "Payment & Terms",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various international payment methods including Letter of Credit (L/C), Telegraphic Transfer (T/T), and other standard international trade payment terms. The specific payment terms are negotiated based on order value, relationship history, and other factors.",
      },
      {
        question: "What are your standard payment terms?",
        answer:
          "Our standard payment terms typically include a percentage of advance payment with the balance payable before shipment or against shipping documents. For established customers, we offer flexible payment terms. Specific terms are discussed during the order negotiation process.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-earth-brown text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-earth-cream">
              Find answers to common questions about our products and services
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold mb-6 text-earth-dark">
                  {category.title}
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`item-${index}-${itemIndex}`}
                    >
                      <AccordionTrigger className="text-left text-lg font-medium text-earth-dark hover:text-earth-brown">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-earth-dark/80">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="mt-12 p-6 bg-earth-beige rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-earth-dark">
                Still Have Questions?
              </h3>
              <p className="mb-6 text-earth-dark/80">
                If you couldn't find the answer to your question, feel free to
                contact our team.
              </p>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-block px-6 py-3 bg-earth-brown hover:bg-earth-dark text-white font-medium rounded-md transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default FAQPage;

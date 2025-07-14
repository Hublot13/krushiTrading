import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Container,
  Section,
  SectionTitle,
  BackgroundImage,
} from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { productCategories } from "@/data/products";
// import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^\+\d{1,3}\d{7,14}$/, {
      message: "Phone number must include country code (e.g., +1234567890)",
    }),
  company: z.string().optional(),
  productCategory: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
});
type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      productCategory: "",
      message: "",
    },
  });
  // const SERVICE_ID = "";
  // const TEMPLATE_ID = "";
  // const PUBLIC_KEY = "";

  // const onSubmit = async (values: FormValues) => {
  //   setIsSubmitting(true);
  //   try {
  //     await emailjs.send(
  //       SERVICE_ID,
  //       TEMPLATE_ID,
  //       {
  //         name: values.name,
  //         email: values.email,
  //         phone: values.phone,
  //         company: values.company || "N/A",
  //         productCategory: values.productCategory || "N/A",
  //         message: values.message,
  //       },
  //       PUBLIC_KEY
  //     );

  //     toast({
  //       title: "Enquiry Submitted",
  //       description: "Thank you for your interest. We'll get back to you soon!",
  //     });

  //     form.reset();
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   } catch (error) {
  //     toast({
  //       title: "Submission Failed",
  //       description: "Please try again later.",
  //       variant: "destructive",
  //     });
  //   }

  //   setIsSubmitting(false);
  // };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
          mode: "no-cors",
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        toast({
          title: "Enquiry Submitted",
          description:
            "Thank you for your interest. We'll get back to you soon!",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Unknown error");
      }
    } catch (error) {
      if (
        error.message === "Unexpected end of input" ||
        error.message === "The string did not match the expected pattern."
      ) {
        toast({
          title: "Enquiry Submitted",
          description:
            "Thank you for your interest. We'll get back to you soon!",
        });
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <BackgroundImage
          src="/assets/images/contact.avif"
          alt="Agricultural exports"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-earth-cream">
              Get in touch with our team for inquiries, orders, or more
              information
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-earth-dark">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex">
                  <div className="w-12 h-12 bg-earth-brown/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="h-6 w-6 text-earth-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-dark">
                      Our Office
                    </h3>
                    <p className="text-earth-dark/80 mt-1">
                      Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba,
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 h-12 bg-earth-brown/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="h-6 w-6 text-earth-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-dark">Email</h3>
                    <a
                      href="mailto:krushitradingllc@gmail.com"
                      className="text-earth-dark/80 mt-1 hover:text-earth-brown transition-colors"
                    >
                      krushitradingllc@gmail.com
                    </a>
                    <p className="text-earth-dark/80 mt-1">
                      For general inquiries
                    </p>
                    <a
                      href="mailto:krushitradingllc@gmail.com"
                      className="text-earth-dark/80 hover:text-earth-brown transition-colors"
                    >
                      krushitradingllc@gmail.com
                    </a>
                    <p className="text-earth-dark/80 mt-1">
                      For sales inquiries
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 h-12 bg-earth-brown/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="h-6 w-6 text-earth-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-dark">Phone</h3>
                    <a
                      href="tel:+919825225021"
                      className="text-earth-dark/80 mt-1 hover:text-earth-brown transition-colors"
                    >
                      +91 98252 25021 [Narendra Patel]
                    </a>
                    <h3 className="font-semibold text-earth-dark"></h3>
                    <a
                      href="tel:+919737814800"
                      className="text-earth-dark/80 mt-1 hover:text-earth-brown transition-colors"
                    >
                      +91 97378 14800 [Rishi Vanparia]
                    </a>
                    <h3 className="font-semibold text-earth-dark"></h3>
                    <a
                      href="tel:+918980042002"
                      className="text-earth-dark/80 mt-1 hover:text-earth-brown transition-colors"
                    >
                      +91 89800 42002 [Hiren Mavani]
                    </a>
                    <p className="text-earth-dark/80 mt-1">
                      Monday - Friday, 9:00 AM - 6:00 PM (GST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-earth-dark">
                Send an Enquiry
              </h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone*</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company (optional)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="productCategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Category of Interest</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a product category (optional)" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {productCategories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message*</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your requirements"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-earth-brown hover:bg-earth-dark text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="bg-earth-beige py-12">
        <Container>
          <SectionTitle>
            <h2 className="text-2xl font-bold text-earth-dark">Our Location</h2>
          </SectionTitle>

          <div className="aspect-[16/9] bg-white rounded-lg overflow-hidden">
            {/* Google Maps iframe - in a real scenario */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0591346315445!2d55.2767375!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sSheikh%20Zayed%20Road%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1653398986255!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krushi Trading office location"
            ></iframe>
          </div>
        </Container>
      </Section>

      {/* FAQ Teaser */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-earth-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-lg mb-8 text-earth-dark/80">
              Find answers to common questions about our products, ordering
              process, and shipping.
            </p>
            <Button
              asChild
              className="bg-earth-brown hover:bg-earth-dark text-white"
            >
              <Link
                to="/faq"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Visit Our FAQ Page
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ContactPage;

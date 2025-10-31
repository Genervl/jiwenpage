"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Lightbulb, Network, BookOpen, Calendar, Menu } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MobileMenu } from "@/components/mobile-menu"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ContactForm } from "@/components/contact-form"
import { useState } from "react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Amina Ibrahim",
    role: "Fashion Designer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Joining JIWEN transformed my small tailoring business into a thriving fashion brand. The mentorship and networking opportunities opened doors I never thought possible.",
  },
  {
    id: 2,
    name: "Fatima Mohammed",
    role: "Food Processor",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The training workshops helped me improve my food processing techniques and packaging. Now my products are in stores across the state, and I've hired five women from my community.",
  },
  {
    id: 3,
    name: "Hauwa Suleiman",
    role: "Tech Entrepreneur",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Through JIWEN's connections, I secured funding for my tech startup. The ongoing support from fellow women entrepreneurs keeps me motivated during challenging times.",
  },
  {
    id: 4,
    name: "Zainab Yusuf",
    role: "Agricultural Producer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "JIWEN helped me scale my agricultural business by connecting me with resources and training. I've been able to increase my production and employ more women farmers.",
  },
  {
    id: 5,
    name: "Maryam Abubakar",
    role: "Cosmetics Manufacturer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The business development workshops transformed how I approach my natural cosmetics business. I've improved my packaging, marketing, and now export to neighboring states.",
  },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src="/images/JIWEN_LOGO.png"
                alt="JIWEN Logo"
                width={120}
                height={60}
                className="h-auto"
                priority
              />
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <SmoothScroll href="#about" className="text-sm font-medium hover:text-primary">
              About Us
            </SmoothScroll>
            <SmoothScroll href="#mission" className="text-sm font-medium hover:text-primary">
              Mission & Vision
            </SmoothScroll>
            <SmoothScroll href="#services" className="text-sm font-medium hover:text-primary">
              What We Offer
            </SmoothScroll>
            <SmoothScroll href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </SmoothScroll>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <SmoothScroll href="#join">Join Network</SmoothScroll>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white py-16 md:py-24 lg:py-32">
          <div className="container relative z-10 grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Empowering Women Entrepreneurs in Jigawa State
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Creating a supportive ecosystem for women entrepreneurs to thrive, grow their businesses, and make a
                positive impact on Jigawa State's economic landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <SmoothScroll href="#join">
                    Join Our Network <ArrowRight className="ml-2 h-4 w-4" />
                  </SmoothScroll>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <SmoothScroll href="#about">Learn More</SmoothScroll>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Image3.jpeg?height=800&width=600"
                alt="Women entrepreneurs collaborating"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <ScrollAnimation>
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
                <div className="mt-4 h-1 w-12 bg-pink-500 mx-auto"></div>
              </div>
            </ScrollAnimation>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <ScrollAnimation direction="right" delay={0.2}>
                <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Image2.jpg?height=700&width=500"
                    alt="JIWEN community"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="left" delay={0.4}>
                <div className="space-y-4">
                  <p className="text-lg">
                    The Jigawa Women Entrepreneurs Network (JIWEN) is a dynamic community of women-led businesses,
                    startups, and aspiring entrepreneurs dedicated to driving positive change and sustaining economic
                    empowerment in the region.
                  </p>
                  <p className="text-lg">
                    Founded on the principles of collaboration, innovation, and inclusivity, our network provides a
                    platform for women from diverse backgrounds to connect, learn, and grow together.
                  </p>
                  <p className="text-lg">
                    Our coalition of entrepreneurs spans across all business and professional sectors including legal
                    services, fashion design, food processing, information technology, hospitality/tourism,
                    manufacturing, financial services, agriculture, animal rearing, education, health, beauty, and more.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission" className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <ScrollAnimation>
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mission & Vision</h2>
                <div className="mt-4 h-1 w-12 bg-pink-500 mx-auto"></div>
              </div>
            </ScrollAnimation>
            <div className="grid gap-8 md:grid-cols-2">
              <ScrollAnimation direction="up" delay={0.2}>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                    <Lightbulb className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg">
                    Empowering women entrepreneurs in Jigawa State to succeed, thrive, and contribute to the economic
                    growth and development of the region.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                    <Network className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg">
                    To create a supportive and collaborative ecosystem where women entrepreneurs in Jigawa State can
                    access resources, network with peers, and achieve their business goals.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <ScrollAnimation>
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Offer</h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  Resources, mentorship, and networking opportunities to help women entrepreneurs start, grow, and
                  sustain successful businesses.
                </p>
                <div className="mt-4 h-1 w-12 bg-pink-500 mx-auto"></div>
              </div>
            </ScrollAnimation>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ScrollAnimation direction="up" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-pink-200 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 transition-colors duration-300 group-hover:bg-pink-200">
                    <BookOpen className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-pink-600">
                    Training & Workshops
                  </h3>
                  <p className="text-muted-foreground">
                    Access to skill-building workshops, business training, and educational resources tailored for women
                    entrepreneurs.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-pink-200 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 transition-colors duration-300 group-hover:bg-pink-200">
                    <Users className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-pink-600">
                    Mentorship
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with experienced business leaders who provide guidance, advice, and support for your
                    entrepreneurial journey.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-pink-200 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 transition-colors duration-300 group-hover:bg-pink-200">
                    <Network className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-pink-600">
                    Networking
                  </h3>
                  <p className="text-muted-foreground">
                    Opportunities to connect with other women entrepreneurs, potential partners, and customers through
                    regular events.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-pink-200 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 transition-colors duration-300 group-hover:bg-pink-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-pink-600"
                    >
                      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                      <path d="M12 13v8" />
                      <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-pink-600">
                    Funding Access
                  </h3>
                  <p className="text-muted-foreground">
                    Information and support for accessing grants, loans, and other financial resources for your
                    business.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.5}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-pink-200 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 transition-colors duration-300 group-hover:bg-pink-200">
                    <Calendar className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-pink-600">
                    Events
                  </h3>
                  <p className="text-muted-foreground">
                    Regular meetups, conferences, and exhibitions to showcase products, share knowledge, and build
                    community.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.6}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-pink-200 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 transition-colors duration-300 group-hover:bg-pink-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-pink-600"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-pink-600">
                    Resources
                  </h3>
                  <p className="text-muted-foreground">
                    Access to business tools, templates, guides, and market information to help you make informed
                    decisions.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <ScrollAnimation>
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  Hear from women who have transformed their businesses through our network.
                </p>
                <div className="mt-4 h-1 w-12 bg-pink-500 mx-auto"></div>
              </div>
            </ScrollAnimation>

            {/* Testimonial Carousel */}
            <ScrollAnimation direction="up">
              <TestimonialCarousel testimonials={testimonials} />
            </ScrollAnimation>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <ScrollAnimation direction="up" delay={0.1}>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-pink-600">200+</h3>
                  <p className="text-lg font-medium">Active Members</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.2}>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-pink-600">50+</h3>
                  <p className="text-lg font-medium">Workshops Conducted</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.3}>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-pink-600">₦25M+</h3>
                  <p className="text-lg font-medium">Funding Facilitated</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-pink-600">15+</h3>
                  <p className="text-lg font-medium">Business Sectors</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="join" className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
          <div className="container">
            <ScrollAnimation direction="none">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Network Today</h2>
                <p className="mt-4 text-xl">
                  Become part of a community that supports your entrepreneurial journey every step of the way.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-pink-200">
                    Become a Member
                  </Button>
                  <Button size="lg" className="bg-pink-600 text-white hover:bg-white hover:text-pink-600">
                    Partner With Us
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <ScrollAnimation>
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  Have questions? We're here to help you on your entrepreneurial journey.
                </p>
                <div className="mt-4 h-1 w-12 bg-pink-500 mx-auto"></div>
              </div>
            </ScrollAnimation>
            <div className="grid gap-8 md:grid-cols-2">
              <ScrollAnimation direction="right" delay={0.2}>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-pink-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Phone</h3>
                      <p className="text-muted-foreground">+234 907 1111 481</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-pink-600"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Email</h3>
                      <p className="text-muted-foreground">jiwenjigawa@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-pink-600"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Address</h3>
                      <p className="text-muted-foreground">No. 12 Mechanics Village Road, Dutse, Jigawa State.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-pink-600"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="left" delay={0.4}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <ContactForm />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Image
                    src="/images/JIWEN_LOGO.png"
                    alt="JIWEN Logo"
                    width={120}
                    height={60}
                    className="h-auto bg-white rounded p-1"
                  />
                </div>
              </div>
              <p className="text-slate-400">Empowering women entrepreneurs in Jigawa State to succeed and thrive.</p>
              <div className="flex space-x-4">
                <Link
                  href="https://web.facebook.com/groups/452843010930956"
                  className="text-slate-400 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://www.instagram.com/jiwen__/" className="text-slate-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <SmoothScroll href="#about" className="text-slate-400 hover:text-white">
                    About Us
                  </SmoothScroll>
                </li>
                <li>
                  <SmoothScroll href="#services" className="text-slate-400 hover:text-white">
                    Our Services
                  </SmoothScroll>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <SmoothScroll href="#contact" className="text-slate-400 hover:text-white">
                    Contact
                  </SmoothScroll>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Mentorship
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Business Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Funding Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Networking Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Exhibitions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-slate-400 mb-4">
                Subscribe to our newsletter for updates on events, opportunities, and success stories.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Jigawa Women Entrepreneurs Network (JIWEN). All rights reserved | built
              with ❤️ by Startup Jigawa
            </p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}

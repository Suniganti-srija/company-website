"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen, Award, Users, Code, Palette, CheckCircle, Star } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const internshipDomains = [
  {
    id: "web-dev",
    icon: Code,
    title: "Web Development",
    description: "Master full-stack web development with modern technologies like React, Node.js, and databases.",
    skills: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "REST APIs"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "frontend",
    icon: Palette,
    title: "Frontend Development",
    description: "Specialize in creating beautiful, responsive, and user-friendly interfaces.",
    skills: ["HTML5/CSS3", "JavaScript", "React/Vue", "Tailwind CSS", "UI/UX Principles", "Responsive Design"],
    color: "from-purple-500 to-pink-500",
  },
];

const plans = [
  {
    duration: "3 Months",
    price: "₹9,999",
    originalPrice: "₹14,999",
    popular: false,
    features: [
      "Fundamentals Training",
      "2 Mini Projects",
      "Weekly Mentorship",
      "Certificate of Completion",
      "Job Assistance",
      "Community Access",
    ],
  },
  {
    duration: "6 Months",
    price: "₹17,999",
    originalPrice: "₹24,999",
    popular: true,
    features: [
      "Advanced Training",
      "4 Real-world Projects",
      "Daily Mentorship",
      "Certificate of Excellence",
      "Guaranteed Placement Assistance",
      "Priority Community Access",
      "LinkedIn Recommendations",
      "Portfolio Building",
    ],
  },
];

const benefits = [
  { icon: BookOpen, title: "Structured Learning", description: "Comprehensive curriculum designed by industry experts" },
  { icon: Users, title: "Expert Mentorship", description: "Learn directly from experienced professionals" },
  { icon: Award, title: "Industry Certificate", description: "Receive a recognized certificate upon completion" },
  { icon: Clock, title: "Flexible Schedule", description: "Learn at your own pace with flexible timing" },
];

const curriculum = {
  "web-dev": [
    { week: "Week 1-2", topic: "HTML5 & CSS3 Fundamentals", description: "Building blocks of web development" },
    { week: "Week 3-4", topic: "JavaScript Core Concepts", description: "Programming fundamentals and DOM manipulation" },
    { week: "Week 5-6", topic: "React.js Framework", description: "Component-based architecture and state management" },
    { week: "Week 7-8", topic: "Backend with Node.js", description: "Server-side development and APIs" },
    { week: "Week 9-10", topic: "Database & MongoDB", description: "Data storage and retrieval" },
    { week: "Week 11-12", topic: "Project Development", description: "Build and deploy your portfolio project" },
  ],
  "frontend": [
    { week: "Week 1-2", topic: "Advanced HTML5 & CSS3", description: "Semantic HTML and modern CSS features" },
    { week: "Week 3-4", topic: "JavaScript & ES6+", description: "Modern JavaScript features and best practices" },
    { week: "Week 5-6", topic: "React.js Mastery", description: "Hooks, context, and advanced patterns" },
    { week: "Week 7-8", topic: "Styling Frameworks", description: "Tailwind CSS, styled-components, animations" },
    { week: "Week 9-10", topic: "Performance & Accessibility", description: "Optimization and inclusive design" },
    { week: "Week 11-12", topic: "Portfolio Project", description: "Create your showcase project" },
  ],
};

export default function InternshipsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-56 sm:pt-64 md:pt-72 pb-16 sm:pb-20 md:pb-24 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
            alt="Internship program"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 sm:mb-6"
            >
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider block mb-6 sm:mb-8">
                Internship Program
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              Launch Your{" "}
              <span className="text-primary">Tech Career</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground mb-5"
            >
              Join our comprehensive internship program and gain hands-on experience
              in Web Development and Frontend Development with industry experts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/careers/apply">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-white rounded-lg font-semibold flex items-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="#plans">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  View Plans
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14 md:mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Domains</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
              Choose Your Specialization
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {internshipDomains.map((domain, index) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${domain.color}`} />
                <div className="p-5 sm:p-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-6`}
                  >
                    <domain.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 break-words" style={{wordBreak:'normal',overflowWrap:'normal'}}>{domain.title}</h3>
                  <p className="text-muted-foreground mb-6">{domain.description}</p>
                  
                  <h4 className="font-semibold text-foreground mb-3">Skills You&apos;ll Learn:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {domain.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link href={`#curriculum-${domain.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      View Curriculum
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Sections */}
      {internshipDomains.map((domain) => (
        <section key={domain.id} id={`curriculum-${domain.id}`} className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {domain.title} Curriculum
              </h2>
              <p className="text-muted-foreground mt-4">3-Month Program Outline</p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
              {curriculum[domain.id as keyof typeof curriculum].map((item, index) => (
                <motion.div
                  key={item.week}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6 mb-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10"
                  >
                    <span className="text-white font-bold text-xs sm:text-sm">{item.week.split(" ")[1]}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-md flex-grow min-w-0"
                  >
                    <span className="text-primary font-medium text-sm">{item.week}</span>
                    <h4 className="text-base sm:text-lg font-bold text-foreground mt-1 break-words" style={{wordBreak:'normal',overflowWrap:'break-word',hyphens:'none'}}>{item.topic}</h4>
                    <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Plans Section */}
      <section id="plans" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14 md:mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
              Internship Plans
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.duration}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden relative ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4" /> Popular
                    </span>
                  </div>
                )}
                <div className="p-5 sm:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.duration}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground line-through">{plan.originalPrice}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/careers/apply">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${
                        plan.popular
                          ? "bg-primary text-white hover:bg-primary/90"
                          : "bg-secondary text-foreground hover:bg-primary hover:text-white"
                      }`}
                    >
                      Enroll Now
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14 md:mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
              Program Benefits
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center"
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
            alt="Apply now"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Apply now and take the first step towards your dream career in tech.
            </p>
            <Link href="/careers/apply">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold flex items-center gap-2 hover:bg-white/90 transition-colors mx-auto"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

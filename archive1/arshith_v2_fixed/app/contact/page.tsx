"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Linkedin, Twitter, Facebook, Instagram, Sparkles, CheckCircle, Building2, Globe, Users, ArrowRight, Zap } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Floating particles
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            width: 4 + Math.random() * 8,
            height: 4 + Math.random() * 8,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Tech Park, Innovation City", "Bangalore, Karnataka 560001", "India"],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211", "Toll Free: 1800-XXX-XXXX"],
    gradient: "from-cyan-600 to-teal-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@arshithgroups.com", "careers@arshithgroups.com", "support@arshithgroups.com"],
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
    gradient: "from-violet-600 to-indigo-500",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-700" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
];

const reasons = [
  { icon: Building2, title: "Enterprise Solutions", desc: "Serving Fortune 500 companies" },
  { icon: Globe, title: "Global Presence", desc: "15+ countries worldwide" },
  { icon: Users, title: "Expert Team", desc: "500+ skilled professionals" },
  { icon: Zap, title: "Fast Delivery", desc: "Agile methodology" },
];

const faqs = [
  {
    question: "How long does it take to hear back after contacting you?",
    answer: "We typically respond within 24 hours on business days. For urgent inquiries, please call our direct line.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a free 30-minute consultation to understand your requirements and provide initial recommendations.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have expertise in Fintech, Healthcare, E-commerce, IoT, and Enterprise Solutions across various industries.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Absolutely! We offer comprehensive support packages including 24/7 monitoring, maintenance, and continuous improvements.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeInput, setActiveInput] = useState("");
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", budget: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden pt-24 sm:pt-32 md:pt-24">
        <FloatingParticles />
        
        {/* Animated blobs */}
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <motion.div 
          style={{ y: heroY }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-blue-600" />
              </motion.div>
              <span className="text-blue-700 font-bold">Get In Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
            >
              <span className="text-foreground">{"Let's"}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Connect & Build
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Have a project in mind or want to explore partnership opportunities? 
              {"We'd"} love to hear from you and discuss how we can help transform your ideas into reality.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl text-center group border border-border/50 relative overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="relative text-xl font-bold text-foreground mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="relative text-muted-foreground text-sm">{detail}</p>
                ))}

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 bg-white/10 rounded-full"
            style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 2) * 40}%` }}
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center text-white"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                >
                  <reason.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="font-bold text-lg mb-1">{reason.title}</h3>
                <p className="text-white/80 text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm uppercase tracking-wider mb-4"
                >
                  <Mail className="w-4 h-4" />
                  Send a Message
                </motion.span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                  {"Let's"} Start a Conversation
                </h2>
                <p className="text-muted-foreground mt-3">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
                    { name: "email", label: "Email Address", type: "email", placeholder: "john@company.com", required: true },
                  ].map((field) => (
                    <motion.div
                      key={field.name}
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => setActiveInput(field.name)}
                        onBlur={() => setActiveInput("")}
                        required={field.required}
                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                          activeInput === field.name 
                            ? "border-blue-500 shadow-lg shadow-blue-500/20" 
                            : "border-border hover:border-blue-300"
                        }`}
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setActiveInput("phone")}
                      onBlur={() => setActiveInput("")}
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        activeInput === "phone" 
                          ? "border-blue-500 shadow-lg shadow-blue-500/20" 
                          : "border-border hover:border-blue-300"
                      }`}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setActiveInput("company")}
                      onBlur={() => setActiveInput("")}
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                        activeInput === "company" 
                          ? "border-blue-500 shadow-lg shadow-blue-500/20" 
                          : "border-border hover:border-blue-300"
                      }`}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject <span className="text-red-500">*</span></label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border-2 border-border focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                    >
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">New Project Discussion</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="internship">Internship Program</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-border focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                    >
                      <option value="">Select Budget</option>
                      <option value="small">₹5-25 Lakhs</option>
                      <option value="medium">₹25-75 Lakhs</option>
                      <option value="large">₹75 Lakhs - ₹2 Crores</option>
                      <option value="enterprise">₹2 Crores+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveInput("message")}
                    onBlur={() => setActiveInput("")}
                    required
                    rows={5}
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none ${
                      activeInput === "message" 
                        ? "border-blue-500 shadow-lg shadow-blue-500/20" 
                        : "border-border hover:border-blue-300"
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm uppercase tracking-wider mb-4"
                >
                  <MapPin className="w-4 h-4" />
                  Our Location
                </motion.span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                  Visit Our Office
                </h2>
                <p className="text-muted-foreground mt-3">
                  We welcome you to visit us for in-person discussions about your projects.
                </p>
              </div>

              {/* Map Placeholder */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative h-80 rounded-3xl overflow-hidden mb-8 shadow-2xl border-2 border-border/50"
              >
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Office location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-white px-6 py-4 rounded-xl shadow-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Arshith Groups HQ</p>
                        <p className="text-sm text-muted-foreground">123 Tech Park, Innovation City</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-secondary/80 to-secondary/50 rounded-3xl p-8 border border-border/50"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">Connect With Us</h3>
                <div className="flex gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-gray-600 group-hover:text-white" />
                    </motion.a>
                  ))}
                </div>

                <div className="border-t border-border/50 pt-6">
                  <h4 className="font-bold text-foreground mb-3">Quick Response</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    For immediate assistance, reach out on our social channels or call us directly.
                  </p>
                  <motion.a
                    href="tel:+919876543210"
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now: +91 98765 43210
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <FloatingParticles />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm uppercase tracking-wider mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              FAQ
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border/50 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-start gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground pl-11">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <motion.a
              href="mailto:info@arshithgroups.com"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold shadow-xl"
            >
              Email Us Directly
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

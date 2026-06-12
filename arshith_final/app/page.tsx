"use client";

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Briefcase, Award, TrendingUp, Code, Globe, Smartphone, Cloud, Sparkles, Zap, Star, CheckCircle, Play, GraduationCap, ChevronRight, Rocket, Target, Heart, Building2, Leaf, Monitor, ChevronLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function FloatingParticle({ delay, size, left, top }: { delay: number; size: number; left: string; top: string }) {
  return (
    <motion.div
      className="absolute rounded-full bg-blue-400/30"
      style={{ width: size, height: size, left, top }}
      animate={{
        y: [0, -80, 0],
        x: [0, 20, -20, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

function WaveAnimation() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
      <motion.svg
        viewBox="0 0 1440 120"
        className="w-full h-20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z"
          fill="rgba(219, 234, 254, 0.5)"
          animate={{
            d: [
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z",
              "M0,80 C360,20 720,100 1080,40 C1260,20 1380,80 1440,60 L1440,120 L0,120 Z",
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

const stats = [
  { icon: Users, number: 500, suffix: "+", label: "Employees", color: "from-blue-500 to-blue-600" },
  { icon: Briefcase, number: 200, suffix: "+", label: "Projects", color: "from-cyan-500 to-cyan-600" },
  { icon: Award, number: 50, suffix: "+", label: "Awards", color: "from-indigo-500 to-indigo-600" },
  { icon: TrendingUp, number: 98, suffix: "%", label: "Client Satisfaction", color: "from-sky-500 to-sky-600" },
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for maximum performance.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services for modern businesses.",
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to grow your online presence.",
    color: "from-sky-500 to-blue-500"
  },
];

const features = [
  { icon: Rocket, text: "Fast Delivery" },
  { icon: Target, text: "Precision Focus" },
  { icon: Heart, text: "Client-Centric" },
  { icon: Award, text: "Quality Assured" },
];

const companies = [
  {
    name: "Arshith Fresh India Pvt Ltd",
    shortName: "Arshith Fresh",
    icon: Leaf,
    tagline: "Farm to Table Excellence",
    description: "Leading the agricultural revolution with fresh produce distribution, cold chain logistics, and sustainable farming practices across India.",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
    stats: [
      { label: "Farmers Connected", value: "10,000+" },
      { label: "Cities Served", value: "50+" },
      { label: "Daily Deliveries", value: "1M+" },
    ],
    highlights: ["Organic Certified", "Cold Chain Network", "Direct Sourcing", "Quality Assurance"],
  },
  {
    name: "Suntech IT Solutions",
    shortName: "Suntech IT",
    icon: Monitor,
    tagline: "Digital Innovation Hub",
    description: "Pioneering digital transformation with cutting-edge software development, cloud solutions, AI/ML implementations, and enterprise technology services.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
    stats: [
      { label: "Projects Delivered", value: "500+" },
      { label: "Tech Experts", value: "200+" },
      { label: "Global Clients", value: "100+" },
    ],
    highlights: ["Cloud Solutions", "AI & ML", "Custom Software", "24/7 Support"],
  },
  {
    name: "Suntech Infra Solutions Pvt Ltd",
    shortName: "Suntech Infra",
    icon: Building2,
    tagline: "Building Tomorrow's Infrastructure",
    description: "Transforming landscapes with world-class infrastructure development, real estate solutions, and sustainable construction practices.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
    stats: [
      { label: "Projects Completed", value: "150+" },
      { label: "Sq.ft Developed", value: "5M+" },
      { label: "Cities Present", value: "25+" },
    ],
    highlights: ["Green Buildings", "Smart Cities", "Commercial Spaces", "Residential Projects"],
  },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCompany, setActiveCompany] = useState(0);

  // Auto-rotate companies
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCompany((prev) => (prev + 1) % companies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e3f2fd] via-[#e8f4fc] to-[#f0f9ff]">
      <Navbar />

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32 md:pt-20">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #e1f5fe 100%)",
              "linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 50%, #e3f2fd 100%)",
              "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #e1f5fe 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles - Pre-defined positions to avoid hydration mismatch - Hidden on mobile for performance */}
        <div className="hidden sm:block">
          {[
            { delay: 0, size: 8, left: "15%", top: "20%" },
            { delay: 0.3, size: 10, left: "85%", top: "25%" },
            { delay: 0.6, size: 6, left: "25%", top: "60%" },
            { delay: 0.9, size: 7, left: "70%", top: "70%" },
            { delay: 1.2, size: 9, left: "10%", top: "45%" },
            { delay: 1.5, size: 6, left: "90%", top: "80%" },
            { delay: 1.8, size: 8, left: "45%", top: "15%" },
            { delay: 2.1, size: 7, left: "80%", top: "50%" },
            { delay: 2.4, size: 10, left: "20%", top: "75%" },
            { delay: 2.7, size: 6, left: "60%", top: "35%" },
            { delay: 3, size: 8, left: "5%", top: "65%" },
            { delay: 3.3, size: 9, left: "88%", top: "65%" },
            { delay: 3.6, size: 7, left: "75%", top: "90%" },
            { delay: 3.9, size: 8, left: "35%", top: "45%" },
            { delay: 4.2, size: 6, left: "50%", top: "80%" },
            { delay: 4.5, size: 7, left: "15%", top: "55%" },
            { delay: 4.8, size: 10, left: "65%", top: "25%" },
            { delay: 5.1, size: 8, left: "40%", top: "70%" },
            { delay: 5.4, size: 6, left: "92%", top: "40%" },
            { delay: 5.7, size: 9, left: "22%", top: "30%" },
          ].map((particle, i) => (
            <FloatingParticle
              key={i}
              delay={particle.delay}
              size={particle.size}
              left={particle.left}
              top={particle.top}
            />
          ))}
        </div>

        {/* Animated Circles - Hidden on mobile for better performance and layout */}
        <div className="hidden md:block">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Geometric Shapes - Hidden on mobile for better layout */}
        <div className="hidden md:block">
          <motion.div
            className="absolute top-32 right-20 w-20 h-20 border-4 border-blue-400/30 rounded-lg"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-16 h-16 border-4 border-cyan-400/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <WaveAnimation />

        <motion.div 
          style={{ y: heroY, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-full mb-8 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-blue-600" />
              </motion.div>
              <span className="text-blue-700 font-bold text-lg">Welcome to Arshith Groups</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Zap className="w-5 h-5 text-cyan-500" />
              </motion.div>
            </motion.div>

            {/* Main Heading with Gradient */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 px-2 text-balance"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block text-slate-800"
              >
                Innovating the{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                className="relative inline-block"
              >
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Future
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
              >
                Together
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium px-4"
            >
              Arshith Private Limited is a leading technology company delivering innovative solutions
              and nurturing the next generation of tech talent.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-blue-100 shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col xs:flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-xl w-full sm:w-auto">
                    Discover More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
              <Link href="/careers">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 border-2 border-blue-400 text-blue-700 font-bold rounded-xl hover:bg-blue-50 w-full sm:w-auto">
                    <Play className="mr-2 w-5 h-5" />
                    Join Our Team
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>


      </section>

      {/* Company Showcase Slider Section */}
      <section id="business" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(241,245,249,0.9) 50%, rgba(255,255,255,0.9) 100%)",
              "linear-gradient(135deg, rgba(241,245,249,0.9) 0%, rgba(255,255,255,0.9) 50%, rgba(241,245,249,0.9) 100%)",
              "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(241,245,249,0.9) 50%, rgba(255,255,255,0.9) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-200/30 blur-2xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-200/30 blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-amber-200/30 blur-2xl"
          animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 font-semibold text-sm mb-4"
            >
              <Building2 className="w-4 h-4" />
              Our Group Companies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-4 px-2"
            >
              Diversified <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Excellence</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4"
            >
              Three powerful companies, one unified vision - driving innovation across agriculture, technology, and infrastructure
            </motion.p>
          </motion.div>

          {/* Company Navigation Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {companies.map((company, index) => (
              <motion.button
                key={company.name}
                onClick={() => setActiveCompany(index)}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCompany === index
                    ? `bg-gradient-to-r ${company.color} text-white shadow-xl`
                    : "bg-white/80 text-slate-700 hover:bg-white shadow-md border border-slate-200"
                }`}
              >
                <company.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{company.shortName}</span>
                <span className="sm:hidden">{company.shortName.split(" ")[0]}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Main Slider */}
          <div className="relative">
            {/* Navigation Arrows - Hidden on mobile */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveCompany((prev) => (prev - 1 + companies.length) % companies.length)}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveCompany((prev) => (prev + 1) % companies.length)}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Slider Content */}
            <AnimatePresence mode="wait">
              {companies.map((company, index) => (
                activeCompany === index && (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`${company.bgColor} rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-white/50 overflow-hidden relative`}
                  >
                    {/* Decorative Background Elements */}
                    <motion.div
                      className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${company.color} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                      transition={{ duration: 10, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-64 h-64 bg-white/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"
                      animate={{ scale: [1.2, 1, 1.2] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center relative z-10">
                      {/* Left Content */}
                      <div>
                        {/* Company Icon & Name */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="flex items-center gap-4 mb-6"
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center shadow-lg`}
                          >
                            <company.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-800">{company.name}</h3>
                            <p className={`text-lg font-semibold bg-gradient-to-r ${company.color} bg-clip-text text-transparent`}>
                              {company.tagline}
                            </p>
                          </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-lg text-slate-600 mb-8 leading-relaxed"
                        >
                          {company.description}
                        </motion.p>

                        {/* Highlights */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-wrap gap-3 mb-8"
                        >
                          {company.highlights.map((highlight, i) => (
                            <motion.span
                              key={highlight}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 shadow-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {highlight}
                            </motion.span>
                          ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Link href="/business">
                            <motion.button
                              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)" }}
                              whileTap={{ scale: 0.95 }}
                              className={`px-8 py-4 bg-gradient-to-r ${company.color} text-white font-bold rounded-xl shadow-lg flex items-center gap-2`}
                            >
                              Explore {company.shortName}
                              <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ArrowRight className="w-5 h-5" />
                              </motion.span>
                            </motion.button>
                          </Link>
                        </motion.div>
                      </div>

                      {/* Right Content - Stats */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-1 gap-6"
                      >
                        {company.stats.map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.15 }}
                            whileHover={{ scale: 1.03, x: 10 }}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-white/50 flex items-center gap-4 sm:gap-5 md:gap-6"
                          >
                            <motion.div
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center shadow-md`}
                            >
                              <span className="text-2xl font-extrabold text-white">{i + 1}</span>
                            </motion.div>
                            <div>
                              <motion.div
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                                className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${company.color} bg-clip-text text-transparent`}
                              >
                                {stat.value}
                              </motion.div>
                              <p className="text-slate-600 font-medium">{stat.label}</p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mt-8"
          >
            {companies.map((company, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCompany(index)}
                whileHover={{ scale: 1.2 }}
                className="relative"
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCompany === index 
                    ? `bg-gradient-to-r ${company.color}` 
                    : "bg-slate-300"
                }`} />
                {activeCompany === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r ${company.color}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ opacity: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Auto-play Progress Bar */}
          <motion.div className="max-w-md mx-auto mt-6">
            <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                key={activeCompany}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className={`h-full bg-gradient-to-r ${companies[activeCompany].color}`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="achievements" className="py-24 bg-white/60 backdrop-blur-sm relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-cyan-50/50"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm uppercase tracking-wider mb-4"
            >
              <Star className="w-4 h-4" />
              Our Achievements
              <Star className="w-4 h-4" />
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800">
              Numbers That <span className="text-blue-600">Speak</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -10 }}
                className="relative text-center p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-800 relative">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </h3>
                <p className="text-slate-600 mt-2 font-semibold relative">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f0f9ff] to-[#e3f2fd]">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-200/30 rounded-full blur-2xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm uppercase tracking-wider mb-4"
            >
              What We Do
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold text-slate-800"
            >
              Our <span className="text-blue-600">Services</span>
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" 
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 relative overflow-hidden"
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} 
                />
                
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="relative text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-slate-600 leading-relaxed">{service.description}</p>
                
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white/70 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4"
              >
                Why Choose Us
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                Excellence in Every <span className="text-blue-600">Project</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With years of experience and a dedicated team, we deliver solutions that exceed expectations.
              </p>

              <div className="space-y-4">
                {[
                  "Expert team of developers and designers",
                  "Cutting-edge technology stack",
                  "Agile development methodology",
                  "24/7 support and maintenance",
                  "Competitive pricing",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </motion.div>
                    <span className="text-slate-700 font-semibold group-hover:text-blue-600 transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 rounded-3xl blur-2xl"
              />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: TrendingUp, label: "Growth", value: "300%", color: "text-green-500", bg: "bg-green-50" },
                    { icon: Zap, label: "Speed", value: "2x Faster", color: "text-yellow-500", bg: "bg-yellow-50" },
                    { icon: Users, label: "Clients", value: "200+", color: "text-blue-500", bg: "bg-blue-50" },
                    { icon: Award, label: "Awards", value: "15+", color: "text-purple-500", bg: "bg-purple-50" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`${item.bg} rounded-2xl p-4 sm:p-6 text-center`}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className={`w-10 h-10 mx-auto mb-3 ${item.color}`} />
                      </motion.div>
                      <div className="text-2xl font-extrabold text-slate-800">{item.value}</div>
                      <div className="text-sm text-slate-600 font-medium">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Quote Section */}
      <section id="contact-cta" className="py-24 relative overflow-hidden bg-gradient-to-r from-[#e3f2fd] via-[#e8f4fc] to-[#e1f5fe]">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(to right, rgba(227, 242, 253, 1), rgba(232, 244, 252, 1), rgba(225, 245, 254, 1))",
              "linear-gradient(to right, rgba(225, 245, 254, 1), rgba(232, 244, 252, 1), rgba(227, 242, 253, 1))",
              "linear-gradient(to right, rgba(227, 242, 253, 1), rgba(232, 244, 252, 1), rgba(225, 245, 254, 1))",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-8xl text-blue-300 mb-8"
            >
              &ldquo;
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl md:text-3xl text-slate-700 font-medium italic mb-8 leading-relaxed"
            >
              At Arshith Groups, we believe in the power of technology to transform lives. Our mission is not just to build software, but to build futures - for our clients and for the next generation of tech innovators.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mb-4"
              >
                <Image
                  src="/images/ceo.png"
                  alt="Farook.N - CEO"
                  width={96}
                  height={96}
                  className="object-cover object-top w-full h-full"
                />
              </motion.div>
              <div className="text-xl font-bold text-slate-800">Farook.N</div>
              <div className="text-blue-600 font-semibold">CEO & Founder, Arshith Groups</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 p-12 md:p-16"
          >
            {/* Animated Background */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 bg-white/10 rounded-full"
                style={{ left: `${15 + i * 15}%`, top: `${10 + (i % 2) * 50}%` }}
                animate={{ y: [0, -30, 0], scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}

            <div className="relative z-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-extrabold text-white mb-6"
              >
                Ready to Start Your Journey?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Whether you need a technology partner or want to kickstart your career, we are here to help.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="text-lg px-8 py-6 bg-white text-blue-700 hover:bg-blue-50 font-bold">
                      Contact Us
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/careers/internships">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 font-bold">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Explore Internships
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

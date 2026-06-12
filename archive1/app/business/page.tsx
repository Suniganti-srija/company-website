"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Code, Smartphone, Cloud, Globe, Database, Shield, ArrowRight, Check, TrendingUp, Users, Award, Building2, Sparkles, Star, Zap, Target, ChevronRight, Play, BarChart3, Rocket, LineChart, PieChart, Cpu, Layers, GitBranch, Lightbulb, Headphones, Briefcase, MapPin } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useRef, useState, useEffect } from "react";

// Animated counter component
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
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

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

// Floating particles component
function FloatingParticles() {
  const particles = [
    { w: 5, h: 5, l: 10, t: 15, dur: 5, x: 20, del: 0.5 },
    { w: 6, h: 6, l: 25, t: 30, dur: 6, x: 15, del: 1 },
    { w: 4, h: 4, l: 40, t: 45, dur: 5.5, x: 25, del: 0.2 },
    { w: 7, h: 7, l: 55, t: 20, dur: 6.5, x: 18, del: 1.5 },
    { w: 5, h: 5, l: 70, t: 50, dur: 5.2, x: 22, del: 0.8 },
    { w: 6, h: 6, l: 15, t: 65, dur: 6.2, x: 20, del: 1.2 },
    { w: 4, h: 4, l: 80, t: 35, dur: 5.8, x: 24, del: 0.3 },
    { w: 7, h: 7, l: 45, t: 75, dur: 6.8, x: 16, del: 1.8 },
    { w: 5, h: 5, l: 30, t: 10, dur: 5.5, x: 21, del: 0.6 },
    { w: 6, h: 6, l: 90, t: 60, dur: 6.3, x: 19, del: 1.1 },
    { w: 4, h: 4, l: 20, t: 40, dur: 5.3, x: 23, del: 0.4 },
    { w: 7, h: 7, l: 65, t: 70, dur: 6.9, x: 17, del: 1.7 },
    { w: 5, h: 5, l: 35, t: 25, dur: 5.7, x: 20, del: 0.9 },
    { w: 6, h: 6, l: 75, t: 55, dur: 6.1, x: 22, del: 1.3 },
    { w: 4, h: 4, l: 50, t: 5, dur: 5.4, x: 25, del: 0.5 },
    { w: 7, h: 7, l: 12, t: 52, dur: 6.7, x: 18, del: 1.6 },
    { w: 5, h: 5, l: 88, t: 15, dur: 5.6, x: 21, del: 0.7 },
    { w: 6, h: 6, l: 42, t: 62, dur: 6.4, x: 19, del: 1.4 },
    { w: 4, h: 4, l: 18, t: 35, dur: 5.5, x: 24, del: 0.1 },
    { w: 7, h: 7, l: 72, t: 48, dur: 6.6, x: 20, del: 1.9 },
    { w: 5, h: 5, l: 58, t: 72, dur: 5.8, x: 22, del: 0.8 },
    { w: 6, h: 6, l: 28, t: 22, dur: 6.2, x: 18, del: 1.2 },
    { w: 4, h: 4, l: 82, t: 42, dur: 5.4, x: 26, del: 0.3 },
    { w: 7, h: 7, l: 38, t: 58, dur: 6.8, x: 17, del: 1.5 },
    { w: 5, h: 5, l: 68, t: 8, dur: 5.9, x: 23, del: 0.6 },
    { w: 6, h: 6, l: 22, t: 68, dur: 6.3, x: 20, del: 1.1 },
    { w: 4, h: 4, l: 95, t: 32, dur: 5.5, x: 21, del: 0.4 },
    { w: 7, h: 7, l: 48, t: 78, dur: 6.9, x: 19, del: 1.8 },
    { w: 5, h: 5, l: 8, t: 28, dur: 5.6, x: 25, del: 0.7 },
    { w: 6, h: 6, l: 78, t: 5, dur: 6.1, x: 22, del: 1.3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
          style={{
            width: p.w,
            height: p.h,
            left: `${p.l}%`,
            top: `${p.t}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, p.x - 25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.del,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated background grid
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

// Animated Gradient Text
function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      {children}
    </motion.span>
  );
}

// Floating Icon Component
function FloatingIcon({ Icon, delay = 0 }: { Icon: any; delay?: number }) {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 6 + delay * 0.5,
        repeat: Infinity,
        delay: delay * 0.1,
      }}
      className="inline-block"
    >
      <Icon className="w-8 h-8 text-blue-500" />
    </motion.div>
  );
}

// Pulse Animation Component
function PulseRing({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 2, opacity: 0 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: delay,
      }}
      className="absolute rounded-full border-2 border-blue-500"
    />
  );
}

// 3D Card component
function Card3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    setRotateY(mouseX * 0.02);
    setRotateX(-mouseY * 0.02);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    id: "web",
    icon: Code,
    title: "Web Development",
    description: "Enterprise-grade web applications with cutting-edge technologies, ensuring scalability and performance.",
    features: [
      "Custom Enterprise Applications",
      "E-commerce Platforms",
      "Progressive Web Apps",
      "API Development & Integration",
      "CMS Development",
      "Performance Optimization"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    stats: { projects: 150, satisfaction: 99 },
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile solutions delivering exceptional user experiences across all devices.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-platform Solutions",
      "App Maintenance & Support",
      "UI/UX Design",
      "App Store Optimization"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    stats: { projects: 80, satisfaction: 98 },
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure enabling digital transformation with secure and reliable services.",
    features: [
      "Cloud Migration",
      "AWS Solutions",
      "Azure Services",
      "Google Cloud Platform",
      "DevOps Implementation",
      "Cloud Security"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    stats: { projects: 120, satisfaction: 97 },
    gradient: "from-cyan-600 to-teal-500",
  },
  {
    id: "consulting",
    icon: Globe,
    title: "Digital Consulting",
    description: "Strategic advisory services guiding your digital transformation journey with expertise.",
    features: [
      "Digital Strategy",
      "Technology Assessment",
      "Process Optimization",
      "IT Roadmap Planning",
      "Vendor Selection",
      "Change Management"
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    stats: { projects: 200, satisfaction: 99 },
    gradient: "from-sky-600 to-blue-500",
  },
  {
    id: "data",
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable intelligence driving informed business decisions.",
    features: [
      "Business Intelligence",
      "Data Visualization",
      "Predictive Analytics",
      "Big Data Solutions",
      "Machine Learning",
      "Data Engineering"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stats: { projects: 90, satisfaction: 96 },
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions protecting your digital assets and business continuity.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Solutions",
      "Incident Response",
      "Security Training",
      "Risk Assessment"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    stats: { projects: 75, satisfaction: 100 },
    gradient: "from-emerald-600 to-cyan-500",
  },
];

const businessVerticals = [
  { icon: Building2, name: "Infrastructure", value: "₹5000 Cr+", description: "Project Portfolio" },
  { icon: Cpu, name: "Technology", value: "200+", description: "Solutions Delivered" },
  { icon: LineChart, name: "Finance", value: "₹1200 Cr", description: "Annual Revenue" },
  { icon: Users, name: "Workforce", value: "500+", description: "Team Members" },
];

const achievements = [
  { icon: Award, title: "Best Tech Company 2024", org: "Tech Excellence Awards" },
  { icon: Star, title: "Top 100 Companies", org: "Business India" },
  { icon: Target, title: "Innovation Leader", org: "Digital India Summit" },
  { icon: TrendingUp, title: "Fastest Growing", org: "Economic Times" },
];

export default function BusinessPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Video-like Animation */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatedGrid />
        <FloatingParticles />
        
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Hero background image with parallax */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Corporate skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <motion.div 
          style={{ y: heroY, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Animated badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </motion.div>
                <span className="text-blue-700 font-bold">Our Business Excellence</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap className="w-5 h-5 text-cyan-500" />
                </motion.div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
              >
                <span className="text-foreground">Transforming</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Digital Future
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
              >
                At Arshith Groups, we deliver world-class technology solutions that drive innovation, 
                accelerate growth, and create sustainable value for businesses worldwide.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-xl"
                  >
                    Partner With Us
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-700 rounded-xl font-bold flex items-center gap-2 border-2 border-blue-200 hover:border-blue-400 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Watch Video
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Animated stats cards */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:grid grid-cols-2 gap-4 md:gap-6"
            >
              {businessVerticals.map((item, index) => (
                <Card3D key={item.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-100 group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-extrabold text-foreground mb-1">
                      {item.value}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <p className="text-xs text-blue-600 font-semibold mt-2">{item.name}</p>
                  </motion.div>
                </Card3D>
              ))}
            </motion.div>
          </div>
        </motion.div>


      </section>

      {/* Achievements Marquee */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-cyan-600 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...achievements, ...achievements, ...achievements].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <item.icon className="w-6 h-6" />
              <span className="font-bold">{item.title}</span>
              <span className="text-white/70">- {item.org}</span>
              <span className="text-white/50">•</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Services Section with 3D Cards */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 relative">
        <FloatingParticles />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm uppercase tracking-wider mb-6"
            >
              <Layers className="w-4 h-4" />
              Our Services
              <Layers className="w-4 h-4" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-snug break-all">
              <span className="inline-block">Comprehensive</span>
              <br />
              <span className="gradient-text inline-block">Solutions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end technology services designed to accelerate your digital transformation journey
            </p>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full" 
            />
          </motion.div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center`}
              >
                {/* Image side with advanced animations */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 relative group"
                >
                  <Card3D className="relative">
                    <div className="relative h-52 sm:h-64 lg:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-40 transition-opacity`} />
                      
                      {/* Floating icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute bottom-8 left-8 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl"
                      >
                        <service.icon className="w-10 h-10 text-blue-600" />
                      </motion.div>

                      {/* Stats overlay */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                      >
                        <div className="text-3xl font-extrabold text-blue-600">
                          <AnimatedCounter target={service.stats.projects} suffix="+" />
                        </div>
                        <div className="text-xs text-muted-foreground font-medium">Projects Delivered</div>
                      </motion.div>
                    </div>
                  </Card3D>

                  {/* Decorative elements */}
                  <motion.div
                    className={`absolute -z-10 w-full h-full rounded-3xl bg-gradient-to-br ${service.gradient} opacity-20`}
                    style={{ top: 20, left: index % 2 === 0 ? 20 : -20 }}
                    animate={{ 
                      top: [20, 30, 20],
                      left: [index % 2 === 0 ? 20 : -20, index % 2 === 0 ? 30 : -30, index % 2 === 0 ? 20 : -20]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Content side */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-bold mb-4`}
                  >
                    <service.icon className="w-4 h-4" />
                    {service.id.toUpperCase()}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4 md:mb-6"
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>

                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8"
                  >
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <Check className="w-3.5 h-3.5 text-white" />
                        </motion.div>
                        <span className="text-foreground font-medium group-hover:text-blue-600 transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                  >
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-bold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-shadow w-full sm:w-auto whitespace-nowrap`}
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {service.stats.satisfaction}% Satisfaction
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Interactive Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
        <AnimatedGrid />
        <FloatingParticles />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm uppercase tracking-wider mb-6"
            >
              <Award className="w-4 h-4" />
              Why Choose Us
              <Award className="w-4 h-4" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4">
              The Arshith <span className="gradient-text">Advantage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading enterprises worldwide for our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { number: 10, suffix: "+", label: "Years Experience", desc: "Industry Leadership", icon: BarChart3, gradient: "from-blue-600 to-cyan-500" },
              { number: 500, suffix: "+", label: "Projects Delivered", desc: "Worldwide Success", icon: Rocket, gradient: "from-cyan-600 to-teal-500" },
              { number: 98, suffix: "%", label: "Client Satisfaction", desc: "Excellence Standard", icon: Star, gradient: "from-indigo-600 to-purple-500" },
              { number: 50, suffix: "+", label: "Global Clients", desc: "Trusted Partners", icon: Globe, gradient: "from-violet-600 to-indigo-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card3D>
                  <motion.div
                    whileHover={{ y: -15 }}
                    className="bg-white p-8 rounded-3xl shadow-xl text-center border border-blue-100 group relative overflow-hidden h-full"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-xl`}
                    >
                      <stat.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-5xl font-extrabold text-foreground mb-2 relative">
                      <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                    </h3>
                    <h4 className="text-xl font-bold text-foreground mb-2 relative">{stat.label}</h4>
                    <p className="text-muted-foreground relative">{stat.desc}</p>
                    
                    {/* Animated border */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies & Testimonials Section */}
      <section className="py-14 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-slate-50 to-background">
        <AnimatedGrid />
        <FloatingParticles />

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"
          animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm uppercase tracking-wider mb-6"
            >
              <Star className="w-4 h-4" />
              Success Stories
              <Star className="w-4 h-4" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4">
              Client <GradientText>Success Stories</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real transformations from real clients - see how we&apos;ve helped businesses achieve their goals
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-20">
            {[
              {
                company: "TechCorp Global",
                role: "VP of Innovation",
                name: "Alex Richardson",
                testimonial: "Arshith transformed our entire digital infrastructure, reducing costs by 40% while improving performance by 300%.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                stats: "↑ 300% Performance",
                gradient: "from-blue-600 to-cyan-500",
              },
              {
                company: "InnovateTech Solutions",
                role: "CEO & Founder",
                name: "Sarah Chen",
                testimonial: "The team's expertise in cloud solutions helped us scale to 10x users without any downtime.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
                stats: "↑ 10x Scalability",
                gradient: "from-indigo-600 to-purple-500",
              },
              {
                company: "EnterpriseTech Inc",
                role: "CTO",
                name: "Michael Torres",
                testimonial: "Best investment we made. Their consulting shaped our tech strategy for the next 5 years.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                stats: "5-Year Vision",
                gradient: "from-cyan-600 to-teal-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 group relative"
              >
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                />

                <div className="p-8">
                  {/* Stars */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-1 mb-6"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </motion.div>

                  {/* Testimonial */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-lg text-slate-700 mb-8 italic leading-relaxed"
                  >
                    &ldquo;{item.testimonial}&rdquo;
                  </motion.p>

                  {/* Author */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 flex-shrink-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.name}</h4>
                      <p className="text-sm text-slate-600">{item.role} at {item.company}</p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.5 }}
                        viewport={{ once: true }}
                        className={`text-xs font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mt-1`}
                      >
                        {item.stats}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
              transition={{ duration: 15, repeat: Infinity }}
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2260%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.1%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                backgroundSize: "60px 60px",
              }}
            />

            <motion.div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
              {[
                { number: 500, label: "Projects", icon: Briefcase },
                { number: 98, label: "% Satisfaction", icon: Star },
                { number: 50, label: "+ Clients", icon: Users },
                { number: 10, label: "+ Years", icon: Award },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, delay: index * 0.3, repeat: Infinity }}
                    className="flex justify-center mb-4"
                  >
                    <stat.icon className="w-10 h-10" />
                  </motion.div>
                  <motion.div
                    className="text-5xl md:text-6xl font-extrabold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter target={stat.number} suffix="+" />
                  </motion.div>
                  <div className="text-lg font-semibold opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="py-14 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt="Business success"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-cyan-900/95" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-bold text-sm uppercase tracking-wider mb-8 border border-white/20"
            >
              <Rocket className="w-4 h-4" />
              Ready to Transform?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8"
            >
              Let&apos;s Build Something
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
            >
              Partner with Arshith Groups and unlock the full potential of digital transformation for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-blue-700 rounded-xl font-bold text-lg flex items-center gap-3 shadow-2xl hover:bg-blue-50 transition-colors"
                >
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white/50 text-white rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-white/10 transition-all"
              >
                Schedule a Call
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

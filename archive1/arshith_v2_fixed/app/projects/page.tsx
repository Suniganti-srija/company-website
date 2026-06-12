"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Calendar, Users, CheckCircle, Sparkles, Star, Filter, Search, Building2, Rocket, BarChart3, Award } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useRef, useState, useEffect } from "react";

// Animated counter
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

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

const projects = [
  {
    title: "Enterprise Banking Platform",
    category: "Fintech",
    description: "A comprehensive digital banking solution with real-time transactions, AI-powered fraud detection, and personalized financial insights for millions of users.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "AI/ML"],
    client: "National Bank Corp.",
    duration: "8 months",
    team: "25 members",
    value: "₹50 Cr",
    featured: true,
  },
  {
    title: "Healthcare Management System",
    category: "Healthcare",
    description: "End-to-end healthcare platform managing 50+ hospitals with patient records, telemedicine, pharmacy integration, and AI diagnostics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tech: ["Angular", "Python", "PostgreSQL", "Azure", "HIPAA"],
    client: "MediCare Group",
    duration: "12 months",
    team: "30 members",
    value: "₹75 Cr",
    featured: true,
  },
  {
    title: "Smart City IoT Platform",
    category: "Infrastructure",
    description: "Comprehensive IoT platform managing traffic, energy, public safety, and utilities for a metro city of 5 million residents.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    tech: ["Python", "AWS IoT", "React", "TensorFlow", "Edge Computing"],
    client: "Metro City Council",
    duration: "18 months",
    team: "40 members",
    value: "₹150 Cr",
    featured: true,
  },
  {
    title: "E-Commerce Marketplace",
    category: "Retail",
    description: "Multi-vendor marketplace platform handling 100K+ daily transactions with real-time inventory and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe"],
    client: "ShopMax Inc.",
    duration: "6 months",
    team: "15 members",
    value: "₹25 Cr",
    featured: false,
  },
  {
    title: "AI Customer Service Bot",
    category: "AI & ML",
    description: "Intelligent conversational AI handling 500K+ customer queries monthly with 95% resolution rate and seamless human handoff.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    tech: ["Python", "TensorFlow", "NLP", "Google Cloud", "DialogFlow"],
    client: "TeleConnect",
    duration: "4 months",
    team: "12 members",
    value: "₹15 Cr",
    featured: false,
  },
  {
    title: "Supply Chain Management",
    category: "Logistics",
    description: "Real-time supply chain visibility platform tracking 10K+ shipments daily with predictive analytics and automated optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    tech: ["Vue.js", "Java", "Oracle", "Azure", "Blockchain"],
    client: "GlobalLogistics Co.",
    duration: "10 months",
    team: "22 members",
    value: "₹40 Cr",
    featured: false,
  },
];

const categories = ["All", "Fintech", "Healthcare", "Infrastructure", "Retail", "AI & ML", "Logistics"];

const stats = [
  { icon: Rocket, number: 200, suffix: "+", label: "Projects Delivered", gradient: "from-blue-600 to-cyan-500" },
  { icon: Building2, number: 50, suffix: "+", label: "Enterprise Clients", gradient: "from-cyan-600 to-teal-500" },
  { icon: Star, number: 99, suffix: "%", label: "Success Rate", gradient: "from-indigo-600 to-purple-500" },
  { icon: Award, number: 15, suffix: "+", label: "Industry Awards", gradient: "from-violet-600 to-indigo-500" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden">
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Projects showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <motion.div 
          style={{ y: heroY }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-32"
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
              <span className="text-blue-700 font-bold">Our Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            >
              <span className="text-foreground">Projects That</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Define Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Explore our portfolio of transformative projects delivering innovative technology 
              solutions across industries, driving digital excellence for leading enterprises.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        {/* Animated background */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-white/10 rounded-full"
            style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 2) * 40}%` }}
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center text-white"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-secondary/30 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-5 items-center justify-between">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative w-full md:w-80"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Filter className="w-5 h-5 text-muted-foreground self-center mr-2" />
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                      : "bg-white text-foreground hover:bg-blue-50 border border-border"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-10 sm:py-14 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Featured</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2">
                Flagship Projects
              </h2>
            </motion.div>

            <div className="space-y-10 sm:space-y-12 md:space-y-14">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-4 sm:gap-6 md:gap-8 items-center`}
                >
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="lg:w-1/2 relative group"
                  >
                    <div className="relative h-52 sm:h-64 lg:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
                      
                      {/* Value badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg"
                      >
                        <div className="text-2xl font-extrabold text-blue-600">{project.value}</div>
                        <div className="text-xs text-muted-foreground">Project Value</div>
                      </motion.div>

                      {/* Category badge */}
                      <div className="absolute bottom-6 left-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2 mb-4 sm:mb-6"
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-3 gap-4 mb-6 sm:mb-8"
                    >
                      <div className="text-center p-4 bg-secondary/50 rounded-xl">
                        <Calendar className="w-5 h-5 mx-auto mb-2 text-blue-600" />
                        <div className="font-bold text-foreground">{project.duration}</div>
                        <div className="text-xs text-muted-foreground">Duration</div>
                      </div>
                      <div className="text-center p-4 bg-secondary/50 rounded-xl">
                        <Users className="w-5 h-5 mx-auto mb-2 text-blue-600" />
                        <div className="font-bold text-foreground">{project.team}</div>
                        <div className="text-xs text-muted-foreground">Team Size</div>
                      </div>
                      <div className="text-center p-4 bg-secondary/50 rounded-xl">
                        <Building2 className="w-5 h-5 mx-auto mb-2 text-blue-600" />
                        <div className="font-bold text-foreground text-sm">{project.client}</div>
                        <div className="text-xs text-muted-foreground">Client</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-xl"
                        >
                          Discuss Similar Project
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects Grid */}
      {otherProjects.length > 0 && (
        <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-primary font-bold text-sm uppercase tracking-wider">More Work</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2">
                Recent Projects
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-border/50"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-4 right-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                      </motion.button>
                    </motion.div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-xs font-semibold text-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-secondary text-xs font-semibold text-muted-foreground rounded">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="font-bold text-blue-600">{project.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-14 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
            alt="Partnership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-cyan-900/95" />
        </div>

        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-bold text-sm mb-8 border border-white/20"
            >
              <Rocket className="w-4 h-4" />
              Start Your Project
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8"
            >
              Have a Project in Mind?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
            >
              Let&apos;s collaborate and bring your vision to life with our expertise in delivering world-class technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-blue-700 rounded-xl font-bold text-lg flex items-center gap-3 shadow-2xl mx-auto"
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

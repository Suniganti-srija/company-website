"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart, Users, Award, Lightbulb, Linkedin, Twitter, Mail, Sparkles, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useRef, useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideIn = {
  left: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, type: "spring", stiffness: 100 }
  },
  right: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, type: "spring", stiffness: 100 }
  }
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our business practices and relationships.",
    color: "from-pink-400 to-red-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster an environment of open communication.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, setting high standards for quality and performance.",
    color: "from-purple-400 to-indigo-500"
  },
];

const team = [
  {
    name: "Farook.N",
    role: "Chief Executive Officer",
    image: "/images/ceo.png",
    description: "Visionary leader driving Arshith Groups to new heights with 15+ years of experience in technology, business strategy, and digital transformation.",
    featured: true,
  },
  {
    name: "Pallavi",
    role: "Managing Director",
    image: "/images/managing-director.png",
    description: "Strategic business leader overseeing operations and driving sustainable growth across all business verticals with exceptional leadership.",
    featured: true,
  },
  {
    name: "Rahul Verma",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    description: "Tech innovator specializing in cloud architecture, AI solutions, and enterprise digital transformation.",
    featured: false,
  },
  {
    name: "Priya Sharma",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    description: "Operations expert ensuring seamless delivery of projects and excellence across all departments.",
    featured: false,
  },
];

const milestones = [
  { year: "2015", event: "Arshith Groups Founded", description: "Started with a vision to transform digital landscape" },
  { year: "2017", event: "First Major Project", description: "Delivered enterprise solution for Fortune 500 client" },
  { year: "2019", event: "Global Expansion", description: "Opened offices in 5 new countries" },
  { year: "2021", event: "500+ Team Members", description: "Grew our talented workforce across the globe" },
  { year: "2023", event: "Innovation Hub Launch", description: "Established R&D center for emerging technologies" },
  { year: "2024", event: "Industry Recognition", description: "Won Best Tech Company Award" },
];

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
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
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GlowingOrb({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl pointer-events-none z-0 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03, duration: 0.3 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 sm:pt-32 md:pt-28 pb-16 sm:pb-20 overflow-hidden min-h-screen sm:min-h-[80vh] flex items-end sm:items-center">
        <ParticleField />
        <GlowingOrb className="w-96 h-96 -top-48 -right-48" />
        <GlowingOrb className="w-72 h-72 bottom-0 -left-36" />
        
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
            alt="Team meeting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-0"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-4 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Building the{" "}
              </motion.span>
              <motion.span 
                className="text-primary relative inline-block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              >
                Future
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                of Technology
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Arshith Private Limited is a leading technology company committed to innovation,
              excellence, and nurturing talent. We transform ideas into reality through
              cutting-edge solutions and dedicated teamwork.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {["Innovation", "Excellence", "Integrity"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 hidden lg:block"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl backdrop-blur-sm border border-primary/10 flex items-center justify-center">
            <Target className="w-10 h-10 text-primary" />
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        <GlowingOrb className="w-64 h-64 top-0 left-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              className="bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-border/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center mb-6"
              >
                <Target className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="relative text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="relative text-muted-foreground leading-relaxed">
                To empower businesses and individuals through innovative technology solutions
                while fostering a culture of continuous learning and growth. We aim to be the
                catalyst for digital transformation across industries.
              </p>
              
              <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2 }}
              >
                <ArrowRight className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              className="bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-border/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/40 rounded-2xl flex items-center justify-center mb-6"
              >
                <Eye className="w-8 h-8 text-accent" />
              </motion.div>
              <h2 className="relative text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="relative text-muted-foreground leading-relaxed">
                To be the global leader in technology innovation, recognized for our excellence
                in service delivery and commitment to developing the next generation of tech
                professionals who will shape the future.
              </p>
              
              <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2 }}
              >
                <ArrowRight className="w-6 h-6 text-accent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <ParticleField />
        
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
            alt="Office space"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              <Star className="w-4 h-4" />
              What We Stand For
              <Star className="w-4 h-4" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            >
              Our Core Values
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" 
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{ 
                  y: -15,
                  rotateX: 5,
                  rotateY: 5,
                }}
                className="bg-card p-8 rounded-2xl shadow-md text-center group border border-border/50 relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="relative text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="relative text-muted-foreground text-sm">{value.description}</p>
                
                {/* Decorative corner */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        <GlowingOrb className="w-80 h-80 top-1/4 -right-40" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Our Story
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            >
              Journey Through Time
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" 
            />
          </motion.div>

          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary origin-top"
            />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right text-left mb-4 md:mb-0" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: index % 2 === 0 ? 5 : -5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    className="bg-card p-6 rounded-xl shadow-lg border border-border/50 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <motion.span 
                      className="relative text-primary font-bold text-xl"
                      whileHover={{ scale: 1.1 }}
                    >
                      {milestone.year}
                    </motion.span>
                    <h3 className="relative text-xl font-bold text-foreground mt-2">{milestone.event}</h3>
                    <p className="relative text-muted-foreground text-sm mt-2">{milestone.description}</p>
                  </motion.div>
                </div>
                
                {/* Animated dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-lg z-10"
                >
                  {/* Pulse effect */}
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary rounded-full"
                  />
                </motion.div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <ParticleField />
        
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
            alt="Team working"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              <Users className="w-4 h-4" />
              Leadership
              <Users className="w-4 h-4" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            >
              Meet Our Team
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" 
            />
          </motion.div>

          {/* Featured Leadership - CEO and Managing Director */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-16"
          >
            {team.filter(m => m.featured).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl shadow-2xl overflow-hidden group border-2 border-primary/20 relative"
              >
                {/* Premium badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute top-6 right-6 z-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg"
                >
                  {member.role}
                </motion.div>

                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 h-72 md:h-auto overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-card/20" />
                  </div>

                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-extrabold text-foreground mb-2"
                    >
                      {member.name}
                    </motion.h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{member.description}</p>
                    
                    {/* Social links */}
                    <div className="flex gap-3">
                      {[Linkedin, Twitter, Mail].map((Icon, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          whileHover={{ scale: 1.15, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Other Team Members */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto"
          >
            {team.filter(m => !m.featured).map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                whileHover={{ y: -15 }}
                className="bg-card rounded-2xl shadow-lg overflow-hidden group border border-border/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"
                  />
                  
                  {/* Social links on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
                <div className="p-6 text-center">
                  <motion.h3 
                    className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    className="text-primary font-semibold text-sm mt-1"
                  >
                    {member.role}
                  </motion.p>
                  <p className="text-muted-foreground text-sm mt-3">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

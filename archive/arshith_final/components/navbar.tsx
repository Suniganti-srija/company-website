"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Business", href: "/business" },
  { name: "Projects", href: "/projects" },
  {
    name: "Careers",
    href: "/careers",
    dropdown: [
      { name: "Internships", href: "/careers/internships", desc: "Learn & grow with us" },
      { name: "Job Postings", href: "/careers/jobs", desc: "Full-time opportunities" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleNavClick = (href: string) => {
    if (href !== "/") {
      scrollToTop();
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" onClick={() => scrollToTop()} className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mr-3 shadow-lg"
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.div>
                <div className="text-2xl font-extrabold">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Arshith</span>
                  <span className={`${scrolled ? "text-slate-800" : "text-slate-800"}`}> Groups</span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setCareersOpen(true)}
                      onMouseLeave={() => setCareersOpen(false)}
                    >
                      <motion.button 
                        className={`flex items-center space-x-1 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                          scrolled 
                            ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50" 
                            : "text-slate-800 hover:text-blue-600 hover:bg-white/50"
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span>{link.name}</span>
                        <motion.div
                          animate={{ rotate: careersOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {careersOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl py-3 border border-blue-100 overflow-hidden"
                          >
                            {link.dropdown.map((item, index) => (
                              <Link
                                key={item.name}
                                href={item.href}
                              >
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center justify-between px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 group"
                                >
                                  <div>
                                    <div className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {item.name}
                                    </div>
                                    <div className="text-xs text-slate-500">{item.desc}</div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
                                </motion.div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={link.href} onClick={() => handleNavClick(link.href)}>
                      <motion.div
                        className={`px-4 py-2 rounded-xl font-semibold relative overflow-hidden transition-all duration-300 ${
                          scrolled 
                            ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50" 
                            : "text-slate-800 hover:text-blue-600 hover:bg-white/50"
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        {link.name}
                        <motion.span 
                          className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link href="/contact" onClick={() => handleNavClick("/contact")}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold shadow-lg flex items-center gap-2"
                >
                  Get Started
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden p-2 rounded-xl ${scrolled ? "text-slate-700" : "text-slate-800"}`}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-blue-100 shadow-xl"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setCareersOpen(!careersOpen)}
                          className="flex items-center justify-between w-full py-3 px-4 text-slate-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                        >
                          <span>{link.name}</span>
                          <motion.div
                            animate={{ rotate: careersOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {careersOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1 mt-1"
                            >
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block py-3 px-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                                  onClick={() => handleNavClick(item.href)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block py-3 px-4 text-slate-700 font-semibold hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                        onClick={() => handleNavClick(link.href)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <Link href="/contact" onClick={() => handleNavClick("/contact")}>
                    <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

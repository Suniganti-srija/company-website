"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, DollarSign, Search, Filter } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

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

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "5+ years",
    salary: "₹18-25 LPA",
    description: "We are looking for an experienced Full-Stack Developer to join our engineering team and lead complex projects.",
    skills: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹8-15 LPA",
    description: "Join our team to build beautiful and responsive user interfaces using modern frontend technologies.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Operations",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹12-20 LPA",
    description: "Help us build and maintain scalable infrastructure and CI/CD pipelines.",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹8-14 LPA",
    description: "Create intuitive and beautiful user experiences for our products.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "Data Scientist",
    department: "Data",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹15-22 LPA",
    description: "Apply machine learning and statistical methods to solve business problems.",
    skills: ["Python", "TensorFlow", "SQL", "Data Analysis", "Machine Learning"],
    posted: "1 day ago",
  },
  {
    id: 6,
    title: "Project Manager",
    department: "Management",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "5+ years",
    salary: "₹16-24 LPA",
    description: "Lead cross-functional teams to deliver projects on time and within budget.",
    skills: ["Agile", "Scrum", "JIRA", "Stakeholder Management"],
    posted: "4 days ago",
  },
];

const departments = ["All", "Engineering", "Design", "Operations", "Data", "Management"];
const locations = ["All", "Remote", "Bangalore, India", "Hyderabad, India", "Mumbai, India"];

export default function JobsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider block mb-2"
            >
              Job Openings
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mt-0 mb-4 leading-tight"
            >
              Find Your{" "}
              <span className="text-primary">Dream Job</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground"
            >
              Explore exciting career opportunities at Arshith Groups. Join our team
              of innovators and make an impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-secondary/30 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-grow w-full lg:w-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:flex-initial">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full lg:w-48 pl-10 pr-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept === "All" ? "All Departments" : dept}</option>
                  ))}
                </select>
              </div>

              <div className="relative flex-1 lg:flex-initial">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full lg:w-48 pl-10 pr-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc === "All" ? "All Locations" : loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span> jobs
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {job.department}
                      </span>
                      <span className="text-muted-foreground text-sm">{job.posted}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors leading-snug">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-3 md:items-end">
                    <Link href="/careers/apply" className="flex-1 md:flex-initial">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-muted-foreground text-lg">No jobs found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedDepartment("All");
                    setSelectedLocation("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team"
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
              {"Don't"} See the Right Fit?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Send us your resume anyway! {"We're"} always looking for talented individuals.
            </p>
            <Link href="/careers/apply">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold flex items-center gap-2 hover:bg-white/90 transition-colors mx-auto"
              >
                Submit Your Resume
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

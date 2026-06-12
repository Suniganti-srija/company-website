"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { User, Mail, Phone, FileText, Briefcase, GraduationCap, CreditCard, CheckCircle, ArrowRight, Upload } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const applicationTypes = [
  { id: "internship", label: "Internship", icon: GraduationCap },
  { id: "job", label: "Job Application", icon: Briefcase },
];

const internshipDomains = [
  { id: "web-dev", label: "Web Development" },
  { id: "frontend", label: "Frontend Development" },
];

const internshipPlans = [
  { id: "3-months", label: "3 Months - ₹9,999", price: 9999 },
  { id: "6-months", label: "6 Months - ₹17,999", price: 17999 },
];

const paymentMethods = [
  { id: "upi", label: "UPI", icon: "📱" },
  { id: "card", label: "Credit/Debit Card", icon: "💳" },
  { id: "netbanking", label: "Net Banking", icon: "🏦" },
  { id: "emi", label: "EMI Options", icon: "📅" },
];

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [applicationType, setApplicationType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    college: "",
    graduationYear: "",
    experience: "",
    domain: "",
    plan: "",
    resume: null as File | null,
    portfolio: "",
    linkedin: "",
    whyJoin: "",
    availability: "",
    paymentMethod: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    setSubmitted(true);
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  if (submitted) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-14 sm:pb-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-4xl font-bold text-foreground mb-4 leading-tight"
            >
              Application Submitted!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Thank you for applying to Arshith Groups. We have received your application
              and will contact you within 2-3 business days.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="/" className="text-primary font-semibold hover:underline">
                Return to Home
              </a>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Apply"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Application Form
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold text-foreground mt-2 mb-4 leading-tight"
          >
            Apply to <span className="text-primary">Arshith Groups</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground"
          >
            Fill out the application form below to start your journey with us.
          </motion.p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, applicationType === "internship" ? 4 : null].filter(Boolean).map((s, index) => (
              <div key={s} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= (s as number)
                      ? "bg-primary text-white"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {s}
                </motion.div>
                {index < (applicationType === "internship" ? 3 : 2) && (
                  <div className={`w-16 h-1 ${step > (s as number) ? "bg-primary" : "bg-secondary"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-4 text-sm">
            <span className={step >= 1 ? "text-primary font-medium" : "text-muted-foreground"}>Type</span>
            <span className={step >= 2 ? "text-primary font-medium" : "text-muted-foreground"}>Details</span>
            <span className={step >= 3 ? "text-primary font-medium" : "text-muted-foreground"}>Experience</span>
            {applicationType === "internship" && (
              <span className={step >= 4 ? "text-primary font-medium" : "text-muted-foreground"}>Payment</span>
            )}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 pb-24">
        <div className="max-w-3xl mx-auto px-4">
          <motion.form
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            {/* Step 1: Application Type */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">What are you applying for?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {applicationTypes.map((type) => (
                    <motion.div
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setApplicationType(type.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                        applicationType === type.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <type.icon className={`w-10 h-10 mb-4 ${
                        applicationType === type.id ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <h3 className="text-lg font-bold text-foreground">{type.label}</h3>
                    </motion.div>
                  ))}
                </div>

                {applicationType === "internship" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Select Domain</label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {internshipDomains.map((domain) => (
                          <motion.div
                            key={domain.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData(prev => ({ ...prev, domain: domain.id }))}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              formData.domain === domain.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <span className="font-medium">{domain.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Select Plan</label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {internshipPlans.map((plan) => (
                          <motion.div
                            key={plan.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData(prev => ({ ...prev, plan: plan.id }))}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              formData.plan === plan.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <span className="font-medium">{plan.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={nextStep}
                  disabled={!applicationType || (applicationType === "internship" && (!formData.domain || !formData.plan))}
                  className="mt-8 w-full py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            )}

            {/* Step 2: Personal Details */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Personal Details</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Education *</label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select Education</option>
                        <option value="pursuing">Currently Pursuing</option>
                        <option value="btech">B.Tech/B.E.</option>
                        <option value="bsc">B.Sc Computer Science</option>
                        <option value="bca">BCA</option>
                        <option value="mtech">M.Tech/M.E.</option>
                        <option value="mca">MCA</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Graduation Year *</label>
                      <select
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select Year</option>
                        {[2024, 2025, 2026, 2027, 2028].map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">College/University *</label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your college name"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={prevStep}
                    className="flex-1 py-4 bg-secondary text-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors"
                  >
                    Back
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={nextStep}
                    className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Step 3: Experience & Documents */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Experience & Documents</h2>
                <div className="space-y-6">
                  {applicationType === "job" && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Work Experience (Years) *</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select Experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-2">1-2 years</option>
                        <option value="2-4">2-4 years</option>
                        <option value="4-6">4-6 years</option>
                        <option value="6+">6+ years</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Upload Resume *</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="w-full p-8 border-2 border-dashed border-border rounded-xl flex flex-col items-center cursor-pointer hover:border-primary transition-colors"
                      >
                        <Upload className="w-10 h-10 text-muted-foreground mb-3" />
                        <span className="text-foreground font-medium">
                          {formData.resume ? formData.resume.name : "Click to upload resume"}
                        </span>
                        <span className="text-sm text-muted-foreground mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Portfolio URL (Optional)</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">LinkedIn Profile (Optional)</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Why do you want to join Arshith Groups? *</label>
                    <textarea
                      name="whyJoin"
                      value={formData.whyJoin}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your motivation and goals..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">When can you start? *</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select Availability</option>
                      <option value="immediate">Immediately</option>
                      <option value="1-week">Within 1 week</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={prevStep}
                    className="flex-1 py-4 bg-secondary text-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors"
                  >
                    Back
                  </motion.button>
                  {applicationType === "internship" ? (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={nextStep}
                      className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                      Continue to Payment
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                      Submit Application
                      <CheckCircle className="w-5 h-5" />
                    </motion.button>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Payment (Internship only) */}
            {step === 4 && applicationType === "internship" && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Payment Details</h2>
                
                <div className="bg-secondary/50 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Order Summary</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">
                      {formData.domain === "web-dev" ? "Web Development" : "Frontend Development"} Internship
                    </span>
                    <span className="font-medium">
                      {formData.plan === "3-months" ? "₹9,999" : "₹17,999"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{formData.plan === "3-months" ? "3 Months" : "6 Months"}</span>
                  </div>
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-foreground">Total Amount</span>
                      <span className="text-xl font-bold text-primary">
                        {formData.plan === "3-months" ? "₹9,999" : "₹17,999"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-foreground mb-4">Select Payment Method</label>
                  <div className="grid grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <motion.div
                        key={method.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: method.id }))}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                          formData.paymentMethod === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="text-2xl">{method.icon}</span>
                        <span className="font-medium">{method.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={prevStep}
                    className="flex-1 py-4 bg-secondary text-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors"
                  >
                    Back
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!formData.paymentMethod}
                    className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CreditCard className="w-5 h-5" />
                    Pay & Submit
                  </motion.button>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

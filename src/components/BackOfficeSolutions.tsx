import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaDatabase,
  FaFileInvoiceDollar,
  FaFileAlt,
  FaUsers,
  FaShoppingCart,
  FaChartBar,
  FaShieldAlt,
  FaClock,
  FaCogs,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
  FaHospital,
  FaStore,
  FaMoneyCheckAlt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import {
  GiProgression,
  GiProcessor
} from "react-icons/gi";
import {
  MdOutlineIntegrationInstructions,
  MdSupportAgent
} from "react-icons/md";

const BackOffice: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/backoffice-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-orange-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            BACK-OFFICE SOLUTIONS
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl text-white mb-6 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Empowering Your Business with Operational Precision
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed text-white max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Vizx Global's back-office BPO services are designed to support scalability, compliance, and efficiency—freeing your internal teams to focus on growth and innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8"
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Our Specialists
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Back-Office Services */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive Back-Office Services
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our portfolio of services is crafted to enhance your non-customer-facing functions, reduce overhead, and deliver measurable results across operations.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { 
                title: "Data Entry & Management", 
                description: "Clean, accurate, and structured data is the backbone of informed decisions. We handle everything from CRM inputs to legacy data digitization.",
                icon: <FaDatabase className="text-3xl text-orange-500 mb-4" />
              },
              { 
                title: "Invoice & Billing Processing", 
                description: "Minimize payment delays and maximize cash flow accuracy with automated invoice matching, validation, and reconciliation.",
                icon: <FaFileInvoiceDollar className="text-3xl text-orange-500 mb-4" />
              },
              { 
                title: "Document Management", 
                description: "We help companies reduce physical storage, retrieve documents swiftly, and maintain regulatory standards through secure digital archives.",
                icon: <FaFileAlt className="text-3xl text-orange-500 mb-4" />
              },
              { 
                title: "HR & Payroll Support", 
                description: "From new hire processing to benefits and compliance, we streamline complex HR tasks for accuracy, transparency, and confidentiality.",
                icon: <FaUsers className="text-3xl text-orange-500 mb-4" />
              },
              { 
                title: "Procurement & Vendor Management", 
                description: "Our teams oversee supplier communications, PO processing, and spend analysis to keep your supply chain agile and efficient.",
                icon: <FaShoppingCart className="text-3xl text-orange-500 mb-4" />
              },
              { 
                title: "Reporting & Analytics", 
                description: "Custom dashboards and scheduled reports provide operational clarity and guide smarter strategy at every level.",
                icon: <FaChartBar className="text-3xl text-orange-500 mb-4" />
              },
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-center"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Service Suite
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose VizX */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-orange-500 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Why Companies Choose <span className="text-primary">VizX for Back-Office BPO</span>
              </motion.h2>
              
              <motion.ul 
                className="space-y-4"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { text: "Expertise at Scale: We manage high-volume tasks for global clients, ensuring consistency and speed regardless of complexity.", icon: <GiProgression className="text-orange-500 mr-3" /> },
                  { text: "Process Optimization: Every process we take on is analyzed, documented, and refined to ensure maximum efficiency.", icon: <FaCogs className="text-orange-500 mr-3" /> },
                  { text: "Technology Integration: Whether you use SAP, Oracle, Salesforce, or QuickBooks—we integrate smoothly with your stack.", icon: <MdOutlineIntegrationInstructions className="text-orange-500 mr-3" /> },
                  { text: "Data Security & Compliance: We meet ISO, GDPR, and HIPAA standards, keeping sensitive data protected through layered security.", icon: <FaShieldAlt className="text-orange-500 mr-3" /> },
                  { text: "Round-the-Clock Support: With teams in multiple time zones, we offer continuous service, even during peak loads or holidays.", icon: <FaClock className="text-orange-500 mr-3" /> },
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <span className="mr-3 text-primary mt-1">
                      {item.icon}
                    </span>
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.a
                  href="/contact"
                  className="inline-flex items-center bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Experience the VizX Advantage
                  <FaHandshake className="ml-2" />
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/images/backoffice-collaboration.jpg"
                alt="Team collaborating on operations"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industry Applications
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our back-office solutions span multiple industries—each with its own regulatory environment and process challenges. Here's how we deliver value across sectors:
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { 
                title: "Healthcare", 
                description: "HIPAA-compliant patient data management and insurance billing.",
                icon: <FaHospital className="text-3xl text-orange-500 mb-4" />
              },
              { 
                title: "E-commerce & Retail", 
                description: "Inventory data updates, returns processing, and invoice management.",
                icon: <FaStore className="text-3xl text-orange-500 mb-4" />
              },
              { 
                title: "Finance", 
                description: "Transactional processing, compliance support, and financial reporting.",
                icon: <FaMoneyCheckAlt className="text-3xl text-orange-500 mb-4" />
              },
              { 
                title: "Telecom", 
                description: "Customer data updates, contract digitization, and payment validation.",
                icon: <FaPhone className="text-3xl text-orange-500 mb-4" />
              },
              { 
                title: "Logistics", 
                description: "Vendor onboarding, delivery records management, and customs documentation.",
                icon: <GiProcessor className="text-3xl text-orange-500 mb-4" />
              },
            ].map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-center"
                >
                  {industry.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-center">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center">{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See How We Can Help Your Industry
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-8 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Unlock Operational Excellence with VizX Global
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            With decades of experience, cutting-edge technology, and a global team, VizX is your partner for building efficient, resilient operations. Let us transform your back office into a powerhouse of productivity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Optimize Your Workflow
              <FaCheckCircle className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Request a Callback Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Request a Callback
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our team is dedicated to optimizing your back-office operations and providing top-tier management. Leave your details, and we'll get back to you within 24 hours.
          </motion.p>
          <motion.form 
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 relative mb-4 md:mb-0">
                <FaUsers className="absolute left-3 top-3 text-orange-500" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 pl-10 rounded text-foreground bg-background border border-border"
                />
              </div>
              <div className="flex-1 relative">
                <FaPhone className="absolute left-3 top-3 text-orange-500" />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full p-3 pl-10 rounded text-foreground bg-background border border-border"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 relative mb-4 md:mb-0">
                <FaEnvelope className="absolute left-3 top-3 text-orange-500" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 pl-10 rounded text-foreground bg-background border border-border"
                />
              </div>
              <div className="flex-1 relative">
                <FaMapMarkerAlt className="absolute left-3 top-3 text-orange-500" />
                <input
                  type="text"
                  placeholder="Your Location"
                  className="w-full p-3 pl-10 rounded text-foreground bg-background border border-border"
                />
              </div>
            </div>
            <div className="relative">
              <MdSupportAgent className="absolute left-3 top-3 text-orange-500" />
              <textarea
                placeholder="Tell us more about your back-office needs"
                className="w-full p-3 pl-10 rounded text-foreground bg-background border border-border"
                rows={4}
              />
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <input type="checkbox" className="mr-2" />
              <span>
                By providing your phone number, you consent to receive SMS communications from VIZX Global regarding updates, promotions, and important notifications. Standard messaging rates may apply.
              </span>
            </div>
            <motion.button
              type="submit"
              className="bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition-colors w-full md:w-auto flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCheckCircle className="mr-2" />
              SUBMIT
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default BackOffice;
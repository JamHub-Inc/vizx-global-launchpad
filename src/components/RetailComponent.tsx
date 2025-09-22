import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHeadset,
  FaShoppingCart,
  FaTags,
  FaBoxOpen,
  FaChartLine,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaMobileAlt,
  FaDatabase
} from "react-icons/fa";
import {
  GiProgression,
  GiShoppingBag
} from "react-icons/gi";
import {
  MdOutlineSupportAgent,
  MdAnalytics,
  MdSecurity
} from "react-icons/md";

const ServiceItem: React.FC<{ 
  title: string; 
  description: string;
  icon: React.ReactNode;
  index: number;
}> = ({ title, description, icon, index }) => (
  <motion.div 
    className="bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-xl transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
      className="text-center mb-4"
    >
      {icon}
    </motion.div>
    <h3 className="text-2xl font-bold text-orange-500 mb-3 text-center">{title}</h3>
    <p className="text-muted-foreground leading-relaxed text-center">{description}</p>
  </motion.div>
);

const RetailIndustry: React.FC = () => {
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

  const services = [
    {
      title: "Omnichannel Customer Support",
      description: "24/7 service across email, chat, phone, and social platforms to boost customer engagement and satisfaction.",
      icon: <FaHeadset className="text-3xl text-orange-500" />
    },
    {
      title: "Order Management & Fulfillment Support",
      description: "Ensure fast, accurate order processing, tracking, returns, and exchange handling for smooth experiences.",
      icon: <FaShoppingCart className="text-3xl text-orange-500" />
    },
    {
      title: "Product Information Management",
      description: "Optimize listings across marketplaces with consistent, high-quality SEO content and image tagging.",
      icon: <FaTags className="text-3xl text-orange-500" />
    },
    {
      title: "Inventory & Supply Chain Coordination",
      description: "Real-time inventory updates, vendor communications, and logistics support reduce fulfillment delays.",
      icon: <FaBoxOpen className="text-3xl text-orange-500" />
    }
  ];

  const whyChooseUs = [
    {
      title: "Cost Optimization",
      description: "Lower costs through offshore support and automation without compromising quality.",
      icon: <FaChartLine className="text-orange-500 mr-3" />
    },
    {
      title: "Rapid Scalability",
      description: "Scale resources easily for holiday seasons, flash sales, and high-traffic events.",
      icon: <GiProgression className="text-orange-500 mr-3" />
    },
    {
      title: "Digital Commerce Expertise",
      description: "We specialize in platforms like Shopify, Magento, Amazon, and WooCommerce.",
      icon: <GiShoppingBag className="text-orange-500 mr-3" />
    },
    {
      title: "Tech-Enabled Operations",
      description: "We integrate CRMs, AI bots, and analytics to streamline performance and support decisions.",
      icon: <MdAnalytics className="text-orange-500 mr-3" />
    },
    {
      title: "Secure & Compliant",
      description: "End-to-end encryption and compliance with GDPR, PCI-DSS, and local data laws protect your reputation.",
      icon: <MdSecurity className="text-orange-500 mr-3" />
    }
  ];

  const retailSolutions = [
    {
      title: "E-commerce Platform Support",
      description: "Specialized support for major e-commerce platforms and marketplaces",
      icon: <FaMobileAlt className="text-3xl text-orange-500 mb-4" />
    },
    {
      title: "Customer Experience Management",
      description: "End-to-end customer journey optimization and support",
      icon: <FaUsers className="text-3xl text-orange-500 mb-4" />
    },
    {
      title: "Data Analytics & Insights",
      description: "Actionable insights from customer behavior and sales data",
      icon: <FaDatabase className="text-3xl text-orange-500 mb-4" />
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/retail-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-orange-500 mb-4"
          >
            Retail & E-Commerce
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            Accelerate Growth and Customer Loyalty with Scalable BPO Solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8"
          >
            <GiShoppingBag className="text-5xl text-orange-500 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Retail & E-Commerce BPO Services
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <ServiceItem 
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Retail Solutions Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive Retail Solutions
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {retailSolutions.map((solution, index) => (
              <motion.div 
                key={solution.title}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-center"
                >
                  {solution.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose VizX Global for Retail & E-Commerce?
          </motion.h2>
          
          <motion.div 
            className="space-y-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={item.title}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <span className="mr-3 text-primary mt-1">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
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
              Elevate Your Retail Strategy
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* E-commerce Platforms Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Supported E-commerce Platforms
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "Shopify", icon: "🛍️" },
              { name: "Magento", icon: "⚡" },
              { name: "Amazon", icon: "📦" },
              { name: "WooCommerce", icon: "🛒" },
              { name: "BigCommerce", icon: "🏪" },
              { name: "Salesforce", icon: "☁️" },
              { name: "Shopify Plus", icon: "🚀" },
              { name: "Custom Solutions", icon: "🔧" }
            ].map((platform, index) => (
              <motion.div 
                key={platform.name}
                className="bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-2">{platform.icon}</div>
                <h3 className="font-bold text-primary">{platform.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Request a Callback Section */}
      <section className="py-16 px-8 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Retail Operations
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to accelerate your retail growth? Leave your details, and we'll get back to you within 24 hours.
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
                  placeholder="Company Name"
                  className="w-full p-3 pl-10 rounded text-foreground bg-background border border-border"
                />
              </div>
            </div>
            <div className="relative">
              <MdOutlineSupportAgent className="absolute left-3 top-3 text-orange-500" />
              <textarea
                placeholder="Tell us about your retail and e-commerce needs"
                className="w-full p-3 pl-10 rounded text-foreground bg-background border border-border"
                rows={4}
              />
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <input type="checkbox" className="mr-2" />
              <span>
                By providing your phone number, you consent to receive SMS communications from VIZX Global regarding updates, promotions, and important notifications.
              </span>
            </div>
            <motion.button
              type="submit"
              className="bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition-colors w-full md:w-auto flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCheckCircle className="mr-2" />
              GET STARTED
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default RetailIndustry;
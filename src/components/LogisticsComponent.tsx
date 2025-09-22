import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaTruck,
  FaWarehouse,
  FaShippingFast,
  FaChartLine,
  FaGlobe,
  FaUserTie,
  FaLightbulb,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaCogs,
  FaBoxes,
  FaExchangeAlt,
  FaSearchDollar,
  FaClipboardList,
  FaDatabase
} from 'react-icons/fa';
import {
  GiProgression,
  GiCargoCrate
} from 'react-icons/gi';
import {
  MdOutlineSupportAgent,
  MdAnalytics,
  MdLocalShipping
} from 'react-icons/md';

const FAQItem: React.FC<{ 
  question: string; 
  answer: string; 
  index: number 
}> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className="border-b border-gray-700 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center focus:outline-none"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-xl font-semibold flex items-center">
          <FaQuestionCircle className="text-orange-500 mr-3" />
          {question}
        </span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-orange-500 text-xl"
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </motion.span>
      </motion.button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-4 leading-relaxed pl-8 text-muted-foreground">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const increment = target / (duration / 16);
          const handle = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(handle);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [target, duration, hasAnimated]);

  return (
    <span id={`counter-${target}`} className="text-orange-500">
      {count.toLocaleString() + suffix}
    </span>
  );
};

const LogisticsSupplyChainIndustry: React.FC = () => {
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

  const coreSolutions = [
    { 
      title: "Supply Chain Management", 
      description: "End-to-end management of supply chain activities, including planning, inventory management, and distribution.",
      icon: <GiCargoCrate className="text-orange-500 mr-3" />
    },
    { 
      title: "Transportation Management", 
      description: "Streamlined logistics, route optimization, and freight management solutions to improve delivery efficiency.",
      icon: <FaTruck className="text-orange-500 mr-3" />
    },
    { 
      title: "Warehousing and Distribution", 
      description: "Efficient management of warehousing operations and distribution strategies to enhance responsiveness.",
      icon: <FaWarehouse className="text-orange-500 mr-3" />
    },
    { 
      title: "Inventory Optimization", 
      description: "Advanced analytics and forecasting techniques to optimize inventory levels and reduce carrying costs.",
      icon: <FaBoxes className="text-orange-500 mr-3" />
    },
    { 
      title: "Technology Integration", 
      description: "Implementation of cutting-edge technologies like AI to enhance supply chain visibility and efficiency.",
      icon: <MdAnalytics className="text-orange-500 mr-3" />
    }
  ];

  const benefits = [
    { 
      title: "Proven Track Record", 
      description: "We have a solid reputation for delivering tangible results and operational excellence in logistics and supply chain management.",
      icon: <FaCheckCircle className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Global Reach", 
      description: "Through our network of strategic partners, we provide scalable solutions for businesses across diverse geographic locations.",
      icon: <FaGlobe className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Industry Expertise", 
      description: "Our team comprises experienced logisticians and supply chain experts who excel in implementing best practices.",
      icon: <FaUserTie className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Innovation", 
      description: "We stay at the forefront of industry trends, leveraging innovative solutions to drive continuous improvement.",
      icon: <FaLightbulb className="text-3xl text-orange-500 mb-4" />
    }
  ];

  const solutionsGrid = [
    { 
      title: "Transportation Management", 
      description: "Carrier selection & management, route optimization, freight auditing, tracking shipments",
      icon: <MdLocalShipping className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Warehousing & Distribution", 
      description: "Inventory storage, order fulfillment, pick and pack services, returns management",
      icon: <FaWarehouse className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Freight Forwarding", 
      description: "Customs clearance, documentation management, global coordination",
      icon: <FaShippingFast className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Supply Chain Consulting", 
      description: "Network design & optimization, process improvement, technology integration",
      icon: <FaClipboardList className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Reverse Logistics", 
      description: "Product returns processing, refurbishment & repackaging, disposal or recycling management",
      icon: <FaExchangeAlt className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Inventory Management", 
      description: "Stock level optimization, cycle counting, reconciliation",
      icon: <FaBoxes className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Procurement Services", 
      description: "Supplier selection & negotiation, strategic sourcing",
      icon: <FaSearchDollar className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Supply Chain Analytics", 
      description: "Performance metrics tracking, data analysis & reporting, predictive analytics",
      icon: <FaDatabase className="text-3xl text-orange-500 mb-4" />
    }
  ];

  const stats = [
    { value: 23, label: 'Years in BPO & RPO', suffix: '' },
    { value: 7, label: 'Years in Logistics Industry', suffix: '' },
    { value: 5000, label: 'Hires Placed Yearly', suffix: '+' },
    { value: 55, label: 'Clients Served', suffix: '+' }
  ];

  const faqItems = [
    {
      question: "What are the main benefits of outsourcing logistics and supply chain services?",
      answer: "Reduced costs, improved efficiency, global reach, and access to specialized expertise are key benefits."
    },
    {
      question: "How can outsourcing logistics services improve our company's efficiency?",
      answer: "By streamlining processes, leveraging advanced technologies, and optimizing resource allocation, outsourcing can significantly reduce turnaround times."
    },
    {
      question: "What types of logistics and supply chain functions are commonly outsourced?",
      answer: "Transportation management, warehousing, freight forwarding, inventory management, reverse logistics, and more."
    },
    {
      question: "What is the typical process for transitioning to outsourced logistics services?",
      answer: "It includes assessing current needs, defining scope & SLAs, implementing secure data exchange, and ongoing communication and monitoring."
    },
    {
      question: "How do we measure the success of outsourced logistics services?",
      answer: "Through KPIs like delivery times, cost savings, inventory turnover, and overall service-level performance."
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/logistics-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-orange-500 mb-4"
          >
            Logistics & Supply Chain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            VIZX boosts top-notch technology, expert team and global network to revolutionize your logistics processes—ensuring efficiency and cost savings.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.a
              href="/contact"
              className="bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Now
            </motion.a>
            <motion.a
              href="/contact"
              className="bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-primary-foreground text-orange-500 font-semibold py-3 px-6 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Core Logistics & Supply Chain Solutions */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Core Logistics & Supply Chain Solutions We Outsource
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Logistics and supply chain outsourcing is increasingly popular among businesses aiming to streamline their operations. We've successfully collaborated with companies of all sizes, delivering customized solutions that enhance visibility, reduce costs, and improve supply chain performance.
          </motion.p>
          
          <motion.div 
            className="space-y-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreSolutions.map((solution, index) => (
              <motion.div 
                key={solution.title}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <span className="mr-3 text-primary mt-1">
                    {solution.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
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
              Learn More
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* What You Stand to Benefit */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What You Stand to Benefit
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Logistics & Supply Chain Solutions Outsourced */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Logistics & Supply Chain Solutions Outsourced
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Request it. We'll deliver it.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutionsGrid.map((solution, index) => (
              <motion.div 
                key={solution.title}
                className="bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-xl transition-all duration-300"
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
                <h3 className="text-lg font-bold text-primary mb-2 text-center">{solution.title}</h3>
                <p className="text-muted-foreground text-sm text-center">{solution.description}</p>
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
              Start Today
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Our Numbers Section */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Numbers Set Us Apart
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-4xl font-bold mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We understand you may have questions about logistics & supply chain outsourcing. We're here to help.
          </motion.p>
          
          <div className="space-y-2">
            {faqItems.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
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
            Optimize Your Supply Chain
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to revolutionize your logistics operations? Leave your details, and we'll get back to you within 24 hours.
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
                placeholder="Tell us about your logistics and supply chain needs"
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

export default LogisticsSupplyChainIndustry;
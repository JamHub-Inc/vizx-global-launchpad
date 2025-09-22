import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaIndustry,
  FaCalculator,
  FaDatabase,
  FaChartBar,
  FaTruck,
  FaCogs,
  FaUserTie,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaClipboardList,
  FaSearchDollar,
  FaLaptopCode,
  FaResearchgate
} from 'react-icons/fa';
import {
  GiProgression,
  GiFactory
} from 'react-icons/gi';
import {
  MdOutlineSupportAgent,
  MdAnalytics,
  MdEngineering
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

const ManufacturingIndustry: React.FC = () => {
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

  const backOfficeServices = [
    { 
      title: "Accounting Services", 
      icon: <FaCalculator className="text-orange-500 mr-3" />
    },
    { 
      title: "Data Management", 
      icon: <FaDatabase className="text-orange-500 mr-3" />
    },
    { 
      title: "Sales Analysis", 
      icon: <FaChartBar className="text-orange-500 mr-3" />
    },
    { 
      title: "Logistics and Shipping", 
      icon: <FaTruck className="text-orange-500 mr-3" />
    },
    { 
      title: "Analytics Solutions", 
      icon: <MdAnalytics className="text-orange-500 mr-3" />
    },
    { 
      title: "Technical Services", 
      icon: <MdEngineering className="text-orange-500 mr-3" />
    },
    { 
      title: "Legal Support", 
      icon: <FaShieldAlt className="text-orange-500 mr-3" />
    }
  ];

  const benefits = [
    { 
      title: "Reduced overall costs", 
      icon: <FaSearchDollar className="text-orange-500 mr-3" />
    },
    { 
      title: "Increased efficiency and accuracy", 
      icon: <FaCheckCircle className="text-orange-500 mr-3" />
    },
    { 
      title: "Quick turnaround", 
      icon: <GiProgression className="text-orange-500 mr-3" />
    },
    { 
      title: "Access to global talent", 
      icon: <FaUsers className="text-orange-500 mr-3" />
    },
    { 
      title: "Improved production quality", 
      icon: <FaIndustry className="text-orange-500 mr-3" />
    },
    { 
      title: "Improved supply chain management", 
      icon: <FaTruck className="text-orange-500 mr-3" />
    },
    { 
      title: "Better inventory control", 
      icon: <FaClipboardList className="text-orange-500 mr-3" />
    }
  ];

  const commonOperations = [
    { 
      title: "Accounting and Finance", 
      description: "Bookkeeping, payroll, financial analysis, reporting, and planning",
      icon: <FaCalculator className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Human Resources", 
      description: "Benefits administration, employee training, talent acquisition",
      icon: <FaUserTie className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "IT Support", 
      description: "Network management, helpdesk, cybersecurity, data backup & recovery",
      icon: <FaCogs className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Supply Chain Management", 
      description: "Procurement support, vendor management, inventory tracking",
      icon: <FaTruck className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Software Development", 
      description: "Web, mobile app dev, custom software solutions",
      icon: <FaLaptopCode className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Data Entry and Management", 
      description: "Production data entry, quality control, data processing",
      icon: <FaDatabase className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Research and Analysis", 
      description: "Market research, competitor analysis",
      icon: <FaResearchgate className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "IT Consulting", 
      description: "Technology roadmap, digital transformation consulting",
      icon: <FaLightbulb className="text-3xl text-orange-500 mb-4" />
    }
  ];

  const stats = [
    { value: 23, label: 'Years in BPO & RPO', suffix: '' },
    { value: 7, label: 'Years in Manufacturing Industry', suffix: '' },
    { value: 5000, label: 'Hires Placed Yearly', suffix: '+' },
    { value: 55, label: 'Clients Served', suffix: '+' }
  ];

  const faqItems = [
    {
      question: "What are the main benefits of outsourcing back-office operations in manufacturing?",
      answer: "Cost savings, enhanced efficiency, and access to specialized talent are just a few benefits of outsourcing."
    },
    {
      question: "How can outsourcing back-office operations improve accuracy?",
      answer: "By leveraging experienced teams and robust quality checks, we minimize errors and streamline workflows."
    },
    {
      question: "Which back-office functions are commonly outsourced for manufacturing businesses?",
      answer: "Accounting, HR, IT support, supply chain management, data processing, and more."
    },
    {
      question: "How do we maintain control over our operations when outsourcing back-office functions?",
      answer: "We establish clear SLAs, regular reporting, and transparent communication to ensure alignment with your business goals."
    },
    {
      question: "How do we measure the success of outsourced back-office operations?",
      answer: "We track metrics such as cost savings, process efficiency, error rates, and turnaround times to evaluate performance."
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/manufacturing-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-orange-500 mb-4"
          >
            Manufacturing Industry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            We offer Manufacturing BPO services to cut costs and improve your business's overall operational efficiency.
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

      {/* We Outsource Manufacturing Back Office Services */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We Outsource Manufacturing Back Office Services
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The manufacturing sector forms a large part of the global economy and hence revenue.
            With increasing competition, manufacturers invest in serving their market better through
            dynamic infrastructure, a streamlined supply chain, and innovative technology.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {backOfficeServices.map((service, index) => (
              <motion.div 
                key={service.title}
                className="flex items-center"
                variants={fadeInUp}
              >
                <span className="mr-3 text-primary">
                  {service.icon}
                </span>
                <span className="text-muted-foreground text-lg">{service.title}</span>
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

      {/* What You Stand to Gain with VIZX */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What You Stand to Gain with VIZX
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From accounting to data management, we'll adeptly manage your back-office activities and help you with 
            insight-led business decisions that will increase your operational efficiency and profits.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.ul 
                className="space-y-4 text-muted-foreground"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={benefit.title}
                    className="flex items-center"
                    variants={fadeInUp}
                  >
                    <span className="mr-3 text-primary">
                      {benefit.icon}
                    </span>
                    {benefit.title}
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
                  Learn More
                  <FaArrowRight className="ml-2" />
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
                src="/images/manufacturing-plant.jpg"
                alt="Manufacturing Plant"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Back-Office Operations Outsourced */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Common Back-Office Operations Outsourced
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            You need it, we will deliver it.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {commonOperations.map((operation, index) => (
              <motion.div 
                key={operation.title}
                className="bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-center"
                >
                  {operation.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-primary mb-2 text-center">{operation.title}</h3>
                <p className="text-muted-foreground text-sm text-center">{operation.description}</p>
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
            We understand you may have questions about back-office operations in manufacturing. We're here to help.
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
            Optimize Your Manufacturing Operations
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to streamline your manufacturing back-office? Leave your details, and we'll get back to you within 24 hours.
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
                placeholder="Tell us about your manufacturing operations needs"
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

export default ManufacturingIndustry;
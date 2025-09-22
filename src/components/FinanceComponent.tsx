import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaBook,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaChartBar,
  FaUserTie,
  FaShieldAlt,
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
  FaChartLine,
  FaHandshake,
  FaCalculator,
  FaBalanceScale
} from 'react-icons/fa';
import {
  GiProgression,
  GiMoneyStack
} from 'react-icons/gi';
import {
  MdOutlineSupportAgent,
  MdSecurity,
  MdAccountBalance
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

const FinanceIndustry: React.FC = () => {
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

  const financeSolutions = [
    { 
      title: 'Bookkeeping', 
      description: 'Recording transactions, bank reconciliations',
      icon: <FaBook className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'Accounts Payable/Receivable', 
      description: 'Invoice processing, payment management, collections',
      icon: <FaFileInvoiceDollar className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'Payroll Processing', 
      description: 'Salary calculations, direct deposits, W2s',
      icon: <FaMoneyCheckAlt className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'Financial Reporting', 
      description: 'Management reports, budgeting, forecasting',
      icon: <FaChartBar className="text-3xl text-orange-500 mb-4" />
    }
  ];

  const whyChooseVizx = [
    { 
      title: 'Access to Expertise', 
      description: 'Our team comprises skilled finance professionals with years of experience in accounting, bookkeeping, and payroll.',
      icon: <FaUserTie className="text-orange-500 mr-3" />
    },
    { 
      title: 'Focus on Core Business', 
      description: 'Outsourcing finance frees your internal team to concentrate on strategic initiatives, growing revenue, and serving customers.',
      icon: <FaCogs className="text-orange-500 mr-3" />
    },
    { 
      title: 'Risk Management', 
      description: 'We implement risk management practices including compliance with regulatory requirements, saving your business from financial pitfalls.',
      icon: <FaShieldAlt className="text-orange-500 mr-3" />
    },
    { 
      title: 'Cost Saving', 
      description: 'Our efficient processes and economies of scale help you reduce overhead while maintaining high-quality standards.',
      icon: <GiMoneyStack className="text-orange-500 mr-3" />
    }
  ];

  const processSteps = [
    'Assessing your current finance needs',
    'Identifying which functions to outsource',
    'Selecting a service provider, defining scope & SLAs',
    'Implementing secure data transfer protocols',
    'Transitioning responsibilities',
    'Ongoing monitoring and communication'
  ];

  const stats = [
    { value: 23, label: 'Years in BPO & RPO', suffix: '' },
    { value: 7, label: 'Years in Finance Industry', suffix: '' },
    { value: 5000, label: 'Hires Placed Yearly', suffix: '+' },
    { value: 55, label: 'Clients Served', suffix: '+' }
  ];

  const faqItems = [
    {
      question: "What are the main benefits of outsourcing finance services?",
      answer: "Reduced overhead costs, specialized expertise, and the ability to focus on core business activities."
    },
    {
      question: "How does financial outsourcing reduce costs?",
      answer: "By eliminating the need for in-house staffing and infrastructure, you pay only for the services you need."
    },
    {
      question: "What finance functions are commonly outsourced?",
      answer: "Bookkeeping, payroll, accounts payable/receivable, tax accounting, financial analysis, and more."
    },
    {
      question: "How can we ensure the security of our financial data when outsourcing?",
      answer: "We use secure data transfer protocols, robust encryption, and strict access controls to protect your sensitive information."
    },
    {
      question: "How long does it typically take to transition to an outsourced finance service?",
      answer: "Transition time varies based on the scope and complexity of your current processes, but we strive for minimal disruption."
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/finance-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-orange-500 mb-4"
          >
            Finance Industry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            Outsourcing financial services shifts responsibilities to expert workers at affordable rates—reducing costs and boosting efficiency.
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

      {/* Core Finance Solutions We Outsource */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Core Finance Solutions We Outsource
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We Deliver.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {financeSolutions.map((solution, index) => (
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
              Get Started Today
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose VIZX */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose VIZX
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseVizx.map((advantage, index) => (
              <motion.div 
                key={advantage.title}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <span className="mr-3 text-primary mt-1">
                    {advantage.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Process of Outsourcing Finance Solutions */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Process of Outsourcing Finance Solutions
          </motion.h2>
          
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
                {processSteps.map((step, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    variants={fadeInUp}
                  >
                    <FaCheckCircle className="text-orange-500 mr-3 flex-shrink-0" />
                    {step}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/images/finance-process.jpg"
                alt="Outsourcing Finance Process"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
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
            We understand that you might have some questions about outsourcing finance services. We're here to help.
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
            Request a Callback
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Interested in learning how our finance solutions can transform your business? Leave your details, and we'll get back to you within 24 hours.
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
                placeholder="Tell us more about your finance needs"
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
              SUBMIT
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default FinanceIndustry;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHome,
  FaBuilding,
  FaClipboardList,
  FaHandHoldingUsd,
  FaChartLine,
  FaUserTie,
  FaShieldAlt,
  FaTools,
  FaSearchDollar,
  FaUsers,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaKey,
  FaCity,
  FaChartBar
} from 'react-icons/fa';
import {
  GiHouseKeys,
  GiProgression,
  GiTargetShot
} from 'react-icons/gi';
import {
  MdRealEstateAgent,
  MdOutlineManageAccounts,
  MdAnalytics,
  MdSupportAgent
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

const RealEstateIndustry: React.FC = () => {
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

  const tailoredServices = [
    { 
      text: "Ensure your properties are well-maintained with reliable support.", 
      icon: <FaTools className="text-orange-500 mr-3" /> 
    },
    { 
      text: "Promptly procure fixtures and repairs for seamless upkeep.", 
      icon: <FaClipboardList className="text-orange-500 mr-3" /> 
    },
    { 
      text: "Expertly manage legal documentation with our dedicated legal team.", 
      icon: <FaShieldAlt className="text-orange-500 mr-3" /> 
    },
    { 
      text: "Provide seamless rent collection and accurate reconciliation.", 
      icon: <FaHandHoldingUsd className="text-orange-500 mr-3" /> 
    }
  ];

  const whyVizxIdeal = [
    { 
      title: "Market Trends", 
      text: "Leverage our deep understanding of market trends to maximize your returns.",
      icon: <FaChartLine className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Personalized Approach", 
      text: "From residential to commercial properties, we tailor solutions to meet your unique needs.",
      icon: <MdOutlineManageAccounts className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Excellence", 
      text: "Our commitment to excellence helps you achieve your real estate goals, whether you're a first-time buyer or a seasoned investor.",
      icon: <GiTargetShot className="text-3xl text-orange-500 mb-4" />
    }
  ];

  const specializations = [
    { 
      title: "Property Management", 
      description: "Comprehensive management ensuring efficient operations and maximum returns.",
      icon: <GiHouseKeys className="text-3xl text-orange-500 mr-4 mt-1" />
    },
    { 
      title: "Foreclosure Services", 
      description: "Expertise in foreclosure assistance helps homeowners navigate financial challenges.",
      icon: <FaBuilding className="text-3xl text-orange-500 mr-4 mt-1" />
    },
    { 
      title: "Investment Consulting", 
      description: "Strategic advice to maximize your real estate investment portfolio returns.",
      icon: <FaSearchDollar className="text-3xl text-orange-500 mr-4 mt-1" />
    }
  ];

  const standOutFeatures = [
    { 
      title: "Proven Track Record", 
      text: "Years of exceptional results have earned us the trust of global clients.",
      icon: <FaCheckCircle className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Advanced Analysis", 
      text: "We use advanced research and analysis tools to provide insightful, data-driven solutions.",
      icon: <MdAnalytics className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Experienced Team", 
      text: "Our seasoned professionals understand your needs and deliver tailored strategies.",
      icon: <FaUsers className="text-3xl text-orange-500 mb-4" />
    }
  ];

  const faqItems = [
    {
      question: "How can outsourcing benefit my real estate business?",
      answer: "Outsourcing with VIZX Global helps you tap into specialized expertise while reducing overhead costs, letting you focus on strategic growth."
    },
    {
      question: "Are your services customizable?",
      answer: "Yes. We tailor every solution—from property management to foreclosure services—to meet your specific needs."
    },
    {
      question: "What sets you apart from other real estate service providers?",
      answer: "Our deep market insights, personalized approach, and proven track record of success make us stand out in the industry."
    },
    {
      question: "How do you ensure compliance with industry standards?",
      answer: "We adhere to strict guidelines and employ advanced technology to ensure all operations are compliant with the latest regulations."
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/real-estate-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70"></div>
        <div className="relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-orange-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Real Estate Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Your Dream Home Awaits
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8"
          >
            <FaHome className="text-5xl text-orange-500 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            VIZX Global is a world leader in commercial real estate support services. 
            Whether you're buying, selling, or facing pre-foreclosure, our team of experts is dedicated to 
            delivering exceptional results that meet your unique needs.
          </motion.p>
        </div>
      </section>

      {/* Tailored Property Management Services */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Property Management Services <span className="text-primary">Are Tailored To:</span>
          </motion.h2>
          
          <motion.ul 
            className="text-xl text-muted-foreground space-y-4 mt-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tailoredServices.map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                variants={fadeInUp}
              >
                <span className="mr-3 text-primary">
                  {item.icon}
                </span>
                {item.text}
              </motion.li>
            ))}
          </motion.ul>
          
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
              Need more information?
              <FaEnvelope className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why VIZX is Ideal */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Is VIZX Ideal For <span className="text-primary">Your Real Estate Solutions</span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyVizxIdeal.map((item, index) => (
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
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-center">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Specialization in Real Estate */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Specialization in Real Estate
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {specializations.map((specialization, index) => (
                <div key={index} className="mb-6 flex items-start">
                  {specialization.icon}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{specialization.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{specialization.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/images/real-estate-aerial.jpg"
                alt="Real Estate Aerial View"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Stand Out */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Makes Us Stand Out in <span className="text-primary">Property Management</span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {standOutFeatures.map((item, index) => (
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
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-center">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center">{item.text}</p>
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
              Work with Us
              <FaUserTie className="ml-2" />
            </motion.a>
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
            We're here to help answer your questions about our real estate solutions.
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
            Our team is dedicated to maximizing your real estate assets and providing top-tier management. 
            Leave your details, and we'll get back to you within 24 hours.
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
                <FaUserTie className="absolute left-3 top-3 text-orange-500" />
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
                placeholder="Tell us more about your real estate needs"
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

export default RealEstateIndustry;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaHeadset,
  FaCloud,
  FaShieldAlt,
  FaCheckCircle,
  FaCogs,
  FaChartLine,
  FaGlobe,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaRocket
} from 'react-icons/fa';
import {
  GiProgression,
  GiArtificialIntelligence
} from 'react-icons/gi';
import {
  MdOutlineSupportAgent,
  MdSecurity,
  MdDeveloperBoard
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

const InformationTechnologyIndustry: React.FC = () => {
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

  const itSolutions = [
    { 
      title: 'Software Development', 
      description: 'Web, mobile apps, custom software solutions',
      icon: <FaCode className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'IT Support & Help Desk', 
      description: '24/7 technical support, remote desktop',
      icon: <FaHeadset className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'Data Management', 
      description: 'Data entry, processing, analytics, database management',
      icon: <FaDatabase className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'IT Consulting', 
      description: 'Strategy, planning, digital transformation',
      icon: <MdDeveloperBoard className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'Cloud Services', 
      description: 'Cloud management, infrastructure as a service',
      icon: <FaCloud className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'Cybersecurity', 
      description: 'Data protection, security audits, compliance',
      icon: <FaShieldAlt className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'Quality Assurance & Testing', 
      description: 'Software testing, performance testing, user acceptance',
      icon: <FaCheckCircle className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'Business Process Outsourcing', 
      description: 'Customer service, back-office operations',
      icon: <FaCogs className="text-3xl text-orange-500 mb-4" />
    }
  ];

  const whyChooseVizx = [
    { 
      title: 'Expertise & Reliability', 
      description: 'Our team comprises seasoned IT professionals with proven track records in delivering high-quality BPO services.',
      icon: <GiProgression className="text-orange-500 mr-3" />
    },
    { 
      title: 'Customized Solutions', 
      description: 'We understand that every business is unique. We tailor our IT solutions to align with your specific requirements.',
      icon: <FaCogs className="text-orange-500 mr-3" />
    },
    { 
      title: 'Global Reach', 
      description: 'With a global presence and diverse client portfolio, we possess the capability to support businesses across different geographies.',
      icon: <FaGlobe className="text-orange-500 mr-3" />
    },
    { 
      title: 'Scalability', 
      description: 'Whether you\'re a startup or an enterprise, our scalable solutions adapt to your evolving needs.',
      icon: <FaChartLine className="text-orange-500 mr-3" />
    },
    { 
      title: 'Proven Track Record', 
      description: 'Our reputation in the industry brands us as your trusted and reliable IT outsourcing partner.',
      icon: <FaCheckCircle className="text-orange-500 mr-3" />
    }
  ];

  const stats = [
    { value: 23, label: 'Years in BPO & RPO', suffix: '' },
    { value: 7, label: 'Years in IT Industry', suffix: '' },
    { value: 5000, label: 'Hires Placed Yearly', suffix: '+' },
    { value: 55, label: 'Clients Served', suffix: '+' }
  ];

  const faqItems = [
    {
      question: "What are the main benefits of outsourcing IT services?",
      answer: "Outsourcing IT can lower operational costs, offer access to expert talent, and free up resources for strategic initiatives."
    },
    {
      question: "How does IT outsourcing help reduce costs?",
      answer: "By leveraging external expertise, you minimize overhead for training, recruitment, and infrastructure, paying only for the services you need."
    },
    {
      question: "What is the typical process for engaging an IT service provider?",
      answer: "We begin with a needs assessment, followed by solution design, onboarding, and ongoing support to ensure continuous improvement."
    },
    {
      question: "How can we ensure the quality of outsourced IT services?",
      answer: "We employ strict SLAs, regular performance reviews, and real-time monitoring to maintain service quality and alignment with your objectives."
    },
    {
      question: "Can outsourced IT services scale with our business needs?",
      answer: "Yes. Our scalable solutions adapt to your evolving demands, whether you're a startup or an established enterprise."
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden px-8">
        {/* Mobile fallback image */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{ backgroundImage: "url('/images/technology-hero.jpg')" }}
        ></div>

        {/* Video only on sm+ */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/technology-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover hidden sm:block z-0"
        >
          <source src="/images/technology-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-4"
          >
            Information Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            Driving Growth & Efficiency Across the IT Industry
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
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
            With a robust foundation built on years of industry experience, 
            we have consistently driven growth and efficiency for our clients across the 
            Information Technology sector. At VIZX Global, we leverage our insights and 
            technological prowess to empower businesses with 21<sup>st</sup>-century IT solutions.
          </motion.p>
        </div>
      </section>

      {/* IT Solutions That We Outsource */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            IT Solutions That We Outsource
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
            {itSolutions.map((solution, index) => (
              <motion.div 
                key={solution.title}
                className="bg-card text-card-foreground p-6 rounded-lg border border-border hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
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

      {/* Why Choose VIZX IT Outsourcing */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose VIZX Information Technology Outsourcing
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We have successfully navigated the complexities of the IT landscape, 
            ensuring seamless integration and unparalleled service delivery.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

      {/* Our Numbers Section */}
      <section className="py-16 px-8 bg-muted">
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
      <section className="py-16 px-8">
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
            We understand that you might have questions about outsourcing IT services. We are here to help.
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
            Interested in learning how our IT solutions can transform your business? Leave your details, and we'll get back to you within 24 hours.
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
                placeholder="Tell us more about your IT needs"
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

export default InformationTechnologyIndustry;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaChartLine,
  FaExchangeAlt,
  FaShieldAlt,
  FaUsers,
  FaCogs,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaShoppingCart,
  FaHospital,
  FaMobileAlt,
  FaHeadset,
  FaSyncAlt,
  FaDatabase
} from "react-icons/fa";
import {
  GiProgression,
  GiTeamUpgrade
} from "react-icons/gi";
import {
  MdOutlineIntegrationInstructions,
  MdSupportAgent,
  MdAnalytics,
  MdScale
} from "react-icons/md";

const FAQItem: React.FC<{ 
  title: string; 
  challenges: string[]; 
  solutions: string[];
  index: number 
}> = ({ title, challenges, solutions, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className="border-b border-gray-700 py-4"
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
          {title}
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
        <div className="mt-4 leading-relaxed pl-8 space-y-4">
          <div>
            <p className="font-semibold text-primary mb-2">Challenges</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-primary mb-2">Why CCaaS</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {solutions.map((solution, i) => (
                <li key={i}>{solution}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CCaaS: React.FC = () => {
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

  const industryData = [
    {
      title: "Retail and E-commerce",
      challenges: [
        "High volume of customer inquiries",
        "Seasonal fluctuations in demand",
        "Need for omnichannel support",
        "Managing returns and order issues"
      ],
      solutions: [
        "Scalability to handle peak seasons",
        "Real-time inventory & order tracking",
        "Personalized customer interactions",
        "Access to purchase history"
      ],
      icon: <FaShoppingCart className="text-orange-500" />
    },
    {
      title: "Healthcare & Telemedicine",
      challenges: [
        "Patient privacy and data security",
        "Need for 24/7 availability",
        "Managing telemedicine scheduling",
        "Providing accurate medical information"
      ],
      solutions: [
        "HIPAA-compliant communication channels",
        "Round-the-clock availability through a flexible agent pool",
        "Integration with Electronic Health Record (EHR) systems",
        "Better patient engagement & satisfaction"
      ],
      icon: <FaHospital className="text-orange-500" />
    },
    {
      title: "Telecommunications",
      challenges: [
        "High call volume for technical support",
        "Need for quick plan upgrades",
        "Handling billing inquiries",
        "Managing large customer bases"
      ],
      solutions: [
        "IVR systems for common troubleshooting queries",
        "Personalized plan recommendations",
        "Proactive outage notifications",
        "Real-time metrics for basic account management"
      ],
      icon: <FaMobileAlt className="text-orange-500" />
    }
  ];

  const benefitsData = [
    {
      title: "Cost Efficiency",
      description: "Pay-as-you-grow model reduces capital expenditure.",
      icon: <FaChartLine className="text-3xl text-orange-500 mb-4" />
    },
    {
      title: "Scalability",
      description: "Easily adjust capacity based on demand fluctuations.",
      icon: <MdScale className="text-3xl text-orange-500 mb-4" />
    },
    {
      title: "Omnichannel Support",
      description: "Provide consistent service across all communication channels.",
      icon: <FaExchangeAlt className="text-3xl text-orange-500 mb-4" />
    },
    {
      title: "Advanced Analytics",
      description: "Gain insights that help optimize agent performance.",
      icon: <MdAnalytics className="text-3xl text-orange-500 mb-4" />
    },
    {
      title: "Integration Capabilities",
      description: "Seamlessly connect with industry-specific tools and databases.",
      icon: <MdOutlineIntegrationInstructions className="text-3xl text-orange-500 mb-4" />
    },
    {
      title: "Compliance & Security",
      description: "Meet industry-specific regulatory requirements.",
      icon: <FaShieldAlt className="text-3xl text-orange-500 mb-4" />
    }
  ];

  const painPointsData = [
    "Inconsistent Customer Experience",
    "High Operational Costs",
    "Difficulty in Scaling Operations",
    "Lack of Insights into Customer Interactions",
    "Complex Technology Integration"
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/contact-center-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70 z-10" />

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="text-orange-500">CX</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto mb-6"
          >
            Delivering exceptional customer experiences with scalable, efficient, and human-driven contact center services.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("vizx-cx")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Key Benefits
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            With a focus on seamless integration, scalability, and BPO-specific functionalities, our platform sets a new standard for contact center excellence in the outsourcing industry.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefitsData.map((benefit, index) => (
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
                  {benefit.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-center">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center">{benefit.description}</p>
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
              Let's Connect
              <FaHandshake className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* What is VIZ-CX Section */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            id="vizx-cx"
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What is VIZ-CX?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            VIZ-CX is a customer engagement solution that revolutionizes how businesses interact with their customers. By leveraging our BPO expertise, we offer a flexible, scalable, and cost-effective way to manage customer interactions across all channels.
          </motion.p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Which Industries Are Best Suited for CX?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CX can benefit a wide range of industries, but some sectors find it particularly valuable due to their specific customer service needs and challenges.
          </motion.p>

          <div className="space-y-4">
            {industryData.map((industry, index) => (
              <FAQItem 
                key={index}
                title={industry.title}
                challenges={industry.challenges}
                solutions={industry.solutions}
                index={index}
              />
            ))}
          </div>

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
              Request a Demo
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our CX Solution */}
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
                Why Choose Our <span className="text-primary">CX Solution?</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                By combining CX technology with our BPO expertise, we offer unique advantages:
              </motion.p>
              
              <motion.ul 
                className="space-y-4 mb-6"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { text: "Seamless Integration of Technology and Human Expertise", icon: <MdOutlineIntegrationInstructions className="text-orange-500 mr-3" /> },
                  { text: "Flexible Staffing to meet demand fluctuations", icon: <FaSyncAlt className="text-orange-500 mr-3" /> },
                  { text: "Multi-Industry Experience for tailored solutions", icon: <FaUsers className="text-orange-500 mr-3" /> },
                  { text: "Continuous Improvement through data-driven insights", icon: <GiProgression className="text-orange-500 mr-3" /> },
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
                  Leverage Our BPO Expertise
                  <GiTeamUpgrade className="ml-2" />
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
                src="/images/ccaas-office.jpg"
                alt="CCaaS office environment"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our CX Solution Addresses Your Common Pain Points
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We understand the challenges you face in delivering exceptional customer service.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {painPointsData.map((point, index) => (
              <motion.div 
                key={index}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <FaHeadset className="text-orange-500 mr-3" />
                  <span className="text-muted-foreground">{point}</span>
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
              Solve Your Customer Service Challenges
              <FaCheckCircle className="ml-2" />
            </motion.a>
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
            Request a Callback
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our team is dedicated to transforming your customer experience. Leave your details, and we'll get back to you within 24 hours.
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
                placeholder="Tell us more about your CX needs"
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

export default CCaaS;
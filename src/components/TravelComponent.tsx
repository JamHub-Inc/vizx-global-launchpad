import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHeadset,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaCogs,
  FaChartLine,
  FaGlobe,
  FaUserTie,
  FaDatabase,
  FaShieldAlt,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPlane,
  FaHotel,
  FaCar
} from "react-icons/fa";
import {
  GiProgression,
  GiWorld
} from "react-icons/gi";
import {
  MdOutlineSupportAgent,
  MdAnalytics,
  MdTravelExplore
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

const TravelIndustry: React.FC = () => {
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
      title: "24/7 Multilingual Customer Support",
      description: "Deliver exceptional customer service across multiple channels with multilingual support teams, improving traveler satisfaction and retention.",
      icon: <FaHeadset className="text-3xl text-orange-500" />
    },
    {
      title: "Reservation and Booking Management",
      description: "We manage end-to-end bookings for flights, hotels, rentals, and more with real-time confirmations and updates.",
      icon: <FaCalendarAlt className="text-3xl text-orange-500" />
    },
    {
      title: "Personalized Itinerary Planning",
      description: "Our planners design personalized experiences that align with client preferences, destinations, and budgets.",
      icon: <FaMapMarkedAlt className="text-3xl text-orange-500" />
    },
    {
      title: "Back-Office Operations",
      description: "Outsource back-end tasks such as invoicing, document management, and data entry to improve internal efficiency.",
      icon: <FaCogs className="text-3xl text-orange-500" />
    }
  ];

  const whyChooseUs = [
    {
      title: "Cost Efficiency",
      description: "Reduce operational costs by outsourcing non-core functions, allowing you to allocate resources strategically.",
      icon: <FaChartLine className="text-orange-500 mr-3" />
    },
    {
      title: "Scalability",
      description: "Adapt to seasonal demand fluctuations with our flexible staffing solutions, ensuring consistent service quality year-round.",
      icon: <GiProgression className="text-orange-500 mr-3" />
    },
    {
      title: "Technological Advancement",
      description: "Stay ahead with our integration of cutting-edge technologies like AI, machine learning, and automation to enhance service delivery.",
      icon: <MdAnalytics className="text-orange-500 mr-3" />
    },
    {
      title: "Global Reach",
      description: "Expand your market presence with our multilingual support and understanding of diverse cultural nuances, facilitating seamless international operations.",
      icon: <FaGlobe className="text-orange-500 mr-3" />
    },
    {
      title: "Industry Experience",
      description: "With years of experience in the travel and hospitality sectors, we bring a deep understanding of service standards and regulatory requirements.",
      icon: <FaUserTie className="text-orange-500 mr-3" />
    },
    {
      title: "Real-Time Insights & Reporting",
      description: "Our data analytics capabilities help clients monitor trends, forecast demand, and make data-driven decisions to improve service outcomes.",
      icon: <FaDatabase className="text-orange-500 mr-3" />
    },
    {
      title: "Disruption Readiness",
      description: "From pandemics to natural disasters, our business continuity planning ensures operational reliability during unexpected global events.",
      icon: <FaShieldAlt className="text-orange-500 mr-3" />
    },
    {
      title: "Customer Loyalty Enablement",
      description: "With seamless support and consistent engagement, we help travel brands increase repeat business, referrals, and long-term value.",
      icon: <FaUsers className="text-orange-500 mr-3" />
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/travel-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-orange-500 mb-4"
          >
            Travel Industry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            Navigating the Future of Travel with Strategic BPO Solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8"
          >
            <MdTravelExplore className="text-5xl text-orange-500 mx-auto" />
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
            Our Travel BPO Services
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-10 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            VizX Global supports travel companies—airlines, travel agencies, online travel platforms, and hospitality brands—by managing the critical yet time-intensive processes that drive the customer journey. Our services ensure seamless front-line interactions and back-end operational efficiency, tailored to the demands of the modern travel economy.
          </motion.p>
          
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

      {/* Why Choose Us Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose VizX Global for Travel BPO Services?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
              Transform Your Travel Operations
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Travel Industry Specializations */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industry Specializations
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <FaPlane className="text-4xl text-orange-500 mb-4" />, title: "Airlines", description: "Ticketing, customer service, loyalty programs" },
              { icon: <FaHotel className="text-4xl text-orange-500 mb-4" />, title: "Hospitality", description: "Reservations, guest services, concierge" },
              { icon: <FaCar className="text-4xl text-orange-500 mb-4" />, title: "Travel Agencies", description: "Itinerary planning, booking management" },
            ].map((specialization, index) => (
              <motion.div 
                key={specialization.title}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-center"
                >
                  {specialization.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-3">{specialization.title}</h3>
                <p className="text-muted-foreground">{specialization.description}</p>
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
            Ready to Transform Your Travel Operations?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how our travel BPO solutions can enhance your customer experience and operational efficiency.
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
                placeholder="Tell us about your travel operations needs"
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

export default TravelIndustry;
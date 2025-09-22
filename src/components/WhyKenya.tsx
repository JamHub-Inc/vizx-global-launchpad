import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaMapMarkerAlt,
  FaUsers,
  FaGlobeAmericas,
  FaPlane,
  FaWifi,
  FaComments,
  FaGraduationCap,
  FaClock,
  FaLightbulb,
  FaShieldAlt,
  FaMoneyBillWave,
  FaIndustry,
  FaRocket,
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaBuilding
} from 'react-icons/fa';
import {
  GiAfrica,
  GiProgression
} from 'react-icons/gi';
import {
  MdOutlineSupportAgent,
  MdBusinessCenter
} from 'react-icons/md';

const WhyKenya: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const siliconSavannaImages = [
    '/images/IMG_0010.jpg',
    '/images/IMG_0011.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % siliconSavannaImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [siliconSavannaImages.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const reasonsData = [
    "It is the most stable democracy in East Africa",
    "It is the gateway to the East African market of almost 500 million consumers",
    "Kenya has a young, educated, English-speaking workforce",
    "Its largest export market is the United States",
    "Kenya is the regional logistics hub and leading regional financial hub",
    "It is the leading destination for foreign direct investment and venture capital",
    "Kenya generates over 90% of its energy from renewable sources"
  ];

  const factFilesData = [
    { 
      title: "Flights", 
      description: "Direct Flights from New York (JFK) to Nairobi (JKIA)",
      icon: <FaPlane className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Infrastructure", 
      description: "High broadband speed & reliable internet – 5G and Starlink Satellite",
      icon: <FaWifi className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Language", 
      description: "2nd Best English-Speaking Country in Africa",
      icon: <FaComments className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Workforce", 
      description: "70% of population of youth are college graduates",
      icon: <FaGraduationCap className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: "Timezone", 
      description: "Our timezone adapts easily to the US timezone",
      icon: <FaClock className="text-3xl text-orange-500 mb-4" />
    }
  ];

  const moreReasonsData = [
    { 
      title: "Skilled Workforce", 
      description: "Robust talent pool across multiple sectors",
      icon: <FaUsers className="text-orange-500 mr-3" />
    },
    { 
      title: "English Proficiency", 
      description: "High standard of English usage fosters global collaboration",
      icon: <FaComments className="text-orange-500 mr-3" />
    },
    { 
      title: "Cost-effectiveness", 
      description: "Competitive labor costs relative to other emerging markets",
      icon: <FaMoneyBillWave className="text-orange-500 mr-3" />
    },
    { 
      title: "Data Protection", 
      description: "Evolving regulatory frameworks ensuring secure transactions",
      icon: <FaShieldAlt className="text-orange-500 mr-3" />
    },
    { 
      title: "Infrastructure", 
      description: "Growing tech ecosystem with reliable power, fiber, and transport",
      icon: <FaWifi className="text-orange-500 mr-3" />
    },
    { 
      title: "Strategic Location", 
      description: "Ideal gateway to the African continent and beyond",
      icon: <FaMapMarkerAlt className="text-orange-500 mr-3" />
    },
    { 
      title: "Innovation & Entrepreneurship", 
      description: "Thriving startup culture and tech-savvy youth driving new solutions",
      icon: <FaLightbulb className="text-orange-500 mr-3" />
    },
    { 
      title: "International Travel", 
      description: "Major airlines connect Kenya to global destinations",
      icon: <FaPlane className="text-orange-500 mr-3" />
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/IMG_0011.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold text-orange-500 leading-tight mb-4"
          >
            WHY KENYA?
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-4xl text-white font-light"
          >
            Kenya <span className="italic">"The Silicon Savanna"</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-white mt-4 max-w-3xl mx-auto"
          >
            “And as I’ve told many, when President Biden mentioned the Silicon Savannah
            and Kenya’s economic growth potential, I did not need convincing…”
            <br />
            <span className="italic">
              — Meg Whitman, Former US Ambassador to Kenya and Former CEO of eBay
            </span>
          </motion.p>
        </div>
      </section>

      {/* Ambassador Whitman Section */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Former Ambassador Meg Whitman's Take on <span className="italic text-primary">Why Kenya</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Remarks made by the former US Ambassador to Kenya Meg Whitman and former CEO of eBay
            during the Kenya Business Roadshow by the US Embassy highlight why Kenya should be on your radar.
            As she put it, “Why did you not want to move to Ambassador to Kenya?”
            And as I've told many, when President Biden mentioned the Silicon Savannah and Kenya's
            economic growth potential, I did not need convincing.
          </motion.p>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h3 
                className="text-4xl font-bold text-orange-500 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Here Are Some Reasons:
              </motion.h3>
              
              <motion.ul 
                className="space-y-4 text-lg text-muted-foreground"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {reasonsData.map((reason, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <FaCheckCircle className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    {reason}
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
                  href="#kenya-fact-files"
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
                src="/images/kenya-reasons.jpg"
                alt="Map of Kenya"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kenya Fact Files */}
      <section id="kenya-fact-files" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Kenya Fact Files
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {factFilesData.map((fact, index) => (
              <motion.div 
                key={index}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {fact.icon}
                </motion.div>
                <h4 className="font-semibold text-primary mb-2">{fact.title}</h4>
                <p className="text-muted-foreground text-sm">{fact.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* More Reasons Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            More Reasons Why Kenya Stands Out
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {moreReasonsData.map((reason, index) => (
              <motion.div 
                key={index}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <span className="mr-3 text-primary mt-1">
                    {reason.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{reason.title}</h4>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Silicon Savanna Section */}
      <section
        className="relative py-16 px-8 flex items-center justify-center min-h-[80vh]"
        style={{
          backgroundImage: `url(${siliconSavannaImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Kenya <span className="italic">"The Silicon Savanna"</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kenya's emergence as the "Silicon Savanna" stems from its conducive environment 
            for tech innovation, fueled by robust internet connectivity, a growing pool of 
            local developers, and progressive government policies. Several major American 
            companies have recognized this potential and established offices in Kenya, 
            including IBM, Microsoft, Google, Oracle, and Cisco, drawn by the country's 
            strategic location, burgeoning tech scene, and opportunities for market 
            expansion in Africa. Standard Chartered, one of the leading global financial 
            institutions, has been here since setting up in 1911.
          </motion.p>
          
          <motion.blockquote 
            className="border-l-4 border-orange-500 pl-4 text-white italic mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            "The future of Africa is the young entrepreneurs, like those in the Nairobi tech scene, 
            who are developing solutions for the continent's challenges and opportunities."
            <br />
            <span className="font-semibold">— Bill Gates, Co-founder of Microsoft</span>
          </motion.blockquote>
          
          <motion.p 
            className="text-xl text-white leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            With infrastructure such as Tatu City opening its doors in 2014, its ultra-modern 
            setup and amenities offer a diverse platform for companies of different sectors to 
            invest in: Tech, Manufacturing, Finance & Logistics. With infrastructure spanning 
            an independent power supply & high-speed fiber, dedicated access roads for heavy 
            haulers & assorted warehousing options, it offers incentives such as corporate 
            taxes of up to 18% against standard 30%, zero-rated VAT against standard 16%, 
            and many more. This is a testament to why we are one step above the rest.
          </motion.p>
        </div>
      </section>

      {/* Obama Quote Section */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.blockquote 
            className="border-l-4 border-orange-500 pl-4 text-muted-foreground italic text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            "Today, Kenya is the largest economy in East Africa. High-speed broadband and 
            mobile connectivity are on the rise, unleashing the entrepreneurial spirit 
            I've always known from Kenya's."
            <br />
            <span className="font-semibold">
              — Barack Obama, 44th President of the United States (2009–2017)
            </span>
          </motion.blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to explore how Kenya can be your next big move? We're here to help you navigate
            every opportunity. Let's discuss your goals and how we can support your vision.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <FaEnvelope className="ml-2" />
          </motion.a>
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
            Interested in learning more about opportunities in Kenya? Leave your details, and we'll get back to you within 24 hours.
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
              <MdBusinessCenter className="absolute left-3 top-3 text-orange-500" />
              <textarea
                placeholder="Tell us more about your interest in Kenya"
                className="w-full p-3 pl-10 rounded text-foreground bg-background border border-border"
                rows={4}
              />
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

export default WhyKenya;
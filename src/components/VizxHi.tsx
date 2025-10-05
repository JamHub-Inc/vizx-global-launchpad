import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHeart,
  FaBrain,
  FaUsers,
  FaShieldAlt,
  FaQuoteLeft,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaSyncAlt
} from 'react-icons/fa';
import {
  GiProgression,
  GiArtificialIntelligence
} from 'react-icons/gi';
import {
  MdOutlineSupportAgent,
  MdAutoAwesome,
  MdPsychology
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

const HI: React.FC = () => {
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

  const framework = [
    { 
      icon: <FaHeart className="text-3xl text-orange-500 mb-4" />, 
      title: 'Empathy-Driven Service', 
      desc: 'Our human teams listen, understand, and respond with genuine care—building trust and loyalty.' 
    },
    { 
      icon: <FaBrain className="text-3xl text-orange-500 mb-4" />, 
      title: 'Contextual Intelligence', 
      desc: 'We combine customer history and real-time AI insights to deliver highly personalized interactions.' 
    },
    { 
      icon: <FaSyncAlt className="text-3xl text-orange-500 mb-4" />, 
      title: 'Adaptive Expertise', 
      desc: 'Continuous training empowers our agents to adapt to evolving customer needs and complex queries.' 
    },
    { 
      icon: <FaShieldAlt className="text-3xl text-orange-500 mb-4" />, 
      title: 'Ethical & Transparent', 
      desc: 'We uphold the highest standards of data privacy and human oversight in every engagement.' 
    },
  ];

  const whyHIMatters = [
    { 
      title: 'Authentic Connections', 
      desc: '82% of customers still prefer talking to a human when their issue is complex or emotionally charged.',
      icon: <FaUsers className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'Trust & Satisfaction', 
      desc: 'Businesses that blend AI efficiency with human empathy see a 35% higher CSAT score on average.',
      icon: <FaChartLine className="text-3xl text-orange-500 mb-4" />
    },
    { 
      title: 'Flexibility & Judgment', 
      desc: 'Humans excel at nuanced decisions, creative problem-solving, and handling exceptions that AI cannot predict.',
      icon: <FaLightbulb className="text-3xl text-orange-500 mb-4" />
    },
  ];

  const comparisonData = [
    {
      aspect: 'Availability',
      ai: '24/7 automated support',
      hi: 'Scheduled human shifts',
      vizx: 'Hybrid coverage models'
    },
    {
      aspect: 'Data Handling',
      ai: 'Processes large datasets instantly',
      hi: 'Interprets nuanced context',
      vizx: 'Insight-driven guidance'
    },
    {
      aspect: 'Empathy',
      ai: 'Lacks emotional understanding',
      hi: 'Genuine human empathy',
      vizx: 'Emotion-informed automation'
    },
    {
      aspect: 'Adaptability',
      ai: 'Updates via retraining',
      hi: 'Real-time judgment calls',
      vizx: 'Continuous improvement loops'
    }
  ];

  const testimonials = [
    { 
      quote: '“Vizx\'s human-first approach transformed our support experience—combining AI speed with genuine care.”', 
      author: 'Sarah L., VP Customer Success',
      image: '/images/hi-testimonial1.jpg'
    },
    { 
      quote: '“Our satisfaction scores jumped 35% when Vizx integrated human agents empowered by AI insights.”', 
      author: 'Mark T., Operations Director',
      image: '/images/hi-testimonial2.jpg'
    },
    { 
      quote: '“The balance of cutting-edge AI and human empathy is what sets Vizx apart from any BPO we\'ve tried.”', 
      author: 'Priya K., Global Program Manager',
      image: '/images/hi-testimonial3.jpg'
    },
  ];

  const faqs = [
    { q: 'Why does human intelligence matter if AI can automate so much?', a: 'While AI excels at routine tasks and data analysis, human agents bring empathy, critical thinking, and emotional intelligence—qualities essential for high-value interactions.' },
    { q: 'How do you ensure consistency across AI and human interactions?', a: 'Our proprietary AI tools provide real-time guidance to agents, ensuring consistent messaging, accurate information, and adherence to brand voice.' },
    { q: 'Can the HI model scale for peak seasons?', a: 'Absolutely—our blended AI-human staffing model dynamically scales, with AI handling high-volume basics and humans managing complex or sensitive cases.' },
    { q: 'What industries benefit most from Vizx HI?', a: 'Industries with complex customer journeys—like healthcare, finance, and technology—see the greatest impact from our HI approach.' },
    { q: 'How long does implementation take?', a: 'Typical deployment of our HI framework takes 6–8 weeks, including training, integration, and testing phases.' },
    { q: 'Is my data secure when using human agents?', a: 'Yes—our agents follow strict data privacy protocols and we employ secure, compliant systems for all customer data handling.' },
    { q: 'How do you measure performance?', a: 'We track KPIs like CSAT, first-contact resolution, and average handle time, correlating them to both AI-driven metrics and human interaction quality.' },
    { q: 'Can I customize the level of AI assistance?', a: 'Vizx offers flexible AI configurations, allowing you to adjust the balance between automation and human touch based on your objectives.' },
    { q: 'What kind of training do agents receive?', a: 'Agents undergo continuous training in emotional intelligence, AI tool usage, and brand-specific guidelines to deliver high-quality service.' },
    { q: 'How is success measured in HI engagements?', a: 'Success is measured by combined metrics: cost savings, productivity gains, customer satisfaction, and repeat business rates.' },
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center px-8"
        style={{ backgroundImage: "url('/images/vizx-hi.png')" }}
      >
        <div className="absolute inset-0 bg-primary/40 dark:bg-black/70"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-orange-500 mb-4"
          >
            VIZX HI: Unleashing Human Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Empowered by AI and rooted in empathy, our human experts deliver experiences that machines alone cannot match.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8"
          >
            <MdPsychology className="text-5xl text-orange-500 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Why HI Matters Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Human Intelligence Matters
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyHIMatters.map((item, index) => (
              <motion.div 
                key={item.title}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI vs HI Comparison Table */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            AI & HI: The Best of Both Worlds
          </motion.h2>
          
          <motion.div 
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <table className="min-w-full bg-card text-card-foreground rounded-lg shadow-lg">
              <thead>
                <tr className="border-b border-orange-500">
                  <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                  <th className="px-6 py-4 text-left font-semibold">Artificial Intelligence</th>
                  <th className="px-6 py-4 text-left font-semibold">Human Intelligence</th>
                  <th className="px-6 py-4 text-left font-semibold">VIZX HI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="px-6 py-4 font-medium">{row.aspect}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.ai}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.hi}</td>
                    <td className="px-6 py-4 text-primary font-medium">{row.vizx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our HI Framework
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {framework.map((item, index) => (
              <motion.div 
                key={item.title}
                className="bg-card text-card-foreground p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-orange-500 mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-32 h-32 object-cover rounded-full shadow-lg"
                  />
                </motion.div>
                <blockquote className="bg-card text-card-foreground p-6 rounded-lg shadow-lg flex-1">
                  <FaQuoteLeft className="text-orange-500 text-2xl mb-3 mx-auto" />
                  <p className="italic text-muted-foreground mb-4">{testimonial.quote}</p>
                  <cite className="block text-orange-500 font-semibold">{testimonial.author}</cite>
                </blockquote>
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
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.q}
                answer={faq.a}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready for the HI + AI Advantage?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how Vizx HI can elevate your customer experiences—combining AI intelligence with the irreplaceable human touch.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-10 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with Our HI Team
            <FaHandshake className="ml-2" />
          </motion.a>
        </div>
      </section>

      {/* Request a Callback Section */}
      <section className="py-16 px-8">
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
            Interested in learning how Human Intelligence can transform your customer experience? Leave your details, and we'll get back to you within 24 hours.
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
              <MdOutlineSupportAgent className="absolute left-3 top-3 text-orange-500" />
              <textarea
                placeholder="Tell us more about your HI and AI needs"
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

export default HI;
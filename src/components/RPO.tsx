import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaUserTie, 
  FaClipboardCheck, 
  FaMoneyCheckAlt, 
  FaUsers,
  FaArrowRight,
  FaChartLine,
  FaClock,
  FaExchangeAlt,
  FaCogs,
  FaHandshake,
  FaQuestionCircle,
  FaDollarSign,
  FaGlobeAmericas
} from "react-icons/fa";
import { 
  GiProgression,
  GiTeamUpgrade,
  GiPriceTag 
} from "react-icons/gi";
import { 
  RiCustomerService2Fill,
  RiTeamFill 
} from "react-icons/ri";
import { 
  MdOutlineWork,
  MdSpeed,
  MdScale,
  MdTrendingUp 
} from "react-icons/md";

const RPO: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="w-full font-sans bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/hi-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 text-center lg:text-left max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text45xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-4 leading-tight"
          >
            RPO SOLUTIONS
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-white mb-6"
          >
            Connecting Talent with Opportunity
          </motion.h2>
        </div>
      </section>

      {/* Areas Where We Specialize */}
      <section className="px-4 md:px-8 py-12 md:py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 text-center mb-8">
            Areas of <span className="text-primary">specialization</span> 
          </h3>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: 'Recruitment', icon: <FaUserTie className="text-3xl mb-3 text-orange-600" /> },
              { name: 'Quality Control', icon: <FaClipboardCheck className="text-3xl mb-3 text-orange-600" /> },
              { name: 'Payroll', icon: <FaMoneyCheckAlt className="text-3xl mb-3 text-orange-600" /> },
              { name: 'Staffing', icon: <FaUsers className="text-3xl mb-3 text-orange-600" /> },
            ].map((item, index) => (
              <motion.div 
                key={item.name} 
                className="bg-card text-card-foreground p-6 rounded-lg flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-lg md:text-xl font-semibold text-center">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Is VizX Ideal */}
      <section className="px-4 md:px-8 py-12 md:py-16 bg-muted" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 text-center mb-6">
            Why Is Vizx Ideal as Your <span className="text-primary">RPO Partner</span> 
          </h3>
          <p className="text-base md:text-lg text-muted-foreground text-center mb-8 leading-relaxed">
            We understand the know-hows of the business
          </p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { 
                title: 'Experience', 
                text: 'With over 20 years in the RPO industry, our comprehensive Recruitment, Quality Compliance and Payroll service ensure that your organization has access to the best talent while maintaining streamlined and efficient processes.',
                icon: <RiCustomerService2Fill className="text-2xl text-orange-600" />
              },
              { 
                title: 'Excellence', 
                text: 'Our rigorous Quality Compliance process ensures that you experience peace of mind in knowing your staff are well in line with International Industry Standards of their respective disciplines.',
                icon: <MdTrendingUp className="text-2xl text-orange-600" />
              },
              { 
                title: 'Updated Seamless Services', 
                text: 'We ensure your staff receives seamless Payroll services ensuring hours are well compensated as per State and Federal Laws, benefits remittances and compensations are performed.',
                icon: <FaClock className="text-2xl text-orange-600" />
              },
              { 
                title: 'Tailored Approach', 
                text: 'We present a tailored approach that meets your specific recruitment needs, resulting in higher productivity and a successful workforce.',
                icon: <GiProgression className="text-2xl text-orange-600" />
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="bg-card text-card-foreground p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="p-2 rounded-full bg-primary/10 mr-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-xl md:text-2xl font-bold text-primary">{item.title}</h4>
                </div>
                <p className="text-sm md:text-base leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <motion.a 
              href="/contact" 
              className="inline-flex items-center bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <FaArrowRight className="ml-2" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Benefits You Gain From VizX */}
     <section className="px-4 md:px-8 py-12 md:py-16">
  <div className="max-w-6xl mx-auto space-y-16">
    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
      Benefits You Gain <span className="text-accent">From Vizx</span>
    </h3>

    {[
      {
        title: "VIZX RPO improves quality of hires",
        img: "/images/rpo-quality.jpg",
        icon: <GiTeamUpgrade className="text-2xl text-accent" />,
        points: [
          "Our RPO expertise extends your hiring capacity and capabilities based on your business needs and cultures, ensuring attainable business goals and sustainable growth.",
          "RPO provides also deeper pipelines, more effective screening assessment and selection methods that yield qualified candidates, build more diverse talent pools and connect employers with stronger candidates.",
        ],
      },
      {
        title: "Cost-per-hire & time-to-fill go down",
        img: "/images/rpo-cost.jpg",
        icon: <GiPriceTag className="text-2xl text-accent" />,
        points: [
          "VIZX improves your company’s efficiencies by bringing in top rigor and expertise to your recruitment needs ensuring growth in your business metrics and cultural alignment, with less room for improvement.",
          "In many cases, a recruitment and effective hiring team can cut cost-per-hire up to 20%, significantly reducing turnaround time by up to 70% for many clients. Plus it cuts the invisible cost of unfilled jobs.",
        ],
      },
      {
        title: "VIZX Global offers greater flexibility & scalability",
        img: "/images/rpo-flexibility.jpg",
        icon: <MdScale className="text-2xl text-accent" />,
        points: [
          "VIZX offers recruiting services to scale your organization’s hiring needs. That flexibility is what typically makes RPO more cost effective as it offers leaders peace of mind in scaling up or down based on market trends, cushioning more businesses from shocks. For this reason, RPO services are preferred more compared to an in-house recruiting team.",
        ],
      },
      {
        title: "Stronger hiring manager & recruiter relationships",
        img: "/images/rpo-relationships.jpg",
        icon: <RiTeamFill className="text-2xl text-accent" />,
        points: [
          "Recent research shows that the dynamic between hiring managers and recruiters is a top performance driver for high-impact talent functions. VIZX Global supports this synergy by not only maintaining alignment between hiring managers and recruiters but also providing real-time analytics on recruitment operations—spanning from candidate sourcing to final placement.",
          "That means all parties are on the same page not only about what candidates they’re looking for, but how to screen them, provide feedback to each other and when / how to make a final hire.",
        ],
      },
      {
        title: "RPO leads to process improvement",
        img: "/images/rpo-improvement.jpg",
        icon: <FaCogs className="text-2xl text-accent" />,
        points: [
          "At VIZX Global we have extensive experience in the latest recruiting technology and the right tools for your company. Leveraging ATS software for seamless candidate tracking, to familiarity with popular Vendor Management Systems. We also use social media platforms to ensure we get the job done.",
          "VIZX Global Solutions enhances the overall efficiency and effectiveness of your interhiring processes. Process improvement not only makes your candidate experience better, among other advantages of RPO, it makes your business run more effectively too!",
        ],
      },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-card text-card-foreground p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        viewport={{ once: true }}
      >
        {/* Image */}
        <div
          className={`w-full overflow-hidden rounded-lg ${
            idx % 2 === 1 ? "md:order-2" : "md:order-1"
          }`}
        >
          <motion.img
            src={item.img}
            alt={item.title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Text */}
        <div
          className={`space-y-4 ${
            idx % 2 === 1 ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-accent/10 mr-3">
              {item.icon}
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-primary">
              {item.title}
            </h4>
          </div>
          {item.points.map((pt, i2) => (
            <p key={i2} className="text-muted-foreground leading-relaxed">
              {pt}
            </p>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* VIZX Pricing Advantage */}
      <section className="relative overflow-hidden py-16 px-4 md:px-8 text-white" data-aos="fade-up">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/pricing-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/90 dark:bg-black/80 z-10" />

        {/* Section Content */}
        <div className="relative z-20 max-w-6xl mx-auto text-center space-y-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-orange-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            VIZX Pricing <span className="text-primary">Advantage</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choosing VIZX Global Recruiters offers substantial financial benefits. You can save up to 73% on recruitment costs for senior recruiters and 84% for junior recruiters annually. These savings are achievable by eliminating benefits and operational costs, and by offering a recruiting service that fits all types of recruiters.
          </motion.p>

          <motion.div 
            className="overflow-x-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-orange-600 text-primary-foreground">
                <tr>
                  <th className="border px-4 py-2">USA Staffing Agencies</th>
                  <th className="border px-4 py-2">Senior Recruiters</th>
                  <th className="border px-4 py-2">Junior Recruiters</th>
                  <th className="border px-4 py-2">VIZX Global Recruiters</th>
                </tr>
              </thead>
              <tbody className="bg-card text-card-foreground">
                <tr>
                  <td className="border px-4 py-2">Recruiter Salary</td>
                  <td className="border px-4 py-2">$90,000</td>
                  <td className="border px-4 py-2">$52,000</td>
                  <td className="border px-4 py-2">$24,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Benefits</td>
                  <td className="border px-4 py-2">$15,000</td>
                  <td className="border px-4 py-2">$9,000</td>
                  <td className="border px-4 py-2">T &amp; C Apply</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Operational Costs</td>
                  <td className="border px-4 py-2">$50,000</td>
                  <td className="border px-4 py-2">$67,000</td>
                  <td className="border px-4 py-2">$0</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div 
            className="text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="mb-4">
              The US staffing industry is projected to be worth $207.2 billion in 2024, with a significant portion of this expenditure going towards recruitment costs. Our solutions offering will not only reduce your recruitment costs when you start using the process, but you will also gain access to a team of seasoned professionals who can streamline your hiring. This allows your internal team to focus on core business activities, driving overall growth and success.
            </p>
            <p>
              Make the smart choice and switch to VIZX Global as your RPO partner, to optimize your recruitment process and achieve substantial savings for your staffing business.
            </p>
          </motion.div>

          <motion.button 
            className="bg-orange-500 hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-md transition flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDollarSign className="mr-2" />
            Get Started Today
          </motion.button>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="px-4 md:px-8 py-12 md:py-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 text-center mb-8">
            Frequently <span className="text-primary">Asked Questions</span> 
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-6 leading-relaxed">
            We understand that you might have some questions that you would like clarifications especially in the RPO industry. We are here to help.
          </p>
          <motion.ul 
            className="space-y-4"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { question: "What is RPO in recruitment?", answer: "RPO (Recruitment Process Outsourcing) is when an organization transfers all or part of its recruitment processes to an external provider." },
              { question: "How does recruitment process outsourcing work?", answer: "In RPO, an external provider manages the recruitment lifecycle, from job profiling to onboarding, using their expertise to optimize results." },
              { question: "What's the difference between RPO, in-house teams and staffing?", answer: "RPO partners act as an extension of your business, while staffing agencies typically provide temporary or contract workers. In-house teams are fully internal." },
              { question: "What is Healthcare RPO?", answer: "Healthcare RPO focuses specifically on recruitment for healthcare roles, ensuring compliance with industry regulations and quality standards." },
              { question: "What are healthcare RPO services?", answer: "They include sourcing, screening, compliance checks, onboarding, and managing healthcare professionals for hospitals, clinics, and other medical facilities." },
              { question: "WE RECRUIT FOR YOU, AS YOU!", answer: "As your Healthcare RPO partner, our experienced recruiters only work for you. We learn your culture and values and package that knowledge with proven best practices and the latest recruitment technology to quickly hire top talent while ensuring a seamless candidate experience." },
              { question: "Vibrant Culture and Hospitality", answer: "We pride ourselves on building a positive, supportive environment for both clients and candidates—ensuring smooth collaboration and a warm, welcoming approach." },
            ].map((item, idx) => (
              <motion.li key={idx} variants={fadeInUp}>
                <motion.button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left bg-card text-card-foreground p-4 rounded-md focus:outline-none flex justify-between items-center shadow-md hover:shadow-lg transition"
                  whileHover={{ y: -2 }}
                >
                  <span className="font-bold flex items-center">
                    <FaQuestionCircle className="mr-2 text-orange-500" />
                    {item.question}
                  </span>
                  <span className="text-xl">{openFAQ === idx ? '-' : '+'}</span>
                </motion.button>
                {openFAQ === idx && (
                  <motion.div 
                    className="bg-muted px-4 py-3 rounded-b-md text-card-foreground shadow-inner"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

    </div>
  );
};

export default RPO;
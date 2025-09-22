import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CreditCard,
  TrendingUp,
  Zap,
  Shield,
  Smartphone,
  Settings,
  ArrowUpRight,
  Users,
  BarChart3,
  Store,
  Utensils,
  Briefcase,
  ShoppingCart,
  Laptop,
  Smartphone as Mobile,
  Link as LinkIcon,
  RefreshCw,
  Calendar,
  Wallet,
  QrCode,
  FileText,
  Clock,
  Database,
  HeartHandshake
} from "lucide-react";

interface IndustrySolution {
  title: string;
  icon: React.ComponentType<any>;
  challenges: string[];
  solutions: string[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const MerchantServices: React.FC = () => {
  const [openIndustry, setOpenIndustry] = useState<string | null>(null);

  const toggleIndustry = (industry: string) => {
    setOpenIndustry(openIndustry === industry ? null : industry);
  };

  const industryData: IndustrySolution[] = [
    {
      title: "Retail and E-commerce",
      icon: ShoppingCart,
      challenges: [
        "Managing high transaction volumes",
        "Ensuring secure online payments & PCI compliance",
        "Synchronizing inventory across channels",
        "Offering diverse payment options (online, in-store, mobile)",
        "Handling returns and refunds efficiently",
      ],
      solutions: [
        "Robust POS systems for seamless checkouts",
        "Secure gateways with advanced fraud protection",
        "Integration with e-commerce platforms & inventory tools",
        "Support for cards, wallets, payment links",
        "Streamlined refunds and exchanges",
      ],
    },
    {
      title: "Restaurants & Hospitality",
      icon: Utensils,
      challenges: [
        "Quick and efficient customer turnover",
        "Managing split bills and tips accurately",
        "Integrating online ordering and delivery payments",
        "Accepting contactless payments for hygiene and convenience",
        "Reliable processing during peak hours",
      ],
      solutions: [
        "POS tailored for restaurants (table mgmt, order taking)",
        "Mobile POS & pay-at-table for faster service",
        "Integration with online ordering & loyalty programs",
        "Contactless NFC & QR payment options",
        "Durable hardware and stable connectivity",
      ],
    },
    {
      title: "Service-Based Businesses",
      icon: Briefcase,
      challenges: [
        "Appointments with upfront payments or deposits",
        "Recurring billing for subscriptions or retainers",
        "Payments on-the-go or at client sites",
        "Sending professional invoices with easy links",
        "Tracking billable hours & project expenses",
      ],
      solutions: [
        "Booking tools with integrated payments",
        "Automated recurring billing & subscriptions",
        "Mobile readers & virtual terminals",
        "Customizable links & digital invoicing",
        "Integration with accounting & CRM software",
      ],
    },
  ];

  const benefits = [
    {
      title: "Increased Sales",
      description: "Accept diverse payment methods: cards, online, mobile wallets.",
      icon: TrendingUp
    },
    {
      title: "Improved Cash Flow",
      description: "Faster settlement ensures timely access to your funds.",
      icon: Zap
    },
    {
      title: "Enhanced Security",
      description: "PCI-compliant solutions with advanced fraud prevention.",
      icon: Shield
    },
    {
      title: "Customer Convenience",
      description: "Offer card-present, online, and payment link options.",
      icon: Users
    },
    {
      title: "Operational Efficiency",
      description: "Streamline processes, reduce errors, integrate with POS.",
      icon: Settings
    },
    {
      title: "Dedicated Support",
      description: "Expert onboarding, training, and continuous service.",
      icon: HeartHandshake
    },
  ];

  const painPoints = [
    { text: "High or Unpredictable Fees", icon: CreditCard },
    { text: "Complex PCI DSS Compliance", icon: Shield },
    { text: "Fraud & Security Risks", icon: AlertTriangle },
    { text: "Limited Payment Options", icon: Wallet },
    { text: "Slow Funding & Delays", icon: Clock },
    { text: "Integration Difficulties", icon: Settings },
    { text: "Poor Provider Support", icon: Users },
    { text: "Outdated POS Hardware", icon: Laptop },
    { text: "Managing Chargebacks", icon: RefreshCw },
  ];

  return (
    <div className="bg-background text-foreground w-full min-h-screen font-sans">
      {/* HERO */}
      <section
        className="relative h-[84vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/merchant.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative max-w-4xl mx-auto text-center z-10 px-4"
        >
          <CreditCard className="w-16 h-16 mx-auto mb-4 text-orange-500" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">
            Merchant Solutions
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">
            Streamline Your Payments with Our Platform Support Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Empower your business with secure, reliable, and efficient payment
            processing solutions designed to enhance customer experience and
            boost your bottom line.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-xl shadow transition"
            >
              Explore Our Payment Solutions
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center"
          >
            Unlock Key Benefits
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground leading-relaxed mb-10 text-center"
          >
            Our comprehensive merchant services provide seamless payment
            integration, robust security, and the scalability your business
            needs to thrive.
          </motion.p>
          <motion.ul
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((b, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="bg-card text-card-foreground p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <b.icon className="w-8 h-8 text-orange-500 mb-3" />
                <strong className="text-xl text-primary block mb-2">
                  {b.title}
                </strong>
                <p className="text-muted-foreground">{b.description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-xl shadow transition"
            >
              Discover Our Solutions
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* WHAT ARE MERCHANT SERVICES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <CreditCard className="w-12 h-12 mx-auto mb-4 text-orange-500" />
          <h3 className="text-3xl md:text-4xl font-bold text-primary  mb-6">
            What Are <span className="text-orange-500">Merchant Services?</span> 
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Merchant services include solutions that enable businesses to accept
            and process electronic payments—credit cards, debit cards, and
            digital wallets. We provide gateways, POS systems, and security
            features to ensure every transaction is smooth, secure, and
            efficient.
          </p>
        </motion.div>
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center"
          >
            Tailored Solutions <span className="text-primary">by Industry</span>
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg text-muted-foreground mb-8 text-center"
          >
            Whether retail, hospitality, or services—we adapt payment solutions
            to your industry challenges.
          </motion.p>

          <div className="space-y-4">
            {industryData.map((industry, idx) => {
              const IndustryIcon = industry.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-card text-card-foreground rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    className="w-full text-left p-6 flex justify-between items-center font-semibold text-orange-500"
                    onClick={() => toggleIndustry(industry.title)}
                  >
                    <div className="flex items-center gap-3">
                      <IndustryIcon className="w-6 h-6" />
                      {industry.title}
                    </div>
                    {openIndustry === industry.title ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </button>
                  {openIndustry === industry.title && (
                    <div className="px-6 pb-6 text-muted-foreground">
                      <p className="font-semibold text-white mt-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Key Challenges:
                      </p>
                      <ul className="list-disc list-inside ml-4 mb-3 space-y-1">
                        {industry.challenges.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                      <p className="font-semibold text-white mt-4 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Our Solutions:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        {industry.solutions.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-xl shadow transition"
            >
              Request a Consultation
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <CreditCard className="w-12 h-12 mb-4 text-orange-500" />
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why Choose Our Merchant Solutions?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            We combine cutting-edge technology with unmatched customer support
            to power your growth.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Wallet className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Comprehensive Options:</strong>{" "}
                Accept card, mobile, and online payments.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Settings className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Streamlined Onboarding:</strong>{" "}
                Guided setup, integration, and training.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Dedicated Success Team:</strong>{" "}
                Personalized account management.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <BarChart3 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Advanced Analytics:</strong>{" "}
                Insights into trends and customer behavior.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong >Proactive Resolution:</strong>{" "}
                Swift issue handling with providers.
              </div>
            </li>
          </ul>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-xl shadow transition"
            >
              Partner With Us
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center"
        >
          <img
            src="/images/merchant-dashboard.png"
            alt="Merchant Dashboard"
            className="rounded-2xl shadow-lg max-w-full h-auto"
          />
        </motion.div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center"
          >
            Addressing Your Payment Challenges
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg text-muted-foreground mb-10 text-center"
          >
            Our solutions are built to eliminate common frustrations in payment
            processing.
          </motion.p>
          <motion.ul
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {painPoints.map((p, i) => {
              const PainPointIcon = p.icon;
              return (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="bg-card text-card-foreground p-4 rounded-2xl shadow-lg hover:shadow-xl flex items-start gap-3"
                >
                  <PainPointIcon className="text-orange-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">{p.text}</span>
                </motion.li>
              );
            })}
          </motion.ul>
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-xl shadow transition"
            >
              Solve Your Payment Hurdles
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MerchantServices;
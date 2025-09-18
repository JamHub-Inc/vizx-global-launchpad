import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const partners = [
    { name: "AICPA", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758138878/AIC6_zup2m0.png" },
    { name: "Sales Force", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758138993/Sale_force_yeaibj.webp" },
    { name: "Bpo Search", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758139076/Bpo_Search_dmtuzv.png" },
    { name: "Ring Central", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758139232/RingCentral_iq86xz.png" },
    { name: "Dutchsauce", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758139358/Dutchsauce_xpvagz.png" },
    { name: "Text Us", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758139736/Text_Us_w2n2zb.png" },
    { name: "Source Partner", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758139634/source_partner_kd4xjx.png" },
  ];

  return (
    <section id="about" className="py-1 md:py-2 bg-background text-foreground">
      <div className="container mx-auto px-4 lg:px-6 space-y-10">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-accent">Company</span> Info
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover who we are, what drives us, and why businesses across the globe trust VIZX.
          </p>
        </div>

        {/* Part 1: About Us with Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              About <span className="text-accent">Us</span>
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              We are a leading provider of innovative outsourcing solutions with a proven track
              record of delivering measurable results and strategic partnerships that foster
              long-term success.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              With decades of experience, our leadership team brings deep industry knowledge across
              customer management, data processing & more.
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <video
              loop
              muted
              playsInline
              autoPlay
              className="w-full rounded-2xl shadow-strong object-cover"
            >
              <source src="/images/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>

        {/* Part 2: Why VIZX with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="w-full order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://res.cloudinary.com/dtrad03yv/image/upload/v1758214719/rpo-improvement_lokryy.jpg"
              alt="Why choose VIZX"
              className="w-full rounded-2xl shadow-strong object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="space-y-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Why <span className="text-accent">VIZX?</span>
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              We deliver customized solutions that align tightly with your objectives, backed by a
              commitment to innovation, efficiency, and collaboration.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              From our strategic presence in Kenya and the US to our global delivery capabilities,
              every aspect of our operations is designed to help you stay ahead in a dynamic market.
            </p>
          </motion.div>
        </div>

        {/* Partners Section */}
        <div className="relative w-full">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold">
              Our Corporate <span className="text-accent">Partners</span>
            </h3>
          </div>

          {/* Scrolling Logos */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-16 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {partners.concat(partners).map((client, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center min-w-[140px]"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 md:h-20 object-contain transition-transform duration-300 hover:scale-110"
                  />
                  <span className="text-muted-foreground mt-2 text-sm md:text-base font-medium text-center">
                    {client.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

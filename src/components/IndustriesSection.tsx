import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  Building, 
  Heart,
  ArrowRight,
  Users,
  TrendingUp,
  Globe
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description: "HIPAA-compliant solutions for medical data processing, patient support, and clinical research assistance.",
      features: ["Medical Data Processing", "Patient Support Services", "Clinical Research Support", "Compliance Management"],
      testimonial: {
        quote: "Vizx Global helped us reduce processing time by 60% while maintaining 100% HIPAA compliance.",
        author: "Dr. Sarah Johnson",
        company: "Around the Clock"
      }
    },
    {
      icon: Building,
      title: "Real Estate",
      description: "Comprehensive property management solutions including tenant screening, lease processing, and market analysis.",
      features: ["Tenant Screening", "Lease Processing", "Market Analysis", "Property Marketing"],
      testimonial: {
        quote: "Their RPO services helped us find qualified property managers 3x faster than traditional methods.",
        author: "Michael Chen",
        company: "Bryant Staffing Solutions"
      }
    },
    {
      icon: HeartHandshake,
      title: "Non-Profit & NGOs",
      description: "Specialized support for mission-driven organizations including donor management and program coordination.",
      features: ["Donor Management", "Grant Processing", "Program Coordination", "Impact Reporting"],
      testimonial: {
        quote: "Vizx Global's solutions allowed us to focus more on our mission while they handled our operational needs.",
        author: "Amanda Rodriguez",
        company: "Welltech Partners"
      }
    }
  ];

  return (
    <section id="industries" className="py-6 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Industry <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep industry knowledge and specialized solutions tailored to your sector's unique challenges and requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="p-8 shadow-medium hover:shadow-strong transition-smooth animate-fade-in group">
              {/* Icon & Title */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground">
                  {industry.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Services:</h4>
                <ul className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <p className="text-sm italic text-muted-foreground mb-3">
                  "{industry.testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {industry.testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {industry.testimonial.company}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button variant="outline" size="sm" className="w-full group">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
      <div className="relative w-full overflow-hidden p-6 md:p-8 ">
        <div className="text-center mb-8">
             <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Trusted accross <span className="text-accent">industries</span>
          </h3> 
    <motion.div
      className="flex gap-16 items-center mb-6"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {[
        { name: "Around the Clock", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066586/Client3_hbge3y.png" },
        { name: "Bryant Staffing Solutions", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066533/Client5_gpjviu.png" },
        { name: "Vame", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066165/Vame_v82qhw.png" },
        { name: "LIVEWELL", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066291/LIVEWELL_ucykvu.png" },
        { name: "C2C Pro Team", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066454/Client4_n4x2lk.png" },
        { name: "WellTech Partners", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066406/Bryant_dji1xm.webp" },
  
        { name: "Around the Clock", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066586/Client3_hbge3y.png" },
        { name: "Bryant Staffing Solutions", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066533/Client5_gpjviu.png" },
        { name: "Vame", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066165/Vame_v82qhw.png" },
        { name: "LIVEWELL", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066291/LIVEWELL_ucykvu.png" },
        { name: "C2C Pro Team", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066454/Client4_n4x2lk.png" },
        { name: "Welltech Partners", logo: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758066406/Bryant_dji1xm.webp" },
      ].map((client, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center min-w-[160px]"
        >
          <img
            src={client.logo}
            alt={client.name}
            className="h-16 md:h-20 object-contain transition duration-300"
          />
          <span className="text-gray-700 dark:text-gray-300 mt-2 text-sm md:text-base font-medium text-center">
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

export default IndustriesSection;
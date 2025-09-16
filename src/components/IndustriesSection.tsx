import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        company: "MediCore Health Systems"
      }
    },
    {
      icon: Building,
      title: "Real Estate & Property Management",
      description: "Comprehensive property management solutions including tenant screening, lease processing, and market analysis.",
      features: ["Tenant Screening", "Lease Processing", "Market Analysis", "Property Marketing"],
      testimonial: {
        quote: "Their RPO services helped us find qualified property managers 3x faster than traditional methods.",
        author: "Michael Chen",
        company: "PropMax Realty"
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
        company: "Global Impact Foundation"
      }
    }
  ];

  return (
    <section id="industries" className="py-20 bg-background">
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
        <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted Across Industries
            </h3>
            <p className="text-white/90 text-lg">
              Our proven track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-accent mr-2" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">150+</div>
              <div className="text-white/80 text-sm">Healthcare Clients</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building className="w-6 h-6 text-accent mr-2" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">200+</div>
              <div className="text-white/80 text-sm">Real Estate Partners</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-accent mr-2" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">85%</div>
              <div className="text-white/80 text-sm">Efficiency Improvement</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-6 h-6 text-accent mr-2" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">45+</div>
              <div className="text-white/80 text-sm">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
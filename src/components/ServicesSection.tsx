import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Database, 
  Shield, 
  UserCheck, 
  BarChart3, 
  CreditCard,
  Search,
  Share2,
  Code,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      category: "BPO Services",
      description: "Comprehensive business process outsourcing to streamline your operations",
      items: [
        {
          icon: Users,
          title: "Customer Experience (CX) Solutions",
          description: "24/7 multilingual customer support with AI-powered insights"
        },
        {
          icon: Database,
          title: "Data Entry & Processing",
          description: "Accurate, secure data management with 99.9% precision rate"
        },
        {
          icon: Shield,
          title: "Back Office Support",
          description: "Administrative and operational support to boost efficiency"
        }
      ]
    },
    {
      category: "RPO Services",
      description: "End-to-end recruitment process outsourcing for talent acquisition",
      items: [
        {
          icon: UserCheck,
          title: "Full-Cycle Recruitment",
          description: "From job posting to onboarding, we handle your entire hiring process"
        },
        {
          icon: BarChart3,
          title: "Quality Control",
          description: "Rigorous screening and assessment to ensure top talent"
        },
        {
          icon: CreditCard,
          title: "Payroll Management",
          description: "Comprehensive payroll solutions with compliance assurance"
        }
      ]
    },
    {
      category: "Digital Marketing",
      description: "Strategic digital solutions to amplify your online presence",
      items: [
        {
          icon: Search,
          title: "SEO Optimization",
          description: "Drive organic traffic with data-driven SEO strategies"
        },
        {
          icon: Share2,
          title: "Social Media Management",
          description: "Engaging content and community management across platforms"
        },
        {
          icon: Code,
          title: "Web Development",
          description: "Custom websites and applications built for performance"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-accent">Business Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From customer experience to recruitment and digital marketing, 
            we provide end-to-end solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((serviceGroup, index) => (
            <div key={index} className="animate-fade-in">
              <Card className="p-8 h-full shadow-medium hover:shadow-strong transition-smooth">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {serviceGroup.category}
                  </h3>
                  <p className="text-muted-foreground">
                    {serviceGroup.description}
                  </p>
                </div>
                
                <div className="space-y-6">
                  {serviceGroup.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="group">
            Request a Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
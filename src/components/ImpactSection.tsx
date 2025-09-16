import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Coins, 
  Users, 
  GraduationCap,
  Award,
  Globe,
  ArrowRight,
  Sparkles
} from "lucide-react";

const ImpactSection = () => {
  const initiatives = [
    {
      icon: Heart,
      title: "Vizx Community Fund",
      description: "Supporting local communities through education, healthcare, and infrastructure development.",
      impact: "500+ families supported",
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: GraduationCap,
      title: "Skills Development Program",
      description: "Providing training and upskilling opportunities for local talent to build sustainable careers.",
      impact: "2,000+ professionals trained",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Users,
      title: "Employee Welfare Initiative",
      description: "Comprehensive wellness programs including healthcare, mental health support, and work-life balance.",
      impact: "95% employee satisfaction",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Globe,
      title: "Global Partnerships",
      description: "Collaborating with international organizations to create opportunities and knowledge exchange.",
      impact: "50+ global partnerships",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  const testimonials = [
    {
      quote: "Vizx Global didn't just help us streamline our operations—they became a true partner in our growth journey. Their commitment to excellence is evident in every interaction.",
      author: "Jennifer Williams",
      role: "CEO, TechFlow Solutions",
      company: "United States"
    },
    {
      quote: "The cultural fit and understanding of our business needs was exceptional. Vizx Global's team feels like an extension of our own organization.",
      author: "David Thompson",
      role: "Operations Director, MedCare Plus", 
      company: "Canada"
    },
    {
      quote: "What sets Vizx Global apart is their genuine care for social impact. They're not just delivering services—they're making a difference in communities.",
      author: "Maria Santos",
      role: "Founder, Impact Healthcare",
      company: "Brazil"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Creating <span className="text-accent">Lasting Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond business excellence, we're committed to making a positive difference 
            in the lives of our employees, communities, and the world at large.
          </p>
        </div>

        {/* Impact Initiatives */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-smooth animate-fade-in group text-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${initiative.color}`}>
                <initiative.icon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                {initiative.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {initiative.description}
              </p>
              <div className="bg-accent/10 rounded-lg py-2 px-3">
                <span className="text-accent font-semibold text-sm">{initiative.impact}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              What Our Clients Say
            </h3>
            <p className="text-muted-foreground text-lg">
              Hear from businesses that have transformed with Vizx Global
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 shadow-medium hover:shadow-strong transition-smooth animate-fade-in">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-5 h-5 text-accent mr-2" />
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
          <Award className="w-16 h-16 text-accent mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Recognized Excellence
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our commitment to quality and social responsibility has earned recognition 
            from industry leaders and international organizations.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-2xl font-bold text-accent mb-1">ISO 27001</div>
              <div className="text-white/80 text-sm">Security Certified</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">Best BPO</div>
              <div className="text-white/80 text-sm">East Africa 2023</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">Top Employer</div>
              <div className="text-white/80 text-sm">Kenya 2023</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">5-Star</div>
              <div className="text-white/80 text-sm">Client Rating</div>
            </div>
          </div>

          <Button variant="hero" size="lg">
            Join Our Success Stories
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import bpoServicesImage from "@/assets/bpo-services.jpg";

const TechnologySection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced analytics and predictive modeling to optimize your business processes"
    },
    {
      icon: Users,
      title: "Human Expertise",
      description: "Skilled professionals who bring creativity and critical thinking to every task"
    },
    {
      icon: Zap,
      title: "Rapid Processing",
      description: "Lightning-fast turnaround times without compromising on quality"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security protocols to protect your sensitive information"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards and reporting for complete visibility into operations"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock service delivery across multiple time zones"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase processing speed by 3x",
    "Achieve 99.9% accuracy rates",
    "Scale teams up or down instantly",
    "Access global talent pool",
    "Ensure compliance and security"
  ];

  return (
    <section id="technology" className="bg-gradient-section py-6 md:py-12">
      <div className="container mx-auto px-4 lg:px-6 overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-accent">VIZX HI + AI:</span> The Perfect Blend
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our unique combination of Human Intelligence and Artificial Intelligence 
            delivers personalized, efficient solutions that drive exceptional results.
          </p>
        </div>

        {/* Technology Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="animate-fade-in overflow-hidden rounded-2xl">
            <img
              src={bpoServicesImage}
              alt="Modern BPO technology environment"
              className="rounded-2xl shadow-strong w-full h-auto object-cover"
            />
          </div>
          
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-3xl font-bold text-primary">
                Revolutionary Approach
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              VIZX HI + AI represents our commitment to delivering the best of both worlds: 
              the efficiency and scalability of artificial intelligence combined with the 
              creativity and emotional intelligence that only humans can provide.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg">
              Discover Our Technology
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-medium hover:shadow-strong transition-smooth animate-fade-in group overflow-hidden"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className="mt-20 rounded-2xl p-8 md:p-12 shadow-strong relative overflow-hidden">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Seamless Integration Process
            </h3>
            <p className="text-muted-foreground text-lg">
              Our proven methodology ensures smooth implementation and rapid results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Assessment", description: "Analyze your current processes" },
              { step: "02", title: "Strategy", description: "Design customized solution" },
              { step: "03", title: "Implementation", description: "Deploy HI + AI systems" },
              { step: "04", title: "Optimization", description: "Continuous improvement" }
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-primary mb-2">{phase.title}</h4>
                <p className="text-muted-foreground text-sm">{phase.description}</p>

                {/* Connector line fixed to avoid overflow */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-[-50%] w-[100%] h-0.5 bg-accent/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

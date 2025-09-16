import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const heroSlides = [
  {
    image: heroSlide1,
    title: "Empowering Businesses with",
    highlight: "Tailored BPO & RPO",
    subtitle: "Solutions",
    description: "Streamline Operations, Enhance Recruitment, and Scale Efficiently with our comprehensive business process outsourcing solutions."
  },
  {
    image: heroSlide2,
    title: "Advanced Technology Meets",
    highlight: "Human Intelligence",
    subtitle: "VIZX HI + AI",
    description: "Experience the perfect blend of AI-powered automation and human expertise for superior business outcomes."
  },
  {
    image: heroSlide3,
    title: "Global Impact Through",
    highlight: "Local Excellence",
    subtitle: "Partnership",
    description: "Join 500+ satisfied clients worldwide who trust Vizx Global for their outsourcing and recruitment needs."
  }
];

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play carousel
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full absolute inset-0"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-screen">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full">
              <div className="absolute inset-0">
                <motion.img
                  src={slide.image}
                  alt={`${slide.title} ${slide.highlight}`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Navigation */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </div>
      </Carousel>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Headline */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {heroSlides[current].title}{" "}
              <span className="text-accent">{heroSlides[current].highlight}</span>{" "}
              {heroSlides[current].subtitle}
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {heroSlides[current].description}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="hero" size="xl" className="group">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-light" size="xl" className="group">
                <Play className="mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { number: "500+", label: "Satisfied Clients" },
                { number: "99.9%", label: "Service Uptime" },
                { number: "24/7", label: "Global Support" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? 'bg-accent scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
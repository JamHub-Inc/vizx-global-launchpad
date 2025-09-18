import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";
import { FaGlobe, FaShieldAlt } from "react-icons/fa"; 
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";
import { useEffect, useState, useRef } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const heroSlides = [
  {
    image: heroSlide1,
    title: "African's leading",
    highlight: "BPO & RPO",
    subtitle: "Powerhouse",
    description: "Streamline Operations, Enhance Recruitment, and Scale Efficiently with our comprehensive business process outsourcing solutions.",
    features: [
      "Cloud-Based Technology",
      "Real-Time Analytics",
      "Multi-Location Support"
    ]
  },
  {
    image: heroSlide2,
    title: "Advanced Technology Meets",
    highlight: "Human Intelligence",
    subtitle: "VIZX HI + AI",
    description: "Experience the perfect blend of AI-powered automation and human expertise for superior business outcomes.",
    features: [
      "AI-Powered Automation",
      "Human Expertise Integration",
      "Seamless Workflow"
    ]
  },
  {
    image: heroSlide3,
    title: "Global Impact Through",
    highlight: "Local Excellence",
    subtitle: "Partnership",
    description: "Join 500+ satisfied clients worldwide who trust Vizx Global for their outsourcing and recruitment needs.",
    features: [
      "Global Reach",
      "Local Expertise",
      "Custom Solutions"
    ]
  }
];

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      if (progressRef.current) {
        progressRef.current.style.width = '0%';
        setTimeout(() => {
          if (progressRef.current) {
            progressRef.current.style.width = '100%';
          }
        }, 10);
      }
    });

    let startTime: number | null = null;
    const duration = 5000; 
    
    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration * 100, 100);
      
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
      
      if (progress < 100) {
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    };
    
    let animationFrameId = requestAnimationFrame(animateProgress);
    
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
      startTime = null;
    }, duration);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [api]);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 py-16 lg:py-24">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-foreground dark:text-foreground-dark">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg"
            >
              <div className="flex items-center mb-8">
                <div className="mr-4 flex items-center border rounded-lg">
                  <FaGlobe className="text-orange-500" size={16} />
                  <span className="text-sm font-semibold text-blue-700 ml-2">Global Solutions</span>
                </div>
                <div className="flex items-center border rounded-lg">
                  <FaShieldAlt className="text-blue-500 " size={16} />
                  <span className="text-sm font-semibold text-blue-700 ml-3">Trusted by 10+ Clients</span>
                </div>
              </div>

              <motion.h1 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {heroSlides[current].title}{" "}
                <span className="text-orange-500">{heroSlides[current].highlight}</span>{" "}
                {heroSlides[current].subtitle}
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {heroSlides[current].description}
              </motion.p>

              <motion.ul 
                className="mb-8 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {heroSlides[current].features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-700 dark:text-gray-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                   <div className="mr-3">
                     <MdCheckCircle className="text-orange-600 dark:text-orange-400" size={20} />
                   </div>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button size="lg" className="group rounded-full px-8 py-6 bg-orange-600 hover:bg-primary-dark/40">
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 py-6 border-gray-300"
                  onClick={handlePlayClick}  // Trigger video play
                >
                  <Play className="mr-2" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-6 border-t border-gray-200 dark:border-gray-700 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {[ 
                  { number: "500+", label: "Satisfied Clients" },
                  { number: "99.99%", label: "Service Uptime" },
                  { number: "24/7", label: "Customer Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-primary dark:text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        
          {/* Centered Slide Indicators with Bouncing Hover */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 flex items-center space-x-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="flex flex-col items-center group transition-transform transform hover:scale-110"
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 mb-2 ${current === index ? 'bg-orange-600' : 'bg-primary hover:bg-primary-dark/20'}`} />
                {current === index && (
                  <div className="h-1 w-8 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div 
                      ref={progressRef}
                      className="h-full bg-primary dark:bg-primary rounded-full transition-all duration-100 linear"
                      style={{ width: '0%' }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
        {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-dark rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
        

        {/* Right Carousel */}
        <div className="w-full lg:w-1/2">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="h-[450px]">
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index} className="relative h-full">
                  <div className="inset-0 rounded-2xl overflow-hidden shadow-3xl">
                    <motion.img
                      src={slide.image}
                      alt={`${slide.title} ${slide.highlight}`}
                      className="w-full h-full rounded-2xl shadow-strong object-cover"
                    />
                    <div className="inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1"
            >
              ✖
            </button>
            <video controls autoPlay className="w-full h-auto rounded-md">
              <source src="/images/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;

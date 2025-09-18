import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "Nairobi, Kenya",
      image: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758132982/Nairobi_Office_kguewp.png",
      description: "Our flagship office in East Africa, harnessing a talented workforce of young, educated, English-speaking professionals. This hub supports clients worldwide with agile BPO solutions."
    },
    {
      name: "Los Angeles, USA",
      image: "https://res.cloudinary.com/dtrad03yv/image/upload/v1758132999/Los_Anels_Office_zbf9ro.png", 
      description: "Strategically located for easy access to North American clients. Our LA team provides seamless communication, ensuring your operations run smoothly around the clock."
    }
  ];

  return (
    <section id="locations" className="py-10 bg-background">
      <div className="container mx-auto px-4 lg:px-6 text-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our on-site <span className="text-accent">Locations</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg transform group-hover:scale-105 transition-all">
                <div className="relative">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-64 object-cover transition-transform transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-all"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">{location.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{location.description}</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;

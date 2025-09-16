import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              Vizx Global
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#industries" className="text-foreground hover:text-primary transition-smooth">
              Industries
            </a>
            <a href="#technology" className="text-foreground hover:text-primary transition-smooth">
              Technology
            </a>
            <a href="#impact" className="text-foreground hover:text-primary transition-smooth">
              Impact
            </a>
            <Button variant="cta" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#industries"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </a>
              <a
                href="#technology"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </a>
              <a
                href="#impact"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact
              </a>
              <Button variant="cta" className="w-full mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navItems = [
    { href: "/", label: "Home" },
    { 
      href: "/", 
      label: "Solutions", 
      subMenu: [
        { href: "rp", label: "Recruitment Process" },
        { href: "real-estate", label: "Real Estate Solutions" },
        { href: "#back-office", label: "Back Office Solutions" },
        { href: "#cx", label: "CX Solutions" },
        { href: "#merchant", label: "Merchant Solutions" }
      ]
    },
    { 
      href: "#industries", 
      label: "Industries", 
      subMenu: [
        { href: "#healthcare", label: "Healthcare" },
        { href: "#technology", label: "Technology" },
        { href: "#finance", label: "Finance" },
        { href: "#real-estate-industry", label: "Real Estate" },
        { href: "#logistics", label: "Logistics & Supply Chain" },
        { href: "#travel", label: "Travel" },
        { href: "#manufacturing", label: "Manufacturing" },
        { href: "#retail", label: "Retail & E-commerce" }
      ]
    },
    { href: "#vizx-hi-ai", label: "Vizx HI + AI" },
    { href: "#why-kenya", label: "Why Kenya" },
    { 
      href: "#about-us", 
      label: "About Us", 
      subMenu: [
        { href: "#employee-welfare", label: "Employee Welfare" },
        { href: "#blogs", label: "Blogs" },
        { href: "#contact", label: "Contact Us" }
      ]
    }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="https://res.cloudinary.com/dtrad03yv/image/upload/v1758063140/Company_Logo-removebg-preview_pxi3mn.png" 
              alt="Vizx Global Logo" 
              className="h-24 lg:h-24 object-contain" 
            />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <motion.a
                  href={item.href}
                  className="flex items-center text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base relative py-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.label}
                  {item.subMenu && (
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.a>

                {/* Submenu for Solutions, Industries, About Us */}
                {item.subMenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.label && (
                      <motion.div 
                        className="absolute left-0 top-full bg-background border border-border shadow-lg rounded-lg mt-1 p-4 min-w-[220px]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="space-y-2">
                          {item.subMenu.map((subItem, subIndex) => (
                            <motion.a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                            >
                              {subItem.label}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
            
            <ThemeToggle />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="cta" size="sm" className="font-semibold">
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-border bg-background"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.subMenu ? (
                      <div className="py-2">
                        <button 
                          className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors duration-200 font-medium"
                          onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                        >
                          <span>{item.label}</span>
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === item.label ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeSubmenu === item.label && (
                            <motion.div 
                              className="pl-4 mt-2 space-y-2 border-l border-border ml-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.subMenu.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block py-2 text-sm text-foreground hover:text-primary transition-colors duration-200"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-4"
                >
                  <Button variant="cta" className="w-full font-semibold">
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
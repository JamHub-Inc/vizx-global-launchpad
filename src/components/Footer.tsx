import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  ArrowRight,
  Globe
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "BPO Services", href: "#services" },
      { name: "RPO Services", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
      { name: "Technology Solutions", href: "#technology" }
    ],
    industries: [
      { name: "Healthcare & Life Sciences", href: "#industries" },
      { name: "Real Estate & Property", href: "#industries" },
      { name: "Non-Profit & NGOs", href: "#industries" },
      { name: "Financial Services", href: "#industries" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Impact & Community", href: "#impact" },
      { name: "News & Insights", href: "#" }
    ],
    support: [
      { name: "Contact Us", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://ke.linkedin.com/company/vizx-international", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/VIZXKe/", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/VIZXInternational/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/vizxinternational/?hl=en", label: "Instagram" }
  ];

  return (
    <footer className="bg-background">
      {/* CTA Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 lg:px-6 py-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Vizx Global for their BPO and RPO needs. 
              Let's discuss how we can help you scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Start Your Journey Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h4 className="text-2xl font-bold mb-4 text-foreground">Vizx Global</h4>
              <p className="text-muted-foreground leading-relaxed">
                Empowering businesses worldwide with tailored BPO and RPO solutions. 
                We combine human intelligence with AI to deliver exceptional results.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Nairobi, Kenya | Global Operations
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+254 (0) 700 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">hello@vizxglobal.com</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Available 24/7 Globally</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-orange-500">Services</h5>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-orange-500">Industries</h5>
            <ul className="space-y-3">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-orange-500">Company</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-orange-500">Support</h5>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 Vizx Global. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

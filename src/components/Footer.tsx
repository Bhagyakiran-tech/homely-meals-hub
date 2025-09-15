import { Utensils, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "FAQ", href: "#faq" },
    { name: "Support", href: "#support" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-warmth rounded-full">
                <Utensils className="h-6 w-6 text-warmth-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Home Food Website</h3>
                <p className="text-sm text-background/70">Homemade. Healthy. Homely.</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Connecting hostel students with local housewives for authentic homemade meals. 
              Building community through food, one meal at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-warmth" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-warmth" />
                <span className="text-background/80">hello@homefoodwebsite.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-warmth" />
                <span className="text-background/80">Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-warmth transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-warmth transition-colors duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-sm text-background/80 mb-3">
                Get updates on new chefs and special offers
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-l-md text-background placeholder-background/60 focus:outline-none focus:border-warmth"
                />
                <button className="px-4 py-2 bg-warmth text-warmth-foreground rounded-r-md hover:bg-warmth/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Home Food Website. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-background/60">Made with</span>
              <div className="flex items-center space-x-1">
                <span className="text-warmth">❤️</span>
                <span className="text-background/60">in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
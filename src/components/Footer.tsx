import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/alexchen", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alexchen", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/alexchen", label: "Twitter" },
    { icon: Mail, href: "mailto:alex.chen@example.com", label: "Email" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "AI Features", href: "#ai" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="gradient-secondary border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent gradient-primary">
              Alex Chen
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer & AI Enthusiast passionate about building intelligent web applications 
              that solve real-world problems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth group"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4 group-hover:animate-float" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Tech Stack</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>Frontend: React, TypeScript, Tailwind CSS</p>
              <p>Backend: Python (Flask/FastAPI), PHP</p>
              <p>Database: MySQL, SQLite</p>
              <p>AI/ML: LangChain, spaCy, Scikit-learn</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Alex Chen. Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-float" />
            <span>and lots of coffee.</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            <span>Made with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
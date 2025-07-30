import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.chen@example.com",
      href: "mailto:alex.chen@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com/?q=San+Francisco,+CA"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/alexchen", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alexchen", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/alexchen", label: "Twitter" }
  ];

  return (
    <section className="py-20 px-6" id="contact">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="bg-clip-text text-transparent gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you! Drop me a message and let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card transition-smooth hover:shadow-glow animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Send className="h-6 w-6 text-primary" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 transition-smooth focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 transition-smooth focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 transition-smooth focus:ring-primary"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-1 transition-smooth focus:ring-primary resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full shadow-glow hover:shadow-glow transition-smooth" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {/* Contact Details */}
            <Card className="shadow-card transition-smooth hover:shadow-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-4 p-3 rounded-lg transition-smooth hover:bg-muted group"
                      >
                        <div className="p-2 gradient-primary rounded-lg group-hover:animate-glow">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-muted-foreground group-hover:text-foreground transition-smooth">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card transition-smooth hover:shadow-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 gradient-secondary rounded-lg transition-smooth hover:gradient-primary hover:text-white group"
                        aria-label={social.label}
                      >
                        <IconComponent className="h-6 w-6 group-hover:animate-float" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Connect with me on social media for updates on my latest projects and tech insights.
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card transition-smooth hover:shadow-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
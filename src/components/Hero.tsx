import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const techStack = ["React", "TypeScript", "Python", "Flask", "MySQL", "AI/ML", "PHP", "Tailwind"];

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent gradient-primary">
                Alex Chen
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Full Stack Developer & AI Enthusiast building the future with intelligent web applications
            </p>
            
            {/* Tech Stack */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="animate-slide-up transition-smooth hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="shadow-glow hover:shadow-glow transition-smooth">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="transition-smooth hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="transition-smooth hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow animate-glow">
                <img 
                  src={profilePhoto} 
                  alt="Alex Chen - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
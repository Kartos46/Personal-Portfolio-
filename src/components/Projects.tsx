import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description: "Upload your resume and get instant AI-powered feedback on content, formatting, and suggestions for improvement using NLP and machine learning.",
      tech: ["Python", "Flask", "spaCy", "React", "Tailwind"],
      github: "https://github.com/alexchen/resume-analyzer",
      demo: "https://resume-analyzer-demo.com",
      featured: true,
      status: "In Development"
    },
    {
      title: "Smart Portfolio Chatbot",
      description: "Intelligent chatbot trained on my portfolio content using LangChain and RAG. Visitors can ask questions about my experience and projects.",
      tech: ["Python", "LangChain", "OpenAI", "FastAPI", "React"],
      github: "https://github.com/alexchen/portfolio-bot",
      demo: "https://alexchen.dev/chat",
      featured: true,
      status: "Live"
    },
    {
      title: "Career Path Recommender",
      description: "ML-powered tool that analyzes user skills and interests to recommend personalized career paths and learning resources.",
      tech: ["Python", "Scikit-learn", "Pandas", "MySQL", "React"],
      github: "https://github.com/alexchen/career-recommender",
      demo: "https://career-path-ai.com",
      featured: false,
      status: "Live"
    },
    {
      title: "Blog Summarization API",
      description: "Automated blog post summarization using transformer models. Generates concise summaries for better content discovery.",
      tech: ["Python", "HuggingFace", "BART", "FastAPI", "PostgreSQL"],
      github: "https://github.com/alexchen/blog-summarizer",
      demo: "https://api.blogsummarizer.com",
      featured: false,
      status: "Live"
    },
    {
      title: "Dynamic Project Gallery",
      description: "PHP-powered project showcase with MySQL backend. Features dynamic filtering, search, and admin panel for content management.",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Apache"],
      github: "https://github.com/alexchen/project-gallery",
      demo: "https://projects.alexchen.dev",
      featured: false,
      status: "Live"
    },
    {
      title: "Contact Form System",
      description: "Secure contact form with spam protection, email notifications, and message management dashboard using PHP and MySQL.",
      tech: ["PHP", "MySQL", "jQuery", "CSS3", "PHPMailer"],
      github: "https://github.com/alexchen/contact-system",
      demo: "https://contact.alexchen.dev",
      featured: false,
      status: "Live"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-clip-text text-transparent gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in full-stack development and AI integration. 
            Each project demonstrates different aspects of modern web development and machine learning.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="shadow-card transition-smooth hover:shadow-glow group animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge 
                        variant={project.status === "Live" ? "default" : "secondary"}
                        className={project.status === "Live" ? "gradient-primary text-white" : ""}
                      >
                        {project.status}
                      </Badge>
                      {project.featured && (
                        <Badge variant="outline" className="text-accent border-accent">
                          <Zap className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="shadow-glow hover:shadow-glow transition-smooth">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="shadow-card transition-smooth hover:shadow-glow group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h4>
                    <Badge 
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className={project.status === "Live" ? "gradient-primary text-white text-xs" : "text-xs"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

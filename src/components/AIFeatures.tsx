import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, FileText, MessageCircle, Target, Upload, Sparkles } from "lucide-react";

const AIFeatures = () => {
  const features = [
    {
      icon: FileText,
      title: "AI Resume Analyzer",
      description: "Upload your resume and get instant feedback on content, formatting, ATS compatibility, and personalized improvement suggestions.",
      tech: ["spaCy", "pdfminer", "Scikit-learn", "Python"],
      status: "Beta",
      demo: true
    },
    {
      icon: MessageCircle,
      title: "Portfolio Chatbot",
      description: "Interactive AI assistant trained on my portfolio content. Ask questions about my experience, projects, and skills.",
      tech: ["LangChain", "OpenAI", "RAG", "FastAPI"],
      status: "Live",
      demo: true
    },
    {
      icon: Target,
      title: "Career Path Recommender",
      description: "Input your skills and interests to receive AI-powered career recommendations and personalized learning paths.",
      tech: ["Sklearn", "Pandas", "ML Classification"],
      status: "Coming Soon",
      demo: false
    },
    {
      icon: Sparkles,
      title: "Blog Auto-Summarizer",
      description: "Automatic generation of concise summaries for blog posts using state-of-the-art transformer models.",
      tech: ["BART", "T5", "HuggingFace", "Transformers"],
      status: "Live",
      demo: true
    }
  ];

  return (
    <section className="py-20 px-6 gradient-secondary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 gradient-primary rounded-full">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              AI <span className="bg-clip-text text-transparent gradient-primary">Features</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the AI-powered features that make this portfolio unique. 
            Each tool demonstrates practical applications of machine learning in web development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="shadow-card transition-smooth hover:shadow-glow group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 gradient-primary rounded-lg group-hover:animate-glow">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge 
                      variant={feature.status === "Live" ? "default" : feature.status === "Beta" ? "secondary" : "outline"}
                      className={feature.status === "Live" ? "gradient-primary text-white" : ""}
                    >
                      {feature.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {feature.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      disabled={!feature.demo}
                      className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      {feature.demo ? "Try Demo" : "Coming Soon"}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Demo Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resume Analyzer Demo */}
          <Card className="shadow-card transition-smooth hover:shadow-glow animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Upload className="h-5 w-5 text-primary" />
                Resume Analyzer Demo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center transition-smooth hover:border-primary">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Drop your resume here or click to upload
                </p>
                <Button className="shadow-glow hover:shadow-glow transition-smooth">
                  Select File
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Supports PDF, DOC, DOCX files up to 5MB
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Chatbot Preview */}
          <Card className="shadow-card transition-smooth hover:shadow-glow animate-slide-up" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                Portfolio Chatbot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm">👋 Hi! I'm Alex's AI assistant. Ask me anything about his projects, skills, or experience!</p>
                </div>
                <div className="bg-primary text-primary-foreground rounded-lg p-3 ml-8">
                  <p className="text-sm">What AI technologies does Alex work with?</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm">Alex specializes in several AI technologies including LangChain for RAG applications, spaCy for NLP, and various ML libraries like Scikit-learn. He's currently working on...</p>
                </div>
              </div>
              <Button className="w-full shadow-glow hover:shadow-glow transition-smooth">
                Start Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
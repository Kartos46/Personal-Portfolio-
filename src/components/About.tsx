import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Brain, Database, Palette } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", icon: Palette, skills: [
      { name: "React/TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 92 }
    ]},
    { category: "Backend", icon: Database, skills: [
      { name: "Python (Flask/FastAPI)", level: 88 },
      { name: "PHP", level: 85 },
      { name: "MySQL/SQLite", level: 87 }
    ]},
    { category: "AI/ML", icon: Brain, skills: [
      { name: "Machine Learning", level: 82 },
      { name: "NLP", level: 78 },
      { name: "LangChain", level: 75 }
    ]},
    { category: "Tools", icon: Code, skills: [
      { name: "Git/GitHub", level: 93 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 }
    ]}
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-clip-text text-transparent gradient-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a deep interest in artificial intelligence. 
            I love creating intelligent web applications that solve real-world problems and enhance user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Started my coding journey 5 years ago with a curiosity about how websites work. 
                What began as tinkering with HTML and CSS quickly evolved into a passion for full-stack development.
              </p>
              <p>
                I specialize in building modern web applications using React and TypeScript for the frontend, 
                with Python and PHP powering the backend. My recent focus has been integrating AI capabilities 
                to create smarter, more intuitive user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest ML research papers, contributing to 
                open-source projects, or experimenting with new AI models.
              </p>
            </div>
          </div>

          {/* Education & Interests */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold mb-6">Background</h3>
            <div className="space-y-6">
              <Card className="shadow-card transition-smooth hover:shadow-glow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-muted-foreground">BS Computer Science</p>
                  <p className="text-sm text-muted-foreground">Stanford University • 2019-2023</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card transition-smooth hover:shadow-glow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Open Source</Badge>
                    <Badge variant="secondary">Photography</Badge>
                    <Badge variant="secondary">Chess</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <Card 
                key={skillGroup.category} 
                className="shadow-card transition-smooth hover:shadow-glow animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 gradient-primary rounded-lg">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {skillGroup.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-2">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
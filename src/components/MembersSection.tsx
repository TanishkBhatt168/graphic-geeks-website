import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Linkedin, Github, Mail } from "lucide-react";

export function MembersSection() {
  const [showAllMembers, setShowAllMembers] = useState(false);

  const coreMembers = [
    {
      name: "Sakshat Jain",
      position: "Founder",
      year: "Final Year CSE",
      skills: ["Full Stack Development", "System Design", "Leadership"],
      bio: "Visionary leader who established Graphic Geeks with a mission to foster innovation.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "arjun@example.com",
    },
    {
      name: "Aditya Rauthan",
      position: "President",
      year: "3rd Year IT",
      skills: ["Project Management", "AI/ML", "Strategic Planning"],
      bio: "Leading the club towards new heights with innovative projects and collaborations.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "riya@example.com",
    },
    {
      name: "Vishal Kumar",
      position: "President",
      year: "3rd Year CSE",
      skills: ["Web Development", "Cloud Computing", "Team Coordination"],
      bio: "Supporting presidential initiatives and driving technical excellence in all projects.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "dev@example.com",
    },
    {
      name: "Sehar Fathima",
      position: "President",
      year: "2nd Year IT",
      skills: ["Documentation", "Event Management", "Communication"],
      bio: "Keeping the club organized and ensuring smooth communication across all levels.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "anisha@example.com",
    },
    {
      name: "Sumit Shukla",
      position: "HR Head",
      year: "2nd year AI&DS",
      skills: ["People Management", "Recruitment", "Team Building"],
      bio: "Building a strong community and managing talent acquisition for the club.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "karan@example.com",
    },
    {
      name: "Tanishk Bhatt",
      position: "Tech Lead",
      year: "2nd year AI&DS",
      skills: ["Web Development", "Cloud Computing", "Team Coordination"],
      bio: "Supporting presidential initiatives and driving technical excellence in all projects.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "dev@example.com",
    },
  ];

  const allMembers = [
    {
      name: "Priya Agarwal",
      position: "Technical Lead - Web",
      year: "3rd Year",
      skills: ["React", "Node.js"],
    },
    {
      name: "Rahul Kumar",
      position: "Technical Lead - Mobile",
      year: "2nd Year",
      skills: ["Flutter", "React Native"],
    },
    {
      name: "Sneha Joshi",
      position: "Design Head",
      year: "3rd Year",
      skills: ["UI/UX", "Figma"],
    },
    {
      name: "Amit Bansal",
      position: "Content Head",
      year: "2nd Year",
      skills: ["Writing", "Social Media"],
    },
    {
      name: "Pooja Verma",
      position: "Event Coordinator",
      year: "3rd Year",
      skills: ["Management", "Planning"],
    },
    {
      name: "Vikash Singh",
      position: "Technical Writer",
      year: "2nd Year",
      skills: ["Documentation", "Blogs"],
    },
    {
      name: "Isha Agrawal",
      position: "Marketing Lead",
      year: "3rd Year",
      skills: ["Digital Marketing", "Strategy"],
    },
    {
      name: "Rohan Gupta",
      position: "AI/ML Lead",
      year: "Final Year",
      skills: ["Python", "TensorFlow"],
    },
    {
      name: "Meera Sharma",
      position: "Community Manager",
      year: "2nd Year",
      skills: ["Engagement", "Growth"],
    },
    {
      name: "Harsh Agarwal",
      position: "DevOps Lead",
      year: "3rd Year",
      skills: ["AWS", "Docker"],
    },
  ];

  return (
    <section
      id="members"
      className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary-light/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Amazing Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals who drive innovation and excellence
            in our club
          </p>
        </div>

        {/* Core Leadership Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Core Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreMembers.map((member, index) => (
              <Card
                key={index}
                className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-1 text-foreground">
                      {member.name}
                    </h4>
                    <Badge
                      variant="default"
                      className="mb-2 bg-primary text-primary-foreground"
                    >
                      {member.position}
                    </Badge>
                    <p className="text-sm text-muted-foreground mb-3">
                      {member.year}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2 text-foreground">
                      Skills:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 pt-4 border-t border-border">
                    <a
                      href={member.linkedin}
                      className="text-primary hover:text-primary-hover transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.github}
                      className="text-primary hover:text-primary-hover transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-primary hover:text-primary-hover transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Members Section */}
        <div className="text-center">
          <Button
            onClick={() => setShowAllMembers(!showAllMembers)}
            variant="outline"
            size="lg"
            className="mb-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            {showAllMembers ? "Hide" : "View All"} Club Members
            {showAllMembers ? (
              <ChevronUp className="ml-2 h-5 w-5" />
            ) : (
              <ChevronDown className="ml-2 h-5 w-5" />
            )}
          </Button>

          {showAllMembers && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                All Club Members
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-1">
                        {member.position}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">
                        {member.year}
                      </p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

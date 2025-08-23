import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Award, BookOpen } from "lucide-react";

export function FacultySection() {
  const faculty = [
    {
      name: "Dr. Narayan",
      designation: "Head of Department - Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      experience: "15+ years",
      achievements: [
        "Best Faculty Award 2023",
        "Research Excellence Award",
        "Published 50+ Research Papers",
      ],
      email: "priya.sharma@geu.ac.in",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Prof. Teekam",
      designation: "Associate Professor - Information Technology",
      specialization: "Web Development & Cloud Computing",
      experience: "12+ years",
      achievements: [
        "Industry Collaboration Award",
        "Student Mentor of the Year",
        "Google Cloud Certified",
      ],
      email: "rajesh.kumar@geu.ac.in",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Dr. Siddhanth Thapliyal",
      designation: "Assistant Professor - Software Engineering",
      specialization: "Mobile App Development & UI/UX Design",
      experience: "8+ years",
      achievements: [
        "Young Researcher Award",
        "App Development Specialist",
        "Design Thinking Expert",
      ],
      email: "anjali.verma@geu.ac.in",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section id="faculty" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Distinguished Faculty
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the brilliant minds who guide and mentor our club members
            towards excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <Card
              key={index}
              className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {member.designation}
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    {member.experience} Experience
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        Specialization
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {member.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-2">
                        Achievements
                      </p>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-muted-foreground text-sm"
                          >
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <Mail className="h-4 w-4 text-primary" />
                    <a
                      href={`mailto:${member.email}`}
                      className="text-primary hover:text-primary-hover text-sm font-medium transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Rocket, Heart } from "lucide-react";
import { Globe3D } from "@/components/Globe3D";
import introBg from "@/assets/intro-bg.jpg";

export function IntroSection() {
  return (
    <section id="intro" className="py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${introBg})`,
        }}
      >
        <div className="absolute inset-0 bg-background/90 dark:bg-background/85"></div>
      </div>

      {/* 3D Globe Background */}
      <Globe3D />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Welcome to Graphic Geeks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are the premier technology club of Graphic Era College, fostering innovation, 
            creativity, and technical excellence among students. Our mission is to bridge the 
            gap between theoretical knowledge and practical application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Innovation First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We encourage creative thinking and innovative solutions to real-world problems. 
                Every idea matters, every solution counts.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Skill Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                From workshops to hackathons, we provide hands-on experience in cutting-edge 
                technologies and industry best practices.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Community Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in using technology for social good, creating solutions that 
                make a positive difference in our community.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To be the leading student technology community that empowers future innovators, 
              fosters collaborative learning, and creates meaningful technological solutions 
              that address contemporary challenges. We envision a world where every student 
              has the opportunity to explore, learn, and excel in the field of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
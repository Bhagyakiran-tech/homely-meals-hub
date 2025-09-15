import { Heart, Users, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUsSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Homely Care",
      description: "Every meal is prepared with the same love and care as a mother would for her child"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connecting students with local families, building stronger neighborhood bonds"
    },
    {
      icon: TrendingUp,
      title: "Empowerment",
      description: "Helping housewives earn income while sharing their culinary skills and passion"
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Verified home chefs and secure payment systems ensure a safe food experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Home Food Website
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We believe that food is more than just nutrition – it's love, comfort, and connection. 
              Our mission is to bridge the gap between homesick students and talented housewives who 
              want to share their culinary heritage while earning a livelihood.
            </p>
            
            <div className="bg-gradient-warm p-8 rounded-2xl text-warmth-foreground mb-12">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To help hostelers get healthy, homemade food that tastes like home while empowering 
                local housewives to turn their cooking skills into a sustainable source of income.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="text-center border-none shadow-soft hover:shadow-warm transition-all duration-300 bg-gradient-card">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-warmth-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-cream rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-warmth mb-2">500+</div>
              <div className="text-muted-foreground">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-nature mb-2">100+</div>
              <div className="text-muted-foreground">Home Chefs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-warmth mb-2">2,500+</div>
              <div className="text-muted-foreground">Meals Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-nature mb-2">95%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
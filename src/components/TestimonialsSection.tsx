import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rohan Sharma",
      role: "Engineering Student",
      location: "Bangalore",
      rating: 5,
      text: "Finally found food that tastes like home! Aunty's rajma-chawal reminds me of my mother's cooking. Best decision ever!",
      image: "RS"
    },
    {
      name: "Priya Patel", 
      role: "Medical Student",
      location: "Pune",
      rating: 5,
      text: "Affordable, tasty, and healthy food right near my hostel. The dal-roti combo is exactly what I needed after long study hours.",
      image: "PP"
    },
    {
      name: "Arjun Kumar",
      role: "MBA Student", 
      location: "Delhi",
      rating: 5,
      text: "The variety of South Indian breakfast options is amazing! Feels like eating at home. Thank you for this wonderful service!",
      image: "AK"
    },
    {
      name: "Shreya Gupta",
      role: "Law Student",
      location: "Mumbai", 
      rating: 5,
      text: "As a girl staying away from home, finding homemade food was crucial for me. This platform is a blessing for all students!",
      image: "SG"
    },
    {
      name: "Sunita Devi",
      role: "Home Chef",
      location: "Bangalore",
      rating: 5,
      text: "I love cooking for these students. They appreciate my food so much, and I earn good money while doing what I love!",
      image: "SD"
    },
    {
      name: "Lakshmi Iyer",
      role: "Home Chef", 
      location: "Chennai",
      rating: 5,
      text: "This platform gave me financial independence. Students love my authentic South Indian meals, and I feel proud to feed them.",
      image: "LI"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from students and home chefs who are part of our food family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-warm transition-all duration-300 bg-gradient-card overflow-hidden">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-warmth/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center text-warmth-foreground font-bold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-warmth">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero p-8 md:p-12 rounded-2xl text-warmth-foreground">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Growing Food Community
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Whether you're a student craving homemade food or a talented home chef, 
              we'd love to have you as part of our family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-warmth-foreground text-warmth px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                Start Ordering Food
              </button>
              <button className="border-2 border-warmth-foreground/30 bg-warmth-foreground/10 text-warmth-foreground px-8 py-3 rounded-full font-semibold hover:bg-warmth-foreground/20 transition-colors">
                Become a Chef
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
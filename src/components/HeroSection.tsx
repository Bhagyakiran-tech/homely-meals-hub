import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroFood} 
          alt="Delicious homemade Indian food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warmth-foreground mb-6 leading-tight">
            Eat Healthy,<br />
            <span className="text-nature-foreground">Eat Homely</span>
          </h1>
          
          <p className="text-lg md:text-xl text-warmth-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with loving housewives in your neighborhood who prepare authentic homemade meals. 
            Miss home food? We bring the taste of home to your hostel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl">
              Order Now
            </Button>
            <Button variant="outline-hero" size="xl">
              How It Works
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-warmth-foreground">500+</div>
              <div className="text-sm text-warmth-foreground/80">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-warmth-foreground">100+</div>
              <div className="text-sm text-warmth-foreground/80">Home Chefs</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-2xl md:text-3xl font-bold text-warmth-foreground">₹50+</div>
              <div className="text-sm text-warmth-foreground/80">Starting Price</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-warmth-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-warmth-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
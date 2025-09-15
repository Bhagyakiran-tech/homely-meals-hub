import { UserPlus, ChefHat, ShoppingBag, CreditCard } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Housewives Register",
      description: "Simple signup process for home chefs to join our community and start earning",
      forWho: "For Housewives",
      color: "bg-nature",
    },
    {
      step: 2,
      icon: ChefHat,
      title: "Add Today's Menu",
      description: "Upload photos of your delicious dishes with name, description, and price",
      forWho: "For Housewives",
      color: "bg-warmth",
    },
    {
      step: 3,
      icon: ShoppingBag,
      title: "Students Browse & Order",
      description: "Students discover nearby homemade food and place orders easily",
      forWho: "For Students",
      color: "bg-nature",
    },
    {
      step: 4,
      icon: CreditCard,
      title: "Payment & Delivery",
      description: "Secure online payment with convenient delivery or pickup options",
      forWho: "For Both",
      color: "bg-warmth",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to connect food lovers with home chefs. Easy for everyone to use!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.step}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-warm group-hover:shadow-lg transition-shadow duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-foreground text-background w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full mb-2">
                    {step.forWho}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-border via-border to-transparent transform translate-x-10 -z-10"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-warm p-8 rounded-2xl text-warmth-foreground">
              <h3 className="text-2xl font-bold mb-4">For Housewives</h3>
              <p className="mb-6">Start earning by sharing your delicious homemade food with students in your area.</p>
              <button className="bg-warmth-foreground text-warmth px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                Register as Chef
              </button>
            </div>
            <div className="bg-gradient-to-r from-nature to-accent p-8 rounded-2xl text-nature-foreground">
              <h3 className="text-2xl font-bold mb-4">For Students</h3>
              <p className="mb-6">Discover amazing homemade food from caring housewives near your hostel.</p>
              <button className="bg-nature-foreground text-nature px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                Order Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
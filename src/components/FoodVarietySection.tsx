import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus } from "lucide-react";
import southIndianImg from "@/assets/south-indian.jpg";
import northIndianImg from "@/assets/north-indian.jpg";
import snacksImg from "@/assets/snacks.jpg";
import sweetsImg from "@/assets/sweets.jpg";
import healthyMealsImg from "@/assets/healthy-meals.jpg";

const FoodVarietySection = () => {
  const categories = [
    {
      id: 1,
      name: "South Indian",
      image: southIndianImg,
      description: "Authentic dosa, idli, sambar & more",
      price: "₹60-120",
      rating: 4.8,
      items: ["Dosa", "Idli", "Vada", "Sambar", "Coconut Chutney"],
      isPopular: true,
    },
    {
      id: 2,
      name: "North Indian",
      image: northIndianImg,
      description: "Homestyle roti, dal, sabzi & rice",
      price: "₹80-150",
      rating: 4.7,
      items: ["Roti", "Dal", "Sabzi", "Rice", "Pickle"],
      isPopular: false,
    },
    {
      id: 3,
      name: "Snacks",
      image: snacksImg,
      description: "Evening snacks & street food favorites",
      price: "₹30-80",
      rating: 4.6,
      items: ["Samosa", "Pakora", "Chaat", "Bhel Puri"],
      isPopular: true,
    },
    {
      id: 4,
      name: "Sweets",
      image: sweetsImg,
      description: "Traditional homemade Indian sweets",
      price: "₹40-100",
      rating: 4.9,
      items: ["Gulab Jamun", "Ladoo", "Barfi", "Kheer"],
      isPopular: false,
    },
    {
      id: 5,
      name: "Healthy Meals",
      image: healthyMealsImg,
      description: "Nutritious & balanced meal options",
      price: "₹100-180",
      rating: 4.8,
      items: ["Quinoa Bowl", "Grilled Vegetables", "Protein Rich Dal"],
      isPopular: true,
    },
  ];

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Food Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from a variety of authentic homemade meals prepared with love by local housewives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="bg-gradient-card shadow-soft hover:shadow-warm transition-all duration-300 border-none overflow-hidden group">
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {category.isPopular && (
                  <Badge className="absolute top-3 right-3 bg-warmth text-warmth-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute bottom-3 left-3 flex items-center bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="text-sm font-medium">{category.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-foreground">{category.name}</CardTitle>
                  <span className="text-lg font-bold text-warmth">{category.price}</span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="warm" 
                  className="w-full group"
                  size="lg"
                >
                  <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-200" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodVarietySection;
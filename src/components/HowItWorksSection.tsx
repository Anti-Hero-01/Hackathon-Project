import { Card, CardContent } from "@/components/ui/card";
import { Upload, CheckCircle, Coins, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "List Your Items",
    description: "Upload photos and details of clothes you no longer wear. Our admin team will review and approve quality items."
  },
  {
    icon: CheckCircle,
    title: "Get Approved",
    description: "Once approved, your items are visible to the community. You'll earn points for each successful listing."
  },
  {
    icon: Coins,
    title: "Earn Points",
    description: "Receive points when someone swaps your items. Use these points to request items from other members."
  },
  {
    icon: RefreshCw,
    title: "Complete Swaps",
    description: "Arrange exchanges with other members. Build your sustainable wardrobe while helping others do the same."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How ReWear Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to start your sustainable fashion journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-card hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
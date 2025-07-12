import { Card, CardContent } from "@/components/ui/card";
import { Users, Recycle, Award, Leaf } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Active Members",
    description: "Growing community of eco-conscious fashion lovers"
  },
  {
    icon: Recycle,
    value: "8,000+",
    label: "Items Exchanged",
    description: "Clothes given a second life through our platform"
  },
  {
    icon: Award,
    value: "45,000+",
    label: "Points Earned",
    description: "Rewards distributed to our amazing community"
  },
  {
    icon: Leaf,
    value: "12 tons",
    label: "CO2 Saved",
    description: "Environmental impact through reduced fast fashion"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Impact Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our community is making a difference in sustainable fashion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
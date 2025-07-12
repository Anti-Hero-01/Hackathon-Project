import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, User } from "lucide-react";

interface ClothingItem {
  id: string;
  title: string;
  brand: string;
  size: string;
  condition: string;
  points: number;
  image: string;
  user: string;
  rating: number;
  category: string;
}

interface ClothingCardProps {
  item: ClothingItem;
}

const ClothingCard = ({ item }: ClothingCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white text-foreground rounded-full w-10 h-10 p-0"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Badge className="absolute top-3 left-3 bg-primary">
          {item.points} pts
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.brand}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              Size {item.size}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {item.condition}
            </Badge>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{item.user}</span>
            <div className="flex items-center ml-auto">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1">{item.rating}</span>
            </div>
          </div>
          
          <Button className="w-full bg-gradient-primary hover:opacity-90">
            Request Swap
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClothingCard;
import { Button } from "@/components/ui/button";
import { User, Heart, ShoppingBag, Leaf } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ReWear
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#browse" className="text-foreground hover:text-primary transition-colors">
            Browse
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Heart className="h-4 w-4 mr-2" />
            Wishlist
          </Button>
          <Button variant="ghost" size="sm">
            <ShoppingBag className="h-4 w-4 mr-2" />
            My Items
          </Button>
          <Button variant="outline" size="sm">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
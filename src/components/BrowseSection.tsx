import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import ClothingCard from "./ClothingCard";

const mockItems = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    brand: "Levi's",
    size: "M",
    condition: "Good",
    points: 15,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=600&fit=crop",
    user: "Sarah M.",
    rating: 4.8,
    category: "Outerwear"
  },
  {
    id: "2",
    title: "Floral Summer Dress",
    brand: "Zara",
    size: "S",
    condition: "Like New",
    points: 12,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    user: "Emma K.",
    rating: 4.9,
    category: "Dresses"
  },
  {
    id: "3",
    title: "Wool Sweater",
    brand: "H&M",
    size: "L",
    condition: "Good",
    points: 10,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=600&fit=crop",
    user: "Mike R.",
    rating: 4.6,
    category: "Knitwear"
  },
  {
    id: "4",
    title: "Black Blazer",
    brand: "Mango",
    size: "M",
    condition: "Excellent",
    points: 18,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    user: "Anna L.",
    rating: 4.9,
    category: "Blazers"
  },
  {
    id: "5",
    title: "Casual T-Shirt",
    brand: "Uniqlo",
    size: "M",
    condition: "Good",
    points: 5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
    user: "Tom S.",
    rating: 4.4,
    category: "T-Shirts"
  },
  {
    id: "6",
    title: "Maxi Skirt",
    brand: "Forever 21",
    size: "S",
    condition: "Like New",
    points: 8,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d36?w=400&h=600&fit=crop",
    user: "Lily W.",
    rating: 4.7,
    category: "Skirts"
  }
];

const BrowseSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <section id="browse" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Browse Available Items</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing clothes from our community. Find your next favorite piece while helping the environment.
          </p>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-soft mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for clothes, brands, or styles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="dresses">Dresses</SelectItem>
                <SelectItem value="outerwear">Outerwear</SelectItem>
                <SelectItem value="knitwear">Knitwear</SelectItem>
                <SelectItem value="blazers">Blazers</SelectItem>
                <SelectItem value="t-shirts">T-Shirts</SelectItem>
                <SelectItem value="skirts">Skirts</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full lg:w-32">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sizes</SelectItem>
                <SelectItem value="xs">XS</SelectItem>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="lg:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockItems.map((item) => (
            <ClothingCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrowseSection;
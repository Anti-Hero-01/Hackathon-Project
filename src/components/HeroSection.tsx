import { Button } from "@/components/ui/button";
import { Recycle, Users, Award, Leaf } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <Leaf className="h-12 w-12" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Give Your Clothes
            <span className="block bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
              A Second Life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join the sustainable fashion revolution. Exchange clothes, earn points, 
            and build a more eco-friendly wardrobe together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-green-50 font-semibold">
              Start Exchanging
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Exchange</h3>
              <p className="text-green-100">Reduce waste and give clothes new life through our exchange system</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-green-100">Connect with like-minded people who care about the environment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Points & Rewards</h3>
              <p className="text-green-100">Earn points for every item you list and redeem for new pieces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
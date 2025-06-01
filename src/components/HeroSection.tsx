import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Star, Zap, BookOpen } from "lucide-react";

const HeroSection = () => {
  const userImages = [
    "https://shipany.ai/imgs/users/22.png",
    "https://shipany.ai/imgs/users/23.png",
    "https://shipany.ai/imgs/users/24.png",
    "https://shipany.ai/imgs/users/25.png",
    "https://shipany.ai/imgs/users/26.png",
    "https://shipany.ai/imgs/users/27.png",
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center">
          <a href="#pricing" className="mx-auto mb-3 inline-flex items-center gap-3 rounded-full border px-2 py-1 text-sm">
            <Badge className="bg-primary text-primary-foreground">2025</Badge>
            🎉 Happy New Year
          </a>
          
          <h1 className="mx-auto mb-3 mt-4 max-w-4xl text-balance text-4xl font-bold lg:mb-7 lg:text-7xl">
            <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
              Ship Any
            </span>{" "}
            AI Startups in hours, not days
          </h1>
          
          <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
            ShipAny is a NextJS boilerplate for building AI SaaS startups.<br />
            Ship Fast with a variety of templates and components.
          </p>
          
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="w-full sm:w-auto" size="lg">
              Get Started
              <Zap className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" size="lg">
              Read Document
              <BookOpen className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <p className="mt-8 text-md text-muted-foreground">
            🎁 $100 off for the first 1000 customers
          </p>
          
          <div className="mx-auto mt-8 flex w-fit flex-col items-center gap-2 sm:flex-row">
            <span className="mx-4 inline-flex items-center -space-x-2">
              {userImages.map((src, index) => (
                <Avatar key={index} className="size-12 border">
                  <AvatarImage src={src} alt="User" />
                </Avatar>
              ))}
            </span>
            <div className="flex flex-col items-center gap-1 md:items-start">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-left font-medium text-muted-foreground">
                from 250+ happy users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Zap, Sparkles, Code } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      id: "framework",
      icon: <Zap className="size-5 shrink-0 lg:size-6" />,
      title: "Complete Framework",
      content: "Get a comprehensive development framework with all the tools you need to build and scale your AI SaaS startup.",
      image: "https://shipany.ai/imgs/features/11.png"
    },
    {
      id: "templates",
      icon: <Sparkles className="size-5 shrink-0 lg:size-6" />,
      title: "Rich Templates Library",
      content: "Choose from various AI SaaS templates to kickstart your project - chatbots, image generation, and more.",
      image: "https://shipany.ai/imgs/features/12.png"
    },
    {
      id: "guidance",
      icon: <Code className="size-5 shrink-0 lg:size-6" />,
      title: "Technical Guidance",
      content: "Get expert technical support and guidance to help you navigate the complexities of AI development.",
      image: "https://shipany.ai/imgs/features/13.png"
    }
  ];

  return (
    <section id="benefit" className="py-32">
      <div className="container">
        <div className="mx-auto grid gap-20 lg:grid-cols-2">
          <div>
            <Badge variant="outline" className="mb-4">Benefits</Badge>
            <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-4xl">
              Why Choose ShipAny
            </h2>
            <p className="mb-4 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              Get everything you need to launch your AI startup - from ready-to-use templates to technical support.
            </p>
            
            <Accordion type="single" defaultValue="templates" className="w-full">
              {benefits.map((benefit) => (
                <AccordionItem key={benefit.id} value={benefit.id} className="border-b-0 border-secondary">
                  <AccordionTrigger className="text-left data-[state=closed]:text-muted-foreground">
                    <div className="flex items-center justify-between gap-2">
                      <p className="flex size-9 items-center justify-center rounded-lg bg-muted">
                        {benefit.icon}
                      </p>
                      <span className="font-medium lg:text-lg">{benefit.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground lg:text-base">
                    {benefit.content}
                    <div className="mt-8 h-px bg-muted">
                      <div className="h-px animate-pulse bg-primary" style={{ animationDuration: '5000ms' }}></div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="h-full flex items-center justify-center">
            <Carousel className="w-full">
              <CarouselContent>
                {benefits.map((benefit, index) => (
                  <CarouselItem key={index}>
                    <div>
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        className="max-h-auto w-full object-cover lg:max-h-none rounded-md"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
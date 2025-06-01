import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "ShipAny has made the journey from idea to product simpler than ever before. Its comprehensive templates, scripts, and foundational infrastructure mean I hardly need to spend time on basic development. I highly recommend it to founders looking to quickly launch their SaaS businesses.",
      name: "blank",
      title: "Author of AITDK",
      avatar: "https://shipany.ai/imgs/users/27.png"
    },
    {
      quote: "ShipAny made it super easy to set up payments and handle all the nuts and bolts of commercialization, so we could stay laser-focused on building features that matter. If you're looking to ship and scale your AI SaaS fast, ShipAny is a no-brainer!",
      name: "Scar", 
      title: "Front-end Engineer",
      avatar: "https://shipany.ai/imgs/users/22.png"
    },
    {
      quote: "I used ShipAny and launched a new website in 8 minutes, including login/payment, so amazing!",
      name: "Lafe",
      title: "Tech Lead", 
      avatar: "https://shipany.ai/imgs/users/23.png"
    }
  ];

  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-4 mb-16">
        <h2 className="text-center text-3xl font-semibold lg:text-4xl">
          What Users Say About ShipAny
        </h2>
        <p className="text-center text-muted-foreground lg:text-lg px-8">
          Hear from developers and founders who launched their AI startups with ShipAny.
        </p>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="container flex flex-col items-center text-center">
                <p className="mb-8 max-w-4xl font-normal md:px-8 lg:text-xl leading-loose">
                  "{testimonial.quote}"
                </p>
                <Avatar className="mb-2 size-12 md:size-24">
                  <AvatarImage src={testimonial.avatar} />
                </Avatar>
                <p className="mb-1 text-sm font-medium md:text-lg">
                  {testimonial.name}
                </p>
                <p className="mb-2 text-sm text-muted-foreground md:text-lg">
                  {testimonial.title}
                </p>
                <div className="mt-2 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-primary stroke-none" />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="container flex justify-center py-4">
        {testimonials.map((_, index) => (
          <Button key={index} variant="ghost" className="h-9 rounded-md px-3">
            <div className={`size-2.5 rounded-full ${index === 0 ? 'bg-primary' : 'bg-input'}`}></div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
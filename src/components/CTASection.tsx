import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="py-16">
      <div className="px-8">
        <div className="flex items-center justify-center rounded-2xl bg-[url('/imgs/masks/circle.svg')] bg-cover bg-center px-8 py-12 text-center md:p-16">
          <div className="mx-auto max-w-screen-md">
            <h2 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Ship your first AI SaaS Startup
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Start from here, ship with ShipAny.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button>
                <a 
                  target="_blank" 
                  className="flex items-center justify-center gap-1" 
                  href="https://shipany.ai/"
                  rel="noopener noreferrer"
                >
                  Get ShipAny
                </a>
              </Button>
              <Button variant="outline">
                <a 
                  target="_blank" 
                  className="flex items-center justify-center gap-1" 
                  href="https://docs.shipany.ai/"
                  rel="noopener noreferrer"
                >
                  Read Document
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
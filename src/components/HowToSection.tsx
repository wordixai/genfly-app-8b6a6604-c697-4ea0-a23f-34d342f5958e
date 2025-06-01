import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowToSection = () => {
  const steps = [
    {
      id: "tab-1",
      number: "1",
      title: "Get ShipAny",
      description: "Buy ShipAny with a one-time payment. Check your email for the code and documentation."
    },
    {
      id: "tab-2", 
      number: "2",
      title: "Start Your Project",
      description: "Read the documentation and clone the code of ShipAny. Start building your AI SaaS startup."
    },
    {
      id: "tab-3",
      number: "3", 
      title: "Customize Your Project",
      description: "Modify the template with your data and contents. Specific AI functionality needs."
    },
    {
      id: "tab-4",
      number: "4",
      title: "Deploy to Production", 
      description: "Deploy your project to production with a few steps and start serving customers immediately."
    }
  ];

  return (
    <section className="py-16">
      <div className="lg:container px-8">
        <div className="mb-16 max-w-xl px-8 lg:px-0">
          <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-4xl">
            How to Launch with ShipAny
          </h2>
          <p className="mb-4 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
            Get your AI SaaS startup running in three simple steps:
          </p>
        </div>
        
        <Tabs defaultValue="tab-1" className="w-full">
          <TabsList className="relative grid items-start gap-6 lg:grid-cols-4 bg-transparent h-auto p-0">
            <div className="absolute left-4 right-0 top-[30px] -z-10 hidden h-px bg-input lg:block"></div>
            {steps.map((step) => (
              <TabsTrigger 
                key={step.id}
                value={step.id}
                className="group pointer-events-none lg:pointer-events-auto data-[state=active]:bg-transparent"
              >
                <div className="flex gap-4 rounded-md px-8 py-4 text-left hover:bg-muted/50 lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-xs font-medium lg:group-data-[state=active]:bg-primary lg:group-data-[state=active]:text-primary-foreground lg:group-data-[state=active]:ring lg:group-data-[state=active]:ring-primary/40">
                      {step.number}
                    </span>
                    <span className="h-full w-px bg-input lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">{step.title}</h3>
                    <p className="text-sm">{step.description}</p>
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-8 hidden rounded-xl lg:block"></div>
        </Tabs>
      </div>
    </section>
  );
};

export default HowToSection;
const TechStack = () => {
  const logos = [
    { src: "https://shipany.ai/imgs/logos/nextjs.svg", alt: "Next.js" },
    { src: "https://shipany.ai/imgs/logos/react.svg", alt: "React" },
    { src: "https://shipany.ai/imgs/logos/tailwindcss.svg", alt: "TailwindCSS" },
    { src: "https://shipany.ai/imgs/logos/shadcn.svg", alt: "Shadcn/UI" },
    { src: "https://shipany.ai/imgs/logos/vercel.svg", alt: "Vercel" },
  ];

  return (
    <section className="py-16">
      <div className="container flex flex-row items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-muted-foreground lg:text-left">
            ShipAny is built on the shoulders of giants
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-7 dark:invert"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
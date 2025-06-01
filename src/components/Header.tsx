import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <section className="py-3">
      <div className="container mx-auto px-4">
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="https://shipany.ai/logo1.png" alt="ShipAny" className="w-8" />
              <span className="text-xl text-primary font-bold">ShipAny</span>
            </div>
            <Button size="icon" className="h-10 w-10">
              <Menu className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
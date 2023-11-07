import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import LangSwitch from "@/components/LangSwitch";
import { ModeToggle } from "@/components/ModeToggle";
import AuthButton from "./AuthButton";

export const Navbar = () => {
  return (
    <div className="border p-1 gap-2 flex justify-between items-center">
      <Button variant="ghost" size="icon">
        <MenuIcon />
      </Button>
      <div className="grow font-medium text-xl">Demo App</div>
      <div className="flex gap-2 items-center">
        <LangSwitch />
        <ModeToggle />
        <AuthButton />
      </div>
    </div>
  );
};

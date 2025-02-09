import React from "react";
import { cn } from "@/lib/utils";
import { SquareTerminal } from "lucide-react";

const navOptions = [
  {
    href: "/",
    label: "About",
    isExternal: false,
  },
  {
    href: "/projects",
    label: "Projects",
    isExternal: false,
  },
  {
    href: "/blogs",
    label: "Blog",
    isExternal: false,
  },
  {
    href: "https://www.linkedin.com/in/glli01",
    label: "Contact",
    isExternal: true,
  },
];

const NavBar = ({ hasHeader }) => {
  return (
    <nav className="absolute top-0 w-full z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="cursor-pointer flex items-center gap-2">
          <img
            src="https://placehold.co/32x32"
            alt="logo"
            width="32"
            height="32"
            className="w-8"
          />
          <span
            className={cn(
              !hasHeader ? "text-foreground" : "text-accent",
              "font-semibold",
            )}
          >
            glli.dev
            <SquareTerminal className="ml-1 inline align-top" />
          </span>
        </div>
        <div className="flex items-center gap-6">
          {navOptions.map((option) => (
            <a
              key={option.href}
              href={option.href}
              className={cn(
                !hasHeader ? "text-foreground/80" : "text-accent/80",
                "hover:text-white",
              )}
              {...(option.isExternal && {
                target: "_blank",
                rel: "noreferrer",
              })}
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

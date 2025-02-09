import React from "react";
import { cn } from "@/lib/utils";
import { SquareTerminal } from "lucide-react";
import { CiAlignCenterH } from "react-icons/ci";

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
        <a className="cursor-pointer flex items-center gap-1" href="/">
          <CiAlignCenterH
            className={cn(
              !hasHeader ? "text-foreground" : "text-accent",
              "w-8 h-8 font-semibold",
            )}
          ></CiAlignCenterH>
          <span
            className={cn(
              !hasHeader
                ? "text-foreground hover:text-primary"
                : "text-accent hover:text-primary-foreground",
              "font-semibold",
            )}
          >
            glli.dev
            {/* <SquareTerminal className="ml-1 inline align-top" /> */}
          </span>
        </a>
        <div className="flex items-center gap-6">
          {navOptions.map((option) => (
            <a
              key={option.href}
              href={option.href}
              className={cn(
                !hasHeader
                  ? "text-foreground/80 hover:text-primary"
                  : "text-accent/80 hover:text-primary-foreground",
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

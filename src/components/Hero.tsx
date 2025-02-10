import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import background from "@/assets/background.jpeg";

export default function Hero() {
  return (
    <section className="relative md:h-screen sm:max-h-screen/2 sm:min-h-120 flex items-center justify-center bg-cover bg-center bg-[url(/glli.dev/images/background.jpeg)] px-4">
      <div className="max-w-4xl mx-auto text-center text-white space-y-3 pt-32">
        <h1 className="text-5xl md:text-6xl font-serif">
          Hello, I am George Li{" "}
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif">
          A Software Engineer Specializing in Systems Design, and DevOps
        </h2>
        <div className="text-white/80 max-w-2xl mx-auto">
          <p>
            I enjoy building scalable solutions, designing backend
            architectures, and spend my free time rock climbing, training in
            muay thai, and exploring new foods.
          </p>
          <a
            href="/glli.dev/projects"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "mt-6 xl:inline-flex rounded-full pr-2",
            )}
          >
            Projects
            <ChevronRight className="w-5 h-5 text-muted-foreground align-top"></ChevronRight>
          </a>
        </div>
        <div className="mt-12 flex justify-center relative h-60">
          <div className="absolute bg-white/70 backdrop-blur-xl w-2xl rounded-3xl p-4 md:p-4">
            <img
              src={background.src}
              alt="Portal Interface"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

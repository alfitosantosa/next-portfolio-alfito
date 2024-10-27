import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div>
      <AnimatedGridPattern numSquares={500} maxOpacity={0.1} duration={10} repeatDelay={10} className={cn("[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]", "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12")} />
    </div>
  );
}

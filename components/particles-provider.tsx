"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";

export function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="absolute min-h-screen w-full bg-repeat bg-background">
      <Particles className="absolute inset-0 h-full w-full bg-repeat" quantity={100} ease={80} color={color} refresh />
    </div>
  );
}

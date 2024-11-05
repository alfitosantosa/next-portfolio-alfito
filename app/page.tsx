"use client";
// import ShimmerButton from "@/components/ui/shimmer-button";
// import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import { FiGithub } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import BlurIn from "@/components/ui/blur-in";
import { Badge } from "@/components/ui/badge";
import { RetroGridDemo } from "@/components/retro-grid-provider";
import Link from "next/link";

// import ShinyButton from "@/components/ui/shiny-button";
// import { SparklesTextDemo } from "@/components/sparkles-text-provider";

export default function Home() {
  return (
    <>
      <RetroGridDemo></RetroGridDemo>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ModeToggle />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority /> */}
          {/* <SparklesTextDemo /> */}
          <BlurIn word="Hello, World!" className="text-4xl font-bold text-black dark:text-white" />
          <p className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            Muhamad Alfito Santosa <Badge variant="outline">Next.js Developer.</Badge>
          </p>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://wa.me/6281927453030"
            >
              {/* <Image className="dark:invert" src="/wa.png" alt="Vercel logomark" width={20} height={20} /> */}
              Contact Me
            </a>
            <Link
              href="/portfolio"
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              rel="noopener noreferrer"
            >
              Read our portfolio
            </Link>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://github.com/alfitosantosa" target="_blank" rel="noopener noreferrer">
            <FiGithub />
            Github
          </a>
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.instagram.com/alfitosans_" target="_blank" rel="noopener noreferrer">
            <SiInstagram />
            Instagram
          </a>
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.linkedin.com/in/lorddsans/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
            LinkedIn
          </a>
        </footer>
      </div>
    </>
  );
}

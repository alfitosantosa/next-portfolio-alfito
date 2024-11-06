import { BellIcon } from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { ModeToggle } from "./theme-toggle";
import { SiPowerpages } from "react-icons/si";
import { FaClinicMedical } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import ShinyButton from "./ui/shiny-button";
import Link from "next/link";
import { ParticlesDemo } from "./particles-provider";
import Image from "next/image";
import carevulWeb from "@/public/carevul-web.png";
import klnikDaarusyifaWeb from "@/public/klinik-daarusyifa-web.png";
import nextvulCafe from "@/public/nextvulcafe-web.png";

const features = [
  {
    Icon: FaClinicMedical,
    name: "Klinik daarusyifa",
    description: "Fullstack klinik Management.",
    href: "https://klinik-daarusyifa.vercel.app/",
    cta: "Preview",
    background: <Image className="absolute opacity-10" src={klnikDaarusyifaWeb} alt={""} />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    tech: ["React Vite", "Bootstrap", "ExpressJs", "Prisma", "MongoDB", "Vercel"],
  },
  {
    Icon: SiBuymeacoffee,
    name: "Nextvul Cafe",
    description: "Management system for your UMKM.",
    href: "https://nextvulcafe.netlify.app/",
    cta: "Preview",
    background: <Image className="absolute opacity-10" src={nextvulCafe} alt={""} />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    tech: ["React", "Next.js", "TypeScript", "Clerk Auth", "Tailwind CSS", "ShadCn", "Prisma", "PostgreSQL", "Neon DB", "Netlify"],
  },
  {
    Icon: FaHandHoldingMedical,
    name: "Carevul",
    description: "Fullstack Telemedicine with chatbot.",
    href: "https://carevul-five.vercel.app/",
    cta: "Preview",
    background: <Image className="absolute  opacity-10" src={carevulWeb} alt={""} />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",

    tech: ["React Vite", "Bootstrap", "ExpressJs", "Prisma", "MongoDB", "Vercel", "Firebase Realtime DB"],
  },
  {
    Icon: SiPowerpages,
    name: "Company Profile",
    description: "Landing page for information company.",
    href: "/",
    cta: "Preview",
    background: <Image className="absolute -right-20 -top-20 opacity-60" src={""} alt={""} />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    tech: ["React", "Next.js", "Tailwind CSS", "ShadCn", "Vercel"],
  },
  {
    Icon: BellIcon,
    name: "Whatsapp Bot",
    description: "Get notified when someone shares a file or mentions you in a WhatsApp Management System.",
    href: "/",
    cta: "Preview",
    background: <Image className="absolute -right-20 -top-20 opacity-60" src={""} alt={""} />,
    tech: ["Python", "Twilio", "Flask", "Heroku"],
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function BentoDemo() {
  return (
    <>
      <ParticlesDemo />
      <div className="relative w-full h-[500px] lg:h-[800px] font-[family-name:var(--font-geist-sans)]">
        <div className="text-center mt-7">
          <ModeToggle />
        </div>
        <div className="flex text-4xl font-bold pl-7 pt-2  mt-3 ">
          <p>Portfolio</p>
        </div>
        <BentoGrid className="lg:grid-rows-3 mx-auto p-7">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
        <div className="relative text-center pb-6">
          <Link href="/">
            {" "}
            <ShinyButton>Back Home</ShinyButton>
          </Link>
        </div>
      </div>
    </>
  );
}

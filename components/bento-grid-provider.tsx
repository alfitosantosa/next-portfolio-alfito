import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
// import ShinyButton from "./ui/shiny-button";
import { ModeToggle } from "./theme-toggle";

const features = [
  {
    Icon: FaReact,
    name: "Klinik daarusyifa",
    description: "Fullstack klinik Management.",
    href: "https://klinik-daarusyifa.vercel.app/",
    cta: "Preview",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: RiNextjsFill,
    name: "Nextvul Cafe",
    description: "Search through all your files in one place.",
    href: "https://nextvulcafe.netlify.app/",
    cta: "Preview",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Carevul",
    description: "Supports 100+ languages and counting.",
    href: "https://carevul-five.vercel.app/",
    cta: "Preview",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Company Profile",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Preview",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Whatsapp Bot",
    description: "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Preview",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function BentoDemo() {
  return (
    <div className="relative w-full h-[500px] lg:h-[800px] font-[family-name:var(--font-geist-sans)]">
      <div className="text-center mt-7">
        <ModeToggle />
      </div>
      <div className="flex text-4xl font-bold p-6 ml-3 mt-3 mb-(-5)">
        <p>Portfolio</p>
      </div>
      <BentoGrid className="lg:grid-rows-3 mx-auto p-7">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      {/* <div className="pb-8 px-7">
        <ShinyButton className="flex text-white w-full mx-auto font-[family-name:var(--font-geist-sans)] ">Contact Me</ShinyButton>
      </div> */}
    </div>
  );
}

"use client"
import { JSX } from "react";
import { FormatCard } from "./FormatCard";
import { 
  BlogIcon, 
  WhitePaperIcon, 
  CaseStudyIcon, 
  EmailIcon, 
  SocialIcon, 
  LandingPageIcon 
} from "./FormatIcons";

interface Format {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

const formats: Format[] = [
  {
    id: "blog",
    icon: <BlogIcon />,
    title: "Blog Articles",
    description: "SEO-optimized thought leadership pieces that drive organic traffic."
  },
  {
    id: "whitepaper",
    icon: <WhitePaperIcon />,
    title: "White Papers",
    description: "In-depth industry reports that establish authority and generate leads."
  },
  {
    id: "casestudy",
    icon: <CaseStudyIcon />,
    title: "Case Studies",
    description: "Compelling success stories that prove your value proposition."
  },
  {
    id: "email",
    icon: <EmailIcon />,
    title: "Email Campaigns",
    description: "Nurture sequences designed to convert subscribers into customers."
  },
  {
    id: "social",
    icon: <SocialIcon />,
    title: "Social Content",
    description: "Engaging micro-content tailored for each social platform."
  },
  {
    id: "landing",
    icon: <LandingPageIcon />,
    title: "Landing Pages",
    description: "Conversion-focused copy for your most important destinations."
  }
];

export function FormatsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-6">
        <div className="text-[#c73450] tracking-wide">
          Formats
        </div>
        <h2 className="text-[#2c2c2c] md:text-4xl text-xl max-w-3xl mx-auto">
          Diverse formats for every channel.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#e5e2dc] bg-[#faf9f6]">
        {formats.map((format) => (
          <FormatCard
            key={format.id}
            icon={format.icon}
            title={format.title}
            description={format.description}
          />
        ))}
      </div>
    </section>
  );
}
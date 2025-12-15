"use client";
import { Button } from "@/components/ui/button";
import QualityCard from "./QualityCard";

const qualitySteps = [
  {
    number: "01",
    title: "Deep Research",
    description: "Every piece begins with rigorous and source verification.",
  },
  {
    number: "02",
    title: "Expert Writing",
    description: "Crafted by subject matter experts with industry-specific knowledge.",
  },
  {
    number: "03",
    title: "Editorial Review",
    description: "Two rounds of editing for clarity, tone, and grammatical precision.",
  },
  {
    number: "04",
    title: "SEO Optimization",
    description: "Strategic keyword placement and refinement before delivery.",
  },
];

const  QualitySection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left Column - Header Content */}
          <div className="space-y-6">
            <span className="text-xs font-medium text-[#c73450] uppercase tracking-wide">
              Quality Assurance
            </span>
            
            <h2 className="text-4xl md:text-5xl text-[#2c2c2c]">
              Uncompromising<br />standards.
            </h2>
            
            <p className="text-base text-[#2c2c2c]/70 leading-relaxed">
              We don&#39;t just write; we engineer content for excellence. Our rigorous QA process 
              ensures every deliverable meets the highest editorial benchmarks.
            </p>
            
            <Button 
              variant="outline" 
              className="border-[#c73450] text-[#c73450] hover:bg-[#c73450] hover:text-white transition-colors"
            >
              View Editorial Guidelines
            </Button>
          </div>
          
          {/* Right Column - Quality Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualitySteps.map((step) => (
              <QualityCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualitySection;
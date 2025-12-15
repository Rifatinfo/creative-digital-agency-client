import { Search, Sparkles, TrendingUp } from "lucide-react";
import { ApproachCard } from "./ApproachCard";

const approaches = [
  {
    number: "01",
    title: "Research & Insight",
    description:
      "We dive deep into your industry, audience, and competitors to uncover the narratives that will resonate most effectively.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategic Planning",
    description:
      "Developing a comprehensive content calendar and thematic pillars that align with your broader business objectives.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Execution & Analysis",
    description:
      "Crafting high-fidelity content and measuring its impact to continuously refine our approach for maximum ROI.",
    icon: TrendingUp,
  },
];

export function ApproachSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-12 py-24">
      {/* Header */}
      <div className="mb-24">
        <p className="text-xs font-medium text-[#c73450] uppercase tracking-wide mb-4">
          Our Approach
        </p>
        <h2 className="text-[40px] leading-[48px] text-[#2c2c2c] max-w-[672px]">
          Strategic foundations for compelling narratives.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {approaches.map((approach) => (
          <ApproachCard
            key={approach.number}
            number={approach.number}
            title={approach.title}
            description={approach.description}
            icon={approach.icon}
          />
        ))}
      </div>
    </section>
  );
}

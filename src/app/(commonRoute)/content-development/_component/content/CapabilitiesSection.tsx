"use client";

import { Button } from "@/components/ui/button";
import FeatureCard from "./FeatureCard";
import { ChartIcon, PenIcon, SearchIcon, UsersIcon } from "./IconFunction";

export function CapabilitiesSection() {
  const features = [
    {
      icon: <PenIcon />,
      title: "Expert Copywriting",
      description:
        "Our team of seasoned writers creates engaging, error-free content tailored to your specific industry and audience needs.",
    },
    {
      icon: <SearchIcon />,
      title: "SEO Strategy",
      description:
        "We conduct deep keyword research to ensure your content ranks high and drives qualified organic traffic to your site.",
    },
    {
      icon: <ChartIcon />,
      title: "Performance Analytics",
      description:
        "Monthly reports tracking engagement, traffic, and conversions to measure the tangible ROI of your content investment.",
    },
    {
      icon: <UsersIcon />,
      title: "Audience Targeting",
      description:
        "Content designed specifically for your buyer personas, addressing their pain points and guiding them through the funnel.",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Hero Content */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-[#c73450]">Capabilities</span>
            <h2 className="text-2xl md:text-5xl mb-6 text-[#2c2c2c]">
              Comprehensive content solutions for modern brands.
            </h2>
            <p className="mb-8 text-[rgba(44,44,44,0.7)]">
              We don&rsquo;t just write words; we build assets. Our holistic approach
              combines creative storytelling with data-driven strategy to
              deliver content that performs.
            </p>
            <div>
              <Button
                variant="link"
                className="h-auto p-0 text-xl text-[#c73450] underline decoration-[#c73450] underline-offset-4 hover:no-underline"
              >
                Learn about our process
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid gap-12 sm:grid-cols-2 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

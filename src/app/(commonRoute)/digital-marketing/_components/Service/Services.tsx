import AnimatedSectionTitle from "@/components/ui/modules/common/sectionTitle/AnimatedSectionTitle";

import ServiceCard from "./ServiceCard";
const services = [
  {
    icon: "search",
    title: "SEO Optimization",
    description:
      "Dominate search rankings with technical SEO, keyword strategy, and high-quality link building.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: "megaphone",
    title: "Paid Advertising",
    description:
      "Maximize ROI with targeted PPC campaigns across Google, Meta, LinkedIn, and emerging platforms.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: "globe",
    title: "Social Media",
    description:
      "Build an engaged community with creative content strategies and active community management.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: "pen",
    title: "Content Marketing",
    description:
      "Establish authority with valuable content that educates, entertains, and converts your audience.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: "mail",
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with personalized, automated email sequences that sell.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: "chart",
    title: "Data Analytics",
    description:
      "Make informed decisions with comprehensive tracking, reporting, and actionable insights.",
    color: "bg-indigo-50 text-indigo-600",
  },
] as const;

const Services = () => {
    return (
        <div className="container mx-auto">
            <div>
                <AnimatedSectionTitle
                    title="Comprehensive Digital Solutions"
                    subtitle="We don't just offer services; we provide integrated solutions
                    designed to solve your specific business challenges and drive
                    growth."
                />

                {/* service  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} index={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;

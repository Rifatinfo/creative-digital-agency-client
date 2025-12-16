import PricingTable from "@/components/shared/RateChart/PricingTable";
import HeroSection from "./_components/banner/HeroSection";
import Process from "./_components/Process/Process";
import Services from "./_components/Service/Services";
import WithoutHomeNavbar from "@/components/shared/commonNavbar/WithoutHomeNavbar";

const tiers = [
  {
    name: "Essential",
    price: "2,500 tk",
    period: "/month",
    description: "Foundational content for growing brands.",
    features: [
      "2 Long-form Articles (1,500 words)",
      "4 Blog Posts (800 words)",
      "Basic SEO Optimization",
      "Monthly Content Calendar",
      "1 Revision Round",
    ],
    cta: "Start Essential",
  },
  {
    name: "Professional",
    price: "4,800 tk",
    period: "/month",
    description: "Strategic growth and authority building.",
    features: [
      "4 Long-form Articles (2,000 words)",
      "8 Blog Posts (1,000 words)",
      "Advanced SEO & Competitor Analysis",
      "Quarterly Strategy Workshop",
      "Social Media Micro-copy",
      "2 Revision Rounds",
    ],
    cta: "Start Professional",
    highlighted: true,
  },
]

const DigitalMarketingPage = () => {
    return (
        <div>
            <WithoutHomeNavbar/>
            <HeroSection/>
            <Services/>
            <Process/>
            <PricingTable tiers={tiers} />
        </div>
    );
};

export default DigitalMarketingPage;


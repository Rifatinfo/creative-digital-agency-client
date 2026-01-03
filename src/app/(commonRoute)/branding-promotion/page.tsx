import WithoutHomeNavbar from "@/components/shared/commonNavbar/WithoutHomeNavbar";
import { BrandingPromotion } from "./_components/BrandingPromotion";
import PricingTable from "@/components/shared/RateChart/PricingTable";
const tiers = [
  {
    name: "Starter Branding",
    price: "3,500 tk",
    period: "/month",
    description: "Perfect for new brands starting their identity journey.",
    features: [
      "Brand Voice & Tone Guidelines",
      "Logo Usage & Color Direction",
      "2 Promotional Post Designs",
      "Basic Caption & Hashtag Strategy",
      "1 Revision Round",
    ],
    cta: "Start Branding",
  },
  {
    name: "Growth Branding",
    price: "6,500 tk",
    period: "/month",
    description: "Consistent branding with active promotion support.",
    features: [
      "Complete Brand Identity Kit",
      "6 Promotional Post Designs",
      "Platform-wise Caption Strategy",
      "Monthly Promotion Plan",
      "Audience Targeting Guidance",
      "2 Revision Rounds",
    ],
    cta: "Grow My Brand",
    highlighted: true,
  },
  {
    name: "Authority Branding",
    price: "11,000 tk",
    period: "/month",
    description: "High-impact branding for scale and authority.",
    features: [
      "Advanced Brand Strategy Document",
      "12 Promotional Creatives (Static/Reels)",
      "Ad Copywriting (Meta / Google)",
      "Campaign Funnel Planning",
      "Weekly Performance Review",
      "Unlimited Revisions",
    ],
    cta: "Build Authority",
  },
];

const BrandingPage = () => {
    return (
        <div>
            <WithoutHomeNavbar/>
            <BrandingPromotion />
            <PricingTable tiers={tiers} />
        </div>
    );
};

export default BrandingPage;
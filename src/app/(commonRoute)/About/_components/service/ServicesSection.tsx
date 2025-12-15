import { Card } from "@/components/ui/card";
import { BrandingIcon, ContentDevelopmentIcon, DigitalMarketingIcon, EventIcon, SoftwareManagementIcon, WebAppIcon } from "./Icon";
import ServiceCard from "./serviceCard";

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
}

export interface ServicesSectionProps {
  title?: string;
  highlightedWord?: string;
  subtitle?: string;
  description?: string;
  stat?: {
    value: string;
    label: string;
  };
  services?: ServiceCardProps[];
}



const ServicesSection = ({
  title = "Everything You Need",
  highlightedWord = "To Win",
  subtitle = "Full-Service Excellence",
  description = "From strategy to execution, we deliver integrated solutions that drive measurable growth. No silos, no handoffs—just seamless collaboration and exceptional results.",
  stat = {
    value: "98%",
    label: "Client Retention Rate"
  },
  services = [
    {
      icon: <ContentDevelopmentIcon />,
      title: "Content Development",
      description: "Transform your message into high-performing content. We produce articles, videos, and social media that drive engagement, build authority, and convert audiences into loyal customers.",
      metric: "Average 3x engagement increase"
    },
    {
      icon: <DigitalMarketingIcon />,
      title: "Digital Marketing",
      description: "Scale your growth with precision-targeted campaigns. Our data-driven SEO, PPC, and social strategies consistently deliver 200%+ ROI and measurable pipeline acceleration.",
      metric: "200%+ average ROI"
    },
    {
      icon: <BrandingIcon />,
      title: "Branding & Promotion",
      description: "Build a brand that commands premium pricing. From visual identity to go-to-market campaigns, we create brands that customers remember and competitors envy.",
      metric: "Award-winning design"
    },
    {
      icon: <WebAppIcon />,
      title: "Web & App",
      description: "Digital products that drive revenue. We build lightning-fast, conversion-optimized websites and apps that turn visitors into customers and users into advocates.",
      metric: "99.9% uptime guarantee"
    },
    {
      icon: <EventIcon />,
      title: "Event & Activation",
      description: "Create buzz that translates to business. Our experiential campaigns generate press coverage, social virality, and qualified leads that close.",
      metric: "10M+ impressions generated"
    },
    {
      icon: <SoftwareManagementIcon />,
      title: "Software Management",
      description: "Keep your systems running flawlessly. Proactive monitoring, rapid updates, and enterprise-grade security ensure your digital infrastructure never becomes a liability.",
      metric: "24/7 expert support"
    }
  ]
}: ServicesSectionProps) =>  {
  return (
    <section className="bg-gradient-to-b from-[#f5f1e8] to-[#ebe5d9] py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            {/* Subtitle badge */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-0.5 bg-[#c73450]" />
              <span className="text-[#c73450]  font-medium">
                {subtitle}
              </span>
            </div>
            
            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-[#3e2723] text-2xl md:text-4xl font-semibold">
                {title}
              </h2>
              <h2 className="text-[#c73450] text-2xl md:text-4xl font-semibold">
                {highlightedWord}
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-[rgba(62,39,35,0.7)] text-[15.3px] leading-[29px]">
              {description}
            </p>
            
            {/* Stat Card */}
            <Card className="border-l-4 border-l-[#c73450] border-t-0 border-r-0 border-b-0 rounded-sm shadow-sm bg-white">
              <div className="p-6 space-y-2">
                <div className="text-[#3e2723] text-4xl font-bold">{stat.value}</div>
                <p className="text-[rgba(62,39,35,0.6)] text-xl ">
                  {stat.label}
                </p>
              </div>
            </Card>
          </div>
          
          {/* Right Column - Service Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                metric={service.metric}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
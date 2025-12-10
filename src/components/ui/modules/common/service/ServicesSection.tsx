import AnimatedSectionTitle from "../sectionTitle/AnimatedSectionTitle";
import { ServiceCard } from "./ServiceCard";
import { BrandingIcon, ContentDevelopmentIcon, DigitalMarketingIcon, EventActivationIcon, SoftwareManagementIcon, WebAppIcon } from "./ServiceIcons";

interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
    {
        id: "content-development",
        title: "Content Development",
        description: "Compelling content that tells your story",
        icon: ContentDevelopmentIcon,
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Data-driven strategies that deliver results",
        icon: DigitalMarketingIcon,
    },
    {
        id: "branding-promotion",
        title: "Branding & Promotion",
        description: "Build a brand that stands out",
        icon: BrandingIcon,
    },
    {
        id: "web-app",
        title: "Web & App",
        description: "Digital products that users love",
        icon: WebAppIcon,
    },
    {
        id: "event-activation",
        title: "Event & Activation",
        description: "Memorable experiences that engage",
        icon: EventActivationIcon,
    },
    {
        id: "software-management",
        title: "Software Management",
        description: "Technology solutions that scale",
        icon: SoftwareManagementIcon,
    },
];

export function ServicesSection() {
    return (

        <div className="min-h-screen w-full bg-white relative ">
            {/*  Diagonal Cross Grid Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
                    backgroundSize: "40px 40px",
                }}
            />
            <section className="w-full max-w-7xl mx-auto relative z-50 py-10">
                <div className="text-start ">
                    {/* heading */}
                    <AnimatedSectionTitle
                        title="Comprehensive Digital Services"
                        subtitle="At Social Verb, we provide comprehensive digital services, from social media marketing to web development"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0 ">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </section>
        </div>

    );
}
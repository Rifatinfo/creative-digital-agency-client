import TeamSection from "@/components/ui/modules/common/Team/TeamSection";
import { AboutSection } from "./_components/AboutSection";
import SocialVerbSection from "./_components/SocialVerbSection";
import ServicesSection from "./_components/service/ServicesSection";

const AboutPage = () => {
    return (
        <div>
            <AboutSection/>
            <TeamSection/>
            <SocialVerbSection/>
            <ServicesSection/>
        </div>
    );
};

export default AboutPage;
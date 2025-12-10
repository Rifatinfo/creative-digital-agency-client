import OurClients from "@/components/ui/modules/common/Clients/OurClients";
import Feature from "@/components/ui/modules/common/Feature/Feature";
import HeroSlider from "@/components/ui/modules/common/HeroSlider/HeroSlider";
import { HowWeWork } from "@/components/ui/modules/common/HowWork/HowWeWork";
import Portfolio from "@/components/ui/modules/common/Portfolio/Portfolio";
import { ServicesSection } from "@/components/ui/modules/common/service/ServicesSection";
import TeamSection from "@/components/ui/modules/common/Team/TeamSection";
import { TestimonialsSection } from "@/components/ui/modules/common/Testimonial/TestimonialsSection";
import Counting from "@/components/ui/modules/common/WorkCounting/Counting";

const HomePage = () => {
    return (
        <div>
            <HeroSlider/>
            <ServicesSection/>
            <HowWeWork/>
            <Counting/>
            <Portfolio/>
            <OurClients/>
            <Feature/>
            <TeamSection />
            <TestimonialsSection/>
        </div>
    );
};

export default HomePage;
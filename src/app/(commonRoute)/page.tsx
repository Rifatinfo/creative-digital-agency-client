import Blog from "@/components/ui/modules/common/Blog/Blog";
import OurClients from "@/components/ui/modules/common/Clients/OurClients";
import Feature from "@/components/ui/modules/common/Feature/Feature";
import Gallery from "@/components/ui/modules/common/Gallery/Gallery";
import HeroSlider from "@/components/ui/modules/common/HeroSlider/HeroSlider";
import { HowWeWork } from "@/components/ui/modules/common/HowWork/HowWeWork";
import { IndustriesSection } from "@/components/ui/modules/common/IndustriesServe/IndustriesSection";
import Portfolio from "@/components/ui/modules/common/Portfolio/Portfolio";
import { ServicesSection } from "@/components/ui/modules/common/service/ServicesSection";
import { TestimonialsSection } from "@/components/ui/modules/common/Testimonial/TestimonialsSection";
import Counting from "@/components/ui/modules/common/WorkCounting/Counting";

const HomePage = async () => {

    return (
        <div>
            <HeroSlider/>
            <ServicesSection/>
            <HowWeWork/>
            <Counting/>
            <Portfolio/>
            <OurClients/>
            <IndustriesSection/>
            <Feature/>
            <Gallery/>
            <TestimonialsSection/>
            <Blog/>
        </div>
    );
};

export default HomePage;
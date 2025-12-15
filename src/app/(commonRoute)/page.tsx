import Blog from "@/components/ui/modules/common/Blog/Blog";
import OurClients from "@/components/ui/modules/common/Clients/OurClients";
import ContactSection from "@/components/ui/modules/common/Contact/ContactSection";
import Feature from "@/components/ui/modules/common/Feature/Feature";
import Gallery from "@/components/ui/modules/common/Gallery/Gallery";
import GalleryTestimonial from "@/components/ui/modules/common/Gallery/GalleryTestimonial";
import HeroSlider from "@/components/ui/modules/common/HeroSlider/HeroSlider";
import { HowWeWork } from "@/components/ui/modules/common/HowWork/HowWeWork";
import { IndustriesSection } from "@/components/ui/modules/common/IndustriesServe/IndustriesSection";
import FeaturesSwiper from "@/components/ui/modules/common/LatestWork/FeaturesSwiper";
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
            <IndustriesSection/>
            {/* <FeaturesSwiper/> */}
            <Feature/>
            {/* <GalleryTestimonial/> */}
            <Gallery/>
            {/* <TeamSection /> */}
            <TestimonialsSection/>
            {/* <ContactSection/> */}
            <Blog/>
        </div>
    );
};

export default HomePage;
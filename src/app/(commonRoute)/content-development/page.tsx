import WithoutHomeNavbar from "@/components/shared/commonNavbar/WithoutHomeNavbar";
import { ApproachSection } from "./_component/Approach/ApproachSection";
import Banner from "./_component/Banner/Banner";
import { CapabilitiesSection } from "./_component/content/CapabilitiesSection";
import { FormatsSection } from "./_component/Diverse/FormatsSection";
import FAQSection from "./_component/FAQ/FAQSection";
import QualitySection from "./_component/Quality/QualitySection";
import { PricingTable } from "./_component/RateChart/PricingTable";

const ContentPage = () => {
    return (
        <div>
            <WithoutHomeNavbar/>
            <Banner/>
            <CapabilitiesSection/>
            <ApproachSection/>
            <FormatsSection/>
            <QualitySection/>
            <PricingTable/>
            <FAQSection/>
        </div>
    );
};

export default ContentPage;


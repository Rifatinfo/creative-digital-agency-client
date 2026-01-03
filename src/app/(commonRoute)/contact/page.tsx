import ContactSection from "@/components/ui/modules/common/Contact/ContactSection";
import { ContactPage } from "./_components/ContactPage";
import WithoutHomeNavbar from "@/components/shared/commonNavbar/WithoutHomeNavbar";

const ContactMainPage = () => {
    return (
        <div>
            <WithoutHomeNavbar/>
            <ContactPage/>
            <ContactSection/>
        </div>
    );
};

export default ContactMainPage;
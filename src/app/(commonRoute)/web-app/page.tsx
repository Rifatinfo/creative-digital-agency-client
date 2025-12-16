import WithoutHomeNavbar from "@/components/shared/commonNavbar/WithoutHomeNavbar";
import NoContentComponent from "@/components/shared/NoContent/NoContentComponent";

const WebPage = () => {
    return (
        <div>
            <WithoutHomeNavbar/>
            <NoContentComponent/>
        </div>
    );
};

export default WebPage;
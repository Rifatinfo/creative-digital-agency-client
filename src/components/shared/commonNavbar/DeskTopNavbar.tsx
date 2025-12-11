"use client";
import WhiteLogo from "@/components/ui/modules/common/Logo/WhiteLogo";
import Hamburger from "./Hamburger";

const DeskTopNavbar = () => {
    return (
        <div className="absolute top-0 left-0 w-full z-50  bg-transparent">
            <div className="flex items-center justify-between px-2 md:px-20">
                <WhiteLogo/>
                <Hamburger />
            </div>
        </div>
    );
};

export default DeskTopNavbar;
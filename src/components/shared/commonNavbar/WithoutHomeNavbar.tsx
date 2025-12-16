import Logo from "@/components/ui/modules/common/Logo/Logo";
import { ArrowLeft } from "lucide-react";
import Hamburger from "./Hamburger";
import Link from "next/link";

const WithoutHomeNavbar = () => {
    return (
        <div>
            <header className="bg-white border-b border-[#2C2C2C]/10 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 h-18 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <button

                                className="p-2 hover:bg-[#FAF9F6] rounded-full transition-colors text-[#2C2C2C]/60 hover:text-[#c73450]"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                        </Link>
                        <div className="text-xl font-serif font-bold tracking-tighter text-[#2C2C2C]">
                            <Logo />
                        </div>
                    </div>
                    <div className="text-sm uppercase tracking-widest text-[#2C2C2C]/40">
                        <Hamburger />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default WithoutHomeNavbar;
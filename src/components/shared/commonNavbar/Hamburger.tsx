import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Navbar from "./Navbar";
import Social from "@/components/ui/modules/common/HeroSlider/Social";
import Logo from "@/components/ui/modules/common/Logo/Logo";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GoArrowUpRight } from "react-icons/go";

const Hamburger = () => {
    return (
        <div>
            <div className="p-2">
                <Sheet>
                    <SheetTrigger asChild>
                        <AlignJustify className="cursor-pointer font-extrabold  text-white" />
                    </SheetTrigger>

                    <DialogHeader>
                        <VisuallyHidden>
                            <DialogTitle>Hidden Title</DialogTitle>
                        </VisuallyHidden>
                    </DialogHeader>

                    <SheetContent>
                        <div className="flex flex-col items-center justify-between h-full py-8 bg-gray-50">
                            <div className="flex flex-col items-center gap-y-20">
                                <Logo />
                                <Navbar containerStyles="flex flex-col item-center text-center gap-y-6"
                                    linkStyles="text-xl"
                                />
                                <div className="flex items-center text-center">
                                    <button className="text-center bg-[#c73450] hover:bg-[#a6293e] text-white font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                                       Let&lsquo;s Talk <span className="text-lg"><GoArrowUpRight /></span>
                                    </button>
                                </div>
                            </div>
                            <Social containerStyles="flex gap-x-4" iconsStyles="text-2xl text-[#c73450]" />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

export default Hamburger;

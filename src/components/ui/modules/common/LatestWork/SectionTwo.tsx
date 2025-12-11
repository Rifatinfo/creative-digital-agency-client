"use client";

import Image from "next/image";
import PlayButton from "../Portfolio/PlayButton";
import { GoArrowUpRight } from "react-icons/go";

const SectionTwo = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-between py-12 gap-8 md:gap-12">

            {/* RIGHT — TEXT & BUTTON */}
            <div className="w-full md:max-w-lg text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#C73450]">
                    Creative Promotion That Gets Attention
                </h2>

                <p className="mt-4 text-gray-700 text-base md:text-lg">
                    Our innovative promotional ideas help your brand reach more people, boost interaction, and increase conversion rates. We combine strategy, creativity, and digital tools to make your campaigns memorable and effective.
                </p>

                <p className="mt-2 text-gray-500 text-sm md:text-base">
                    From social media campaigns to digital marketing strategies, we ensure your brand stands out and engages the right audience.
                </p>

                {/* CTA BUTTON */}
                <div className="mt-6 flex justify-center md:justify-start">
                    <button className="text-center bg-[#c73450] hover:bg-[#a6293e] text-white font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                        Our Services <span className="text-lg"><GoArrowUpRight /></span>
                    </button>
                </div>
            </div>

            {/* LEFT — VIDEO THUMBNAIL */}
            <div className="relative cursor-pointer w-full max-w-full md:w-[480px] aspect-video group">

                <figure className="overflow-hidden rounded-2xl w-full h-full">
                    <Image
                        className="rounded-2xl object-cover transition-all duration-300 group-hover:brightness-75"
                        fill
                        src="https://i.ytimg.com/vi/2vbqO9xsRao/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDLIh1QFFTVKJFrhQttZn4X0sPI7A"
                        alt="Promotion Video"
                    />
                </figure>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <PlayButton />
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;

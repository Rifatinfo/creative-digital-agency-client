"use client";

import Image from "next/image";
import PlayButton from "../Portfolio/PlayButton";
import { GoArrowUpRight } from "react-icons/go";

const SectionOne = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-8 md:gap-12">

            {/* LEFT — TEXT & BUTTON */}
            <div className="w-full md:max-w-lg text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#C73450]">
                    Branding & Promotion That Drives Success
                </h2>

                <p className="mt-4 text-gray-700 text-base md:text-lg">
                    At <span className="font-semibold text-[#C73450]">Social Verb</span>, we create powerful brand identities and promotions that increase visibility, engagement, and conversions. Our team combines strategy, creativity, and innovation to make your brand stand out.
                </p>

                <p className="mt-2 text-gray-500 text-sm md:text-base">
                    We specialize in digital campaigns, social media growth, and audience-focused strategies to ensure your brand shines everywhere.
                </p>

                {/* CTA BUTTON */}
                <div className="mt-6 flex justify-center md:justify-start">
                    <button className="text-center bg-[#c73450] hover:bg-[#a6293e] text-white font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                        Our Services <span className="text-lg"><GoArrowUpRight /></span>
                    </button>
                </div>
            </div>

            {/* RIGHT — VIDEO THUMBNAIL */}
            <div className="relative cursor-pointer group w-full max-w-full md:w-[480px] aspect-video">

                <figure className="overflow-hidden rounded-2xl w-full h-full">
                    <Image
                        className="rounded-2xl object-cover transition-all duration-300 group-hover:brightness-75"
                        fill
                        src="https://i.ytimg.com/vi/2vbqO9xsRao/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDLIh1QFFTVKJFrhQttZn4X0sPI7A"
                        alt="Branding Video"
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

export default SectionOne;

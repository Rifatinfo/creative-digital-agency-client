import { Button } from "@/components/ui/button";
import svgPaths from "../../about/_components/svg-pj5qnqbmbd";

import Image from "next/image";

const features = [
    "Data-driven creative strategies",
    "Award-winning design implementation",
    "Full-stack technical excellence",
];

function CheckIcon() {
    return (
        <svg className="size-5 shrink-0" fill="none" viewBox="0 0 20 20">
            <g clipPath="url(#clip0_1_73)">
                <path
                    d={svgPaths.p14d24500}
                    stroke="#F97316"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
                <path
                    d={svgPaths.p3e012060}
                    stroke="#F97316"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_73">
                    <rect fill="white" height="20" width="20" />
                </clipPath>
            </defs>
        </svg>
    );
}

function DecorativeDots() {
    const dotRows = [
        [0, 1, 2, 3, 4],
        [0, 1, 2, 3, 4],
        [0, 1, 2, 3, 4],
        [0],
    ];

    return (
        <div className="absolute -left-6 bottom-8 flex flex-col gap-[14px]">
            {dotRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">
                    {row.map((dot) => (
                        <div key={dot} className="size-2 rounded-full bg-[#fed7aa]" />
                    ))}
                </div>
            ))}
        </div>
    );
}

export function AboutSection() {
    return (
        <div className="w-full py-24 px-8">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative h-[500px] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                            <Image
                                src="https://res.cloudinary.com/dgp5rqeqh/image/upload/v1764152089/WhatsApp_Image_2025-11-26_at_3.41.27_PM_pyl6ft.jpg"
                                alt="Team collaboration"
                                fill
                                className="object-cover"
                                priority
                            />

                            <div className="absolute inset-0 bg-[rgba(49,46,129,0.1)]" />
                        </div>
                        <DecorativeDots />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-[2px] bg-[#f97316]" />
                            <span className="text-[#ea580c] font-bold text-xs uppercase tracking-wide">
                                About Us
                            </span>
                        </div>

                        {/* Heading */}
                        <div>
                            <h2 className="text-[#0f172a] text-[40.8px] leading-[48px] font-bold">
                                Innovating at the speed of{" "}
                                <span className="text-[#4f46e5]">culture.</span>
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-4">
                            <p className="text-[#475569] text-[15.3px] leading-[29px]">
                                Credibly innovate granular internal or organic sources whereas
                                high standards in web-readiness. Energistically scale
                                future-proof core competencies vis-a-vis impactful experiences.
                            </p>
                            <p className="text-[#475569] text-[13.6px] leading-[26px]">
                                We don&rsquo;t just follow trends; we set them. Our team of
                                visionaries combines data-driven insights with unbridled
                                creativity to deliver results that matter.
                            </p>
                        </div>

                        {/* Features List */}
                        <ul className="flex flex-col gap-5">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="text-[#334155] font-medium text-[13.6px] leading-[24px]">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div className="mt-4">
                            <Button
                                size="lg"
                                className="bg-[#ea580c] hover:bg-[#ea580c]/90 text-white shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] px-8 h-12 rounded-lg font-semibold text-[13.6px]"
                            >
                                Learn More About Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

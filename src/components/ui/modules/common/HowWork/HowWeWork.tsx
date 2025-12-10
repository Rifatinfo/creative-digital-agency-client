import svgPaths from "../../common/HowWork/svg-v3ssspmqgd";
import { JSX } from "react";
import HowWeWorkCard from "./HowWeWorkCard";

interface Step {
    number: string;
    title: string;
    description: string;
    icon: JSX.Element;
}

export const steps: Step[] = [
    {
        number: "01",
        title: "Discovery",
        description: "We dive deep into your brand, audience, and goals to understand what makes you unique.",
        icon: (
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g>
                    <path d={svgPaths.p369d8300} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M12 24H20" stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M13.3333 29.3333H18.6667" stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
            </svg>
        ),
    },
    {
        number: "02",
        title: "Strategy",
        description: "We craft a data-driven strategy tailored to your objectives and market position.",
        icon: (
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g>
                    <path d={svgPaths.p1dee4500} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p1fa92f00} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p230c5e00} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
            </svg>
        ),
    },
    {
        number: "03",
        title: "Execution",
        description: "Our expert team brings the strategy to life with creative excellence and precision.",
        icon: (
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g>
                    <path d={svgPaths.p3ae45f00} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p1936bd80} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.pb9e700} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p2f8d9f80} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
            </svg>
        ),
    },
    {
        number: "04",
        title: "Optimization",
        description: "We continuously analyze and refine to maximize results and drive growth.",
        icon: (
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g>
                    <path d={svgPaths.p18cb7e80} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p26c56780} stroke="#C73450" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
            </svg>
        ),
    },
];



export function HowWeWork() {
    return (
        <div>
            <div className="min-h-screen w-full relative">
                {/* Dark Dot Matrix */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundColor: '#0a0a0a',
                        backgroundImage: `
           radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
           radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
         `,
                        backgroundSize: '10px 10px',
                        imageRendering: 'pixelated',
                    }}
                />
                <HowWeWorkCard
                />
            </div>
        </div>
        //     <div className="min-h-screen w-full bg-black relative">
        //         {/* Dark White Dotted Grid Background */}
        //         <div
        //             className="absolute inset-0 z-0"
        //             style={{
        //                 background: "#000000",
        //                 backgroundImage: `
        //     radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
        //   `,
        //                 backgroundSize: "30px 30px",
        //                 backgroundPosition: "0 0",
        //             }}
        //         />
        //         <HowWeWork />
        //     </div>
    );
}

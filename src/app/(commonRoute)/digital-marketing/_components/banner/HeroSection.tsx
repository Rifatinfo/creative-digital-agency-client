import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";
import Chart from "./Chart";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
    const chartData = [
        { day: "Mon", value: 10.391 },
        { day: "Tue", value: 106.391 },
        { day: "Wed", value: 115.188 },
        { day: "Thu", value: 204.797 },
        { day: "Fri", value: 140.797 },
        { day: "Sat", value: 230.391 }, // active
        { day: "Sun", value: 119.188 },
    ];

    const maxValue = Math.max(...chartData.map((d) => d.value));

    return (
        <section className="relative  bg-[#f8fafc] overflow-hidden">
            {/* Background shapes */}
            <div className="absolute left-[774px] top-0 w-[803px] h-[617px] bg-white -z-10" />
            <div className="absolute left-[1007px] top-[80px] size-[256px] rounded-full bg-[rgba(199,52,80,0.05)] blur-[32px] -z-10" />
            <div className="absolute left-[80px] top-[153px] size-[384px] rounded-full bg-[rgba(59,130,246,0.05)] blur-[32px] -z-10" />

            <div className="relative mx-auto max-w-[1280px] px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT CONTENT */}
                    <div className="md:space-y-8 space-y-4 pt-6">
                        <Badge className="bg-[#fef2f2] text-[#c73450] border-[#fee2e2] hover:bg-[#fef2f2] gap-2 py-2 px-3">
                            <span className="size-2 rounded-full bg-[#c73450]" />
                            <span className="text-[10px] font-medium">
                                Top Rated Digital Agency
                            </span>
                        </Badge>

                        <h1 className="md:text-[61px] text-4xl font-bold text-[#0f172a]">
                            We Turn{" "}
                            <span className="bg-gradient-to-r from-[#0f172a] to-[#94a3b8] bg-clip-text text-transparent">
                                Digital Traffic
                            </span>
                            <br />
                            Into Revenue.
                        </h1>

                        <p className="text-[15px] leading-[29px] text-[#475569] max-w-[520px]">
                            Stop guessing with your marketing budget. We build{" "}
                            <span className="font-medium">data-driven</span> campaigns that
                            target your ideal customers and deliver measurable ROI.
                        </p>
                        <div className="flex flex-col gap-4 md:flex-row md:items-center pt-4">
                            <div className="flex items-center text-center">
                                <button className="text-center bg-[#c73450] hover:bg-[#a6293e] text-white font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                                    Our Services <span className="text-lg"><GoArrowUpRight /></span>
                                </button>
                            </div>
                            <div className="flex items-center text-center">
                                <button className="bg-white hover:bg-gray-100 text-[#c73450] font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                                    Get a Quote <span className="text-lg"><GoArrowUpRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <Card className="border-[#f1f5f9] shadow-[0px_25px_50px_-12px_rgba(226,232,240,0.6)] rounded-2xl hidden md:block">
                        <CardHeader className="pb-4">
                            <div className="flex items-center justify-between">
                                <p className="text-[12px] font-medium text-[#64748b]">
                                    Total Revenue
                                </p>

                                <Badge className="bg-[#f0fdf4] text-[#16a34a] border-0 gap-1 px-3 py-1">
                                    <TrendingUp className="size-3" />
                                    <span className="text-[10px] font-medium">+24%</span>
                                </Badge>
                            </div>
                        </CardHeader>

                        <CardContent className="pb-8">
                            <div className="relative h-[240px]">
                                <Chart />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

import svgPaths from "../../_component/Banner/svg-e7eb2oxpmf";

const Banner = () => {
    return (
        <div>
            <div className="bg-white font-Inter">
                <section className="relative mx-auto max-w-7xl px-4">
                    {/* Main Content Container */}
                    <div className="grid grid-cols-1 md:gap-16 gap-4 lg:grid-cols-2">
                        {/* Left Column - Heading */}
                        <div className="space-y-4 sm:space-y-6 md:space-y-10">
                            <span className="block text-sm sm:text-base md:text-lg font-medium text-[#c73450]">
                                Service Offering
                            </span>

                            <h1 className="font-semibold">
                                <span className="block 
                                    text-4xl  md:text-6xl lg:text-[81.6px]
                                    leading-tight md:leading-[1.1] lg:leading-[96px]
                                    text-[#2c2c2c]"
                                >
                                    Content
                                </span>

                                <span className="block 
                                    text-4xl  md:text-6xl lg:text-[81.6px]
                                    leading-tight md:leading-[1.1] lg:leading-[96px]
                                    text-[#8b8680]"
                                >
                                    Development
                                </span>
                            </h1>
                        </div>


                        {/* Right Column - Description */}
                        <div className="flex flex-col justify-center space-y-12">
                            <p className="text-[14px] md:text-[20.4px]  text-[rgba(44,44,44,0.9)]">
                                We craft compelling narratives that resonate with your audience. From editorial strategy to granular execution, we elevate your brand&rsquo;s voice through precision and artistry.
                            </p>

                            {/* CTA Link */}
                            <button className="group flex w-fit items-center gap-4 leading-[20px] text-[#c73450] transition-all hover:gap-5">
                                <span>Explore Services</span>
                                <svg
                                    className="size-4"
                                    fill="none"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 3.33333V12.6667"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d={svgPaths.pc0e6f00}
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="mt-24 h-px w-full bg-[rgba(44,44,44,0.1)]" />
                </section>
            </div>
        </div>
    );
};

export default Banner;

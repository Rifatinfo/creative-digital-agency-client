"use client";

import { motion } from 'framer-motion'
import { GoArrowUpRight } from 'react-icons/go';
const steps = [
    {
        number: '01',
        title: 'Discovery & Audit',
        description:
            'We dive deep into your business, analyzing your current performance, competitors, and target audience to identify opportunities.',
    },
    {
        number: '02',
        title: 'Strategy Development',
        description:
            'We craft a tailored roadmap selecting the right channels and tactics to achieve your specific KPIs and business goals.',
    },
    {
        number: '03',
        title: 'Implementation',
        description:
            'Our experts execute the strategy with precision, launching campaigns and optimizing your digital assets for maximum impact.',
    },
    {
        number: '04',
        title: 'Optimization & Scale',
        description:
            'We continuously monitor performance, testing and refining to improve ROI and scale what works best.',
    },
]

const Process = () => {
    return (
        <div>
            <div className="bg-slate-50 relative overflow-hidden py-10 md: py-20">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-64 w-96 h-96 bg-slate-200 rounded-full opacity-20 blur-3xl" />
                    <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[#c73450] rounded-full opacity-5 blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#c73450] font-semibold tracking-wider uppercase text-sm mb-3 block">
                                Our Methodology
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                                A Proven Process for <br />
                                <span className="text-[#c73450]">Predictable Growth</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
                                Success isn&#39;t accidental. We follow a disciplined, data-backed
                                framework that eliminates guesswork and delivers consistent
                                results.
                            </p>
                            <div className="flex items-center text-center">
                                <button className="text-center bg-[#c73450] hover:bg-[#a6293e] text-white font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                                    Our Services <span className="text-lg"><GoArrowUpRight /></span>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="flex gap-6 group"
                                    initial={{
                                        opacity: 0,
                                        x: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-lg font-bold text-slate-400 group-hover:border-[#c73450] group-hover:text-[#c73450] group-hover:bg-red-50 transition-all duration-300 shadow-sm">
                                            {step.number}
                                        </div>
                                        {index !== steps.length - 1 && (
                                            <div className="w-px h-full bg-slate-200 mx-auto my-2 group-hover:bg-red-100 transition-colors" />
                                        )}
                                    </div>
                                    <div className="pb-8">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#c73450] transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
"use client";
import { motion } from "motion/react";
import { steps } from "./HowWeWork";
import AnimatedSectionTitle from "../sectionTitle/AnimatedSectionTitle";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
} as const;

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
} as const;

const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
        },
    },
} as const;
const HowWeWorkCard = () => {
    return (
        <div>
            <section className="relative min-h-screen  py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div>
                        <AnimatedSectionTitle
                            title="How We Work"
                            subtitle="Our proven process delivers exceptional results every time"
                            className="text-white
                        "
                        />
                    </div>
                    {/* Steps Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                className="relative group"
                            >
                                {/* Animated gradient line */}
                                <motion.div
                                    variants={lineVariants}
                                    className="absolute top-16 left-1/2 h-0.5 w-[70%] bg-gradient-to-r from-[#c73450] to-transparent origin-left"
                                    style={{ transform: "translateX(-50%)" }}
                                />

                                {/* Number */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-[#c73450] text-5xl opacity-20 mb-4"
                                >
                                    {step.number}
                                </motion.div>

                                {/* Icon Container */}
                                <motion.div
                                    variants={iconVariants}
                                    whileHover={{
                                        rotate: [0, -10, 10, -10, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                    className="bg-[rgba(199,52,80,0.1)] rounded-2xl size-16 p-4 mb-8 backdrop-blur-sm
                           group-hover:bg-[rgba(199,52,80,0.2)] transition-colors duration-300"
                                >
                                    <div className="size-8">
                                        {step.icon}
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                    className="mb-4 text-2xl text-[#c73450]"
                                >
                                    {step.title}
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                    className="leading-relaxed text-white"
                                >
                                    {step.description}
                                </motion.p>

                                {/* Hover gradient overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 to-transparent rounded-lg pointer-events-none"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Animated background elements */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-1/4 left-1/4 w-96 h-96  rounded-full blur-[120px] pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.1, 0.15, 0.1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96  rounded-full blur-[120px] pointer-events-none"
                    />
                </div>
            </section>
        </div>
    );
};

export default HowWeWorkCard;
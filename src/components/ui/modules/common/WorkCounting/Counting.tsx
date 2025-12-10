"use client"
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
    {
        id: 1,
        title: "Projects Completed",
        count: 1500,
        icon: "https://cdn-icons-png.flaticon.com/512/14459/14459243.png",
    },
    {
        id: 2,
        title: "Active Clients",
        count: 50,
        icon: "https://cdn-icons-png.flaticon.com/512/1388/1388863.png",
    },
    {
        id: 3,
        title: "Satisfied Clients",
        count: 50,
        icon: "https://cdn-icons-png.flaticon.com/512/1379/1379505.png",
    },
    {
        id: 4,
        title: "Expert Teams",
        count: 20,
        icon: "https://cdn-icons-png.flaticon.com/512/12520/12520951.png",
    },
];

export default function Counting() {
    return (
        <div>
            <motion.div
                className="max-w-7xl mx-auto md:mt-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            className="relative space-y-4 p-6 text-center bg-white rounded-2xl shadow-xl 
                      transition-all duration-300 hover:scale-105 
                      border border-gray-200 hover:border-[#C73450] hover:text-white"
                            whileHover={{ y: -5 }}
                        >
                            {/* Background Glow */}
                            <motion.div
                                className="absolute inset-0 bg-[#C73450] opacity-0 rounded-2xl transition-opacity"
                                whileHover={{ opacity: 0.1 }}
                            />

                            <Image height={64} width={64} className="mx-auto w-16 h-16" src={stat.icon} alt={stat.title} />

                            <h2 className="text-5xl font-extrabold text-[#C73450] group-hover:text-white">
                                <CountUp end={stat.count} duration={3} enableScrollSpy />
                            </h2>

                            <p className="text-xl font-semibold">{stat.title}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
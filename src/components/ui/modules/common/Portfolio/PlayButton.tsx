"use client"

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const PlayButton = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 0, 0, 0.7)" }} // Glowing shadow on hover
                whileTap={{ scale: 0.95 }} // Press effect
                className="relative flex items-center justify-center w-15 h-15 bg-[#C73450] rounded-full shadow-xl focus:outline-none transition-all  cursor-pointer"
            >
                {/* Soft Glowing Effect */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.7, 0.3], // Smooth fade effect
                        scale: [1, 1.15, 1], // Gentle pulsing effect
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 bg-[#C73450] rounded-full blur-md"
                />

                {/* Play Icon */}
                <Play className="relative z-10 text-white w-8 h-8" />
            </motion.button>
        </div>
    );
};

export default PlayButton;
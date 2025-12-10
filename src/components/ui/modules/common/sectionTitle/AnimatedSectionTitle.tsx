"use client";

import { motion } from "framer-motion";

interface AnimatedSectionTitleProps {
  title: string;
  subtitle?: string;
  borderColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

export default function AnimatedSectionTitle({
  title,
  subtitle,
  borderColor = "#c73450",
  gradientFrom = "#c73450",
  gradientTo = "#c73450",
  className = "",
}: AnimatedSectionTitleProps) {
  return (
    <section className={`md:py-[70px] md:mb-0 mb-16 ${className}`}>
      <div className="md:max-w-7xl md:mx-auto px-2 md:px-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`border-l-[5px] pl-5`}
          style={{ borderLeftColor: borderColor }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`text-2xl font-extrabold md:text-5xl lg:text-4xl bg-gradient-to-r text-transparent bg-clip-text`}
            style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-sm font-medium text-body-color dark:text-dark-6 mt-2"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

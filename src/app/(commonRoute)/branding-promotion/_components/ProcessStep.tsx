"use client";

import { motion } from 'framer-motion'
interface ProcessStepProps {
  number: string
  title: string
  description: string
  index: number
}
export function ProcessStep({
  number,
  title,
  description,
  index,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-t border-neutral-900 first:border-t-0"
    >
      <div className="flex-shrink-0">
        <span className="text-6xl md:text-8xl font-bold text-neutral-200 font-mono tracking-tighter leading-none">
          {number}
        </span>
      </div>

      <div className="flex flex-col pt-2 md:pt-4">
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-neutral-600 text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

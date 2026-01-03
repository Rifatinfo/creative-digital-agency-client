import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
interface ServiceCardProps {
  title: string
  description: string
  index: number
}
export function ServiceCard({ title, description, index }: ServiceCardProps) {
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
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group relative flex flex-col justify-between border-r border-b border-neutral-200 p-8 sm:p-10 bg-white hover:bg-[#c73450] transition-colors duration-300 cursor-pointer h-full"
    >
      <div className="flex justify-between items-start mb-8">
        <span className="text-sm font-mono font-bold text-neutral-400 group-hover:text-red-200 transition-colors">
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <ArrowUpRight className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
      </div>

      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 tracking-tight group-hover:text-white transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xs group-hover:text-red-100 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

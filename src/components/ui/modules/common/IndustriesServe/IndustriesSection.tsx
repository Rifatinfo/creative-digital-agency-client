"use client";

import { motion } from 'framer-motion'
import {
  Smartphone,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Utensils,
  Zap,
} from 'lucide-react'
import AnimatedSectionTitle from '../sectionTitle/AnimatedSectionTitle';
const industries = [
  {
    icon: Smartphone,
    name: 'Telecom',
    projects: '65+',
  },
  {
    icon: ShoppingBag,
    name: 'E-commerce',
    projects: '80+',
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    projects: '40+',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    projects: '60+',
  },
  {
    icon: Utensils,
    name: 'Food & Beverage',
    projects: '70+',
  },
  {
    icon: Zap,
    name: 'Electronics & Appliances',
    projects: '55+',
  }
]
export function IndustriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
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
          className="mb-16"
        >
          <AnimatedSectionTitle 
          title="Industries We Serve"
          subtitle=" Deep expertise across diverse sectors and markets"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="bg-gray-50 rounded-2xl md:p-6 p-4 text-center hover:bg-[#C73450]/5 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary/10 transition-colors">
                <industry.icon className="text-[#C73450] group-hover:bg-[#C73450]/5 transition-colors" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 text-[13px]  mb-1">{industry.name}</h3>
              <p className="text-sm text-gray-600">
                {industry.projects} Projects
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

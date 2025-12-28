"use client";

import React from 'react'
import {
  FileText,
  TrendingUp,
  Megaphone,
  Code,
  Calendar,
  Palette,
} from 'lucide-react'
import { motion } from 'framer-motion'
export type ServiceId =
  | 'content'
  | 'marketing'
  | 'branding'
  | 'web'
  | 'event'
  | 'creative'
interface Service {
  id: ServiceId
  name: string
  icon: React.ElementType
}
const services: Service[] = [
  {
    id: 'content',
    name: 'Content Development',
    icon: FileText,
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    icon: TrendingUp,
  },
  {
    id: 'branding',
    name: 'Branding & Promotion',
    icon: Megaphone,
  },
  {
    id: 'web',
    name: 'Web & App',
    icon: Code,
  },
  {
    id: 'event',
    name: 'Event & Activation',
    icon: Calendar,
  },
  {
    id: 'creative',
    name: 'Creative Production',
    icon: Palette,
  },
]
interface ServiceSelectorProps {
  selectedService: ServiceId
  onSelect: (id: ServiceId) => void
}
export function ServiceSelector({
  selectedService,
  onSelect,
}: ServiceSelectorProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-serif text-[#2C2C2C] mb-6">
        Select Service
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => {
          const isSelected = selectedService === service.id
          return (
            <motion.button
              key={service.id}
              onClick={() => onSelect(service.id)}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className={`flex flex-col items-center justify-center p-6 rounded-sm border transition-all duration-300 ${isSelected ? 'border-[#c73450] bg-[#c73450]/5' : 'border-[#2C2C2C]/10 bg-white hover:border-[#c73450]/30'}`}
            >
              <service.icon
                className={`w-8 h-8 mb-3 ${isSelected ? 'text-[#c73450]' : 'text-[#2C2C2C]/60'}`}
              />
              <span
                className={`text-sm font-medium text-center ${isSelected ? 'text-[#c73450]' : 'text-[#2C2C2C]'}`}
              >
                {service.name}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

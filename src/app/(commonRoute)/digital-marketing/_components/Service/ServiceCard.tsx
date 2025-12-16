"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Megaphone,
  Globe,
  PenTool,
  Mail,
  BarChart3,
} from "lucide-react";

const iconMap = {
  search: Search,
  megaphone: Megaphone,
  globe: Globe,
  pen: PenTool,
  mail: Mail,
  chart: BarChart3,
};

interface ServiceCardProps {
  service: {
    icon: keyof typeof iconMap;
    title: string;
    description: string;
    color: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#c73450]/30 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#c73450] transition-colors">
        {service.title}
      </h3>

      <p className="text-slate-600 leading-relaxed mb-6">
        {service.description}
      </p>

      <a className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-[#c73450] transition-colors">
        Learn more
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#c73450] to-[#ff6b81] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </motion.div>
  );
};

export default ServiceCard;

"use client";
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center hover:bg-[#C73450]/5 hover:shadow-lg transition-all group rounded-2xl p-6">
      {/* Icon Container */}
      <div className="mb-6 rounded-2xl bg-[#C73450]/10 p-5 w-20 h-20 flex items-center justify-center">
        <Icon className="w-9 h-9 text-[#C73450] group-hover:bg-[#C73450]/5 transition-colors" strokeWidth={2} />
      </div>
      
      {/* Title */}
      <h3 className="mb-3 font-bold text-[#C73450] text-xl">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}

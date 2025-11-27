import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function ServiceCard({ title, icon: Icon }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer font-space-grotesk">
      <div className="mb-8">
        <Icon className="w-20 h-20" />
      </div>

      <h3 className="text-gray-900 mb-3 text-xl font-bold">{title}</h3>

      {/* <p className="text-gray-600 text-sm mb-6">{description}</p> */}

      <button className="inline-flex items-center gap-2 text-[#c73450] text-sm group-hover:gap-3 transition-all duration-300">
        <span>See More</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
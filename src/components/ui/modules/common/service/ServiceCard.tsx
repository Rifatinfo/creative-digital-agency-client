"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  id: string;
}

export function ServiceCard({ title, icon: Icon, id }: ServiceCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${id}`); 
  };

  return (
    <div 
    onClick={handleClick}
    className="text-[#C73450]
    bg-white
    border border-gray-100
    rounded-2xl
    p-8
    cursor-pointer
    font-space-grotesk
    transition-all duration-300
    hover:bg-[#C73450]/5
    hover:shadow-lg">
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


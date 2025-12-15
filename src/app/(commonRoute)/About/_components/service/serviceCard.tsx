import { Card } from "@/components/ui/card";
import { ServiceIcon } from "./Icon";
import { ServiceCardProps } from "./ServicesSection";

const  ServiceCard = ({ icon, title, description }: ServiceCardProps) =>  {
  return (
    <Card className="relative overflow-hidden border-[rgba(62,39,35,0.05)] bg-white rounded-sm shadow-sm">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-[100px] h-1 bg-[#c73450]"/>
      
      <div className="p-8 space-y-6">
        <ServiceIcon>{icon}</ServiceIcon>
        
        <div className="space-y-4">
          <h3 className="text-xl text-[#c73450] font-semibold">{title}</h3>
          <p className="text-[rgba(62,39,35,0.7)] leading-[22px]">
            {description}
          </p>
        </div>
        
        <div className="flex items-center gap-2 pt-2">
          <div className="w-4 h-px bg-[#c73450]" />
          <span className="text-[#c73450] underline font-medium leading-4">
            See More
          </span>
        </div>
      </div>
    </Card>
  );
}

export default ServiceCard;
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

export function BlogCard({ image, category, date, title, description }: BlogCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
      <div className="relative h-[216px] overflow-hidden">
        <Image 
          fill
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <Badge 
            variant="secondary" 
            className="bg-[rgba(199,52,80,0.1)] text-[#c73450] border-transparent hover:bg-[rgba(199,52,80,0.15)]"
          >
            {category}
          </Badge>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-xs">{date}</span>
          </div>
        </div>
        <h3 className="mb-3 text-gray-900 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <button className="flex items-center gap-2 text-[#c73450] hover:gap-3 transition-all group/button">
          <span className="font-semibold text-sm">Read More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
        </button>
      </CardFooter>
    </Card>
  );
}

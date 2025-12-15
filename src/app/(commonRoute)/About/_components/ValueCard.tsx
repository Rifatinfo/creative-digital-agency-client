import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ReactNode } from 'react';

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const  ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <Card className="border-t-4 border-t-[#c73450] border-x-0 border-b-0 rounded-sm shadow-sm">
      <CardHeader className="space-y-0 pb-4">
        <div className="bg-[#f5f1e8] rounded-full w-[52px] h-[52px] flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-[#3e2723]">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[rgba(62,39,35,0.7)] leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default ValueCard;
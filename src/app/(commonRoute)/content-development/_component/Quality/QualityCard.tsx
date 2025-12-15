import { Card, CardContent } from "@/components/ui/card";

interface QualityCardProps {
  number: string;
  title: string;
  description: string;
}

const  QualityCard = ({ number, title, description }: QualityCardProps) => {
  return (
    <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-8">
        <div className="space-y-4">
          <span className="text-4xl font-bold text-[#c73450]/20">
            {number}
          </span>
          <h3 className="text-xl text-[#2c2c2c]">
            {title}
          </h3>
          <p className="text-sm text-[#2c2c2c]/70 leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default QualityCard;
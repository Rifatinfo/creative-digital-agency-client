import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface FormatCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function FormatCard({ icon, title, description }: FormatCardProps) {
    return (
        <div>
            <Card
                className="
                    bg-[#faf9f6] rounded-none border-0
                    border-r border-b border-[#e5e2dc]
                    
                    /* remove right border at row end */
                    md:[&:nth-child(2n)]:border-r-0
                    lg:[&:nth-child(3n)]:border-r-0

                    /* remove bottom border for last row */
                    md:[&:nth-last-child(-n+2)]:border-b-0
                    lg:[&:nth-last-child(-n+3)]:border-b-0

                    hover:bg-white transition-colors duration-300
                    "
            >
                <CardHeader className="space-y-6">
                    <div className="size-8 text-[#2c2c2c]">
                        {icon}
                    </div>

                    <CardTitle className="text-[#2c2c2c]">
                        {title}
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <CardDescription className="text-[rgba(44,44,44,0.7)]">
                        {description}
                    </CardDescription>
                </CardContent>
            </Card>

        </div>
    );
}
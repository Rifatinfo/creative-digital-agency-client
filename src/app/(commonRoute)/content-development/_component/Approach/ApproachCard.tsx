import { LucideIcon } from "lucide-react";

interface ApproachCardProps {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export function ApproachCard({ number, title, description, icon: Icon }: ApproachCardProps) {
    return (
        <div>
            <div className="relative flex flex-col">
                {/* Large background number */}
                <div className="absolute -top-12 left-0 select-none opacity-5">
                    <span className="text-[96px] leading-[96px] font-bold">{number}</span>
                </div>

                {/* Icon container */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#c73450]/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#c73450]" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl leading-8 text-[#2c2c2c]">{title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#2c2c2c]/70">{description}</p>

                {/* Divider */}
                <div className="mt-8 h-px bg-[#2c2c2c]/10" />
            </div>
        </div>
    );
}

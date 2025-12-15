interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <div className="group  transition-all duration-300">
            <div className="p-6 text-[#C73450] group-hover:bg-[#C73450]/5 transition-colors duration-300">
                <div className="flex flex-col gap-4">
                    <div className="size-8 group-hover:text-[#C73450] transition-colors">
                        {icon}
                    </div>

                    <h3 className="text-[#2c2c2c] text-xl group-hover:text-[#C73450] transition-colors">
                        {title}
                    </h3>

                    <p className="text-[rgba(44,44,44,0.7)] group-hover:text-[#2c2c2c] transition-colors">
                        {description}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default FeatureCard;
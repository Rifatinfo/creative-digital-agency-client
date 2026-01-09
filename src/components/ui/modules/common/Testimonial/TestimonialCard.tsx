import Image from "next/image";
import svgPaths from "../../common/Testimonial/svg-qxkdnubhmb";
interface TestimonialCardProps {
    testimonial: {
        quote: string;
        author: {
            name: string;
            title: string;
            image: string;
        };
        rating: number;
    };
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div>
            <div className="
                    relative 
                    bg-gray-100 
                    rounded-2xl 
                    p-6 
                    md:p-8 
                    hover:shadow-lg 
                    transition-shadow 
                    duration-300
                    ">

                {/* Quote Icon */}
                <div className="absolute right-4 top-4 md:right-8 md:top-6 opacity-20">
                    <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 48 48">
                        <g>
                            <path
                                d={svgPaths.p2836b900}
                                stroke="#c73450"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d={svgPaths.p2347a280}
                                stroke="#c73450"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </g>
                    </svg>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 20 20">
                            <path
                                d={svgPaths.pa6d0980}
                                stroke="#c73450"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 md:mb-8 min-h-[90px] md:min-h-[104px]">
                    <p className="leading-relaxed text-sm md:text-base">
                        &quot;{testimonial.quote}&quot;
                    </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 md:gap-4">
                    <Image
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={56}
                        height={56}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                    />
                    <div>
                        <div className="text-gray-900 text-sm md:text-base">
                            {testimonial.author.name}
                        </div>
                        <div className="text-gray-600 text-xs md:text-sm">
                            {testimonial.author.title}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

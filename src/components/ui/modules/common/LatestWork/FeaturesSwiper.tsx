"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
import { sections } from "./Sections";
import AnimatedSectionTitle from "../sectionTitle/AnimatedSectionTitle";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function FeaturesSwiper() {
    return (
        <div className="container mx-auto">
            <div className="mb-12">
                <AnimatedSectionTitle
                    title="Our Latest Work"
                    subtitle="A showcase of our creative projects and impactful campaigns"
                />
            </div>
            <div className="hidden md:block">
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={{ releaseOnEdges: true, sensitivity: 1 }}
                    pagination={{ clickable: true }}
                    modules={[Mousewheel, Pagination]}
                    className="h-screen w-full"
                >
                    {sections.map((s) => (
                        <SwiperSlide
                            key={s.id}
                            className="flex items-center justify-center w-full h-screen"
                        >
                            {s.content}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="md:hidden">
                <SectionOne/>
                <SectionTwo/>
            </div>
        </div>
    );
}

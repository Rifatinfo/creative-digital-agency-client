"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaPlay} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import DeskTopNavbar from "@/components/shared/commonNavbar/DeskTopNavbar";

const HeroSlider = () => {
    const sliders = [
        { id: 1, image: 'https://res.cloudinary.com/dhedazc1w/image/upload/v1767457284/new_szubvg.jpg', text: 'Dive into what you love' },
        { id: 2, image: 'https://res.cloudinary.com/dhedazc1w/image/upload/v1767457054/1_t2thbp.webp', text: 'Feel the drive' },
        
    ]
    return (
        <div>
            <div className="relative w-full h-screen">
                <DeskTopNavbar/>
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    navigation={false}
                    className="mySwiper h-full custom-swiper"
                >
                    {sliders.map((slide, idx) => <SwiperSlide key={idx}>
                        <div className="w-full  h-screen bg-cover bg-center flex items-center justify-start md:px-20 "
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/70 z-0"></div>
                             
                            {/* text and button section  */}
                            <div className="relative z-10 space-y-4 p-2 md:p-0">
                                <p className="text-sm tracking-widest text-[#c73450] font-semibold">* CREATIVE AGENCY</p>
                                <h1 className="text-4xl md:text-8xl font-semibold text-white">Innovate <br /> with Impact </h1>
                                <p className="text-lg text-white/90">
                                    Digital Marketing | 3D Animation | Branding
                                    <span className="text-[#c73450] font-bold ml-2">Let&apos;s Build Together</span>
                                </p>

                                <div className="flex flex-col gap-4 md:flex-row md:items-center pt-4">
                                    <div className="flex items-center text-center">
                                        <button className="text-center bg-[#c73450] hover:bg-[#a6293e] text-white font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                                            Our Services <span className="text-lg"><GoArrowUpRight /></span>
                                        </button>
                                    </div>
                                    <div className="flex items-center text-center">
                                        <button className="bg-white hover:bg-gray-100 text-[#c73450] font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                                            Get a Quote <span className="text-lg"><GoArrowUpRight /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 transition-all duration-300 hover:scale-110">
                                <button >
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#c73450] flex items-center justify-center shadow-lg">
                                        <FaPlay className="text-white text-2xl md:text-3xl ml-1" />
                                        {/* <PlayButton/> */}
                                    </div>
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default HeroSlider;
"use client";

import Image from "next/image";
import { useState } from "react";
import {  FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AnimatedSectionTitle from "../sectionTitle/AnimatedSectionTitle";

const GalleryTestimonial = () => {
    const testimonials = [

        {
            name: "Somalia D. Silva",
            brand: "Walton Air Conditioner",
            image:
                "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457667/WhatsApp_Image_2025-12-11_at_6.51.07_PM_mbp9do.jpg ",
            image_1:
                "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457666/WhatsApp_Image_2025-12-11_at_6.51.08_PM_2_oyght4.jpg",
            image_2:
                "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457667/WhatsApp_Image_2025-12-11_at_6.51.08_PM_1_gmy9qo.jpg",
            image_3:
                "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457667/WhatsApp_Image_2025-12-11_at_6.51.08_PM_djxpxn.jpg",
            rating: 4,
            text: "In moments of struggle, we discover our true strength. Every challenge brings us closer, united with a shared purpose — to create comfort, confidence, and resilience for every home. At Walton Air Conditioner, we believe that standing together makes us unstoppable",
            text_2:
                "When voices are unheard, we amplify them. When situations get tough, we cool the tension and bring comfort. Because together, we rise — stronger, louder, and more determined.",
            photo: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352359/Walton_13_cr5xxl.png",
        },
        {
            name: "James A. Carter",
            brand: "Oppo",
             image:
                " https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457671/WhatsApp_Image_2025-12-11_at_6.51.07_PM_1_zemobc.jpg",
            image_1:
                "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457667/WhatsApp_Image_2025-12-11_at_6.51.07_PM_2_gvr8gi.jpg",
            image_2:
                "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457665/WhatsApp_Image_2025-12-11_at_6.51.09_PM_1_jpnero.jpg",
            image_3:
                "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765457651/WhatsApp_Image_2025-12-11_at_6.51.09_PM_2_ua1peg.jpg",
            rating: 5,
            text: "Volunteering through Risehand has truly been a life-changing journey...",
            text_2:
                "Every act of kindness and solidarity makes a difference. I am honored to be part of a movement that fuels hope and change.",
            photo: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352359/Walton_13_cr5xxl.png",
        }
    ];

    const [index, setIndex] = useState(0);

    const nextTestimonial = () =>
        setIndex((prev) => (prev + 1) % testimonials.length);

    const prevTestimonial = () =>
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const t = testimonials[index];

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 my-16">
            <AnimatedSectionTitle
                title="Our Gallery and Encourage Field"
                subtitle="Let's start our work"
            />

            <div className="flex flex-col md:flex-row md:justify-between items-center gap-12 md:gap-20">
                {/* LEFT SIDE — TEXT */}
                <div className="w-full md:w-1/2">
                    <p className="text-2xl font-semibold mt-4">{t.text}</p>

                    <p className="text-gray-600 mt-4">{t.text_2}</p>

                    {/* Person Info */}
                    <div className="flex items-center gap-4 mt-6">
                         {/* <div className="relative">
                            <Image
                                src={t.photo}
                                alt={t.name}
                                fill
                                className="rounded-full border-2 bg-[#c73450] object-cover"
                            /> 
                        </div>  */}

                        <div>
                            <p className="font-semibold">{t.brand}</p>
                            {/* <p className="text-gray-600 text-sm">{t.brand}</p> */}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE — IMAGE */}
                {/* <div className="w-full md:w-1/2 relative flex justify-end items-center">
                    <div className="w-full h-64 md:w-96 md:h-96 overflow-hidden relative">
                        <Image
                            src={t.photo}
                            alt="testimonial image"
                            fill
                            className="object-cover mx-auto"
                        />

                        <div className="absolute top-4 right-4 bg-[#c73450] text-white p-3 rounded-full">
                            <FaQuoteLeft className="text-xl" />
                        </div>
                    </div>
                </div> */}
                <div className="w-full md:w-1/2 flex justify-end items-center">
                    <div className="grid grid-cols-2 gap-4 w-full md:w-[500px]">

                        <div className="relative h-64 rounded-xl overflow-hidden">
                            <Image fill src={t.image} alt="" className="object-cover" />
                        </div>

                        <div className="relative h-48 rounded-xl overflow-hidden">
                            <Image fill src={t.image_1} alt="" className="object-cover" />
                        </div>

                        <div className="relative h-48 rounded-xl overflow-hidden">
                            <Image fill src={t.image_2} alt="" className="object-cover" />
                        </div>

                        <div className="relative h-64 rounded-xl overflow-hidden">
                            <Image fill src={t.image_3} alt="" className="object-cover" />
                        </div>

                    </div>
                </div>



            </div>

            {/* BUTTONS */}
            <div className="flex justify-center gap-2 mt-8">
                <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-[#c73450] text-white"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-[#c73450] text-white"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default GalleryTestimonial;



'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { TestimonialCard } from './TestimonialCard';
import AnimatedSectionTitle from '../sectionTitle/AnimatedSectionTitle';

interface Testimonial {
  id: number;
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Social Verb transformed our digital presence completely. Their strategic approach and creative execution exceeded all expectations.",
    author: {
      name: "Jennifer Martinez",
      title: "CEO, TechStart Inc",
      image:
        "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365355/466599589_122168010584094835_80784436616788253_n_vlgoqa.jpg",
    },
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Working with Social Verb has been a game-changer. Their team is professional, creative, and delivers results consistently.",
    author: {
      name: "Robert Thompson",
      title: "Marketing Director, GlobalCorp",
      image:
        "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765365460/pp_m3yrav.jpg",
    },
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The best agency we've worked with. They truly understand our brand and consistently deliver exceptional work.",
    author: {
      name: "Amanda Lee",
      title: "Founder, Creative Studio",
      image:
        "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1760516348/file-1760516342093-505522654.jpg",
    },
    rating: 5,
  },
];

export function TestimonialsSection() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full py-16 px-4 md:py-24 md:mb-20 mb-10">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div> */}
        <AnimatedSectionTitle
        title="Client Testimonials"
        subtitle="Don&apos;t just take our word for it - hear from our satisfied clientsv"
        />

        <div className="relative md:px-12">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#c73450] shadow-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8  md:w-10 md:h-10 rounded-full bg-[#c73450] shadow-lg hover:bg-gray-50 flex items-center justify-center transition-colors text-white"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

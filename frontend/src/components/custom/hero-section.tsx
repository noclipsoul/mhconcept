"use client";
import Link from "next/link";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { StrapiImage } from "@/components/custom/StrapiImage";


interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

interface Link {
  id: number;
  url: string;
  text: string;
}

interface HeroSectionProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subHeading: string;
  smalltext: string;
  image: Image[];
  link: Link;

}
export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading,smalltext, image, link } = data;
  console.log(smalltext+"a")
  return (

    <header className="relative h-screen overflow-hidden">
      {/* Swiper Container */}
      <Swiper
        spaceBetween={0} // No space between slides
        slidesPerView={1} // Show one slide at a time
        loop={true} // Loop through the images
        modules={[Autoplay]}
        autoplay={{
          delay: 5000, // Duration of each slide in milliseconds
          disableOnInteraction: false, // Allow user interaction without stopping autoplay
        }}
        className="absolute inset-0 w-full h-full"
      >
        {image.map((img) => (
          <SwiperSlide key={img.id} className="w-full h-full">
            <StrapiImage
              alt={img.alternativeText ?? "no alternative text"}
              className="absolute inset-0 object-cover w-full h-full"
              height={1080}
              src={img.url}
              width={1920}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-40">
        <div className="pb-3">{smalltext} </div>
        <a className="text-4xl font-bold md:text-5xl lg:text-6xl">{heading}</a>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">{subHeading}</p>
        <a href="#Projets" className="top-auto mt-10 py-4 bottom-auto bg-transparent  hover:bg-white hover:text-black opacity-70 rounded border"><span className=" px-10">{link.text}</span></a>
      </div>
    </header>
  );
}
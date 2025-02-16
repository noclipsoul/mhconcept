"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { StrapiImage } from "@/components/custom/StrapiImage";

interface imgs {
  documentId: string;
  url: string;
  alternativeText: string | null;
  onClick?: (() => void) | null;
}

interface Reference {
  id: number;
  title: string;
  logo: imgs;
}

interface ReferencesProps {
  id: number;
  __component: string;
  titre: string;
  reference: Reference[];
}

export function Reference({ data }: { readonly data: ReferencesProps }) {
  const { titre, reference } = data;

  return (
    <section className=" mx-auto text-center">
      <h4 className="text-4xl font-sans font-semibold mt-10 mb-10 text-black md:text-5xl">
        Nos References
      </h4>
      <div className="mb-10 ml-4">
      <Swiper
  className="container"
  spaceBetween={17}
  slidesPerView={1}
  autoplay={{ delay: 1500, disableOnInteraction: false }}
  modules={[Autoplay]}
  breakpoints={{
    640: { slidesPerView: 2 }, // Small screens (up to 640px) will have 2 slides per view
    768: { slidesPerView: 3 }, // Medium screens (up to 768px) will also have 2 slides per view
    1024: { slidesPerView: 4 }, // Large screens (up to 1024px) will have 4 slides per view
    1280: { slidesPerView: 4 }, // Extra large screens will also have 4 slides per view
  }}
>
  {reference.map((refer) => (
    <SwiperSlide key={refer.id}>
      <div className="flex flex-col items-center p-4 bg-white">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <StrapiImage
            alt={refer.logo.alternativeText ?? "no alternative text"}
            className="h-20 mb-4 object-contain"
            height={1080}
            src={refer.logo.url}
            width={1920}
          />
          <h3 className="text-lg font-semibold text-gray-800">
            {refer.title}
          </h3>
        </a>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
}

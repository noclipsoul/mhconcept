"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselItem } from "@/components/ui/carousel";

interface Partner {
  id: number;
  name: string;
  url: string;
  logourl: string;
}

interface PartnershipProps {
  id: number;
  __component: string;
  partners: Partner[];
}

export function Partner({ data }: { readonly data: PartnershipProps }) {
  const { partners } = data;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === partners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [partners.length]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Partners
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex-shrink-0 w-full px-4"
                style={{ minWidth: "100%" }}
              >
                <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <img
                      src={partner.logourl}
                      alt={partner.name}
                      className="h-20 mb-4 object-contain"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">
                      {partner.name}
                    </h3>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

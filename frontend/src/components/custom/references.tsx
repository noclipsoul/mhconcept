"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import {StrapiImage} from "@/components/custom/StrapiImage";
interface imgs{
  documentId: string;
  url: string;
  
  alternativeText: string | null;
  onClick?: (() => void) | null; // Corrected null probability handling
}

interface Reference {
  id: number;
  title: string;

  logo:imgs;
}

interface ReferencesProps {
  id: number;
  __component: string;
  titre: string;
  reference: Reference[];
}

export function Reference({ data }: { readonly data: ReferencesProps }) {
  const { titre,reference } = data;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reference.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [reference.length]);

  return (
    <section className="">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center text-gray-800 ">
      {titre}
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {reference.map((refer) => ( 
              <div
                key={refer.id}
                className="flex-shrink-0 w-full px-4"
                style={{ minWidth: "100%" }}
              >
                <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
               
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

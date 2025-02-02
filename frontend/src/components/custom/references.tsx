"use client";

import { useState, useEffect } from "react";
import { StrapiImage } from "@/components/custom/StrapiImage";

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
  const { titre, reference } = data;
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4; // Number of visible images

  const totalItems = reference.length;

  const handleNext = () => {
      setStartIndex((prev) => Math.min(prev + 1, totalItems - visibleCount));
  };

  const handlePrev = () => {
      setStartIndex((prev) => Math.max(prev - 1, 0));
  };


  return (
    <section className="container mx-auto text-center">
  
      <h4 className="text-4xl font-bold mt-10 mb-10 text-black md:text-5xl">Nos References</h4>
  
        <div className=" container relative"> {/* Added relative here */}

          <div className="flex overflow-x-auto scroll-smooth"> {/* Use overflow-x-auto for horizontal scrolling */}
            {reference.slice(startIndex, startIndex + visibleCount).map((refer) => (
              <div
                key={refer.id}
                className="flex-shrink-0 w-1/4 px-4" // Adjust width as needed (1/4 for 4 images)
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
                      height={1080} // Consider setting more realistic height/width
                      src={refer.logo.url}
                      width={1920} // Consider setting more realistic height/width
                    />
                    <h3 className="text-lg font-semibold text-gray-800">
                      {refer.title}
                    </h3>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
            <button onClick={handlePrev} disabled={startIndex === 0} className="p-2 bg-gray-200 rounded-full">&lt;</button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <button onClick={handleNext} disabled={startIndex >= totalItems - visibleCount} className="p-2 bg-gray-200 rounded-full">&gt;</button>
          </div>
        </div>
    
    </section>
  );
}
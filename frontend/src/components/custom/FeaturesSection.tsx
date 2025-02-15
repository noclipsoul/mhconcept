"use client";
import { useState, useRef } from "react";

import { StrapiImage } from "@/components/custom/StrapiImage";
import swiper from "swiper"
interface StrapiImage {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  onClick?: (() => void) | null; // Corrected null probability handling
}

interface Features {
  id: number;
  heading: string;
  subHeading: string;
  icon: { // Changed iconn to a more descriptive type
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
  };
  description:string;
}

interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

interface FeaturesSectionProps {
  id: number;
  documentId: string;
  __component: string;
  title: string;
  description: string;
  feature: Features[];
  bgFeatureimage: Image;
}

export function FeatureSection({ data }: { readonly data: FeaturesSectionProps }) {
  const {  bgFeatureimage, feature } = data;
  const [selectedFeat, setSelectedProject] = useState<Features | null>(null);
const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (feature: Features) => {
    setSelectedProject(feature);
   
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  const closeDialog = () => {
    setSelectedProject(null);
  
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };
  return (
    <header className="relative  font-sans" id="services">
      <div className="absolute inset-0 z-0">
        <StrapiImage
          className="w-full h-full object-cover" // Use object-cover for background image
          src={bgFeatureimage.url}
          alt={bgFeatureimage.alternativeText ?? "no alternative text"}
          width={1900}
          height={1900}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative  max-w-full mx-auto px-4 py-16 sm:py-24 lg:py-32"> {/* Responsive padding */}
        <div className="space-y-16">
          <div className="text-center lg:text-left"> {/* Center text on smaller screens */}
            <h2 className="text-sm uppercase tracking-wider text-white mb-4">
              SERVICES
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white"> {/* Responsive font size */}
              Que pouvons-nous offrir.
            </h1>
          </div>

          <div className=" md:w-full w-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"> {/* Responsive grid */}
            {feature.map((featureItem) => ( // Renamed feature to featureItem to avoid naming conflict
              <div key={featureItem.id} className="bg-white rounded-[10%]  bg-opacity-60 p-2  flex flex-col items-center text-center space-y-5  shadow-md"> {/* Added rounded corners and shadow */}
                <div className="w-16 h-16 sm:w-20 sm:h-20"> {/* Responsive icon size */}
                  <StrapiImage
                    src={featureItem.icon.url}
                    alt={featureItem.icon.alternativeText ?? "no alternative text"}
                    width={80}
                    height={80}
                    className="object-contain" // Added object-contain for icon images
                  />
                </div>
                <button onClick={() => openDialog(featureItem)}>
                <h3 className="text-xl font-sans font-semibold"> {/* Responsive heading size */}
                  {featureItem.heading}
                </h3>
                <div className="absolute inset-0 rounded-[10%] bg-black bg-opacity-60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {featureItem.heading}
                  </div>
                </button>
                <p className="text-gray-600 font-sans">
                  {featureItem.subHeading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <dialog ref={dialogRef} className="w-full h-fit ">
        {selectedFeat && (
          <div className="lg:py-70 xl:py-80 md:p-50 sm:py-30 py-80 "> {/* Add padding to the dialog content */}
           
              <div className="container text-center">
                
                <p className="text-center font-sans tracking-tight md:mt-18 text-gray-900 dark:text-white">
                  {selectedFeat.description}
                </p>
                
                
              </div>
          
            <button onClick={closeDialog} className="absolute top-4 right-4">
              X
            </button>
          </div>
        )}
      </dialog>
    </header>
  );
}
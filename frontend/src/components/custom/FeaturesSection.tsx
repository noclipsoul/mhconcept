"use client";
import { useState, useRef } from "react";

import { StrapiImage } from "@/components/custom/StrapiImage";

interface StrapiImage {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  onClick?: (() => void) | null;
}

interface Features {
  id: number;
  heading: string;
  subHeading: string;
  icon: {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
  };
  description: string;
  rounedimage: Image;
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
  const { bgFeatureimage, feature } = data;
  const [selectedFeat, setSelectedFeat] = useState<Features | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (feature: Features) => {
    setSelectedFeat(feature);

    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  const closeDialog = () => {
    setSelectedFeat(null);

    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <header className="relative pt-24 font-sans" id="services">
      <div className="  ">
        {/* Grid Section */}
        <div className="relative max-w-full  pt-10 px-7 sm:py-24 lg:py-32">
          <div className="space-y-16">
            <div className="text-center text-black md:text-white lg:text-left">
              <h2 className="text-sm uppercase tracking-wider text-black md:text-white mb-4">SERVICES</h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light  text-black md:text-white">
                Que pouvons-nous offrir.
              </h1>
            </div>

            <div className="md:w-full w-auto grid px-0 py-0 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 relative z-10">
              {feature.map((featureItem) => (
                <button
                  key={featureItem.id}
                  onClick={() => openDialog(featureItem)} className="bg-white rounded-[10%]  shadow-2xl transition-shadow duration-300  p-2 flex flex-col items-center text-center space-y-5 "
                >
              
                    <div className="w-16 h-16 sm:w-20 sm:h-20">
                      <StrapiImage
                        src={featureItem.icon.url}
                        alt={featureItem.icon.alternativeText ?? "no alternative text"}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div className="container text-">
                    <h3 className="text-xl font-sans font-semibold">{featureItem.heading}</h3>
                    <p className="text-gray-600 font-sans pb-3">{featureItem.subHeading}</p>
                    </div>
                  </button>
               
              ))}
            </div>
          </div>
        </div>

        {/* Background Image Section */}
        <div className="absolute inset-0  -z-10">
          <StrapiImage
            className=" h-[60%] w-full object-cover"
            src={bgFeatureimage.url}
            alt={bgFeatureimage.alternativeText ?? "no alternative text"}
            width={1900}
            height={500}
          />
          <div className="absolute w-full h-full inset-0" />
        </div>
      </div>

      {/* Dialog Section */}
      <dialog ref={dialogRef} className="sm:w-[50%] lg:w-[50%] w-fit h-fit ">
        {selectedFeat && (
          <div className="p-10 grid grid-cols-1 items-center">
            <div className=" flex  flex-col justify-center items-center ">
              <div className="md:w-500  md:h-500 grid-cols-2 overflow-hidden rounded-full shadow-lg w-52 h-52">
                <StrapiImage
                  alt={selectedFeat.rounedimage.alternativeText ?? "no alternative text"}
                  className="object-cover w-full h-full z-5"
                  height={500}
                  src={selectedFeat.rounedimage.url}
                  width={500}
                />

             
              </div>
           
              <p className=" font-sans  tracking-tight pt-12 text-gray-900 dark:text-white">
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

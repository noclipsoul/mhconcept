"use client";
import { useState } from "react";
import Image from "next/image";

import { StrapiImage } from "@/components/custom/StrapiImage";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface RichTextElement {
  type: string; 
  level: number;

  children: {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
  }[];
}

interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

interface Projects {
  id: number;
  title: string;
  Description: RichTextElement[];
  imgs: ImageProps[];
}

interface ProjectProps {
  id: number;
  documentId: string;
  __component: string;
  title: string;
  Projects: Projects[];
  image: ImageProps;
}

export function Project({ data }: { readonly data: ProjectProps }) {
  const { Projects } = data;
  const [popupImage, setPopupImage] = useState<ImageProps | null>(null);
  


  return (
    <header className="relative flex-auto mx-auto max-w-fit" >
      <div className="relative  mx-auto  px-4 py-16 sm:px-6 lg:px-8">
        <div className="object-center mb-32">
          <h2 className="mt-2 text-4xl text-center font-bold text-black">
            Nos Projets
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-3 ">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div >
                <Dialog>
                  <DialogTrigger>
                    <div className="flex items-center justify-center">
                      {project.imgs.length > 0 && (
                        <StrapiImage
                          src={project.imgs[0].url}
                          alt={project.imgs[0].alternativeText || "Thumbnail"}
                          width={1024}
                          height={1024}
                          className="cursor-pointer rounded"
               
                        />
                      )}
                    </div>

                  </DialogTrigger>

                  <DialogContent  className="max-h-full max-w-full ">
       
                    {/* Left Section: Larger Image */}
                    
                    <div className="grid grid-cols-2  mt-4 gap-2 ">
                      <StrapiImage
                        src={popupImage?.url || project.imgs[0].url} // Display the selected image or default to the first image
                        alt={popupImage?.alternativeText || "Project Image"}
                        width={1024}
                        height={1024}
                        className="w-full h-auto rounded shadow-lg  "
                      />
                        {/* Right Section: Project Details */}
                      <DialogHeader >
                            <DialogTitle className="content-center text-center">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {project.title}
                            </h5>
                            </DialogTitle>
                            <DialogDescription className="content-center text-center">
                            <div className="mb-4 text-gray-700 dark:text-gray-400">
                                {project.Description.map((element, index) => (
                                <div key={index} className="mb-2">
                                    {element.children.map((child, childIndex) => (
                                    <span
                                        key={childIndex}
                                        className={`${child.bold ? "font-bold" : ""} ${
                                        child.italic ? "italic" : ""
                                        } ${child.underline ? "underline" : ""} ${
                                        child.strikethrough ? "line-through" : ""
                                        } ${
                                        child.code
                                            ? "font-mono bg-gray-100 p-1 rounded"
                                            : ""
                                        }`}
                                    >
                                        {child.text}
                                    </span>
                                    ))}
                                </div>
                                ))}
                            </div>
                            </DialogDescription>
                        </DialogHeader>
                      
                      
                        {/* Thumbnail Images */}
                        <div className="mt-6 grid grid-cols-4 gap-4">
                    {project.imgs.map((img) => (
                      <StrapiImage
                        key={img.id}
                        src={img.url}
                        alt={img.alternativeText || "Thumbnail"}
                        width={512}
                        height={512}
                        className={`cursor-pointer rounded border ${
                          popupImage?.id === img.id
                            ? "border-blue-500"
                            : "border-transparent"
                        }`}
                        onClick={() => setPopupImage(img)} // Update the larger image when clicked
                      />
                    ))}
                    </div>
                          
                      
                    </div>



                </DialogContent>
                                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      
    </header>
  );
}

"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { StrapiImage } from "@/components/custom/StrapiImage";

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

const RichTextRenderer = ({ elements }: { elements: RichTextElement[] }) => (
  <div>
    {elements.map((element, index) => (
      <div key={index} className="mb-2">
        {element.children.map((child, childIndex) => (
          <span
            key={childIndex}
            className={`${child.bold ? "font-bold" : ""} ${child.italic ? "italic" : ""} ${child.underline ? "underline" : ""} ${child.strikethrough ? "line-through" : ""} ${child.code ? "font-mono bg-gray-100 p-1 rounded" : ""}`}
          >
            {child.text}
          </span>
        ))}
      </div>
    ))}
  </div>
);

export function Project({ data }: { readonly data: ProjectProps }) {
  const { Projects } = data;
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [popupImage, setPopupImage] = useState<ImageProps | null>(null);


  const openDialog = (project: Projects) => {
    setSelectedProject(project);
    setPopupImage(project.imgs[0]); // Set initial popup image
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    setSelectedProject(null);
    setPopupImage(null);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleThumbnailClick = (image: ImageProps) => {
    setPopupImage(image);
  };

  return (
    <header className=" font-semibold mx-auto" id="Projets">
      <div className="relative px-4 py-10 sm:px-6 lg:px-8">
        <div className="object-center mb-10 ">
          <h2 className="mt-10 text-4xl text-center font-sans font-semibold text-black">
            Nos Projets
          </h2>
        </div>

        <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-15 lg:gap-20 xl:gap-30 ">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <button onClick={() => openDialog(project)}>
                {project.imgs.length > 0 && (
                  <div className="flex aspect-square ">
                    <StrapiImage
                      src={project.imgs[0].url}
                      alt={project.imgs[0].alternativeText || "Thumbnail"}
                      width={512}
                      height={512}
                      className="object-cover w-full h-full cursor-pointer rounded"
                    />
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <dialog ref={dialogRef} className="w-full h-full">
        {selectedProject && (
          <div className="p-4"> {/* Add padding to the dialog content */}
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-4">
              <div className="col-span-2">
              <StrapiImage
                src={popupImage?.url || selectedProject.imgs[0].url}
                alt={popupImage?.alternativeText || selectedProject.title}
                width={1024}
                height={1024}
                className="w-fit h-fit  object-contain rounded shadow-lg"
              />
              <div className="mt-4 grid grid-cols-4 gap-4">
                  {selectedProject.imgs.map((img) => (
                    <StrapiImage
                      key={img.id}
                      src={img.url}
                      alt={img.alternativeText || "Thumbnail"}
                      width={256}
                      height={256}
                      className={`cursor-pointer rounded border ${popupImage?.id === img.id ? "border-blue-500" : "border-transparent"}`}
                      onClick={() => handleThumbnailClick(img)}
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-1 text-center">
                
                <h2 className="text-2xl font-bold tracking-tight md:mt-18 text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <div className="mb-4 text-gray-700 dark:text-gray-400">
                  <RichTextRenderer elements={selectedProject.Description} />
                </div>
                
              </div>
            </div>
            <button onClick={closeDialog} className="absolute top-4 right-4">
              Close
            </button>
          </div>
        )}
      </dialog>
    </header>
  );
}
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
          <h2 className="text-4xl text-center font-sans font-semibold mt-10 mb-10 text-black md:text-5xl">
            Nos Projets
          </h2>
        </div>

        <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-15 lg:gap-20 xl:gap-30">
            {Projects.map((project) => (
              <div key={project.id} className="relative   bg-white group">
                <button onClick={() => openDialog(project)}>
                  {project.imgs.length > 0 && (
                    <div className="aspect-square">
                      <StrapiImage
                        src={project.imgs[0].url}
                        alt={project.imgs[0].alternativeText || "Thumbnail"}
                        width={512}
                        height={512}
                        className="object-cover w-full h-full cursor-pointer rounded-[10%]"
                      />
                    </div>
                  )}
                  {/* Hover Panel */}
                  <div className="absolute inset-0 rounded-[10%] bg-black bg-opacity-60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.title}
                  </div>
                </button>
              </div>
            ))}
        </div>
      </div>

      
    </header>
  );
}
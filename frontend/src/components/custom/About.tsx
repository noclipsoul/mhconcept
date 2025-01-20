import Link from "next/link";
import { StrapiImage } from "@/components/custom/StrapiImage";

interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

interface AboutProps {
  id: number;
  documentId: string;
  __component: string;
  title: string;
  description: string;
  image: Image;
}

export function About({ data }: { readonly data: AboutProps }) {
  const { title, description, image } = data;

  return (
    <section className="relative bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="flex-shrink-0 w-64 h-64 overflow-hidden rounded-full shadow-lg md:w-80 md:h-80">
          <StrapiImage
            alt={image.alternativeText ?? "no alternative text"}
            className="object-cover w-full h-full"
            height={320}
            src={image.url}
            width={320}
          />
        </div>

        {/* Text Section */}
        <div className="mt-8 md:mt-0 md:ml-12">
          <h2 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl leading-relaxed text-justify">
            {description}
          </p>
          
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { StrapiImage } from "@/components/custom/StrapiImage";

interface RichTextElement {
  type: string; // e.g., "heading", "paragraph", "text", "list-item", "code" 
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

interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  onClick?: (() => void) | null; // Corrected null probability handling
}

interface AboutProps {
  id: number;
  documentId: string;
  __component: string;
  title: string;
  description: RichTextElement[]; 
  image: Image;
}

export function About({ data }: { readonly data: AboutProps }) {
  const { title, description, image } = data;

  const renderDescription = () => {
    return description.map((item: RichTextElement, index) => { 
      switch (item.type) {
        case 'heading':
          return (
            <h3 key={index} className="text-xl font-bold mb-4">
              {item.children[0].text} 
            </h3>
          );
        case 'paragraph':
          return (
            <p key={index} className="text-lg text-gray-600 mb-4">
              {item.children[0].text} 
            </p>
          );
        case 'bold':
          return <strong key={index}>{item.children[0].text}</strong>;
        case 'italic':
          return <em key={index}>{item.children[0].text}</em>;
        case 'underline':
          return (
            <span key={index} style={{ textDecoration: 'underline' }}>
              {item.children[0].text}
            </span>
          );
        case 'strikethrough':
          return (
            <span key={index} style={{ textDecoration: 'line-through' }}>
              {item.children[0].text}
            </span>
          );
        default:
          return null;
      }
    });
  };

  return (
    <section className="container ml-auto mr-auto  object-center  py-16 md:py-24">
      <div className=" mx-auto px-10 sm:px-6 lg:px-100 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="flex-shrink-0 w-1000 h-1000 overflow-hidden rounded-full shadow-lg md:w-80 md:h-80  ">
          <StrapiImage
            alt={image.alternativeText ?? "no alternative text"}
            className="object-cover w-full h-full"
            height={1000}
            src={image.url}
            width={1000
            }
            
          />
        </div>
        {/* Text Section */}
        <div className="mt-8 md:mt-0 md:ml-12 lg:px-100 ">
          <h3 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl leading-tight text-center">
            {title}
          </h3>
          <br></br>
          <div>{renderDescription()}</div> 
        </div>
      </div>
    </section>
  );
}
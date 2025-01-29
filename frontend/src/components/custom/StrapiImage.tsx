import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  onClick?: () => void | null; // Add onClick prop to interface
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
  onClick, // Destructure onClick from props
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
      onClick={onClick} // Pass onClick prop to Image component
    />
  );
}
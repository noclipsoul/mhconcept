import { Logo } from "@/components/custom/logo"
import { StrapiImage } from "./StrapiImage"

interface Slinks {
  id: number
  text: string
  url: string
  icon: Image
}
interface Image {
  id: number
  documentId: string
  url: string
  alternativeText: string | null
}
interface FooterProps {
  data: {
    logoText: {
      id: number
      url: string
      text: string
      icon:Image;
    }
    text: string
    socialLink: Slinks[]
    bgFooter: Image
    descriptionlogo:string;
  }
}

export function Footer({ data }: Readonly<FooterProps>) {
  const { bgFooter, socialLink, text, logoText,descriptionlogo } = data

  return (
    <footer className="relative overflow-hidden font-sans bg-[#3e4748] text-white py-5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <StrapiImage
          alt={ "no alternative text"}
          className="object-cover w-full h-full"
          height={500}
          src={bgFooter.url}
          width={500}
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Footer Content */}
      <div className="relative  md:px-20 ">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-5 text-justify mb-5 md:items-start">
          
          {/* Left Section - Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/">
            
                <StrapiImage
              alt={logoText.icon.alternativeText ?? "no alternative text"}
              className="w-[103.68] h-[72]  "
              height={72}
              src={logoText.icon.url}
              width={103.68}
              />
          </a>
          <p className="py-4 px-4 text-justify">{descriptionlogo}</p>
          </div>

          {/* Right Section - Contact Information */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Entrer en Contact</h3>
            <div className="space-y-2 text-gray-300 text-center md:text-left">
              <p className=" flex py-4 px-4 text-justify md:text-justify "> {text}</p>
            </div>
          </div>
        </div>

       

        {/* Copyright */}
      
        <div className=" flex  flex-col md:justify-between  pt-5 border-t border-gray-800 text-center md:text-left text-sm text-gray-400">
          <p>Copyright ©2025 , All Rights Reserved.</p>
          <div className=" flex  flex-row justify-center md:justify-end p-5 items-center md:items-end">
          {socialLink.map((link) => (
            <a
              key={link.id}
              href={link.url.startsWith('https') ? link.url : `https://${link.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3  bg-white opacity-60 rounded-lg hover:bg-gray-700 transition"
            >
              <span className="sr-only">{link.text}</span>
              <StrapiImage
                src={link.icon.url}
                alt={link.url}
                width={40}
                height={40}
              />
            </a>
          ))}
        </div>
        </div>
      
      </div>
    </footer>
  )
}

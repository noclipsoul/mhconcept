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
      text: string
      url: string
    }
    text: string
    socialLink: Slinks[]
    bgFooter: Image
  }
}

export function Footer({ data }: Readonly<FooterProps>) {
  const { bgFooter, socialLink, text, logoText } = data

  return (
    <footer className="relative overflow-hidden font-sans bg-[#3e4748] text-white py-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left Section - Logo and Description */}
          <div className="flex flex-col items-start">
            <Logo />
    
          </div>

          {/* Right Section - Contact Information */}
          <div className="flex flex-col items-end md:items-center">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Entrer en Contact</h3>
            <div className="space-y-2 text-gray-300 text-right md:text-center">
              <p className=" flex md:text-justify "> {text}</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex flex-col items-end space-x-4">
          {socialLink.map((link) => (
            <a
              key={link.id}
              href={link.url.startsWith('https') ? link.url : `https://${link.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              <span className="sr-only">{link.text}</span>
              <StrapiImage
                src={link.icon.url}
                alt={link.url}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>Copyright ©2025 , All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

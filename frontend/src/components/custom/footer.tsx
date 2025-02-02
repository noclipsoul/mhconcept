import Link from "next/link";
import { Logo } from "@/components/custom/logo";


interface slinks {
  id: number;
  text: string;
  url: string;
}

interface FooterProps {
  data: {
    logoText: {
      id: number,
      text: string,
      url: string,
    },
    text: string,
    socialLink: slinks[],
  };
}

export function Footer({ data }: Readonly<FooterProps>) {
  const {  socialLink, text } = data;
  return (
    <div className="dark bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <Logo />
        <p className="mt-4 md:mt-0 text-sm text-gray-300">{text}</p>
   
        <div className="flex items-center space-x-4">
       
     
               <div className="mt-3">
              
               <a
                    href="https://www.facebook.com" // Replace with your external link
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Recommended for security and performance
                  >
                    facebook
                  </a>


                

                  <br>
                  </br>


                  </div>
                  <div className="mt-3">
              

                  <a  
                    href="https://www.pinterest.com" // Replace with your external link
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Recommended for security and performance
                  >
                  Pinterest
                  </a>
              
                  </div>
                  <br>
                  </br>

                <div className="mt-3">
              
                    <a 
                      href="https://www.x.com" // Replace with your external link
                      target="_blank" // Opens the link in a new tab
                      rel="noopener noreferrer" // Recommended for security and performance
                    >
                    X
                    </a>
                </div>




        </div>
      </div>
    </div>
  );
}

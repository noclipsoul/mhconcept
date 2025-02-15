"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 
import { Logo } from "@/components/custom/logo";
import { usePathname } from 'next/navigation'; 
import { StrapiImage } from "./StrapiImage";
import { FiGlobe } from "react-icons/fi";
interface hlinks {
  id: number;
  text: string;
  url: string;
  icon: Image
}
interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

interface HeaderProps {
  data: {
    logo: Image;
    headerlinks: hlinks[];
  };
}

export function Header({ data }: Readonly<HeaderProps>) {
  const {logo, headerlinks } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); 
  const [isScrolled, setIsScrolled] = useState(false); 
  const headerRef = useRef<HTMLDivElement>(null); 
  const router = useRouter(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleServiceClick = () => {
    if (pathname === '/') {
      const targetElement = document.getElementById(window.location.hash.slice(1)); // Get element based on hash
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Handle case where element with the hash is not found
        console.warn(`Element with id '${window.location.hash.slice(1)}' not found.`);
      }
    } else {
      router.push('/'); // Navigate to homepage for anchor links to work
    }
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        (pathname === '/' && isScrolled) || pathname !== '/' ? 'bg-[#3e4748] dark:bg-[#3e4748]' : 'bg-transparent' 
      }`}
    >
      <div className=" mx-auto px-4 mt-5 mb-5 flex items-center justify-between (keep space between the fix start & both ends) ">
       <a href="/" >
       <StrapiImage
       alt={logo.alternativeText ?? "no alternative text"}
       className="w-[103.68] h-[72] (fix this to be start)"
       height={72}
       src={logo.url}
       width={103.68}
       /></a>

       <div className="flex justify-between">
        {/* Mobile menu toggle button (hidden on md and larger screens) */}
        <div className="flex justify-items-end ">
        <button
          className="md:hidden focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        
        </div>
        {/* Navigation links (shown on md and larger screens) */}
        <nav className="hidden md:flex  space-x-10">
          <a href="/"  className="text-white hover:text-gray-300">ACCUEIL</a>   
          <a href="#services"  onClick={handleServiceClick} className="text-white hover:text-gray-300">SERVICES</a>
          
          <a href="#Projets" onClick={handleServiceClick} className="text-white hover:text-gray-300">PROJECTS</a>   
          <a href="/Devis" onClick={handleServiceClick} className="text-white hover:text-gray-300">DEVIS</a>
           <a href="#Contact" onClick={handleServiceClick} className="text-white hover:text-gray-300">CONTACT</a>
          
        </nav>
       <nav className="flex flex-col  ml-4 items-center bg-transparent  opacity-70 rounded-[20%]">
              <button
                className=" text-white hover:text-black-300 "
                onClick={toggleDropdown}
              >
                <FiGlobe className="w-6 h-6 " />
              
              </button>
              {isDropdownOpen && (
                <button
                  className=" flex flex-col overflow-hidden absolute space-y-4 "
                  onClick={toggleDropdown}
                >
                  {headerlinks.map((hlinks) => (
                   <div className="mt-12"  key={hlinks.id}>
                   <a
                     
                     href={hlinks.url.startsWith('https') ? hlinks.url : `https://${hlinks.url}`}
                     target="_blank"
                     rel="noopener noreferrer"
                      className="text-white bg-white opacity-60  hover:text-gray-300 block "
                    >
                        <StrapiImage
                        alt={hlinks.icon.alternativeText ?? "no alternative text"}
                        className="w-[30] h-[30] "
                        height={72}
                        src={hlinks.icon.url}
                        width={103.68}
                        />
                    </a>
                    </div>
                  ))}
                </button>
                )}
          </nav>
        {/* Navigation links (shown on mobile when menu is open) */}
        <nav
          className={`md:hidden  absolute  top-full left-0 w-full py-4 px-5 bg-[#3e4748] dark:bg-[#3e4748] transition duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-3">
           <a href="/"  className="text-white hover:text-gray-300">ACCUEIL</a>  
          <a href="#services"  className="text-white hover:text-gray-300" onClick={handleServiceClick}>SERVICES</a>
      
          <a href="#Projets" onClick={handleServiceClick}  className="text-white hover:text-gray-300">PROJECTS</a>   
        
           <a href="/Devis" onClick={handleServiceClick} className="text-white hover:text-gray-300">DEVIS</a>
          
           <a href="#Contact" onClick={handleServiceClick} className="text-white hover:text-gray-300">CONTACT</a>
           </div>
          

        </nav>
        </div>
      </div>
      
    </header>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 
import { Logo } from "@/components/custom/logo";
import { usePathname } from 'next/navigation'; 
import { StrapiImage } from "./StrapiImage";

interface hlinks {
  id: number;
  text: string;
  url: string;
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

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        (pathname === '/' && isScrolled) || pathname !== '/' ? 'bg-[#3e4748] dark:bg-[#3e4748]' : 'bg-transparent' 
      }`}
    >
      <div className=" mx-auto px-4 mt-10 mb-10 flex items-center justify-between">
       <StrapiImage
       alt={logo.alternativeText ?? "no alternative text"}
       className="w-[103.68] h-[72]"
       height={72}
       src={logo.url}
       width={103.68}
       />
        {/* Mobile menu toggle button (hidden on md and larger screens) */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
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
        {/* Navigation links (shown on md and larger screens) */}
        <nav className="hidden md:flex space-x-4">
          <a href="/"  className="text-white hover:text-gray-300">ACCUEIL</a>   
          <a href="#services"  onClick={handleServiceClick} className="text-white hover:text-gray-300">SERVICES</a>
          
          <a href="#Projets" onClick={handleServiceClick} className="text-white hover:text-gray-300">PROJECTS</a>   
          {headerlinks.map((hlinks) => (
            <Link
              key={hlinks.id}
              href={hlinks.url}
              className="text-white hover:text-gray-300"
             
            >
              {hlinks.text}
            </Link>
          ))}
           <a href="#Contact" onClick={handleServiceClick} className="text-white hover:text-gray-300">CONTACT</a>
        </nav>
        {/* Navigation links (shown on mobile when menu is open) */}
        <nav
          className={`md:hidden absolute top-full left-0 w-full py-4 px-6 bg-[#3e4748] dark:bg-[#3e4748] transition duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
           <a href="/"  className="text-white hover:text-gray-300">ACCUEIL</a>   <br></br>
          <a href="#services"  className="text-white hover:text-gray-300" onClick={handleServiceClick}>SERVICES</a>
          <br></br>
          <a href="#Projets" onClick={handleServiceClick}  className="text-white hover:text-gray-300">PROJECTS</a>   
          {headerlinks.map((hlinks) => (
            <Link
              key={hlinks.id}
              href={hlinks.url}
              className="text-white hover:text-gray-300 block "
            >
              {hlinks.text}
            </Link>
          ))}
           <a href="#Contact" onClick={handleServiceClick} className="text-white hover:text-gray-300">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}
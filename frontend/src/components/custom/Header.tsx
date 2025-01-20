"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/custom/logo";

interface hlinks {
  id: number;
  text: string;
  url: string;
}

interface HeaderProps {
  data: {
    logo: {
      url: string;
    };
    headerlinks: hlinks[];
  };
}

export function Header({ data }: Readonly<HeaderProps>) {
  const { headerlinks } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle menu toggle on mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isMenuOpen ? "bg-black dark:bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
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
          {headerlinks.map((hlinks) => (
            <Link
              key={hlinks.id}
              href={hlinks.url}
              className="text-white hover:text-gray-300"
            >
              {hlinks.text}
            </Link>
          ))}
        </nav>
        {/* Navigation links (shown on mobile when menu is open) */}
        <nav
          className={`md:hidden absolute top-full left-0 w-full py-4 px-6 bg-black dark:bg-gray-800 transition duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {headerlinks.map((hlinks) => (
            <Link
              key={hlinks.id}
              href={hlinks.url}
              className="text-white hover:text-gray-300 block mb-2"
              onClick={toggleMenu} // Close menu on link click
            >
              {hlinks.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
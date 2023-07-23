"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import LinkButton from "../base/LinkButton";
import MobileMenu from "../MobileMenu";

interface NavLink {
  id: number;
  label: string;
  path: string;
}

const links: NavLink[] = [
  { id: 1, label: "About App", path: "/" },
  { id: 2, label: "Features", path: "/" },
  { id: 3, label: "Reviews", path: "/" },
  { id: 4, label: "Pricing", path: "/" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<Boolean>(false);
  return (
    <header className={`fixed top-0 left-0 w-full z-50`}>
      <nav className='max-w-base mx-auto flex items-center justify-between px-5 py-1 lg:py-5'>
        <Image
          width={194}
          height={52}
          className='mix-blend-darken'
          src='/assets/images/logo.png'
          alt='Logo'
        />
        <div className='hidden lg:flex space-x-16 xl:space-x-20 items-center'>
          <div className='flex items-center space-x-12'>
            {links.map((link) => (
              <Link
                className={`transition-colors duration-200 ${
                  scrolled ? "lg:hover:text-brand-primary" : "text-white"
                }`}
                key={link.id}
                href='/'>
                {link.label}
              </Link>
            ))}
          </div>
          <div className='flex items-center ml-auto space-x-3.5'>
            <LinkButton href='/' className='bg-white/20 text-white'>
              Contact
            </LinkButton>
            <LinkButton href='/' className='bg-white/20 text-white'>
              Sign In
            </LinkButton>
          </div>
        </div>
        {/* <button className='lg:hidden' onClick={handleOpen}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-7 h-7'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button> */}
      </nav>
    </header>
  );
};

const OldHeader = () => {
  const [scrolled, setScrolled] = useState<Boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`bg-brand-primary fixed top-0 z-50 inset-x-0 transition-all duration-200 ${
        scrolled ? "bg-white text-brand-gray-primary shadow" : "text-white"
      }`}>
      {isOpen && <MobileMenu onClose={handleClose} />}
      <nav className='max-w-base mx-auto flex items-center justify-between px-5 py-4 lg:py-5'>
        <Link href='/' className='w-40 h-10 md:w-44 md:h-12 lg:w-48 lg:h-14'>
          <Image
            width={194}
            height={52}
            className='w-full h-full'
            src='/assets/images/logo.png'
            alt='Logo'
          />
        </Link>
        <div className='hidden lg:flex space-x-16 xl:space-x-20 items-center'>
          <div className='flex items-center space-x-12'>
            {links.map((link) => (
              <Link
                className={`lg:hover:text-black transition-all duration-200 ${
                  scrolled ? "lg:hover:text-brand-primary" : ""
                }`}
                key={link.id}
                href={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <button className='lg:hidden' onClick={handleOpen}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-7 h-7'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

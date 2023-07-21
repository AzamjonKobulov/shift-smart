'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';

import { AppContext } from '@/app/context/AppContext';
import LinkButton from '../base/LinkButton';

interface NavLink {
  id: number;
  label: string;
  path: string;
}

const links: NavLink[] = [
  { id: 1, label: 'About App', path: '/' },
  { id: 2, label: 'Features', path: '/' },
  { id: 3, label: 'Reviews', path: '/' },
  { id: 4, label: 'Pricing', path: '/' },
];

const buttons: NavLink[] = [
  { id: 1, label: 'Contact', path: '/go' },
  { id: 2, label: 'Sign In', path: '/go' },
];

const Navbar: React.FC = () => {
  const { handleOpenMenu } = useContext(AppContext);
  const [scrolled, setScrolled] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 inset-x-0 transition-all duration-200 ${
        scrolled ? 'bg-white text-brand-gray-primary shadow' : 'text-white'
      }`}
    >
      <nav className="max-w-base mx-auto flex items-center justify-between px-5 py-4 lg:py-5">
        <Link href="/" className="w-40 h-10 md:w-44 md:h-12 lg:w-48 lg:h-14">
          <Image
            width={194}
            height={52}
            className="w-full h-full"
            src="/assets/images/logo.svg"
            alt="Logo"
          />
        </Link>
        <div className="hidden lg:flex space-x-16 xl:space-x-20 items-center">
          <div className="flex items-center space-x-12">
            {links.map((link) => (
              <Link
                className={`lg:hover:text-black transition-all duration-200 ${
                  scrolled ? 'lg:hover:text-brand-primary' : ''
                }`}
                key={link.id}
                href={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center ml-auto space-x-3.5">
            {buttons.map((button) => (
              <LinkButton
                href={button.path}
                key={button.id}
                className={`group gap-x-4 font-medium items-center py-2.5 px-7 ${
                  scrolled
                    ? 'bg-brand-primary lg:hover:bg-black text-white'
                    : 'bg-nav-btn lg:hover:bg-white lg:hover:text-black'
                }`}
              >
                {button.label}
                <span className="group-hover:translate-x-2 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    stroke="currentColor"
                    className={scrolled ? 'lg:hover:fill-black' : ''}
                  >
                    <g clip-path="url(#clip0_128_18)">
                      <path
                        d="M16.678 7.71511L13.3368 4.3739L12.836 4.87469L16.107 8.14578H0.00238037V8.85411H16.1056L12.8353 12.1245L13.336 12.6253L16.678 9.28336C17.11 8.85128 17.11 8.14719 16.678 7.71511Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_128_18">
                        <rect
                          width="17"
                          height="17"
                          fill="white"
                          transform="translate(0.00238037)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </LinkButton>
            ))}
          </div>
        </div>
        <button className="lg:hidden" onClick={handleOpenMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

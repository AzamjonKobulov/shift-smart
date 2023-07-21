'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AppContext } from '@/app/context/AppContext';
import Button from '../base/Button';

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
  { id: 1, label: 'Contact', path: '/' },
  { id: 2, label: 'Sign In', path: '/' },
];

const Navbar: React.FC = () => {
  const { handleOpenMenu } = useContext(AppContext);
  const [scrolled, setScrolled] = useState<Boolean>(false);

  const router = useRouter();

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

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <header
      className={`fixed top-0 z-50 inset-x-0 ${
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
        <div className="flex-1 hidden lg:flex items-center">
          <div className="flex items-center space-x-12 ml-auto">
            {links.map((link) => (
              <Link
                className="lg:hover:-translate-y-1.5 transition-all duration-300"
                key={link.id}
                href={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center ml-auto space-x-3.5">
            {buttons.map((button) => (
              <Button
                key={button.id}
                onClick={() => handleNavigate(button.path)}
                className={`group gap-x-4 font-medium  lg:hover:-translate-y-1.5 transition-all duration-300 py-2.5 px-7 ${
                  scrolled ? 'bg-brand-primary' : 'bg-nav-btn'
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
              </Button>
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

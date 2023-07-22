import Link from 'next/link';
import Image from 'next/image';
import { GrClose } from 'react-icons/gr';

interface MobileMenuProps {
  onClose: () => void;
}

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

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="absolute inset-0 min-h-screen bg-white pt-5 pb-20 z-50">
      <div className="flex items-center justify-between pl-5 pr-8">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            width={160}
            height={40}
            alt="Logo"
          />
        </Link>
        <button onClick={onClose} className="rounded-md p-1 top-5 right-5 z-50">
          <GrClose className="text-xl" />
        </button>
      </div>
      <div className="h-full flex flex-col items-center justify-between text-2xl">
        <div className="flex flex-col items-center my-auto space-y-5">
          {links.map((link) => (
            <Link
              className="text-brand-primary transition-all duration-200"
              key={link.id}
              href={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="w-full flex flex-col items-center space-y-5 text-lg px-5">
          {buttons.map((button) => (
            <Link
              href={button.path}
              key={button.id}
              className="flex w-full items-center justify-between font-medium rounded-full py-3.5 px-7 bg-black text-white active:bg-brand-primary"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

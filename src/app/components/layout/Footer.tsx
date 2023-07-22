import Link from 'next/link';
import Image from 'next/image';
import LinkButton from '../base/LinkButton';
import { SiInstagram } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';

interface NavLinks {
  id: number;
  title: string;
  path: string;
}

const navLinks: NavLinks[] = [
  { id: 1, title: 'At vero eos et accusamus', path: '/' },
  { id: 2, title: 'Iusto odio dignissimos ducimus', path: '/' },
  { id: 3, title: 'Qui blanditiis praesentium', path: '/' },
  { id: 4, title: 'Voluptatum deleniti', path: '/' },
  { id: 5, title: 'Atque corrupti quos dolores', path: '/' },
  { id: 6, title: 'Quas molestias excepturi sint.', path: '/' },
];

const otherLinks: NavLinks[] = [
  { id: 1, title: 'At vero eos et accusamus', path: '/' },
  { id: 2, title: 'Iusto odio dignissimos ducimus', path: '/' },
  { id: 3, title: 'Qui blanditiis praesentium', path: '/' },
  { id: 4, title: 'Voluptatum deleniti', path: '/' },
  { id: 5, title: 'Atque corrupti quos dolores', path: '/' },
  { id: 6, title: 'Quas molestias excepturi sint.', path: '/' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer bg-no-repeat bg-cover py-16 md:py-24 lg:py-28 px-5">
      <div className="max-w-base mx-auto px-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-16">
          <div className="relative pb-10 sm:pb-0">
            <Link
              href="/"
              className="w-40 h-14 md:w-44 md:h-12 lg:w-48 lg:h-14 absolute top-0"
            >
              <Image
                width={194}
                height={52}
                className="w-full h-full mix-blend-darken -ml-5 -mt-3"
                src="/assets/images/logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="space-y-5">
            <h3 className="text-lg font-bold">Navigation Links Here</h3>
            <div className="flex flex-col space-y-1.5 text-brand-gray-primary">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-lg font-bold">Useful Links Here</h3>
            <div className="flex flex-col space-y-1.5 text-brand-gray-primary">
              {otherLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex items-center space-x-2 mt-4">
              <a
                className="w-10 h-10 rounded-full grid place-content-center bg-black hover:bg-brand-primary transition-all duration-200"
                href="#"
              >
                <SiInstagram className="text-white text-xl" />
              </a>
              <a
                className="w-10 h-10 rounded-full grid place-content-center bg-black hover:bg-brand-primary transition-all duration-200"
                href="#"
              >
                <SiTwitter className="text-white text-xl" />
              </a>
              <a
                className="w-10 h-10 rounded-full grid place-content-center bg-black hover:bg-brand-primary transition-all duration-200"
                href="#"
              >
                <FaFacebookF className="text-white text-xl" />
              </a>
            </div>
            <LinkButton
              href="/"
              className="w-full sm:w-auto justify-between group gap-x-4 font-bold bg-black lg:hover:bg-brand-primary text-white  py-5 sm:py-4 px-8 mt-14"
            >
              <span>Contact Us</span>
              <span className="group-hover:translate-x-2 transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
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
            </LinkButton>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center space-y-5 md:justify-between mt-16 lg:mt-28">
          <p>Shiftsmart app v1.0. Updated 2023</p>
          <p>Copyright © 2022 ShiftSmart. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

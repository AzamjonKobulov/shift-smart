import Link from "next/link";
import Image from "next/image";
import LinkButton from "../base/LinkButton";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

interface NavLinks {
  id: number;
  title: string;
  path: string;
}

const navLinks: NavLinks[] = [
  { id: 1, title: "At vero eos et accusamus", path: "/" },
  { id: 2, title: "Iusto odio dignissimos ducimus", path: "/" },
  { id: 3, title: "Qui blanditiis praesentium", path: "/" },
  { id: 4, title: "Voluptatum deleniti", path: "/" },
  { id: 5, title: "Atque corrupti quos dolores", path: "/" },
  { id: 6, title: "Quas molestias excepturi sint.", path: "/" },
];

const otherLinks: NavLinks[] = [
  { id: 1, title: "At vero eos et accusamus", path: "/" },
  { id: 2, title: "Iusto odio dignissimos ducimus", path: "/" },
  { id: 3, title: "Qui blanditiis praesentium", path: "/" },
  { id: 4, title: "Voluptatum deleniti", path: "/" },
  { id: 5, title: "Atque corrupti quos dolores", path: "/" },
  { id: 6, title: "Quas molestias excepturi sint.", path: "/" },
];

const Footer: React.FC = () => {
  return (
    <footer className='bg-brand-gray-500 py-16 md:py-24 lg:py-28 '>
      <div className='max-w-base mx-auto px-9'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-16'>
          <div className='relative pb-10 sm:pb-0'>
            <Link
              href='/'
              className='w-40 h-14 md:w-44 md:h-12 lg:w-48 lg:h-14 absolute top-0'>
              <Image
                width={194}
                height={52}
                className='w-full h-full mix-blend-darken -ml-5 -mt-3'
                src='/assets/images/logo.png'
                alt='Logo'
              />
            </Link>
          </div>
          <div className='space-y-5'>
            <h3 className='text-lg font-bold'>Navigation Links Here</h3>
            <div className='flex flex-col space-y-1.5 text-brand-gray-primary'>
              {navLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className='space-y-5'>
            <h3 className='text-lg font-bold'>Useful Links Here</h3>
            <div className='flex flex-col space-y-1.5 text-brand-gray-primary'>
              {otherLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-lg font-bold'>Follow Us</h3>
            <div className='flex items-center space-x-2 mt-4'>
              <a
                className='w-10 h-10 rounded-full grid place-content-center bg-black hover:bg-brand-primary transition-all duration-200'
                href='#'>
                <SiInstagram className='text-white text-xl' />
              </a>
              <a
                className='w-10 h-10 rounded-full grid place-content-center bg-black hover:bg-brand-primary transition-all duration-200'
                href='#'>
                <SiTwitter className='text-white text-xl' />
              </a>
              <a
                className='w-10 h-10 rounded-full grid place-content-center bg-black hover:bg-brand-primary transition-all duration-200'
                href='#'>
                <FaFacebookF className='text-white text-xl' />
              </a>
            </div>
            <div className='hidden lg:block mt-14'>
              <LinkButton
                base
                href='/'
                className='bg-black lg:hover:bg-brand-primary text-white  py-5 sm:py-4 px-8 '>
                Contact Us
              </LinkButton>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:items-center space-y-3 md:justify-between mt-10 lg:mt-28'>
          <p>Shiftsmart app v1.0. Updated 2023</p>
          <p>Copyright © 2022 ShiftSmart. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

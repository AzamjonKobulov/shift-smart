import Link from 'next/link';
import Image from 'next/image';
import LinkButton from '../base/LinkButton';

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
    <footer className="bg-footer bg-no-repeat bg-cover py-16 md:py-24 lg:py-32 px-5">
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
                className="w-full h-full"
                src="/assets/images/logo-footer.svg"
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
              <a href="#">
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.8879 12.5864H17.1213C14.6244 12.5864 12.5865 14.6151 12.5865 17.1212V25.8878C12.5865 28.3847 14.6152 30.4226 17.1213 30.4226H25.8879C28.3848 30.4226 30.4227 28.3938 30.4227 25.8878V17.1212C30.4135 14.6151 28.3848 12.5864 25.8879 12.5864ZM21.5 27.3657C18.2688 27.3657 15.6342 24.7312 15.6342 21.4999C15.6342 18.2687 18.2688 15.6341 21.5 15.6341C24.7313 15.6341 27.3658 18.2687 27.3658 21.4999C27.3658 24.7312 24.7313 27.3657 21.5 27.3657ZM27.6596 16.2858C27.1088 16.2858 26.6682 15.8452 26.6682 15.2944C26.6682 14.7437 27.1088 14.303 27.6596 14.303C28.2104 14.303 28.651 14.7437 28.651 15.2944C28.651 15.8452 28.2104 16.2858 27.6596 16.2858Z"
                    fill="#F75E39"
                  />
                  <path
                    d="M25.0658 21.5433C25.0894 19.5762 23.5139 17.9624 21.5468 17.9388C19.5797 17.9152 17.9659 19.4907 17.9423 21.4578C17.9187 23.4249 19.4942 25.0387 21.4613 25.0623C23.4284 25.0859 25.0422 23.5104 25.0658 21.5433Z"
                    fill="#F75E39"
                  />
                  <path
                    d="M21.5 0.845703C10.0896 0.845703 0.845703 10.0896 0.845703 21.5C0.845703 32.9104 10.0896 42.1543 21.5 42.1543C32.9104 42.1543 42.1543 32.9104 42.1543 21.5C42.1543 10.0896 32.9104 0.845703 21.5 0.845703ZM32.9746 25.8879C32.9746 29.7984 29.7984 32.9746 25.8879 32.9746H17.1213C13.2107 32.9746 10.0346 29.7984 10.0346 25.8879V17.1213C10.0346 13.2107 13.2107 10.0346 17.1213 10.0346H25.8879C29.7984 10.0346 32.9746 13.2107 32.9746 17.1213V25.8879Z"
                    fill="#F75E39"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5 2.8457C12.0896 2.8457 2.8457 12.0896 2.8457 23.5C2.8457 34.9104 12.0896 44.1543 23.5 44.1543C34.9104 44.1543 44.1543 34.9104 44.1543 23.5C44.1543 12.0896 34.9104 2.8457 23.5 2.8457ZM32.7072 18.7357C32.7072 18.7357 33.3773 24.8494 28.5488 29.4301C21.7834 35.8467 12.0254 30.8529 12.0254 30.8529C16.7162 30.908 18.699 28.9344 18.699 28.9344C14.8436 28.2734 14.458 25.5195 14.458 25.5195C15.1189 25.9326 16.5602 25.5195 16.5602 25.5195C12.2641 23.5459 12.9342 20.948 12.9342 20.948C14.1826 21.6457 15.1189 21.3887 15.1189 21.3887C11.7775 18.4879 13.6686 15.4127 13.6686 15.4127C19.5344 20.9939 23.3072 19.8465 23.3072 19.8465C23.041 15.9176 25.3635 14.3937 27.8695 14.3111C29.9809 14.2377 31.1926 15.7064 31.1926 15.7064C32.8174 15.8441 34.3412 14.7609 34.3412 14.7609C34.2035 16.0736 32.4227 17.1844 32.4227 17.1844C33.3498 17.267 34.9654 16.7621 34.9654 16.7621C34.1301 18.2951 32.7072 18.7357 32.7072 18.7357Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5 2.8457C12.0896 2.8457 2.8457 12.0896 2.8457 23.5C2.8457 34.9104 12.0896 44.1543 23.5 44.1543C34.9104 44.1543 44.1543 34.9104 44.1543 23.5C44.1543 12.0896 34.9104 2.8457 23.5 2.8457ZM29.4301 15.7982C29.4301 15.7982 27.2453 15.7799 26.6945 15.7799C25.8684 15.7799 25.3176 16.4959 25.3176 17.2211V20.2596H29.4301L28.9619 24.3996H25.2717V34.9746H21.0949V24.4547H17.5699V20.2137H21.15C21.15 20.2137 21.15 18.7266 21.15 16.2113C21.15 13.9807 23.6285 12.0162 25.3543 12.0162C25.6113 12.0162 29.4301 12.0529 29.4301 12.0529V15.7982Z"
                    fill="black"
                  />
                </svg>
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

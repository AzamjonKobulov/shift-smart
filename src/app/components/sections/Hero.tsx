import Image from 'next/image';
import LinkButton from '../base/LinkButton';

const Hero = () => {
  return (
    <section className="relative bg-hero-mobile xs:bg-hero bg-no-repeat bg-90% md:bg-80% lg:bg-80% overflow-hidden bg-right-top py-24 lg:py-28 xl:pt-40 xl:pb-48">
      <div className="max-w-base mx-auto flex px-9">
        <div className="space-y-7 pt-5 lg:pt-10">
          <h1 className="lg:w-auto text-title md:text-5xl lg:text-6xl leading-[115%] relative z-30 font-bold">
            We’re Here <span className="text-white">To Help</span>
            <br /> You Build Your <br /> Employee <br className="xl:hidden" />{' '}
            Scheduling.
          </h1>
          <p className="w-1/2 sm:text-xl text-black">
            Build shifts easily and quickly, saving mistakes{' '}
            <br className="hidden lg:block" /> and a lot of work time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-5 sm:space-y-0 sm:space-x-4 pt-10">
            <LinkButton
              href="/"
              className="w-full sm:w-auto justify-between text-white sm:justify-start group gap-x-4 font-bold bg-brand-primary lg:hover:bg-black py-5 sm:py-4 px-8"
            >
              <span>Start free trial</span>
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
            <LinkButton
              href="/"
              className="w-full sm:w-auto justify-between sm:justify-start group gap-x-4 font-bold bg-black text-white lg:hover:bg-brand-primary py-5 sm:py-4 px-8"
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
        <div>
          <Image
            className="absolute w-72 h-[13.5625rem] sm:h-[48%] md:h-2/3 sm:w-1/2 lg:h-3/4 xl:w-auto -right-1/4 xs:right-0 bottom-[40%] sm:bottom-1/3 md:bottom-[20%] lg:bottom-[10%]"
            width={654}
            height={654}
            src="/assets/images/img-hero.png"
            alt="Person Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

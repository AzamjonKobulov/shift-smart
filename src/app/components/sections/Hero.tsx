import Image from "next/image";
import LinkButton from "../base/LinkButton";

const Hero = () => {
  return (
    <section className='relative 3xl:max-w-8xl mx-auto px-9 pb-10 md:pb-24 xl:pb-32 overflow-hidden'>
      <div className='max-w-base mx-auto md:flex 2xl:!px-9'>
        <div className='max-w-xs md:max-w-md xl:max-w-2xl pt-16'>
          <h1 className='text-3xl md:text-4xl xl:text-6xl font-bold md:pr-16 xl:pr-10'>
            We’re Here <span className='text-white'>To Help</span> You Build
            Your Employee <br className='md:hidden' /> Scheduling.
          </h1>
          <p className='text-body-sm lg:text-xl text-black w-32 md:w-auto max-w-xs lg:max-w-md mt-7 xl:mt-10'>
            Build shifts easily and quickly, saving mistakes{" "}
            <br className='hidden lg:block' /> and a lot of work time.
          </p>
          <div className='md:flex items-center gap-4 mt-10 xl:mt-14'>
            <LinkButton
              href='/'
              base
              className='!flex !justify-between bg-brand-primary text-white py-5'>
              Start Free Trial
            </LinkButton>
            <LinkButton
              href='/'
              base
              className='!flex !justify-between bg-black hover:bg-brand-primary text-white py-5 mt-3 md:mt-0'>
              Contact Us
            </LinkButton>
          </div>
        </div>
        <div className='max-w-xs md:max-w-full absolute top-32 -right-32 md:top-0 md:right-0 md:relative flex-1 w-full h-56 md:h-[32rem] xl:h-[40rem]'>
          <div className='md:absolute md:top-0 -left-32 lg:left-0 w-full md:w-[52rem] h-full'>
            <Image
              className='object-contain'
              src='/assets/images/hero-img.png'
              alt='Hero '
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

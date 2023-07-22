"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LinkButton from "../base/LinkButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { CheckIcon } from "../icons";
import Image from "next/image";

interface Data {
  id: number;
  package: string;
  price: string;
  text: string;
  features: { id: number; item: string }[];
}

const data: Data[] = [
  {
    id: 1,
    package: "Trial Package",
    price: "FREE",
    text: "Get 3 months of basic plan for free ($450)",
    features: [
      { id: 1, item: "This is the first feature" },
      { id: 2, item: "Second Feature Included" },
      { id: 3, item: "Third one will be right here" },
      { id: 4, item: "Another Feature Included here" },
      { id: 5, item: "Feature will be written here" },
      { id: 6, item: "This is the last feature" },
    ],
  },
  {
    id: 2,
    package: "Basic Package",
    price: "$150/mo",
    text: "Get 3 months of basic plan for free ($450)",
    features: [
      { id: 1, item: "This is the first feature" },
      { id: 2, item: "Second Feature Included" },
      { id: 3, item: "Third one will be right here" },
      { id: 4, item: "Another Feature Included here" },
      { id: 5, item: "Feature will be written here" },
      { id: 6, item: "This is the last feature" },
    ],
  },
  {
    id: 3,
    package: "Premium Package",
    price: "$350/mo",
    text: "Get 3 months of basic plan for free ($450)",
    features: [
      { id: 1, item: "This is the first feature" },
      { id: 2, item: "Second Feature Included" },
      { id: 3, item: "Third one will be right here" },
      { id: 4, item: "Another Feature Included here" },
      { id: 5, item: "Feature will be written here" },
      { id: 6, item: "This is the last feature" },
    ],
  },
];

const Pricing = () => {
  const destroySwiper = (swiper: any) => {
    if (swiper.size > 950) {
      swiper.destroy();
    }
  };
  return (
    <>
      <section className='relative overflow-hidden pt-12 pb-20 lg:pt-28 lg:pb-32'>
        <div className='max-w-base mx-auto px-9'>
          <div className='relative z-10'>
            <p className='text-brand-primary font-medium'>ShiftSmart Pricing</p>
            <h2 className='text-3xl/9 lg:text-display-xl font-bold mt-5'>
              Check Our Pricing Plans
            </h2>
          </div>

          <div className='mt-5 md:mt-16 xl:mt-20 '>
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              spaceBetween={24}
              modules={[Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 1.1,
                  spaceBetween: 24,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2.1,
                  spaceBetween: 30,
                },
              }}
              onResize={(swiper) => destroySwiper(swiper)}
              className='pricing-swiper !overflow-visible !-mx-3 xl:!-mx-10'>
              {data.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className='bg-white rounded-3xl lg:rounded- shadow-base py-10 px-8 xl:px-11'>
                  <p className='font-medium text-xl text-brand-primary'>
                    {item.package}
                  </p>
                  <h3 className='text-display-xl font-bold mt-1 lg:mt-4'>
                    {item.price}
                  </h3>
                  <p className='mt-1 lg:mt-3'>{item.text}</p>
                  <ul className='space-y-2 lg:space-y-3 pt-6 pb-9 lg:py-10'>
                    {item.features.map((feature) => (
                      <li
                        key={feature.id}
                        className='flex items-center space-x-2.5'>
                        <CheckIcon />
                        <p className='font-medium leading-none text-black'>
                          {feature.item}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <LinkButton
                    href='/'
                    className='bg-brand-gray-300 hover:bg-black hover:text-white'>
                    Contact
                  </LinkButton>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className='absolute top-0 -right-8 lg:right-0 h-full max-w-[16rem] md:max-w-md lg:max-w-2xl w-full'>
          <Image
            src='/assets/images/bg-pricing.png'
            alt='Pricing bg'
            fill
            objectFit='cover'
          />
        </div>
      </section>
    </>
  );
};

export default Pricing;

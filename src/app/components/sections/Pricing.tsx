"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LinkButton from "../base/LinkButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

interface Data {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  text: string;
  features: { id: number; title: string }[];
}

const data: Data[] = [
  {
    id: 1,
    subtitle: "Trial Package",
    title: "FREE",
    text: "Get 3 months of basic plan for free ($450)",
    icon: (
      <svg
        width='17'
        height='17'
        viewBox='0 0 17 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_230_134)'>
          <path
            d='M8.5 0.53125C6.92393 0.53125 5.38326 0.998609 4.0728 1.87423C2.76235 2.74984 1.74097 3.99439 1.13784 5.45049C0.534703 6.90659 0.376895 8.50884 0.684371 10.0546C0.991847 11.6004 1.7508 13.0203 2.86525 14.1348C3.9797 15.2492 5.39959 16.0082 6.94538 16.3156C8.49116 16.6231 10.0934 16.4653 11.5495 15.8622C13.0056 15.259 14.2502 14.2377 15.1258 12.9272C16.0014 11.6167 16.4688 10.0761 16.4688 8.5C16.468 6.38679 15.6282 4.36035 14.1339 2.86609C12.6397 1.37182 10.6132 0.532015 8.5 0.53125ZM13.1431 6.70437L7.54907 12.2931C7.50668 12.3376 7.45553 12.3729 7.39884 12.3967C7.34215 12.4204 7.28115 12.4322 7.21969 12.4312C7.15917 12.4311 7.09929 12.4189 7.04361 12.3951C6.98793 12.3714 6.9376 12.3367 6.89563 12.2931L3.85688 9.25438C3.81279 9.21215 3.7777 9.16143 3.75373 9.10528C3.72976 9.04913 3.7174 8.98871 3.7174 8.92766C3.7174 8.8666 3.72976 8.80618 3.75373 8.75003C3.7777 8.69388 3.81279 8.64317 3.85688 8.60094L5.19563 7.25688C5.28347 7.1725 5.40055 7.12538 5.52235 7.12538C5.64415 7.12538 5.76122 7.1725 5.84907 7.25688L7.21969 8.6275L11.1456 4.70687C11.2322 4.62062 11.3491 4.57174 11.4713 4.57075C11.5934 4.56976 11.7111 4.61672 11.7991 4.70156L13.1431 6.05094C13.1871 6.09259 13.2221 6.14286 13.2459 6.19861C13.2696 6.25436 13.2817 6.3144 13.2813 6.375C13.2812 6.43632 13.269 6.49701 13.2453 6.55355C13.2215 6.6101 13.1868 6.66137 13.1431 6.70437Z'
            fill='#F75E39'
          />
        </g>
        <defs>
          <clipPath id='clip0_230_134'>
            <rect width='17' height='17' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
    features: [
      { id: 1, title: "This is the first feature" },
      { id: 2, title: "Second Feature Included" },
      { id: 3, title: "Third one will be right here" },
      { id: 4, title: "Another Feature Included here" },
      { id: 5, title: "Feature will be written here" },
      { id: 6, title: "This is the last feature" },
    ],
  },
  {
    id: 2,
    subtitle: "Basic Package",
    title: "$150/mo",
    text: "Get 3 months of basic plan for free ($450)",
    icon: (
      <svg
        width='17'
        height='17'
        viewBox='0 0 17 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_230_134)'>
          <path
            d='M8.5 0.53125C6.92393 0.53125 5.38326 0.998609 4.0728 1.87423C2.76235 2.74984 1.74097 3.99439 1.13784 5.45049C0.534703 6.90659 0.376895 8.50884 0.684371 10.0546C0.991847 11.6004 1.7508 13.0203 2.86525 14.1348C3.9797 15.2492 5.39959 16.0082 6.94538 16.3156C8.49116 16.6231 10.0934 16.4653 11.5495 15.8622C13.0056 15.259 14.2502 14.2377 15.1258 12.9272C16.0014 11.6167 16.4688 10.0761 16.4688 8.5C16.468 6.38679 15.6282 4.36035 14.1339 2.86609C12.6397 1.37182 10.6132 0.532015 8.5 0.53125ZM13.1431 6.70437L7.54907 12.2931C7.50668 12.3376 7.45553 12.3729 7.39884 12.3967C7.34215 12.4204 7.28115 12.4322 7.21969 12.4312C7.15917 12.4311 7.09929 12.4189 7.04361 12.3951C6.98793 12.3714 6.9376 12.3367 6.89563 12.2931L3.85688 9.25438C3.81279 9.21215 3.7777 9.16143 3.75373 9.10528C3.72976 9.04913 3.7174 8.98871 3.7174 8.92766C3.7174 8.8666 3.72976 8.80618 3.75373 8.75003C3.7777 8.69388 3.81279 8.64317 3.85688 8.60094L5.19563 7.25688C5.28347 7.1725 5.40055 7.12538 5.52235 7.12538C5.64415 7.12538 5.76122 7.1725 5.84907 7.25688L7.21969 8.6275L11.1456 4.70687C11.2322 4.62062 11.3491 4.57174 11.4713 4.57075C11.5934 4.56976 11.7111 4.61672 11.7991 4.70156L13.1431 6.05094C13.1871 6.09259 13.2221 6.14286 13.2459 6.19861C13.2696 6.25436 13.2817 6.3144 13.2813 6.375C13.2812 6.43632 13.269 6.49701 13.2453 6.55355C13.2215 6.6101 13.1868 6.66137 13.1431 6.70437Z'
            fill='#F75E39'
          />
        </g>
        <defs>
          <clipPath id='clip0_230_134'>
            <rect width='17' height='17' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
    features: [
      { id: 1, title: "This is the first feature" },
      { id: 2, title: "Second Feature Included" },
      { id: 3, title: "Third one will be right here" },
      { id: 4, title: "Another Feature Included here" },
      { id: 5, title: "Feature will be written here" },
      { id: 6, title: "This is the last feature" },
    ],
  },
  {
    id: 3,
    subtitle: "Premium Package",
    title: "$350/mo",
    text: "Get 3 months of basic plan for free ($450)",
    icon: (
      <svg
        width='17'
        height='17'
        viewBox='0 0 17 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_230_134)'>
          <path
            d='M8.5 0.53125C6.92393 0.53125 5.38326 0.998609 4.0728 1.87423C2.76235 2.74984 1.74097 3.99439 1.13784 5.45049C0.534703 6.90659 0.376895 8.50884 0.684371 10.0546C0.991847 11.6004 1.7508 13.0203 2.86525 14.1348C3.9797 15.2492 5.39959 16.0082 6.94538 16.3156C8.49116 16.6231 10.0934 16.4653 11.5495 15.8622C13.0056 15.259 14.2502 14.2377 15.1258 12.9272C16.0014 11.6167 16.4688 10.0761 16.4688 8.5C16.468 6.38679 15.6282 4.36035 14.1339 2.86609C12.6397 1.37182 10.6132 0.532015 8.5 0.53125ZM13.1431 6.70437L7.54907 12.2931C7.50668 12.3376 7.45553 12.3729 7.39884 12.3967C7.34215 12.4204 7.28115 12.4322 7.21969 12.4312C7.15917 12.4311 7.09929 12.4189 7.04361 12.3951C6.98793 12.3714 6.9376 12.3367 6.89563 12.2931L3.85688 9.25438C3.81279 9.21215 3.7777 9.16143 3.75373 9.10528C3.72976 9.04913 3.7174 8.98871 3.7174 8.92766C3.7174 8.8666 3.72976 8.80618 3.75373 8.75003C3.7777 8.69388 3.81279 8.64317 3.85688 8.60094L5.19563 7.25688C5.28347 7.1725 5.40055 7.12538 5.52235 7.12538C5.64415 7.12538 5.76122 7.1725 5.84907 7.25688L7.21969 8.6275L11.1456 4.70687C11.2322 4.62062 11.3491 4.57174 11.4713 4.57075C11.5934 4.56976 11.7111 4.61672 11.7991 4.70156L13.1431 6.05094C13.1871 6.09259 13.2221 6.14286 13.2459 6.19861C13.2696 6.25436 13.2817 6.3144 13.2813 6.375C13.2812 6.43632 13.269 6.49701 13.2453 6.55355C13.2215 6.6101 13.1868 6.66137 13.1431 6.70437Z'
            fill='#F75E39'
          />
        </g>
        <defs>
          <clipPath id='clip0_230_134'>
            <rect width='17' height='17' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
    features: [
      { id: 1, title: "This is the first feature" },
      { id: 2, title: "Second Feature Included" },
      { id: 3, title: "Third one will be right here" },
      { id: 4, title: "Another Feature Included here" },
      { id: 5, title: "Feature will be written here" },
      { id: 6, title: "This is the last feature" },
    ],
  },
];

const ShiftSmart = () => {
  return (
    <section className='bg-pricing-mobile lg:bg-pricing bg-no-repeat bg-right-bottom lg:bg-right-top py-16 md:py-24 lg:py-28 pl-6 xl:px-8'>
      <div className='max-w-base mx-auto'>
        <div className='px-8'>
          <h4>ShiftSmart Pricing</h4>
          <h2>Check Our Pricing Plans</h2>
        </div>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            500: {
              slidesPerView: 1.3,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className='mySwiper mt-7 lg:mt-12'>
          {data.map((item) => (
            <SwiperSlide className='px-5 xl:px-0' key={item.id}>
              <div className='space-y-10 bg-white transition-all duration-200 rounded-[2rem] lg:rounded-[2.9375rem] shadow-base py-7 px-8 lg:py-10 lg:px-11'>
                <div>
                  <h3 className='font-medium text-xl text-brand-primary'>
                    {item.subtitle}
                  </h3>
                  <h2 className='mt-3'>{item.title}</h2>
                  <p className='max-w-[14rem] mt-3'>{item.text}</p>
                </div>
                <div className='space-y-2.5'>
                  {item.features.map((feature) => (
                    <div
                      key={feature.id}
                      className='flex items-center space-x-2.5'>
                      <span>{item.icon}</span>
                      <p className='font-medium text-black'>{feature.title}</p>
                    </div>
                  ))}
                </div>
                <LinkButton
                  href='/'
                  className='group w-36 gap-x-4 font-medium flex justify-center items-center bg-[#f8f8f8] text-black lg:hover:text-white lg:hover:bg-brand-primary rounded-full duration-200 py-3 px-7'>
                  <span>Contact</span>
                  <span className='group-hover:translate-x-2 transition-all duration-200'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='17'
                      stroke='currentColor'
                      viewBox='0 0 18 17'
                      className='fill-black'>
                      <g clip-path='url(#clip0_128_18)'>
                        <path
                          d='M16.678 7.71511L13.3368 4.3739L12.836 4.87469L16.107 8.14578H0.00238037V8.85411H16.1056L12.8353 12.1245L13.336 12.6253L16.678 9.28336C17.11 8.85128 17.11 8.14719 16.678 7.71511Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_128_18'>
                          <rect
                            width='17'
                            height='17'
                            fill='white'
                            transform='translate(0.00238037)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </LinkButton>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShiftSmart;

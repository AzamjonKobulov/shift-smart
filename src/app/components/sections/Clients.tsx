'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Button from '../base/Button';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Navigation } from 'swiper/modules';

interface Data {
  id: number;
  title: string;
  text: string;
  img: string;
  name: string;
  business: string;
}

const data: Data[] = [
  {
    id: 1,
    title: 'Japanese Restaurant',
    text: "We run a sushi restaurant in Sydney, Australia with about 25 employees, and before we started using shiftsmart we used to write down our arrival and departure times on a piece of paper in the staff room, as well as our shift preferences for the following week. With shiftsmart, staff can keep track on their mobile phones, and managers can keep track on their own cell phones at any time. Most of our staff are non-Japanese, but it is easy to explain in English and reduces the manager's workload, making it a highly recommended tool.",
    img: '/assets/images/img-clients-1.png',
    name: 'Hideki Yoshima',
    business: 'Japanese Restaurant',
  },
  {
    id: 2,
    title: 'Japanese Restaurant',
    text: "We run a sushi restaurant in Sydney, Australia with about 25 employees, and before we started using shiftsmart we used to write down our arrival and departure times on a piece of paper in the staff room, as well as our shift preferences for the following week. With shiftsmart, staff can keep track on their mobile phones, and managers can keep track on their own cell phones at any time. Most of our staff are non-Japanese, but it is easy to explain in English and reduces the manager's workload, making it a highly recommended tool.",
    img: '/assets/images/img-clients-2.png',
    name: 'Hideki Yoshima',
    business: 'Japanese Restaurant',
  },
  {
    id: 3,
    title: 'Japanese Restaurant',
    text: "We run a sushi restaurant in Sydney, Australia with about 25 employees, and before we started using shiftsmart we used to write down our arrival and departure times on a piece of paper in the staff room, as well as our shift preferences for the following week. With shiftsmart, staff can keep track on their mobile phones, and managers can keep track on their own cell phones at any time. Most of our staff are non-Japanese, but it is easy to explain in English and reduces the manager's workload, making it a highly recommended tool.",
    img: '/assets/images/img-clients-1.png',
    name: 'Hideki Yoshima',
    business: 'Japanese Restaurant',
  },
  {
    id: 4,
    title: 'Japanese Restaurant',
    text: "We run a sushi restaurant in Sydney, Australia with about 25 employees, and before we started using shiftsmart we used to write down our arrival and departure times on a piece of paper in the staff room, as well as our shift preferences for the following week. With shiftsmart, staff can keep track on their mobile phones, and managers can keep track on their own cell phones at any time. Most of our staff are non-Japanese, but it is easy to explain in English and reduces the manager's workload, making it a highly recommended tool.",
    img: '/assets/images/img-clients-2.png',
    name: 'Hideki Yoshima',
    business: 'Japanese Restaurant',
  },
];

const Clients: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="bg-clients bg-no-repeat bg-cover py-16 md:py-20 lg:py-28">
      <div className="relative max-w-base pb-16 mx-auto lg:px-8">
        <div className="px-8">
          <h4>ShiftSmart Reviews</h4>
          <h2>What Our Clients Are Saying</h2>
        </div>
        <Swiper
          onSlideChange={(swiper) => setActive(swiper.activeIndex)}
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={2}
          spaceBetween={40}
          // loop={true}
          coverflowEffect={{
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: true,
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          modules={[EffectCoverflow, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="mySwiper mt-10 lg:mt-20"
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="relative px-5 lg:px-0">
                {active !== index ? (
                  <div className="hidden lg:block absolute inset-0 bg-[#fcfcfc]/60"></div>
                ) : null}
                <div className="space-y-6 bg-white transition-all duration-200 rounded-[2.9375rem] client-shadow py-7 px-6 lg:py-10 lg:px-11">
                  <h3 className="font-bold text-2xl">{item.title}</h3>
                  <p className="">{item.text}</p>
                  <div className="flex items-center space-x-2 mt-10">
                    <div className="w-14 h-14 rounded-[1.25rem] overflow-hidden">
                      <Image
                        src={item.img}
                        className="w-full h-full"
                        width={54}
                        height={54}
                        alt="Client Image"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold">{item.name}</h5>
                      <p className="font-light">{item.business}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute flex items-center -bottom-5 lg:-bottom-10 space-x-5 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0">
          <Button className="prev-btn w-14 h-14 grid place-content-center rounded-full bg-brand-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <g clip-path="url(#clip0_128_30)">
                <path
                  d="M18.7284 9.07665L15.0581 5.14581L14.508 5.73498L18.1013 9.58331H0.410126V10.4166H18.0997L14.5072 14.2641L15.0573 14.8533L18.7284 10.9216C19.2031 10.4133 19.2031 9.58498 18.7284 9.07665Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_128_30">
                  <rect
                    width="18.6747"
                    height="20"
                    fill="white"
                    transform="translate(0.410126)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Button>
          <Button className="next-btn w-14 h-14 grid place-content-center rounded-full bg-brand-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_128_30)">
                <path
                  d="M18.7284 9.07665L15.0581 5.14581L14.508 5.73498L18.1013 9.58331H0.410126V10.4166H18.0997L14.5072 14.2641L15.0573 14.8533L18.7284 10.9216C19.2031 10.4133 19.2031 9.58498 18.7284 9.07665Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_128_30">
                  <rect
                    width="18.6747"
                    height="20"
                    fill="white"
                    transform="translate(0.410126)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;

"use client";
import Image from "next/image";
import SectionHeader from "../base/SectionHeader";
import SwiperButton from "../base/SwiperButton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

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
    title: "Japanese Restaurant",
    text: "We run a sushi restaurant in Sydney, Australia with about 25 employees, and before we started using shiftsmart we used to write down our arrival and departure times on a piece of paper in the staff room, as well as our shift preferences for the following week. With shiftsmart, staff can keep track on their mobile phones, and managers can keep track on their own cell phones at any time. Most of our staff are non-Japanese, but it is easy to explain in English and reduces the manager's workload, making it a highly recommended tool.",
    img: "/assets/images/img-clients-1.png",
    name: "Hideki Yoshima",
    business: "Japanese Restaurant",
  },
  {
    id: 2,
    title: "Japanese Restaurant",
    text: "We run a sushi restaurant in Sydney, Australia with about 25 employees, and before we started using shiftsmart we used to write down our arrival and departure times on a piece of paper in the staff room, as well as our shift preferences for the following week. With shiftsmart, staff can keep track on their mobile phones, and managers can keep track on their own cell phones at any time. Most of our staff are non-Japanese, but it is easy to explain in English and reduces the manager's workload, making it a highly recommended tool.",
    img: "/assets/images/img-clients-2.png",
    name: "Hideki Yoshima",
    business: "Japanese Restaurant",
  },
  {
    id: 3,
    title: "Japanese Restaurant",
    text: "We run a sushi restaurant in Sydney, Australia with about 25 employees, and before we started using shiftsmart we used to write down our arrival and departure times on a piece of paper in the staff room, as well as our shift preferences for the following week. With shiftsmart, staff can keep track on their mobile phones, and managers can keep track on their own cell phones at any time. Most of our staff are non-Japanese, but it is easy to explain in English and reduces the manager's workload, making it a highly recommended tool.",
    img: "/assets/images/img-clients-1.png",
    name: "Hideki Yoshima",
    business: "Japanese Restaurant",
  },
  {
    id: 4,
    title: "Japanese Restaurant",
    text: "We run a sushi restaurant in Sydney, Australia with about 25 employees, and before we started using shiftsmart we used to write down our arrival and departure times on a piece of paper in the staff room, as well as our shift preferences for the following week. With shiftsmart, staff can keep track on their mobile phones, and managers can keep track on their own cell phones at any time. Most of our staff are non-Japanese, but it is easy to explain in English and reduces the manager's workload, making it a highly recommended tool.",
    img: "/assets/images/img-clients-2.png",
    name: "Hideki Yoshima",
    business: "Japanese Restaurant",
  },
];

const Clients: React.FC = () => {
  return (
    <>
      <section className='bg-clients bg-no-repeat bg-cover py-16 md:py-24 lg:py-28'>
        <div className='relative max-w-base mx-auto overflow-hidden px-9'>
          <SectionHeader
            section='ShiftSmart Reviews'
            title='What Our Clients Are Saying'
          />

          <div className='relative overflow-hidden mt-2 lg:mt-12 -mx-10 py-8 px-7'>
            <Swiper
              slidesPerView={2}
              spaceBetween={40}
              loop
              navigation={{
                prevEl: ".client-prev-btn",
                nextEl: ".client-next-btn",
              }}
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              className='!overflow-visible '>
              {data.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className='bg-white relative shadow-base rounded-4xl py-7 px-6 lg:py-10 lg:px-11'>
                  <h3 className='font-bold text-2xl'>{item.title}</h3>
                  <p className='leading-6 mt-5 lg:mt-6'>{item.text}</p>
                  <div className='flex items-center space-x-5 mt-10'>
                    <Image
                      className='rounded-full object-cover'
                      src={item.img}
                      width={52}
                      height={52}
                      alt={item.name}
                    />
                    <div>
                      <h5 className='font-bold text-brand-gray-primary'>
                        {item.name}
                      </h5>
                      <p className='font-light'>{item.business}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='flex items-center justify-center lg:justify-start space-x-3 mt-4 md:mt-8'>
            <SwiperButton btn='client' left />
            <SwiperButton btn='client' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;

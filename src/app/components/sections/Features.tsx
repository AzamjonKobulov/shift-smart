"use client";
import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SectionHeader from "../base/SectionHeader";
import SwiperButton from "../base/SwiperButton";

interface FeatureTabs {
  id: number;
  title: string;
}

const data: FeatureTabs[] = [
  { id: 1, title: "Easy Scheduling" },
  { id: 2, title: "QR Code Check In/Out" },
  { id: 3, title: "Summary of working hours" },
  { id: 4, title: "Additional Feature" },
  { id: 5, title: "As many as you like here " },
  { id: 6, title: "Easy Scheduling" },
  { id: 7, title: "QR Code Check In/Out" },
  { id: 8, title: "Summary of working hours" },
  { id: 9, title: "Additional Feature" },
  { id: 10, title: "As many as you like here " },
];

const Features: React.FC = () => {
  return (
    <section className='relative overflow-hidden py-10 lg:py-28'>
      <div className='max-w-base mx-auto px-9'>
        <SectionHeader
          section='ShiftSmart Features'
          title='Nam libero tempore, cum soluta nobis est eligendi optio cumque. '
        />
        <p className='max-w-2xl text-xl text-black mt-6'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <FeaturesItemSlider />
      </div>
      <div className='3xl:max-w-8xl mx-auto relative overflow-hidden '>
        <FeaturesContent />
      </div>

      <div className='absolute h-1/5 md:h-1/2 w-full md:w-1/2 right-0 md:-right-20 lg:-right-4 2xl:!-right-20 bottom-0 md:-bottom-10'>
        <Image
          className='object-fill'
          src='/assets/images/bg-effect.png'
          fill
          alt=''
        />
      </div>
    </section>
  );
};

const FeaturesItemSlider = () => {
  const [active, setActive] = useState<number>(1);
  return (
    <div className='-mx-8 2xl:mx-0'>
      <Swiper
        loop
        grabCursor={true}
        slidesPerView={1.5}
        spaceBetween={12}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 4.5,
          },
        }}
        onSlideChange={(swiper) => {
          setActive(swiper.realIndex + 1);
        }}
        className='!overflow-visible mt-2 lg:mt-16 !p-8 2xl:!-mx-16'>
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`${
              active === item.id
                ? "bg-white text-brand-primary shadow-base"
                : "text-brand-gray-100"
            } !w-fit !shrink-0 rounded-full whitespace-nowrap px-7 py-3 xl:px-10 xl:py-5`}>
            <p className='xl:text-xl font-bold text-current'>{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const slides = [1, 2, 3, 4];

const FeaturesContent = () => (
  <div className='max-w-base mx-auto md:grid md:grid-cols-2 items-center mt-5 lg:mt-16 px-9'>
    <div className='max-w-md lg:pb-8'>
      <Swiper
        loop
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          prevEl: ".features-prev-btn",
          nextEl: ".features-next-btn",
        }}
        modules={[Navigation]}>
        {slides.map((slide) => (
          <SwiperSlide key={slide}>
            <h3 className='text-4xl font-bold'>
              Big title for the first feature right here.
            </h3>
            <p className='mt-6'>
              <strong>Sed ut perspiciatis unde</strong> omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
              <br />
              <br />
              Nemo enim ipsam <strong>voluptatem quia voluptas sit</strong>{" "}
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='hidden md:flex items-center justify-start space-x-3 mt-4 md:mt-14'>
        <SwiperButton btn='features' left />
        <SwiperButton btn='features' />
      </div>
    </div>
    <div className='relative md:max-w-lg w-full h-72 md:h-[32rem] lg:h-[38rem] -ml-4 md:ml-auto z-10'>
      <div className='md:absolute md:top-0 md:left-0 2xl:!left-20 w-full md:w-[50rem] h-full'>
        <Image
          className='object-contain'
          src='/assets/images/feature-img.png'
          alt='Feature '
          fill
        />
      </div>
    </div>
  </div>
);

export default Features;

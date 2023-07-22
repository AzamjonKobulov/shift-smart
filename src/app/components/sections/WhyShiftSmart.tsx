"use client";
import SectionHeader from "../base/SectionHeader";
import { IconFour, IconOne, IconThree, IconTwo } from "../icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

interface Data {
  id: number;
  icon: React.ReactNode;
  title: string;
  text: string;
}

const data: Data[] = [
  {
    id: 1,
    icon: <IconOne />,
    title: "Lorem ipsum dolor sit amet",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
  },
  {
    id: 2,
    icon: <IconTwo />,
    title: "Exercitationem ullam",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.",
  },
  {
    id: 3,
    icon: <IconThree />,
    title: "Lorem ipsum dolor sit amet",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  },
  {
    id: 4,
    icon: <IconFour />,
    title: "Sed quia consequuntur",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt nque.",
  },
];

const WhyShiftSmart = () => {
  const destroySwiper = (swiper: any) => {
    if (swiper.width > 1119) {
      swiper.destroy();
    }
  };
  return (
    <>
      <section className='relative overflow-hidden py-14 xl:pt-24 xl:pb-32 mt-10'>
        <div className='max-w-base mx-auto px-9'>
          <SectionHeader
            section='Why ShiftSmart?'
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />

          <Swiper
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1.4,
                spaceBetween: 32,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            onResize={(swiper) => destroySwiper(swiper)}
            className='why-shiftsmart-swiper !overflow-visible mt-10 lg:mt-20'>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='w-12 h-12 xl:w-14 xl:h-14'>{item.icon}</div>
                <h4 className='text-base-sm lg:text-lg/5 font-bold mt-7'>
                  {item.title}
                </h4>
                <p className='mt-5'>{item.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='line absolute top-0 left-0 h-full w-full lg:w-[87%] xl:rounded-r-[7rem] overflow-hidden'>
          <Image
            className='object-cover'
            src='/assets/images/bg-shift-smart.png'
            alt='Why ShiftSmart bg'
            fill
            priority
          />
        </div>
      </section>
    </>
  );
};

export default WhyShiftSmart;

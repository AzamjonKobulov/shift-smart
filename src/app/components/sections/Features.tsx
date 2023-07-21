'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Button from '../base/Button';

// interface FeatureData {
//   id: number;
//   title: string;
//   text1: string;
//   text2: string;
//   img: string;
// }

interface FeatureTabs {
  id: number;
  title: string;
}

// const dataSwiper: FeatureData[] = [
//   {
//     id: 1,
//     title: 'Big title for the first feature right here.',
//     text1:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//     text2:
//       'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
//     img: '/assets/images/img-big.png',
//   },
//   {
//     id: 2,
//     title: 'Big title for the first feature right here.',
//     text1:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//     text2:
//       'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
//     img: '/assets/images/img-big.png',
//   },
//   {
//     id: 3,
//     title: 'Big title for the first feature right here.',
//     text1:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//     text2:
//       'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
//     img: '/assets/images/img-big.png',
//   },
//   {
//     id: 4,
//     title: 'Big title for the first feature right here.',
//     text1:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//     text2:
//       'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
//     img: '/assets/images/img-big.png',
//   },
//   {
//     id: 5,
//     title: 'Big title for the first feature right here.',
//     text1:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//     text2:
//       'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
//     img: '/assets/images/img-big.png',
//   },
// ];

const dataSwiperTab: FeatureTabs[] = [
  { id: 1, title: 'Easy Scheduling' },
  { id: 2, title: 'QR Code Check In/Out' },
  { id: 3, title: 'Summary of working hours' },
  { id: 4, title: 'Additional Feature' },
  { id: 5, title: 'As many as you like here ' },
];

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [swiper, setSwiper] = useState<any>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (swiper) {
      if (index >= swiper.params.slidesPerView) {
        swiper.slideToLoop(index);
      } else {
        swiper.slideTo(index);
      }
    }
  };

  return (
    <section className="lg:bg-feature bg-no-repeat bg-right-bottom pt-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-base mx-auto relative px-8">
        <h4>ShiftSmart Features</h4>
        <h2>
          Nam libero tempore, cum soluta nobis est{' '}
          <br className="hidden md:block" /> eligendi optio cumque.{' '}
        </h2>
        <p className="max-w-[40.625rem] text-xl text-black mt-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>

      <div className="max-w-[80rem] h-24 lg:h-28 mx-auto flex space-x-5 mt-10 lg:mt-24">
        {dataSwiperTab.map((tab, index) => (
          <button
            onClick={() => handleTabClick(index)}
            key={tab.id}
            className={`text-sm -ml-8 lg:ml-0 lg:text-xl min-w-[17rem] h-2/3 rounded-full text-center ${
              activeTab === index ? 'tab-shadow' : 'text-brand-gray-100'
            }`}
          >
            <h5 className="text-xl font-bold">{tab.title}</h5>
          </button>
        ))}
      </div>

      <div className="relative mt-6 lg:mt-16">
        <div className="max-w-base mx-auto flex flex-col md:flex-row gap-10 items-center lg:pb-0">
          <div className="w-full md:w-1/2 px-8">
            <Swiper
              onSwiper={setSwiper}
              spaceBetween={10}
              initialSlide={activeTab}
              onSlideChange={(swiper) => {
                setActiveTab(swiper.activeIndex);
              }}
              navigation={{
                nextEl: '.next',
                prevEl: '.prev',
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 min-h-[22rem] lg:min-h-[27em]"
            >
              <SwiperSlide>
                <div className="order-1 lg:order-2 relative space-y-7 lg:space-y-10">
                  <div className="max-w-md  space-y-4 lg:space-y-8">
                    <h3 className="font-bold text-title leading-9 lg:text-4xl lg:leading-10">
                      Big title for the first feature right here.
                    </h3>
                    <div className="space-y-4 lg:space-y-8">
                      <p>
                        <b>Sed ut perspiciatis unde</b> omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis
                        et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <p>
                        Nemo enim ipsam <b>voluptatem quia voluptas sit</b>{' '}
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="order-1 lg:order-2 relative space-y-7 lg:space-y-10">
                  <div className="max-w-md  space-y-4 lg:space-y-8">
                    <h3 className="font-bold text-title leading-9 lg:text-4xl lg:leading-10">
                      Big title for the first feature right here.
                    </h3>
                    <div className="space-y-4 lg:space-y-8">
                      <p>
                        <b>Sed ut perspiciatis unde</b> omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis
                        et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <p>
                        Nemo enim ipsam <b>voluptatem quia voluptas sit</b>{' '}
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="order-1 lg:order-2 relative space-y-7 lg:space-y-10">
                  <div className="max-w-md  space-y-4 lg:space-y-8">
                    <h3 className="font-bold text-title leading-9 lg:text-4xl lg:leading-10">
                      Big title for the first feature right here.
                    </h3>
                    <div className="space-y-4 lg:space-y-8">
                      <p>
                        <b>Sed ut perspiciatis unde</b> omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis
                        et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <p>
                        Nemo enim ipsam <b>voluptatem quia voluptas sit</b>{' '}
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="order-1 lg:order-2 relative space-y-7 lg:space-y-10">
                  <div className="max-w-md  space-y-4 lg:space-y-8">
                    <h3 className="font-bold text-title leading-9 lg:text-4xl lg:leading-10">
                      Big title for the first feature right here.
                    </h3>
                    <div className="space-y-4 lg:space-y-8">
                      <p>
                        <b>Sed ut perspiciatis unde</b> omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis
                        et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <p>
                        Nemo enim ipsam <b>voluptatem quia voluptas sit</b>{' '}
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="order-1 lg:order-2 relative space-y-7 lg:space-y-10">
                  <div className="max-w-md  space-y-4 lg:space-y-8">
                    <h3 className="font-bold text-title leading-9 lg:text-4xl lg:leading-10">
                      Big title for the first feature right here.
                    </h3>
                    <div className="space-y-4 lg:space-y-8">
                      <p>
                        <b>Sed ut perspiciatis unde</b> omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis
                        et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <p>
                        Nemo enim ipsam <b>voluptatem quia voluptas sit</b>{' '}
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="absolute flex items-center bottom-0 space-x-5 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
                <Button className="prev w-12 h-12 md:w-14 md:h-14 grid place-content-center rounded-full bg-brand-primary">
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
                <Button className="next w-12 h-12 md:w-14 md:h-14 grid place-content-center rounded-full bg-brand-primary">
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
            </Swiper>
          </div>
          <div className="md:static pb-16 w-full md:w-1/2 bg-feature-mobile bg-top bg-no-repeat bg-cover">
            <Image
              className="hidden sm:w-[20rem] md:w-[30rem] lg:w-auto md:block absolute right-0 -top-5 lg:-top-20"
              width={654}
              height={654}
              src="/assets/images/img-hero.png"
              alt="Person Image"
            />
            <Image
              className="md:hidden w-full right-0 "
              width={654}
              height={654}
              src="/assets/images/img-feature-mobile.svg"
              alt="Person Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

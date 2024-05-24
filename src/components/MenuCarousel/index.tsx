import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

interface MenuCarouselProps extends SwiperOptions {
  contentSwiper: React.ReactNode[];
}

export const MenuCarousel: React.FC<MenuCarouselProps> = ({
  contentSwiper,
  navigation,
  ...swiperProps
}) => {
  const navigationProps = navigation
    ? {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
        disabledClass: 'opacity-40',
      }
    : false;

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="relative"
      navigation={navigationProps}
      {...swiperProps}
    >
      {contentSwiper.map((el, index) => {
        return <SwiperSlide key={index}>{el}</SwiperSlide>;
      })}
      {navigation && (
        <>
          <div className="swiper-button-next2 text-red-600 absolute top-1/3 right-1 z-10 cursor-pointer active:opacity-5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="#8e9091" />
              <path
                d="M18 14L26 22L18 30"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="swiper-button-prev2 absolute top-1/3 left-1 z-10 cursor-pointer active:opacity-5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="#8e9091" />
              <path
                d="M26 14L18 22L26 30"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </>
      )}
    </Swiper>
  );
};

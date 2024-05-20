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

export const MenuCarousel: React.FC<MenuCarouselProps> = ({ contentSwiper, ...swiperProps }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="menuCarousel"
      {...swiperProps}
    >
      {contentSwiper.map((el, index) => {
        return <SwiperSlide key={index}>{el}</SwiperSlide>;
      })}
    </Swiper>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

type MenuCarouselProps = {
  contentSwiper: React.ReactNode[];
  slidesPerView: number;
  navigation: boolean;
  pagination: boolean;
  autoPlay: boolean;
  autoplayConfig?: {
    delay: number;
    disableOnInteraction: boolean;
  };
};

export const MenuCarousel = ({
  contentSwiper,
  slidesPerView,
  autoPlay,
  pagination,
  navigation,
  autoplayConfig,
}: MenuCarouselProps) => {
  return (
    <>
      <Swiper
        pagination={pagination}
        navigation={navigation}
        slidesPerView={slidesPerView}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={autoPlay ? autoplayConfig : false}
        className="menuCarousel"
      >
        {contentSwiper.map((el, index) => {
          return <SwiperSlide key={index}>{el}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

type MenuCarouselProps = {
  HighlightBanners: React.ReactNode[];
};

export const MenuCarousel = ({ HighlightBanners }: MenuCarouselProps) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {HighlightBanners.map((el, index) => {
        return <SwiperSlide key={index}>{el}</SwiperSlide>;
      })}
    </Swiper>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

type MenuCarouselProps = {
  HighlightBanners: React.ReactNode[];
};

export const MenuCarousel = ({ HighlightBanners }: MenuCarouselProps) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {HighlightBanners.map((el, index) => {
        return <SwiperSlide key={index}>{el}</SwiperSlide>;
      })}
    </Swiper>
  );
};

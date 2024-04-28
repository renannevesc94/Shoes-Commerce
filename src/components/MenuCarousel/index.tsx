import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
6;
import { Pagination, Autoplay, Navigation } from "swiper/modules";

type MenuCarouselProps = {
  HighlightBanners: React.ReactNode[];
  slidesPerView: number;
  navigation: boolean;
  autoPlay: boolean;
  autoplayConfig?: {
    delay: number;
    disableOnInteraction: boolean;
  };
};

export const MenuCarousel = ({
  HighlightBanners,
  slidesPerView,
  autoPlay,
  navigation,
  autoplayConfig,
}: MenuCarouselProps) => {
  return (
    <Swiper
      pagination={true}
      navigation={navigation}
      slidesPerView={slidesPerView}
      modules={[Pagination, Autoplay, Navigation]}
      autoplay={autoPlay ? autoplayConfig : false}
      className="menuCarousel"
    >
      {HighlightBanners.map((el, index) => {
        return <SwiperSlide key={index}>{el}</SwiperSlide>;
      })}
    </Swiper>
  );
};

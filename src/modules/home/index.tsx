import { MenuCarousel, Header } from "../../components";
import { ProductCard } from "../../components/ProductCard";
import { HighlightBanner } from "./components/HighlightsBanner";

const highlightBanners = [
  {
    title: "Novidades!",
    message: "Confira nossa última coleção!",
    backgroundColor: "primary",
  },
  {
    title: "Promoção!",
    message: "Descontos imperdíveis em calçados!",
    backgroundColor: "secondary",
  },
  {
    title: "Estilo em alta!",
    message: "Descubra os modelos mais modernos!",
    backgroundColor: "default",
  },
];

export const Home = () => {
  function isHighlightColor(color: string): color is "default" | "primary" | "secondary" {
    return ["default", "primary", "secondary"].includes(color);
  }

  const banners = highlightBanners.map(el => {
    return (
      <HighlightBanner
        content={el}
        backgroundColor={isHighlightColor(el.backgroundColor) ? el.backgroundColor : "default"}
      />
    );
  });

  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <MenuCarousel
          autoPlay={true}
          navigation={false}
          autoplayConfig={{ delay: 3500, disableOnInteraction: false }}
          HighlightBanners={banners}
          slidesPerView={1}
        />
        <section className="flex items-center justify-center w-full mt-6 flex-wrap">
          <h2 className="w-full pl-4 font-extrabold text-center text-lg">Novidades</h2>
          <MenuCarousel
            autoPlay={false}
            navigation={true}
            slidesPerView={2}
            HighlightBanners={[<ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />]}
          />
        </section>

        <section className="flex items-center justify-center w-full mt-6 flex-wrap">
          <h2 className="w-full pl-4 font-extrabold text-center text-lg">Lançamentos</h2>
          <MenuCarousel
            autoPlay={false}
            navigation={true}
            slidesPerView={2}
            HighlightBanners={[<ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />]}
          />
        </section>
      </div>
    </>
  );
};

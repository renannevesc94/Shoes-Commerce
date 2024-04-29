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

const dataTenis = [
  {
    title: "Tênis da Nike",
    price: "255,50",
    rating: 3,
    urlImage: "tenis-card.png",
  },
  {
    title: "Tênis da Adidas",
    price: "320,00",
    rating: 4,
    urlImage: "tenis-card2.png",
  },
  {
    title: "Tênis da Puma",
    price: "700,50",
    rating: 2,
    urlImage: "tenis-card3.png",
  },
  {
    title: "Tênis da New Balance",
    price: "125,50",
    rating: 5,
    urlImage: "tenis-card4.png",
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
          HighlightBanners={dataTenis.map(el => {
            return (
              <ProductCard
                price={el.price}
                rating={el.rating}
                title={el.title}
                urlImage={el.urlImage}
              />
            );
          })}
        />
      </section>

      <section className="flex items-center justify-center w-full mt-6 flex-wrap">
        <h2 className="w-full pl-4 font-extrabold text-center text-lg">Lançamentos</h2>
        <MenuCarousel
          autoPlay={false}
          navigation={true}
          slidesPerView={2}
          HighlightBanners={dataTenis.map(el => {
            return (
              <ProductCard
                price={el.price}
                rating={el.rating}
                title={el.title}
                urlImage={el.urlImage}
              />
            );
          })}
        />
      </section>
    </div>
  );
};

/* [
  <ProductCard
    price="125,50"
    rating={5}
    title="Tenis da Nike"
    urlImage="tenis-card.png"
  />,
  <ProductCard
    price="125,50"
    rating={3}
    title="Tenis da Nike"
    urlImage="tenis-card2.png"
  />,
  <ProductCard
    price="125,50"
    rating={4}
    title="Tenis da Nike"
    urlImage="tenis-card3.png"
  />,
] */

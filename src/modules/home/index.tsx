import { MenuCarousel, Header } from "../../components";
import { ProductCard } from "../../components/ProductCard";
import { HighlightBanner } from "./components/HighlightsBanner";
import { NewsletterForm } from "./components/NewsletterForm";

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

const dataTenis2 = [
  {
    title: "Tênis da Nike",
    price: "500,00",
    rating: 5,
    urlImage: "tenis-card5.png",
  },
  {
    title: "Tênis da Adidas",
    price: "399,20",
    rating: 4,
    urlImage: "tenis-card6.png",
  },
  {
    title: "Tênis da Puma",
    price: "778,99",
    rating: 4,
    urlImage: "tenis-card7.png",
  },
  {
    title: "Tênis da New Balance",
    price: "1199,00",
    rating: 3,
    urlImage: "tenis-card8.png",
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
      <Header />

      <main className="w-screen h-screen">
        <section>
          <MenuCarousel
            autoPlay={true}
            navigation={false}
            pagination={true}
            autoplayConfig={{ delay: 3500, disableOnInteraction: false }}
            contentSwiper={banners}
            slidesPerView={1}
          />
        </section>

        <section className="flex items-center justify-center w-full mt-6 flex-wrap">
          <h2 className="w-full pl-4 font-extrabold text-center text-2xl">Novidades</h2>
          <MenuCarousel
            autoPlay={false}
            navigation={true}
            pagination={false}
            slidesPerView={2}
            contentSwiper={dataTenis2.map(el => {
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
          <h2 className="w-full pl-4 font-extrabold text-center text-2xl">Lançamentos</h2>
          <MenuCarousel
            autoPlay={false}
            navigation={true}
            pagination={false}
            slidesPerView={2}
            contentSwiper={dataTenis.map(el => {
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

        <section className="p-2 m-2 bg-slate-200 rounded-xl mt-10">
          <NewsletterForm />
        </section>
      </main>
    </>
  );
};

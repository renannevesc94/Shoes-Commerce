import { MenuCarousel, Header } from "../../components";
import { FallbackProductCard } from "../../components/FallbackProductCard";
import { ProductCard } from "../../components/ProductCard";
import { FallbackHighlightBanner } from "./components/FallbackHighlightsBanner";
import { HighlightBanner } from "./components/HighlightsBanner";
import { MakersCarousel } from "./components/MakersCarousel";
import { NewsletterForm } from "./components/NewsletterForm";
import { useGetHighLights } from "./hooks/use-getHighLights";
import { useGetNovelties } from "./hooks/use-getNovelties";
import { useGetReleases } from "./hooks/use-getReleases";
export const Home = () => {
  const { data: releases } = useGetReleases();
  const { data: novelties } = useGetNovelties();
  const { data: highlightBanners } = useGetHighLights();
  const makers = [
    { name: "adidas" },
    { name: "asics" },
    { name: "converse" },
    { name: "nike" },
    { name: "under" },
  ];

  function isHighlightColor(color: string): color is "default" | "primary" | "secondary" {
    return ["default", "primary", "secondary"].includes(color);
  }

  const banners = highlightBanners?.map(el => {
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={true}
            contentSwiper={banners ? banners : [<FallbackHighlightBanner />]}
            slidesPerView={1}
          />
        </section>

        <section className="flex items-center justify-center w-full mt-6 flex-wrap">
          <h2 className="w-full font-extrabold text-center text-xl">Novidades</h2>
          <MenuCarousel
            navigation={true}
            slidesPerView={2}
            contentSwiper={
              releases
                ? releases.map(el => {
                    return (
                      <ProductCard
                        price={el.price}
                        rating={el.rating}
                        title={el.title}
                        urlImage={el.urlImage}
                      />
                    );
                  })
                : [<FallbackProductCard />, <FallbackProductCard />]
            }
          />
        </section>

        <section className="flex items-center justify-center w-full mt-6 flex-wrap">
          <h2 className="w-full font-extrabold text-center text-xl">Lançamentos</h2>
          <MenuCarousel
            navigation={true}
            slidesPerView={2}
            contentSwiper={
              novelties
                ? novelties.map(el => {
                    return (
                      <ProductCard
                        price={el.price}
                        rating={el.rating}
                        title={el.title}
                        urlImage={el.urlImage}
                      />
                    );
                  })
                : [<FallbackProductCard />, <FallbackProductCard />]
            }
          />
        </section>

        <section className=" mt-4">
          <h2 className="text-center font-medium text-lg">Trabalhamos com as melhores marcas</h2>
          <MenuCarousel
            pagination={true}
            navigation={false}
            slidesPerView={1}
            contentSwiper={makers.map(maker => {
              return <MakersCarousel maker={maker.name} />;
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

import { MenuCarousel, Header } from "../../components";
import { ProductCard } from "../../components/ProductCard";
import { HighlightBanner } from "./components/HighlightsBanner";
import { NewsletterForm } from "./components/NewsletterForm";
import { useGetHighLights } from "./hooks/use-getHighLights";
import { useGetNovelties } from "./hooks/use-getNovelties";
import { useGetReleases } from "./hooks/use-getReleases";

export const Home = () => {
  const { data: releases } = useGetReleases();
  const { data: novelties } = useGetNovelties();
  const { data: highlightBanners } = useGetHighLights();

  console.log(releases);

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
            autoPlay={true}
            navigation={false}
            pagination={true}
            autoplayConfig={{ delay: 3500, disableOnInteraction: false }}
            contentSwiper={banners ? banners : []}
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
                : []
            }
          />
        </section>

        <section className="flex items-center justify-center w-full mt-6 flex-wrap">
          <h2 className="w-full pl-4 font-extrabold text-center text-2xl">Lançamentos</h2>

          <MenuCarousel
            autoPlay={false}
            navigation={true}
            pagination={false}
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
                : []
            }
          />
        </section>

        <section className="p-2 m-2 bg-slate-200 rounded-xl mt-10">
          <NewsletterForm />
        </section>
      </main>
    </>
  );
};

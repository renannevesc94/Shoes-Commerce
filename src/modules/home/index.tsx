import { MenuCarousel, Header } from "../../components";
import { HighlightBanner } from "./components/HighlightsBanner";

const highlightBanners = [
  {
    title: "Novidades!",
    message: "Confira nossa última coleção!",
  },
  {
    title: "Promoção!",
    message: "Descontos imperdíveis em calçados!",
  },
  {
    title: "Estilo em alta!",
    message: "Descubra os modelos mais modernos!",
  },
];

export const Home = () => {
  const banners = highlightBanners.map(el => {
    return <HighlightBanner props={el} />;
  });

  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <MenuCarousel HighlightBanners={banners}></MenuCarousel>
      </div>
    </>
  );
};

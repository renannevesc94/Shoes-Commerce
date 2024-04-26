import { MenuCarousel, Header } from "../../components";
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
        <MenuCarousel HighlightBanners={banners}></MenuCarousel>
      </div>
    </>
  );
};

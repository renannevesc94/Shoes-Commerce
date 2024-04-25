import { Header } from "../../components/Header";
import { MenuCarousel } from "../../components/MenuCarousel";
import { HighlightBanner } from "./components/HighlightsBanner";

export const Home = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <MenuCarousel
          HighlightBanners={[<HighlightBanner />, <HighlightBanner />, <HighlightBanner />]}
        ></MenuCarousel>
      </div>
    </>
  );
};

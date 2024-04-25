import { Header } from "../../components/Header";
import { HighlightBanner } from "./components/HighlightsBanner";

export const Home = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <HighlightBanner />
      </div>
    </>
  );
};

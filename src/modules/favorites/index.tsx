import { Footer, Header, MenuCarousel, ProductCard } from '../../components';
import { CurrentProductProvider } from '../../providers/CurrentProduct';
import { useFavorites } from '../../providers/FavoritesProvider';

export const Favorites = () => {
  const { favoritesProducts } = useFavorites();
  const arrFavoritesProducts = Object.values(favoritesProducts);

  return (
    <main className="h-full w-full flex flex-col">
      <Header />
      <h2 className="text-center font-semibold text-xl text-slate-600 mt-6">
        Sua lista de favoritos...
      </h2>

      <section className="flex w-full mt-8 justify-center items-center">
        <MenuCarousel
          navigation={true}
          slidesPerView={1}
          centeredSlides={true}
          contentSwiper={arrFavoritesProducts.map((el) => {
            return (
              <CurrentProductProvider product={el}>
                <div className="w-full flex items-center justify-center bg-gray-100">
                  <ProductCard
                    price={el.price}
                    rating={el.rating}
                    title={el.title}
                    urlImage={el.urlImage}
                    key={el.id}
                  />
                </div>
              </CurrentProductProvider>
            );
          })}
        />
      </section>

      <footer className="mt-28">
        <Footer />
      </footer>
    </main>
  );
};

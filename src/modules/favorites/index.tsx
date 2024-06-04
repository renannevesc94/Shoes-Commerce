import { ToastContainer } from 'react-toastify';
import { Footer, Header, MenuCarousel, ProductCard } from '../../components';
import { CurrentProductProvider } from '../../providers/CurrentProduct';
import { useFavorites } from '../../providers/FavoritesProvider';

export const Favorites = () => {
  const { favoritesProducts } = useFavorites();
  const arrFavoritesProducts = Object.values(favoritesProducts);

  return (
    <div className="flex flex-col h-svh w-screen">
      <Header />
      <main className="w-screen flex-grow">
        <section className="flex flex-col">
          <h2 className="text-center w-full  font-semibold text-xl text-slate-600 mt-6">
            Sua lista de favoritos...
          </h2>
          <div className="flex w-full mt-8 justify-center items-center">
            <MenuCarousel
              navigation={true}
              slidesPerView={1}
              centeredSlides={true}
              contentSwiper={arrFavoritesProducts.map((el) => {
                return (
                  <CurrentProductProvider product={el}>
                    <div className="w-full flex items-center justify-center">
                      <ProductCard
                        id={el.id}
                        availableNumbers={el.availableNumbers}
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
          </div>
        </section>
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
};

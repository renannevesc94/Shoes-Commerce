import { useNavigate } from 'react-router-dom';
import { FavoritesHeader } from '../FavoritesHeader';
import { ItemsMenuLi, NavMobile, ShoppingCart } from '../index';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-screen h-14 bg-whiteDefault shadow-xl mb-2 flex justify-items-center items-center">
      <div className="justify-self-start w-1/5 ">
        <NavMobile />
        <ul className="hidden lg:flex lg:ml-10 lg:items-center gap-5 text-md font-semibold">
          <ItemsMenuLi isMobile={false}>Feminino</ItemsMenuLi>
          <ItemsMenuLi isMobile={false}>Masculino</ItemsMenuLi>
          <ItemsMenuLi isMobile={false}>Infantil</ItemsMenuLi>
        </ul>
      </div>

      <div
        className="h-full w-3/5 flex items-center justify-center"
        onClick={() => navigate('/home')}
      >
        <img className="w-14" src="./logo.jpg" alt="" />
      </div>

      <div className="h-full w-1/5 gap-8 flex items-center justify-center content-center">
        <div className="flex mt-4 w-28 items-center justify-end">
          <FavoritesHeader />
        </div>
        <ShoppingCart />
      </div>
    </nav>
  );
};

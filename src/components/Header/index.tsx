import { ItemsMenuLi, NavMobile, ShoppingCart } from "../index";

export const Header = () => {
  return (
    <nav className="w-screen h-14 bg-whiteDefault shadow-xl mb-2 grid grid-cols-4 justify-items-center items-center">
      <div className="justify-self-start ">
        <NavMobile />
        <ul className="hidden lg:flex lg:ml-10 lg:items-center gap-5 text-md font-semibold">
          <ItemsMenuLi isMobile={false}>Feminino</ItemsMenuLi>
          <ItemsMenuLi isMobile={false}>Masculino</ItemsMenuLi>
          <ItemsMenuLi isMobile={false}>Infantil</ItemsMenuLi>
        </ul>
      </div>
      <div className="col-span-2">
        <img className="w-14" src="./logo.jpg" alt="" />
      </div>
      <ShoppingCart />
    </nav>
  );
};

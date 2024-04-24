import Hamburger from "hamburger-react";
import { useState } from "react";
import { IconUser } from "../Icons";
import { ItemMenuLi } from "../ItensMenuLi";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <div className="fixed left-0 w-4/5 shadow-md top-[3.5rem] pt-0 border-2  ">
          <div className="bg-slate-100 w-full h-10 flex items-center p-2 cursor-pointer">
            <IconUser />
            <span className="font-semibold ml-2">ENTRAR</span>
          </div>
          <ul className="grid gap-2">
            <ItemMenuLi isMobile={true}>Feminino</ItemMenuLi>
            <ItemMenuLi isMobile={true}>Masculino</ItemMenuLi>
            <ItemMenuLi isMobile={true}>Infantil</ItemMenuLi>
            <ItemMenuLi isMobile={true}>Promoções</ItemMenuLi>
          </ul>
        </div>
      )}
    </div>
  );
};

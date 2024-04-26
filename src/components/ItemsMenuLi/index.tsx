import { IconArrow } from "../Icons";

type ItemsMenuLiprops = {
  children: React.ReactNode;
  isMobile: boolean;
};
export const ItemsMenuLi = ({ children, isMobile }: ItemsMenuLiprops) => {
  return isMobile ? (
    <li className="w-full shadow-md h-10 flex items-center p-2 pr-4 justify-between">
      <span className="flex gap-1 text-lg font-light from-neutral-600">{children}</span>
      <IconArrow />
    </li>
  ) : (
    <li className="flex items-center gap-1 hover:text-neutral-400 transition-all cursor-pointer">
      {children}
    </li>
  );
};

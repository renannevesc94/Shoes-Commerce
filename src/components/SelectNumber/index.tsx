import { useCurrentProduct } from '../../providers/CurrentProduct';

export const SelectNumber = () => {
  const { availableNumbers } = useCurrentProduct();

  return (
    <select className="w-full h-8 text-center outline-none rounded-md">
      <option value="someOption">Tamanho</option>
      {availableNumbers.map((el, index) => {
        return (
          <option value={el} key={index}>
            {el}
          </option>
        );
      })}
    </select>
  );
};

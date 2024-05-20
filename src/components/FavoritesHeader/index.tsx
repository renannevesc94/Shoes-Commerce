import { useNavigate } from 'react-router-dom';
import { Iconfavorite } from '../Icons';

export const FavoritesHeader = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/favoritos');
      }}
    >
      <Iconfavorite fill="red" />
    </button>
  );
};

import { IconStar } from '../Icons';

type RatingStarProps = {
  rating: number;
};

export const RatingStar = ({ rating }: RatingStarProps) => {
  return (
    <span className="flex">
      {[...Array(5)].map((_, index) => (
        <IconStar
          key={index}
          strokeColor={index < rating ? '#ccc' : '#ccc'}
          fillColor={index < rating ? '#FCC200' : 'none'}
        />
      ))}
    </span>
  );
};

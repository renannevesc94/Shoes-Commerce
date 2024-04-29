import { IconStar } from "../Icons";

type RatingStarProps = {
  rating: number;
};

export const RatingStar = ({ rating }: RatingStarProps) => {
  return (
    <span className="flex">
      {[...Array(5)].map((_, index) => (
        <IconStar
          key={index}
          strokeColor={index < rating ? "#ccc" : "#ccc"}
          fillColor={index < rating ? "#ffff00" : "none"}
        />
      ))}
    </span>
  );
};

{
  /* <span className="flex">
      <IconStar strokeColor={"#ffff00"} fillColor={" #ffff00"} />
      <IconStar strokeColor={"#ffff00"} fillColor={" #ffff00"} />
      <IconStar strokeColor={"#ffff00"} fillColor={" #ffff00"} />
      <IconStar strokeColor={"#ffff00"} fillColor={" #ffff00"} />
      <IconStar strokeColor={"#ffff00"} fillColor={" #ffff00"} />
    </span> */
}

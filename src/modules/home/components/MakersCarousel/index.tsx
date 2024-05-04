interface MakerProps {
  maker: string;
}

export const MakersCarousel = ({ maker }: MakerProps) => {
  return (
    <div className=" h-16 mb-8 flex items-center justify-center rounded-lg">
      <img src={`./makers/${maker}.svg`} alt={`logo ${maker}`} className="w-2/5 h-full" />
    </div>
  );
};

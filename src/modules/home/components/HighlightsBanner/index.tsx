type HighlightBannerProps = {
  title: string;
  message: string;
};

export const HighlightBanner = ({ props }: { props: HighlightBannerProps }) => {
  return (
    <div className=" flex items-center justify-center w-full h-1/6 mt-2 ">
      <div className="w-11/12 h-full p-2.5 flex bg-gradient-to-br from-blue-500 to-blue-300 rounded-lg">
        <div className="w-4/6  pl-2 text-whitep flex flex-col gap-2">
          <h2 className="font-semibold  text-2xl">{props.title}</h2>
          <p className="font-semibold">{props.message}</p>
          <button className="bg-whitep w-3/5 h-2/4 rounded-lg font-semibold text-orange-700">
            Conferir
          </button>
        </div>
        <div className="w-2/4 h-full bg-slate-400 overflow-hidden rounded-xl shadow-lg ">
          <img src="./tenis.jpeg" className="w-full h-auto rounded-xl" />
        </div>
      </div>
    </div>
  );
};

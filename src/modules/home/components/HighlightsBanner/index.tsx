export const HighlightBanner = () => {
  return (
    <div className=" flex items-center justify-center w-full h-1/5 mt-12">
      <div className="w-11/12 h-full p-2.5 flex bg-gradient-to-br from-blue-500 to-blue-300 rounded-md">
        <div className="w-4/6  text-whitep flex flex-col gap-2">
          <h2 className="font-semibold  text-2xl">Lançamento 2024</h2>
          <p className="font-semibold">Nike Dunk novo lançamento 2024.</p>
        </div>
        <div className="w-2/4 h-full bg-slate-400 overflow-hidden rounded-xl shadow-lg ">
          <img src="./tenis.jpeg" className="w-full h-auto rounded-xl" />
        </div>
      </div>
    </div>
  );
};

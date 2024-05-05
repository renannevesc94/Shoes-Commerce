export const FallbackHighlightBanner = () => {
  return (
    <div className="flex items-center justify-center w-full h-1/6 p-1">
      <div className="w-full h-full p-2.5 flex rounded-lg bg-gray-300">
        <div className="w-4/6 pl-2 text-gray-700 flex flex-col gap-2">
          <div className="h-8 bg-gray-400 rounded-lg"></div>
          <div className="h-4 bg-gray-400 rounded-lg"></div>
          <div className="h-8 bg-gray-400 rounded-lg"></div>
        </div>
        <div className="w-2/4 h-full bg-gray-400 rounded-xl overflow-hidden shadow-lg"></div>
      </div>
    </div>
  );
};

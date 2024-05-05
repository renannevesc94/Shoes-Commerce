export const FallbackProductCard = () => {
  return (
    <div className="border-2 shadow-md w-48 h-64 flex flex-col items-center p-1 rounded-lg animate-pulse">
      <div className="w-full h-3/5 bg-gray-300 rounded-lg"></div>
      <div className="flex justify-between w-full">
        <div className="w-1/2 ml-1 h-4 bg-gray-300 rounded-lg"></div>
        <div className="w-1/4 mr-1 h-4 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="mt-1 font-bold w-full flex justify-center items-center">
        <div className="w-3/4 h-4 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="flex w-full h-10 items-center justify-center mt-2">
        <div className="w-2/3 h-8 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

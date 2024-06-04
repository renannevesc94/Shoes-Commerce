type HighlightBannerProps = {
  content: { title: string; message: string };
  backgroundColor: 'default' | 'primary' | 'secondary';
};

export const HighlightBanner = ({ content, backgroundColor }: HighlightBannerProps) => {
  const { title, message } = content;

  const getBackgroundColor = () => {
    switch (backgroundColor) {
      case 'primary':
        return 'bg-gradient-to-br from-sky-800 to-violet-800';

      case 'secondary':
        return 'bg-gradient-to-br from-sky-800 to-cyan-500';

      default:
        return 'bg-gradient-to-br from-rose-900 to-red-500';
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-1/6 p-1">
      <div className={`w-full h-full p-2.5 flex rounded-lg ${getBackgroundColor()}`}>
        <div className="w-4/6  pl-2 text-whiteDefault flex flex-col gap-2">
          <h2 className="font-semibold  text-2xl">{title}</h2>
          <p className="font-semibold">{message}</p>
          <button className="bg-whiteDefault w-3/5 h-2/4 rounded-lg font-semibold text-orange-700">
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

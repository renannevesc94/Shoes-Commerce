export const Footer = () => {
  return (
    <footer className="h-1/6 mt-4 w-screen bg-slate-800 flex items-center justify-center flex-col">
      <h2 className="text-sm font-medium text-whiteDefault">Formas de Pagamento</h2>
      <div className="bg-white h-10 w-full flex justify-center rounded-lg">
        <img src="./payment-credit-card.png" alt="" className="object-contain" />
      </div>
      <div>
        <div className="w-screen flex justify-center items-center">
          <div className="flex flex-col items-center text-whiteDefault">
            <span className="text-sm font-medium -mb-1">Desenvolvido por:</span>
            <span>Renan Neves</span>
          </div>
          <div className="w-40 h-full mt-4 flex  items-center justify-end gap-2">
            <a href="https://www.linkedin.com/in/renan-neves-dev" target="blank">
              <img src="./linkedin.svg" alt="icone Linkedin" className="w-10 h-10 mb-4" />
            </a>
            <a href="https://www.linkedin.com/in/renan-neves-dev" target="blank">
              <img src="./github.svg" alt="icone Linkedin" className="w-10 h-10 mb-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

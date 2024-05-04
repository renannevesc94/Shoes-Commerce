import { useState } from "react";
import { Button } from "../Button";
import { IconClose } from "../Icons";

type ModalProps = {
  title: string;
  information?: string;
};

export const Modal = ({ title, information }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`${
        isOpen ? "absolute" : "hidden"
      } top-24 flex items-center justify-center w-full h-full rounded-md`}
    >
      <div className={`w-full h-full relative ${isOpen ? "" : "hidden"}`}>
        <div className="absolute top-1 right-2 w-4">
          <button onClick={() => setIsOpen(false)} type="button">
            <IconClose />
          </button>
        </div>
        <div className="flex flex-col items-center w-full h-2/4 bg-whiteDefault gap-2 rounded-lg border-2 shadow-2xl shadow-slate-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" />
          </svg>

          <span className="text-2xl font-medium">{title}</span>
          <p className="text-center">{information}</p>

          <div className="w-1/4 h-10">
            <Button variant="outline" isFull={true} onClick={() => setIsOpen(false)} type="button">
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

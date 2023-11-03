import React from "react";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface Props {
  isError: boolean;
  modalContent: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubmitMessage({
  isError,
  modalContent,
  setIsModalOpen,
}: Props) {
  const TypeStyles = (isError: Props["isError"]) => {
    if (isError) {
      return "bg-red-100 border-red-500 text-red-700";
    } else {
      return "border-green-500 text-green-700 bg-green-100";
    }
  };

  return (
    <div
      className={twMerge(
        TypeStyles(isError),
        "w-[280px] h-[100px] md:w-1/3 md:h-1/3 py-20 rounded-lg flex justify-center items-center absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 z-50 shadow-md"
      )}
      role="alert"
    >
      <X
        size={26}
        className="text-dark cursor-pointer absolute top-2 right-2"
        onClick={() => setIsModalOpen(false)}
      />
      <p className="font-bold uppercase text-base">{modalContent}</p>
    </div>
  );
}

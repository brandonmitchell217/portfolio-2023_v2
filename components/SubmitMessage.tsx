import React from "react";
import { X } from "lucide-react";

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
  return (
    <div
      className={`w-[280px] h-[100px] lg:h-1/2 lg:w-1/2 rounded-lg flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${
        isError
          ? "bg-red-100 border-red-500 text-red-700"
          : "border-green-500 text-green-700 bg-green-100"
      }`}
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

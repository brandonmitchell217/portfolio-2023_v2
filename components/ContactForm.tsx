"use client";
import React, { useState } from "react";
import useWeb3forms from "use-web3forms";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import Button from "./ui/Button";
import SubmitMessage from "./ui/SubmitMessage";
import { twMerge } from "tailwind-merge";

interface FormData {
  Name: string;
  Email: string;
  Message: string;
}

const ContactForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const { submit } = useWeb3forms<FormData>({
    apikey: process.env.NEXT_PUBLIC_ACCESS_KEY as string,
    onSuccess: (successMessage, data) => {
      setModalContent(successMessage);
      setIsModalOpen(true);
      reset();
    },
    onError: (errorMessage, data) => {
      setIsError(true);
      setModalContent(errorMessage);
      // setIsModalOpen(true);
    },
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form className="lg:mt-20 lg:px-4 w-full flex justify-center items-center flex-col sm:items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="relative z-0">
            <input
              type="text"
              //   name="name"
              {...register("Name", {
                required: true,
                minLength: 3,
              })}
              className={`peer block w-full appearance-none border-0 border-b border-dark bg-transparent py-2.5 px-0 text-base focus:border-blue-600 focus:outline-none focus:ring-0 ${
                errors.Name && twMerge("border-red-700")
              }`}
            />
            <label
              className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-dark duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ${
                errors.Name && twMerge("text-red-700")
              }`}
            >
              Your name
            </label>
            {errors.Name && (
              <p className="text-red-700 font-semibold mt-1">
                Please enter a valid name
              </p>
            )}
          </div>
          <div className="relative z-0 grid-cols-1 md:grid-cols-2">
            <input
              type="text"
              //   name="email"
              {...register("Email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className={`peer block w-full appearance-none border-0 border-b border-dark bg-transparent py-2.5 px-0 text-base text-dark autofill:shadow-[inset_0_0_0px_1000px_#D8DBE2] focus:border-blue-600 focus:outline-none focus:ring-0 ${
                errors.Email && twMerge("border-red-700")
              }`}
            />
            <label
              className={`absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-dark duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ${
                errors.Email && twMerge("text-red-700")
              }`}
            >
              Your email
            </label>
            {errors.Email && (
              <p className="text-red-700 font-semibold mt-1">
                Please enter a valid email
              </p>
            )}
          </div>
          <div className="relative z-0 md:col-span-2">
            <textarea
              //   name="message"
              rows={5}
              {...register("Message", {
                required: true,
                minLength: 3,
              })}
              className={`peer block w-full appearance-none border-0 border-b border-dark bg-transparent py-2.5 px-0 text-base text-dark focus:border-blue-600 focus:outline-none focus:ring-0 ${
                errors.Message && twMerge("border-red-700")
              }`}
            />
            <label
              className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-dark duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ${
                errors.Message && twMerge("text-red-700")
              }`}
            >
              Your message
            </label>
            {errors.Message && (
              <p className="text-red-700 font-semibold mt-1">
                Please enter a valid message
              </p>
            )}
          </div>
        </div>
        <Button
          type="submit"
          onClick={handleSubmit(submit)}
          className="mt-5 border-dark bg-dark text-light hover:bg-transparent hover:text-dark transition-all"
        >
          Send Message
        </Button>
      </form>

      {isModalOpen && (
        <SubmitMessage
          isError={isError ?? isError}
          modalContent={modalContent ?? modalContent}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default ContactForm;

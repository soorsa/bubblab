"use client";
import { useModal } from "@/context/modal.state";
import { ChevronLeft, X } from "lucide-react";
import { useEffect } from "react";
const Modal = () => {
  const {
    isOpen,
    content,
    size,
    close,
    goBack,
    title,
    isCloseable,
    isTransModal,
  } = useModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isCloseable) {
      if (isOpen) {
        window.addEventListener("keydown", handleKeyDown);
      }

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, isCloseable, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
      // onClick={close}
    >
      <div
        className={`relative space-y-1 ${size}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg p-2 flex items-start">
          <button
            className="h-7 w-7  border-r border-gray-200 hover:bg-gray-100"
            onClick={goBack}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex-1 font-bold mx-2 text-lg overflow-x-scroll uppercase text-nowrap scrollbar-hide">
            {title}
          </div>

          {isCloseable && (
            <button
              className="bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 cursor-pointer h-7 w-7 flex justify-center items-center"
              onClick={close}
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>
          )}
        </div>
        <div
          className={`${
            isTransModal ? "bg-transparent" : "bg-white shadow-lg"
          } p-4 rounded-lg `}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;

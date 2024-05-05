import { useEffect, useState, useRef } from "react";
import { useOutsideClick } from "@/app/hooks/outside-clisck";

const AppFilterSelector = ({ options, placeholder, onSelectionChange, fullwidth }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  const toggleOption = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (selectedOption) {
      onSelectionChange(selectedOption);
    }
  }, [selectedOption]);

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  useOutsideClick(selectorRef, handleOutsideClick);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative py-[10px] pr-[40px] pl-3 min-w-28 border border-gray-300 rounded-md flex items-center justify-between bg-white ${
          fullwidth ? 'w-full' : ''
        }`}      >
        {selectedOption ? (
          <span className="text-gray-900 text-xs">{selectedOption.title}</span>
        ) : (
          <span className="text-gray-500 text-xs">{placeholder}</span>
        )}
        <div className="text-gray-500 absolute right-3">
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L4 4L1 0.999999"
              stroke="#6F7383"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div
          ref={selectorRef}
          className="absolute top-12 right-0 bg-white border border-gray-300 rounded-md w-48 z-10 overflow-y-auto max-h-40"
        >
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => toggleOption(option)}
              className={`py-2 px-4 cursor-pointer ${
                selectedOption && selectedOption.id === option.id
                  ? "bg-gray-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <span className="font-sailec text-xs">{option.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppFilterSelector;

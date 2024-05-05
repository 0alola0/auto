import { useEffect, useState, useRef } from "react";
import { useOutsideClick } from "@/app/hooks/outside-clisck";

const AppSelector = ({
  options,
  placeholder,
  onSelectionChange,
  titleKey,
  idKey,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  const toggleOption = (option) => {
    const optionId = option[idKey];
    if (selectedOptions.some((o) => o[idKey] === optionId)) {
      setSelectedOptions(selectedOptions.filter((o) => o[idKey] !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  useEffect(() => {
    onSelectionChange(selectedOptions);
  }, [selectedOptions]);

  const clearSelection = () => {
    setSelectedOptions([]);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  useOutsideClick(selectorRef, handleOutsideClick);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative py-[10px] pr-[40px] max-h-[41.5px] pl-3 border border-gray-300 rounded-md flex items-center justify-between w-full"
      >
        {selectedOptions.length === 0 ? (
          <span className="text-gray-500 text-sm">{placeholder}</span>
        ) : (
          <span className="text-gray-900 text-sm">
            {selectedOptions.map((option) => option[titleKey]).join(", ")}
          </span>
        )}
        {selectedOptions.length > 0 && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              clearSelection();
            }}
            className="text-gray-500 text-sm"
          >
            X
          </div>
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
          className="absolute top-10 bg-white border border-gray-300 rounded-md w-full z-10 overflow-y-auto max-h-40"
        >
          {options.map((option) => (
            <div
              key={option[idKey]}
              onClick={() => toggleOption(option)}
              className={`py-2 px-4 cursor-pointer ${
                selectedOptions.includes(option)
                  ? "bg-gray-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <span className="font-sailec text-xs font-semibold">
                {option[titleKey]}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppSelector;

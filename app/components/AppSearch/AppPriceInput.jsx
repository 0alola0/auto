import React from "react";

const AppPriceInput = ({
  usd,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onCurrencyToggle,
  usdCurrency,
}) => {
  return (
    <div className="px-6 pt-4 pb-11">
      <div className="flex justify-between items-center mb-3">
        <span className="font-helvetica-neue text-base text-sm leading-[15.69px] text-justify">
          ფასი
        </span>
        <div
          className="border-gray flex justify-center items-center rounded-full currencytoggle cursor-pointer"
          onClick={onCurrencyToggle}
        >
          <div
            className={`rounded-full h-6 w-6 flex justify-center items-center transition-all duration-200 ease-in-out ${
              usdCurrency
                ? "bg-gray-900 text-white"
                : "bg-transparent text-gray-500"
            }`}
          >
            $
          </div>
          <div
            className={`rounded-full h-6 w-6 flex justify-center items-center transition-all duration-200 ease-in-out ${
              !usdCurrency
                ? "bg-gray-900 text-white"
                : "bg-transparent text-gray-500"
            }`}
          >
            ₾
          </div>
        </div>
      </div>

      <div className="flex gap-1 justify-between items-center">
        <input
          className="w-full py-[9px] px-3 border border-gray-300 rounded-md cursor-pointer text-sm"
          placeholder="დან"
          type="number"
          value={minPrice}
          onChange={onMinPriceChange}
        />
        <span className="border-gray rounded-md w-[6px] h-0"></span>
        <input
          className="w-full py-[9px] px-3 border border-gray-300 rounded-md cursor-pointer text-sm"
          placeholder="მდე"
          type="number"
          value={maxPrice}
          onChange={onMaxPriceChange}
        />
      </div>
    </div>
  );
};

export default AppPriceInput;

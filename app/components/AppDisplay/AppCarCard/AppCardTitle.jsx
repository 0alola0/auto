import React from "react";
import AppImage from "../../AppImage";

const AppCardTitle = ({ model, year, customs, client, price }) => {
  return (
<div className="flex items-start flex-col md:flex-row mb-3 justify-between md:items-center w-full">
      <div className="flex items-center gap-2">
        <h5 className="font-bold text-[14px] leading-tight font-helvetica-neue">
          {model}
        </h5>
        <span className="text-[14px] leading-tight font-helvetica-neue text-[#8C929B]">
          {year} წ.
        </span>
      </div>
      <div className="w-full flex items-center justify-between md:justify-end md:w-auto gap-3">
        <div className="block w-full md:hidden">
          <h4 className="flex items-center md:justify-end gap-2 font-sailec text-base font-medium text-right">
            {price}
            <div className="w-6 h-[26px] rounded-full bg-gray-200 flex items-center justify-center">
              ₾
            </div>
          </h4>
        </div>
        {!customs ? (
          <span className="whitespace-nowrap px-2 py-1 rounded-md bg-[#FFE3E3] md:bg-transparent text-[11px] leading-tight font-helvetica-neue text-[#FF3B30]">
            განბაჟება 2,176 ₾
          </span>
        ) : (
          <span className="whitespace-nowrap px-2 py-1 rounded-md bg-[#EEFBF1] md:bg-transparent  flex items-center gap-1 text-[11px] leading-tight font-helvetica-neue text-[#1EB676]">
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.40305 2.48254C1.16363 2.48219 0.934098 2.58333 0.76597 2.76326C0.419231 3.12087 0.410373 3.70665 0.746123 4.07576L2.64248 5.73916C2.80254 5.90765 3.01979 6.00156 3.24583 5.99998C3.48591 5.9992 3.71597 5.89829 3.88589 5.71926L7.23106 1.57333C7.40286 1.39612 7.4998 1.15334 7.49999 0.899796C7.50131 0.660913 7.41207 0.431393 7.25213 0.262376C7.0922 0.0933586 6.87487 -0.00111312 6.64856 9.89896e-06C6.40815 0.000634795 6.17799 0.102869 6.00949 0.283877L3.29445 3.76151L2.00441 2.74231C1.84459 2.57473 1.62832 2.48093 1.40305 2.48149V2.48254Z"
                fill="#1EB676"
              />
            </svg>
            განბაჟებული
          </span>
        )}
        <div className="hidden md:flex gap-2">
          <AppImage src="/flagicon.svg" width="16" height="16" alt="flag" />
          <span className="text-xs leading-tight font-helvetica-neue text-[#8C929B]">
            {client.length > 12 ? `${client.substring(0, 12)}.` : client}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCardTitle;

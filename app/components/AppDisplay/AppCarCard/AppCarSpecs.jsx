import React from "react";
import AppImage from "../../AppImage";

const AppCarSpecs = ({ engine, odometer, gear, wheel, price, client }) => {
  return (
    <div className="mb-[14px] md:mb-4 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 ">
      <div className="flex items-center gap-3">
        <AppImage className="hidden md:block" src="/engine.svg" width="16" height="16" alt="flag" />
        <span className="font-sailec text-sm font-medium leading-12 text-left">
          {engine}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <AppImage className="hidden md:block" src="/odometer.svg" width="16" height="16" alt="flag" />
        <span className="font-sailec text-sm font-medium leading-12 text-left">
          {odometer} კმ
        </span>
      </div>
      <div className="hidden md:block">
        <h4 className="flex items-center justify-end gap-2 font-sailec text-base font-medium text-right">
          {price}
          <div className="w-6 h-[26px] rounded-full bg-gray-200 flex items-center justify-center">
            ₾
          </div>
        </h4>
      </div>
      <div className="flex items-center gap-3">
        <AppImage className="hidden md:block" src="/gear.svg" width="16" height="16" alt="flag" />
        <span className="font-sailec text-sm font-medium leading-12 text-left">
          {gear}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <AppImage className="hidden md:block" src="/wheel.svg" width="16" height="16" alt="flag" />
        <span className="font-sailec text-sm font-medium leading-12 text-left">
          {wheel? "მარჯვენა" : "მარცხენა"}
        </span>
      </div>
      <div className="flex md:hidden items-center gap-3">
        <AppImage className="hidden md:block" src="/wheel.svg" width="16" height="16" alt="flag" />
        <span className="font-sailec text-sm font-medium leading-12 text-left">
          {wheel? "მარჯვენა" : "მარცხენა"}
        </span>
      </div>
      <div className="flex md:hidden items-center gap-3">
      <div className="flex gap-2">
          <AppImage src="/flagicon.svg" width="16" height="16" alt="flag" />
          <span className="font-sailec text-sm font-medium leading-12 text-left">
            {client.length > 12 ? `${client.substring(0, 12)}.` : client}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCarSpecs;

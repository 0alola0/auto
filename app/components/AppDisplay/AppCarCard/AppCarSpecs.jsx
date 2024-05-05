import React from "react";
import AppImage from "../../AppImage";

const AppCarSpecs = ({ engine, odometer, gear, wheel, price }) => {
  return (
    <div className="mb-4 grid grid-cols-3 grid-rows-2 ">
      <div className="flex items-center gap-3">
        <AppImage src="/engine.svg" width="16" height="16" alt="flag" />
        <span className="font-sailec text-sm font-medium leading-12 text-left">
          {engine}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <AppImage src="/odometer.svg" width="16" height="16" alt="flag" />
        <span className="font-sailec text-sm font-medium leading-12 text-left">
          {odometer} კმ
        </span>
      </div>
      <div>
        <h4 className="flex items-center justify-end gap-2 font-sailec text-base font-medium text-right">
          {price}
          <div className="w-6 h-[26px] rounded-full bg-gray-200 flex items-center justify-center">
            ₾
          </div>
        </h4>
      </div>
      <div className="flex items-center gap-3">
        <AppImage src="/gear.svg" width="16" height="16" alt="flag" />
        <span className="font-sailec text-sm font-medium leading-12 text-left">
          {gear}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <AppImage src="/wheel.svg" width="16" height="16" alt="flag" />
        <span className="font-sailec text-sm font-medium leading-12 text-left">
          {wheel? "მარჯვენა" : "მარცხენა"}
        </span>
      </div>
    </div>
  );
};

export default AppCarSpecs;

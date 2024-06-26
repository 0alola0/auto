import React, { useState } from "react";
import AppFilterSelector from "../../AppFilterSelector";

const AppFilter = ({setSortOrder, setSortTime, total }) => {

  const ORDERS = [
    { id: 1, title: "თარიღი კლებადი" },
    { id: 2, title: "თარიღი ზრდადი" },
    { id: 3, title: "ფასი კლებადი" },
    { id: 4, title: "ფასი ზრდადი" },
    { id: 5, title: "გარბენი კლებადი" },
    { id: 6, title: "გარბენი ზრდადი" },
  ];

  const TIMES = [
    { id: "1h", title: "ბოლო 1 საათი" },
    { id: "2h", title: "ბოლო 2 საათი" },
    { id: "3h", title: "ბოლო 3 საათი" },
    { id: "1d", title: "ბოლო 1 დღე" },
    { id: "2d", title: "ბოლო 2 დღე" },
    { id: "3d", title: "ბოლო 3 დღე" },
    { id: "1w", title: "ბოლო 1 კვირა" },
    { id: "2w", title: "ბოლო 2 კვირა" },
    { id: "3w", title: "ბოლო 3 კვირა" },
  ];

  const createSelectionChangeHandler = (setStateFunc) => (selectedItems) => {
    setStateFunc(selectedItems);
  };
  return (
    <div className="mb-4 gap-3 items-start flex-col flex md:flex-row justify-between md:items-center">
      <span className="font-helvetica-neue text-base font-normal leading-[19.31px]">{total} განცხადება</span>
      <div className="flex justify-end gap-2">
        <AppFilterSelector
          options={TIMES}
          placeholder="დრო"
          onSelectionChange={createSelectionChangeHandler(setSortTime)}
        />
        <AppFilterSelector
          options={ORDERS}
          placeholder="თარიღი კლებადი"
          onSelectionChange={createSelectionChangeHandler(setSortOrder)}
        />
      </div>
    </div>
  );
};

export default AppFilter;

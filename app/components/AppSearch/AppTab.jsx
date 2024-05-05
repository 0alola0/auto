import React from "react";

export default function AppTab({ tabOptions }) {
  return (
    <div className="w-full flex items-center">
      {tabOptions.length > 0 &&
        tabOptions.map((option, index) => (
          <AppTabButton key={index} index={index}>
            {option.icon}
          </AppTabButton>
        ))}
    </div>
  );
}

export function AppTabButton({ children, index }) {
  let borderStyle = "border-gray-300";

  if (index === 0) {
    borderStyle = "border-b-1 border-l-0 border-r-0 border-t-0 border-active-orange";
  } else if (index === 1) {
    borderStyle = "border-b-1 border-l-1 border-r-0 border-t-0 border-gray-300";
  }

  return (
    <button
      className={`flex-grow h-[48px] border border-t-0 border-r-0  flex-shrink ${borderStyle} flex items-center justify-center`}
    >
      {children}
    </button>
  );
}

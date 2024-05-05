import React from "react";
import AppImage from "../AppImage";

const AppHeader = () => {
  return (
    <div className="bg-white">
      <div className="container p-[17px]">
        <AppImage
          src="/myauto.svg"
          width="161"
          height="46"
          alt="myauto logo"
        />
      </div>
    </div>
  );
};

export default AppHeader;

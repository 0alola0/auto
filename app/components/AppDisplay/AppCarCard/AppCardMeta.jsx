import React from "react";
import AppImage from "../../AppImage";

const AppCardMeta = ({views, ago}) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs leading-tight font-helvetica-neue text-[#8C929B]">
        {views} ნახვა • {ago}
      </span>
      <AppImage src="/cardicons.svg" width="80" height="16" alt="icons" />
    </div>
  );
};

export default AppCardMeta;

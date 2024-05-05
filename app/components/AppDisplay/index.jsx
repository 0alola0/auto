"use client";
import React from "react";
import AppCarCard from "./AppCarCard";
import AppFilter from "./AppFilter";

const AppDisplay = ({ items, setSortOrder, setSortTime, total }) => {
  return (
    <div className="w-full">
      <AppFilter total={total} setSortOrder={setSortOrder} setSortTime={setSortTime}/>
      {items && items.map((item) => (
        <AppCarCard key={item.car_id} car={item}/>
      ))}
    </div>
  );
};

export default AppDisplay;

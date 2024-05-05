import React from "react";
import AppImage from "../../AppImage";
import AppCardTitle from "./AppCardTitle";
import AppCarSpecs from "./AppCarSpecs";
import AppCardMeta from "./AppCardMeta";

const AppCarCard = ({ car }) => {
  const orderDate = new Date(car.order_date);
  const currentDate = new Date();
  const difference = currentDate - orderDate;
  const orderResult = Math.floor(difference / (1000 * 60 * 60 * 24));

  let source = `https://static.my.ge/myauto/photos/${car.photo}/thumbs/${car.car_id}_1.jpg?v=${car.photo_ver}`;
  return (
    <div className="mb-[10px] flex items-center w-full gap-4 p-4 bg-white border-gray rounded-[14px]">
      <div className="rounded-[10px] overflow-hidden">
        <AppImage src={source} width="178" height="140" alt={car.car_model} />
      </div>
      <div className="w-full">
        <AppCardTitle
          model={car.car_model || "not provided"}
          year={car.prod_year}
          customs={car.customs_passed}
          client={car.client_name}
        />
        <AppCarSpecs
          odometer={car.car_run_km}
          gear={car.gear_type_id}
          wheel={car.right_wheel}
          engine={car.engine_volume}
          price={car.price}
        />
        <AppCardMeta views={car.views} ago={`${orderResult} დღის წინ`} />
      </div>
    </div>
  );
};

export default AppCarCard;

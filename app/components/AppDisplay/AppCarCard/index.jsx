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
    <div className="w-[100vw] ml-[-20px] mb-0 flex flex-col md:flex-row items-center gap-3 md:gap-4 px-4 pt-[18px] md:p-4 bg-white border-gray rounded-0 md:rounded-[14px] md:mb-[10px] md:w-full md:ml-0">
      <div className="block w-full md:hidden">
        <AppCardMeta views={car.views} ago={`${orderResult} დღის წინ`} />
      </div>
      <div className="block w-full md:hidden">
        <AppCardTitle
          model={car.car_model || "not provided"}
          year={car.prod_year}
          customs={car.customs_passed}
          client={car.client_name}
          price={car.price}
        />
      </div>
      <div className="hidden rounded-[10px] overflow-hidden md:block">
        <AppImage src={source} width="178" height="140" alt={car.car_model} />
      </div>
      <div className="rounded-[16px] block overflow-hidden md:hidden">
        <AppImage src={source} width="344" height="256" alt={car.car_model} />
      </div>
      <div className="w-full">
        <div className="hidden md:block">
          <AppCardTitle
            model={car.car_model || "not provided"}
            year={car.prod_year}
            customs={car.customs_passed}
            client={car.client_name}
            price={car.price}
          />
        </div>

        <AppCarSpecs
          odometer={car.car_run_km}
          gear={car.gear_type_id}
          wheel={car.right_wheel}
          engine={car.engine_volume}
          price={car.price}
          client={car.client_name}
        />
        <div className="hidden w-full md:block">
          <AppCardMeta views={car.views} ago={`${orderResult} დღის წინ`} />
        </div>
      </div>
    </div>
  );
};

export default AppCarCard;

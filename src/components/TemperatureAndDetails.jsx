import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../Services/weatherServic";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className=" w-20" />
        <p className=" text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-2" />
            Real fell:
            <span className=" font-medium ml-1"> {`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-2" />
            Humidity:
            <span className=" font-medium ml-1">{`${humidity.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-2" />
            wind:
            <span className=" font-medium ml-1"> {`${speed.toFixed()}kmph`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        Rise:
        <p className=" font-medium ml-1">{formatToLocalTime(sunrise, timezone, "hh:mm a")} </p>
        <p className=" font-light">|</p>
        <UilSunset />
        Set:
        <p className=" font-medium ml-1">{formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
        <p className=" font-light">|</p>
        <UilSun />
        High:
        <p className=" font-medium ml-1">{`${temp_max.toFixed()}°`}</p>
        <p className=" font-light">|</p>
        <UilSun />
        Low:
        <p className=" font-medium ml-1">{`${temp_min.toFixed()}°`}</p>
        
      </div>
    </div>
  );
}

export default TemperatureAndDetails;

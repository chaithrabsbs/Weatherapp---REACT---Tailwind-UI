import React from "react";
import { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState("");

const handleSearchclick = () => {
  if(city !== '') setQuery({q:city})
}
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/5 items-center justify-center space-x-4">
        <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize  text-blue-500 placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className=" text-white cursor-pointer transition ease-out hover:scale-125"
          onClick = {handleSearchclick}
        />
        <UilLocationPoint
          size={25}
          className=" text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className=" text-white text-xl font-light hover: scale-105 transit ease-out">
          °C
        </button>
        <p className=" text-white text-xl mx-1"> |</p>
        <button name="metric" className=" text-white text-xl font-light hover: scale-105 transit ease-out">
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;

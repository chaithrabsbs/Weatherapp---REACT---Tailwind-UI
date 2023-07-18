import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeandLocation from "./components/TimeandLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./Services/weatherServic";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className=" mx-auto max-w-screen-sm mt-4 py-5 px-4 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-600">
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} unit={units} setUnits={setUnits}/>
      {weather && (
        <div>
          <TimeandLocation weather = {weather}/>
          <TemperatureAndDetails weather = {weather}/>
          <Forecast title="hourly forecast" items = {weather.hourly}/>
          <Forecast title="daily forecast" items = {weather.daily}/>
        </div>
      )}
    </div>
  );
}

export default App;

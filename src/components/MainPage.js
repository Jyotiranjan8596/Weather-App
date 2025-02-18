import React, { useEffect, useState } from "react";
import Temperature from "./Temperature";
import HighLights from "./HighLights";
const MainPage = () => {
  const [city, setCity] = useState("Bhubaneswar");
  const [weatherData, setWeatherData] = useState([]);
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=75d96e06e05843ff8b8165516241904&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error Comming");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [city]);

  console.log(weatherData?.current);

  return (
    <div className="bg-[#1f213A] align-top h-screen flex justify-center">
      <div className="w-1/5 h-1/3 mt-44">
        <Temperature
          setCity={setCity}
          stats={{
            temp: weatherData?.current?.temp_c,
            condition: weatherData?.current?.condition.text,
            isDay: weatherData?.current?.is_day,
            location: weatherData?.location?.name,
            time: weatherData?.location?.localtime,
          }}
        />
      </div>
      <div className="w-1/3 h-1/3 mt-44 p-10 grid grid-cols-2 gap-6">
        <h2 className="text-2xl text-slate-200 col-span-2">
          Today's Highlights
        </h2>
        {weatherData && (
          <>
            <HighLights
            stats= {{
              title: "Wind Status" ,
              value : weatherData?.current?.wind_mph,
              unit: "mph",
              direction : weatherData?.current?.wind_dir
            }} 
            />
            <HighLights
             stats= {{
              title: "Humidity" ,
              value : weatherData?.current?.humidity,
              unit: "%",
            }} />
            <HighLights 
             stats= {{
              title: "Visibility" ,
              value : weatherData?.current?.vis_miles,
              unit: "miles",
            }}/>
            <HighLights 
             stats= {{
              title: "Air Pressure" ,
              value : weatherData?.current?.pressure_mb,
              unit: "mb",
            }} />
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;

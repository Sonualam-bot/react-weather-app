import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);

  const [values, setValues] = useState([]);

  const [place, setPlace] = useState("banglore");
  const [location, setLocation] = useState("");

  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: "0",
      },
      headers: {
        "X-RapidAPI-Key": "5670e6c33fmshf26a04e0e94acbcp1d0cdejsn47b46bbed35a",
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const weatherData = Object.values(response?.data?.locations)[0];
      console.log(weatherData);
      setLocation(weatherData.address);
      setValues(weatherData.values);
      setWeather(weatherData.values[0]);
    } catch (error) {
      console.error(error);
      //if the api throws error
      alert("This place does not exist");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  const value = {
    weather,
    setPlace,
    values,
    location,
    place,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

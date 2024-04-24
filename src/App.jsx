import { useContext } from "react";
import "./App.css";
import { BackgroundLayout, MiniCard, WeatherCard } from "./components";
import Navbar from "./components/Navbar";
import { WeatherContext } from "./context/WeatherContext";

function App() {
  const { location, weather, values } = useContext(WeatherContext);
  console.log(values);
  return (
    <div className="w-full h-screen text-white px-8">
      <Navbar />
      <BackgroundLayout />

      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center ">
        <WeatherCard
          place={location}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className=" flex justify-center gap-8 flex-wrap w-[60%] ">
          {values?.slice(1, 7).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;

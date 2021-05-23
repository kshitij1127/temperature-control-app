import React, { useState } from "react";
const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {

    if(temperatureValue === 50) return

    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 40) {
      setTemperatureColor("high");
    } else if (newTemperature >= 30) {
      setTemperatureColor("hot");
    } else if (newTemperature >= 15) {
      setTemperatureColor("moderate");
    }
    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {

    if(temperatureValue === 0) return

    const newTemp = temperatureValue - 1;

    if (newTemp < 15) {
      setTemperatureColor("cold");
    }

    setTemperatureValue(newTemp)
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
};

export default App;

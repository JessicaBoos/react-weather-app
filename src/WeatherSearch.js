import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState(null);
  const [wind, setWind] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [icon, setIcon] = useState(null);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0efb4fc16a9ed98dc0b3aafd8491d6ad&units=metric`;
  let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for Weather in ${city}...`);
    axios.get(url).then(displayTemp);
    setSubmitted(true);
  }

  function displayTemp(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let message = `Temperature -> ${Math.round(temperature)}°C ;
  Humidity -> ${humidity}% ;
  Wind speed -> ${wind}km/h ;
  Currently -> ${description}`;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Choose your city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>

      {submitted && <img src={iconUrl} />}
      <div>{submitted && <div>{message}</div>}</div>
    </div>
  );
}

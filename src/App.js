import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import { useState } from "react";
// import { axios } from "axios";
import Axios from "axios";

const API_KEY = "afbd198c7c8674fdb3f605c39f0c4687";
const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding 20px 10px;
border-radius: 4px;
width: 380px;
background: white;
font-family: Montserrat;
`;

const AppLabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`;

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};



function App() {
  const [city, updateCity]= useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afbd198c7c8674fdb3f605c39f0c4687`,
    );
    updateWeather(response.data);
  };

  return (
    <Container>
    <AppLabel>Weather App</AppLabel>
    {city && weather ? (
      <WeatherComponent weather={weather} city={city} />
    ) : (
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
    )}
  </Container>
  );
}

export default App;

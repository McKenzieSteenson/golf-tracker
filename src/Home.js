import React, { Component, useState, useEffect } from "react";
import axios from "axios";


const golfURL = "https://newsdata.io/api/1/news?apikey=pub_194659c9d1b5459f1d1c184ee2b55bac4299a&q=golf&country=us&language=en&category=sports"
const city = 'Boise'; // Replace with the city you want to get the weather for
const weatherAPIKEY = '2db025267a8accced2df9435ea1b6e9f'; // Replace with your OpenWeatherMap API key

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKEY}&units=imperial`;

function Home() {

  const [results, setResults] = useState([]);

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {

    fetchData();
  }, []);

  useEffect(() => {

    axios.get(weatherURL)
      .then(response => setWeatherData(response.data))
      .catch(error => console.error(error));
  }, [city, weatherAPIKEY]);

  const fetchData = async () => {
    const { data } = await axios.get(golfURL)

    setResults(data.results)
  }

  return (

    <div className="Home">
      <div class="grid-container">
        <div class="grid-child">
          {results.map(result => (
            <div key={result.source_id}>
              <h5>{result.title}</h5>
              <p>{result.description}</p>
            </div>
          ))
          }
        </div>
        <div class="grid-child">
          <div>
            <h5>
              Weather
            </h5>
          </div>
          <div>
            {weatherData ? (
              <div>
                <p>City: {weatherData.name}</p>
                <p>Temperature: {weatherData.main.temp} &deg;F</p>
                <p>Description: {weatherData.weather[0].description}</p>
                <p>Wind: {weatherData.wind.speed}</p>
                <p>Sunrise: {weatherData.sys.sunrise}</p>
                <p>Sunset: {weatherData.sys.sunset}</p>
                <p>Visibility: {weatherData.visibility}</p>
              </div>
            ) : (
              <p>Loading weather data...</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );

}

export default Home;
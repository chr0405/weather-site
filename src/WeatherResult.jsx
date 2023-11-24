import React from 'react'

export default function Weather_result({WeatherInformation}) {
  return (
    <div>
        <h5 id='location_name'>{WeatherInformation.name}</h5>
        <h2 id='location_temperate'>{Math.round(((WeatherInformation.main.temp - 273.15) * 10)) / 10}℃</h2>
        <p id='location_weather'>{WeatherInformation.weather[0].main}</p>
    </div>
  )
}

import React, { useState } from 'react'
import Axios from 'axios';
import WeatherResult from './WeatherResult';

export default function Weather() {
    const [CityName, setCityName] = useState('');
    const [WeatherInformation, setWeatherInformation] = useState('');
    // const [Result, setResult] = useState(false);

    const onChangeCityName = (CityName) =>{
        setCityName(CityName.target.value);
      }

    const activeEnter = (event) => {
        if (event.key === "Enter"){
            searchWeather();
            // setResult(true);
        }
    }

    const API_KEY = 'cc4ff4549b8d77af0bdb2b3b0a85cd79';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${API_KEY}`;
    
    const searchWeather = async() =>{
        try{
            Axios.get(url)
            .then(response => {
                console.log(response.data);
                setWeatherInformation(response.data);
                // console.log(WeatherInformation);
            })
            .catch(error => console.log(error));
        }catch{
            console.log('error')
        }
    }


    return (
        <div>
        <input id='location_input' placeholder='도시를 입력하세요' value={CityName} onChange={onChangeCityName} onKeyDown={activeEnter}/>
        <span className='location_result' id='location_span'>
            {WeatherInformation? <WeatherResult WeatherInformation={WeatherInformation}/>: null}
        </span>
        </div>
    )
}

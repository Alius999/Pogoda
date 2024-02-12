import { NavLink } from 'react-router-dom';
import classes from './Cities.module.css';
// import {Route, Routes} from "react-router-dom";
import Weather from "./Weather";
import {useEffect, useState} from "react";
import axios from "axios";

const Cities = () => {

    const newDate = new Date();
    const currentTime = newDate.toLocaleString();
    let [city, setCity] = useState(0);
    let [location, setLocation] = useState('latitude=56.85&longitude=60.61')
    const [weather, setWeather] = useState({ current_weather: { temperature: '', windspeed: ''} });

    const current = [
        {
            city: 'Екатеринбург',
            location: 'latitude=56.85&longitude=60.61',
        },

        {
            city: 'Петербург',
            location: 'latitude=59.57&longitude=30.19',
        },

        {
            city: 'Оренбург',
            location: 'latitude=51.77&longitude=55.13',
        },

        {
            city: 'Выборг',
            location: 'latitude=60.42&longitude=28.45',
        },
        currentTime
    ]

    useEffect(() => {
        const weatherData = async () => {
            axios.get(`https://api.open-meteo.com/v1/forecast?${location}&hourly=temperature_2m&current_weather=true`)
                .then(response => {
                    console.log(response.data);
                    setWeather(response.data);
            })
        }
        weatherData();
    },[location]);

    console.log(weather);
    return(
        <div className={classes.cities}>
            <ul className={classes.cities_list}>
                <li><NavLink onClick={() => {
                    setCity(0);
                    setLocation(current[0].location);
                }}>Екатеринбург</NavLink></li>
                <li><NavLink onClick={() => {
                    setCity(1);
                    setLocation(current[1].location);
                }}>Петербург</NavLink></li>
                <li><NavLink onClick={() => {
                    setCity(2);
                    setLocation(current[2].location);
                }}>Оренбург</NavLink></li>
                <li><NavLink onClick={() => {
                    setCity(3);
                    setLocation(current[3].location);
                }}>Выборг</NavLink></li>
            </ul>

            <Weather
                city={current[city].city}
                temperature={weather.current_weather.temperature}
                windspeed={weather.current_weather.windspeed}
                time={current[4]}
            />
            {/*<Routes>*/}
            {/*    <Route path="ekb" element={} />*/}
                {/*<Route path="ptb" element={*/}
                {/*    <Weather*/}
                {/*        city={current_weather[1].city}*/}
                {/*        temperature={current_weather[1].temperature}*/}
                {/*        windspeed={current_weather[1].windspeed}*/}
                {/*        time={current_weather[4]}*/}
                {/*    />} />} />*/}
                {/*<Route path="orb" element={*/}
                {/*    <Weather*/}
                {/*        city={current_weather[2].city}*/}
                {/*        temperature={current_weather[2].temperature}*/}
                {/*        windspeed={current_weather[2].windspeed}*/}
                {/*        time={current_weather[4]}*/}
                {/*    />} />} />*/}
                {/*<Route path="vbrg" element={*/}
                {/*    <Weather*/}
                {/*        city={current_weather[3].city}*/}
                {/*        temperature={current_weather[3].temperature}*/}
                {/*        windspeed={current_weather[3].windspeed}*/}
                {/*        time={current_weather[4]}*/}
                {/*    />} />} />*/}
            {/*</Routes>*/}
        </div>
    )
}

export default Cities;

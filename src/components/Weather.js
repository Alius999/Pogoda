import classes from './Weather.module.css';
import Cities from "./Cities";

const Weather = (props) => {

    return(
        // <div className={classes.weather}>
            <div className={classes.weather_container}>
                <h2>Погода в городе <span>{props.city}</span></h2>
                <p>Температура сейчас</p>
                {props.temperature}
                <p>Скорость ветра</p>
                {props.windspeed}
                <p>Время</p>
                {props.time}
            </div>
        // </div>
    )
}

export default Weather;
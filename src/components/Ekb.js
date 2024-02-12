import classes from './Header.module.css';

const Ekb = () => {
    return(
        <div className={classes.header_container}>
            <h1 className={classes.weather_header}>Погода в Городе Екатеринбург</h1>
            <p>Привет я Рекат приложение погоды!</p>
            <p>Кликай на кнопку ниже, чтобы открыть список городов.</p>
        </div>
    )
}

export default Ekb;
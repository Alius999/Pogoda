import classes from './Header.module.css';

const Ptb = () => {
    return(
        <div className={classes.header_container}>
            <h1 className={classes.weather_header}>Я знаю погоду в твоём Yopta</h1>
            <p>Привет я Рекат приложение погоды!</p>
            <p>Для города Петербурга!!!</p>
            <p>Кликай на кнопку ниже, чтобы открыть список городов.</p>
        </div>
    )
}

export default Ptb;
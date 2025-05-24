import styles from './WeatherCard.module.scss';

type Props = {
  temperature: number;
  icon: string;
  wind: number;
  humidity: number;
  pressure: number;
};

const WeatherCard = ({ temperature, icon, wind, humidity, pressure }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.temp}>
        {Math.round(temperature)}°C
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
      </div>
      <div className={styles.details}>
        <p>Wind: {wind} m/s</p>
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure} hPa</p>
      </div>
    </div>
  );
};

export default WeatherCard;
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
import { fetchWeatherByCoords, WeatherData } from '../../../api/api';
import styles from './Map.module.scss';
import { useTheme } from '../../hooks/useTheme';

const DEFAULT_POSITION: [number, number] = [50.4501, 30.5234]; // KYIV


const WeatherMap = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const { theme } = useTheme();

    useEffect(() => {
        fetchWeatherByCoords(DEFAULT_POSITION[0], DEFAULT_POSITION[1])
            .then(setWeather)
            .catch(console.error);
    }, []);

    return (
        <div className={styles.mapWrapper}>
            <MapContainer 
                center={DEFAULT_POSITION}
                zoom={10}
                scrollWheelZoom={true}
                className={styles.map}
                >
                <TileLayer
                    attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
                    url={
                    theme === 'dark'
                        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    }
                />
            {weather && (
                <Marker position={[weather.coord.lat, weather.coord.lon]}>
                    <Popup>
                        <strong>{weather.name}</strong>
                        <br />
                        t: : {weather.main.temp}°C
                        <br />
                        {weather.weather[0].description}
                        <br />
                        <img 
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                         alt="{weather.weather[0].description}" />
                    </Popup>
                </Marker>
            )}
            </MapContainer>
        </div>
    )
}

export default WeatherMap;
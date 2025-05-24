import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { fetchWeatherByCoords, WeatherData } from '../../../api/api';
import styles from './Map.module.scss';
import { useTheme } from '../../hooks/useTheme';
import WeatherCard from '../WeatherCard/WeatherCard';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DEFAULT_POSITION: [number, number] = [50.4501, 30.5234]; // KYIV


const WeatherMap = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const { theme } = useTheme();

    const customIcon = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon2x,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    useEffect(() => {
        fetchWeatherByCoords(DEFAULT_POSITION[0], DEFAULT_POSITION[1])
            .then((data) => {
                setWeather(data);
                setIsCardOpen(true);
            })
            .catch(console.error);
    }, []);


    const handleMarkerClick = () => {
        setIsCardOpen(prev => !prev);
    };

    const handleCardClick = () => {
        setIsCardOpen(false);
    };


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
                    <Marker
                        position={DEFAULT_POSITION}
                        icon={customIcon}
                        eventHandlers={{
                            click: handleMarkerClick,
                        }}
                    />
                )}
                {weather && isCardOpen && (
                    <div onClick={handleCardClick}>
                        <WeatherCard
                            temperature={weather.main.temp}
                            icon={weather.weather[0].icon}
                            wind={weather.wind.speed}
                            humidity={weather.main.humidity}
                            pressure={weather.main.pressure}
                        />
                    </div>
                )}
            </MapContainer>
        </div>
    )
}

export default WeatherMap;
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export type WeatherData = {
    main: {
      temp: number;
      humidity: number;
      pressure: number;
    };
    weather: {
      icon: string;
      description: string;
    }[];
    wind: {
      speed: number;
      deg: number;
    };
    coord: {
      lat: number;
      lon: number;
    };
  }

export async function fetchWeatherByCoords (
    lat: number,
    lon: number,
    lang = 'en'
): Promise<WeatherData> {
    const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=${lang}`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`OpenWeather API error: ${res.statusText}`);
    }
    const data: WeatherData = await res.json();
    return data;
};


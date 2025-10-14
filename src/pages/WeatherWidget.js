import React, { useState, useEffect } from 'react';
import './WeatherWidget.css';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Beijing'); // 默认城市

  const mockWeatherData = {
    name: city,
    main: {
      temp: 18.5,
      feels_like: 19.0,
      humidity: 65
    },
    weather: [
      {
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d'
      }
    ],
    wind: {
      speed: 3.6
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        
        /*
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Weather data fetch failed');
        }
        
        const data = await response.json();
        setWeatherData(data);
        */
        
        // 使用模拟数据
        setTimeout(() => {
          setWeatherData(mockWeatherData);
          setLoading(false);
        }, 1000);
        
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    if (e.key === 'Enter') {
      setCity(e.target.value);
    }
  };

  if (loading) {
    return (
      <div className="weather-widget loading">
        <div className="loading-spinner">Loading weather...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-widget error">
        <p>Error loading weather data</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <h3>Weather</h3>
        <div className="city-selector">
          <input
            type="text"
            placeholder="Enter city name"
            onKeyPress={handleCityChange}
            defaultValue={city}
          />
        </div>
      </div>
      
      <div className="weather-content">
        <div className="weather-main">
          <div className="temperature">
            {Math.round(weatherData.main.temp)}°C
          </div>
          <div className="weather-icon">
            {/* 实际项目中从API获取图标 */}
            <span className="icon">☁️</span>
          </div>
        </div>
        
        <div className="weather-details">
          <div className="city-name">{weatherData.name}</div>
          <div className="weather-desc">
            {weatherData.weather[0].description}
          </div>
          
          <div className="weather-stats">
            <div className="stat">
              <span className="label">Feels like:</span>
              <span className="value">{Math.round(weatherData.main.feels_like)}°C</span>
            </div>
            <div className="stat">
              <span className="label">Humidity:</span>
              <span className="value">{weatherData.main.humidity}%</span>
            </div>
            <div className="stat">
              <span className="label">Wind:</span>
              <span className="value">{weatherData.wind.speed} m/s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
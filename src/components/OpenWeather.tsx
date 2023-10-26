// ①import文とAPIキー
import { useState } from 'react';
import axios from 'axios';

const API_KEY = 'APIキーを入力する';

// ②JSONデータ用インターフェース定義
interface WeatherData {
    "weather": [
        {
            "description": string;  // 天気の説明
            "icon": string;         // アイコン番号
        }
    ],
    "main": {
        "temp": number; // 気温（℃）
    };
}

// ③関数 OpenWeather の定義
function OpenWeather() {
    // ④useState の宣言
    const [city, setCity] = useState('Tokyo');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    // ⑤天気データの取得部
    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`
            );
            setWeatherData(response.data);
        }
        catch (error) {
            console.error('データ取得エラー:', error);
        }
    };

    // ⑥取得データ表示部
    return (
        <>
            <input
                type="text"
                placeholder="地域名を入力"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeatherData}>天気取得</button>

            {weatherData && (
                <div>
                    <h2>{city}のお天気</h2>
                    <p><img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon"/></p>
                    <p>天気: {weatherData.weather[0].description}</p>
                    <p>気温: {weatherData.main.temp}°C</p>
                </div>
            )}
        </>
    );
};

export default OpenWeather;

import axios from 'axios';
import { API_KEY } from '../config/config';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

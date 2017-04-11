import axios from 'axios';
import { API_KEY } from '../config/config';

const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
const FETCH_FAILED = 'FETCH_FAILED';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export default function(state = [], action = {}) {
  switch (action.type) {
    case FETCH_SUCCEEDED: {
      return [action.response, ...state];
    }

    case FETCH_FAILED: {
      return state;
    }

    default:
      return state;
  }
}

export function fetchWeather(city) {
  return {
    type: FETCH_WEATHER,
    city,
  };
}

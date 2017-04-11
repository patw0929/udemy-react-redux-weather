import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_KEY } from '../../config/config';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

// 1. our worker saga
export function* fetchWeatherAsync(action) {
  const url = `${ROOT_URL}&q=${action.city}`;

  try {
    // trying to call api
    const response = yield call(axios.get, url);

    yield put({ type: 'FETCH_SUCCEEDED', response: response.data });

  } catch (e) {
    // act in the error
    console.error(e);
    yield put({ type: 'FETCH_FAILED', message: e.message });
  }
}

// 2. our watcher saga

// Our watcher saga generate a new task on each ACTION
export function* watchCreateWeather() {
  console.log('redux-saga is running the FETCH_WEATHER action listener...');
  yield takeEvery('FETCH_WEATHER', fetchWeatherAsync);
}

// 3. our root saga
// single entry point to start saga at once
export default function* rootSaga() {
  yield [
    watchCreateWeather(),
  ];
}

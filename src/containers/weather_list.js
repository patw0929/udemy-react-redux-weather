import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import CSSModules from 'react-css-modules';
import styles from './style.css';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather =>
      weather.main.temp);
    const pressures = cityData.list.map(weather =>
      weather.main.pressure);
    const humidities = cityData.list.map(weather =>
      weather.main.humidity);

    return (
      <tr key={name}>
        <td styleName="weather-cell">{name}</td>
        <td styleName="weather-cell">
          <Chart data={temps} color={'red'} units="°C" />
        </td>
        <td styleName="weather-cell">
          <Chart data={pressures} color={'green'} units="hPa" />
        </td>
        <td styleName="weather-cell">
          <Chart data={humidities} color={'black'} units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th styleName="weather-cell">City</th>
            <th styleName="weather-cell">Temperature (°C)</th>
            <th styleName="weather-cell">Pressure (hPa)</th>
            <th styleName="weather-cell">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather,
  };
}

export default connect(mapStateToProps)(CSSModules(WeatherList, styles));

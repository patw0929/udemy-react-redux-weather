import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import CSSModules from 'react-css-modules';
import styles from './style.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: '',
    });
  }

  handleChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  render() {
    return (
      <form styleName="search-form" className="input-group" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
          value={this.state.term}
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          onChange={this.handleChange.bind(this)} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(CSSModules(SearchBar, styles));

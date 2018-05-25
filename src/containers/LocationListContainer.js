import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedCity, setWeather } from '../actions';
// import * as actions from '../actions';
import { getWeatherCities, getCity } from '../reducers';
import LocationList from '../components/LocationList';


class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, dispatchSetCity, cities, city } = this.props;
        setWeather(cities);
        dispatchSetCity(city);
    }

    handleSelectedLocation = city => {
        this.props.dispatchSetCity(city);
      }

  render() {
    return (
        <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation}></LocationList>
    )
  }
}

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
  });

  //  const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

  
  
  const mapStateToProps = state => ({
      citiesWeather: getWeatherCities(state),
      city: getCity(state)
  });

  export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);

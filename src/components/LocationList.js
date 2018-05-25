import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

import './style.css';


const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    }

    const strToCompnent = cities => (
        cities.map( city => ( <WeatherLocation key={city.key} city={city.name} onWeatherLocationClick={() => handleWeatherLocationClick(city.name)} data={city.data} />))
    );

    return (
    <div className="locationList" >
    {strToCompnent(cities)}
    </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;
import React from 'react';

// external
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

//constantes
 import {
 CLOUD,                   
 CLOUDY,          
 SUN,                
 RAIN,     
 SNOW,          
 WINDY,
 THUNDER,
 DRIZZLE
} from '../../../constants/weathers';

import  './style.css';

const stateToIconName = weatherState => {
    switch (weatherState) {

        case CLOUD:
            return "cloud";
            
        case CLOUDY:
            return "cloudy";
            
        case SUN:
            return "day-sunny";
               
        case RAIN:
            return "rain";
            
        case SNOW:
            return "snow";
            
        case WINDY:
            return "windy";

        case THUNDER:
            return "day-thunderstorm"; 
        
        case DRIZZLE:
            return "day-showers";         
               
        default:
            return "day-sunny";
    }
};

const getWeatherIcon = weatherState => {
  return (<WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x" />);
};


const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    &nbsp; &nbsp;
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperaturetype">℃</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;
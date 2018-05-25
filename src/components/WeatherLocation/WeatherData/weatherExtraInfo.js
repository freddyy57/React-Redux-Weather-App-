import React from 'react';
import PropTypes from 'prop-types';

import  './style.css';


const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
    <span className="extraInfoText"><small className="winds">Humedad:</small>{` ${humidity}%`}</span>
    <span className="extraInfoText"><small className="winds">Vientos:</small>{` ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;
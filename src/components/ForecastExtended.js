import React from 'react';
import PropTypes from 'prop-types';

import ForecastItem from './ForecastItem';
import './style.css';

const renderForecastItemDays = (forecastData) => {
    // return "Render Items";
    return forecastData.map( forecast => (
        <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} 
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}>
        </ForecastItem>));
}

const renderProgress = () => {
    return <h3 className="cargando_pe">Cargando Pronóstico extendido...</h3>;
}

const ForecastExtended = ({ city, forecastData }) => (

   
            <div className="forecastExtendedCont">
              <h2 className="forecasTitle">Pronóstico extendido para <span className="ciudadForecast">{city}</span></h2>
              {forecastData ? 
                renderForecastItemDays(forecastData): 
                renderProgress()}
              
            </div>
  
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
}

export default ForecastExtended ;
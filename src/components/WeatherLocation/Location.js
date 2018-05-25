import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Location = ({city}) => (
    // const city = props.city;
    // const {city} = props;
    // console.log(props);
    // debugger;
 <div className="locationCont">
    <h2>
     {city}
    </h2>
 </div> 
);

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export default Location;
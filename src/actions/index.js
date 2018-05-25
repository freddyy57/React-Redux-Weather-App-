import transformForecast from '../services/transformForecast';
import transformWeather from '../services/transformWeather';


export const SET_CITY = 'SET_CITY';
const setCity = payload => ({ type: SET_CITY, payload });

export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });


const api_key = 'e5a19e169386653e063b5295d4acae28';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        // fetch o axios
        const url_forecast =`${url}?q=${payload}&appid=${api_key}`;

        // Activar en el estado un indicador de búsquda de datos
        dispatch(setCity(payload));
         
        // consultar el estado global de la aplicación
        const state = getState();
        // fecha de la ultima consulta
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        // fecha ahora
        const now = new Date();
        // si la ultima consulta fue hace menos de 1 minuto. No hacer consulta nueva
        if(date && (now - date) < 1 * 60 * 1000 ) {
            return;
        }
        // consulta al servidor
        return fetch(url_forecast).then( 
            data => ( data.json())
        ).then( weather_data => {
            // console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);
            // this.setState({forecastData: forecastData});

            // Modificar el estado con el resultado de la promesa(fetch)
            dispatch(setForecastData({ city: payload, forecastData }));

        }).catch( err => {
            console.log(err);
            return "Se ha producido un error" + err;
        })
    }
};

// export const SET_WEATHER = 'SET_WEATHER';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload});


const url_weather = 'http://api.openweathermap.org/data/2.5/weather';

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));

            const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
           
            fetch(api_weather).then( data => {
                // console.log(data);
                    return data.json();
                }).then( weather_data => {
                    const weather = transformWeather(weather_data);
                    // console.log(weather_data);
                    dispatch(setWeatherCity({city, weather}));
                }).catch( err => {
                    console.log(err);
                });
        });
    }

}
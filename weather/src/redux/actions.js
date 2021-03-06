import axios from 'axios';
export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

export const fetchWeatherRequestAction = () => ({
    type: FETCH_WEATHER_REQUEST
});

export const fetchWeatherSuccessAction = (data) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: {
        weather: data.weather[0],
        main: data.main,
        visibility: data.visibility,
        windspeed: data.wind.speed,
        country: data.sys.country,
        name: data.name
    }
});

export const fetchWeatherFailureAction = (error) => ({
    type: FETCH_WEATHER_FAILURE,
    payload: {
        error
    }
});

export function fetchWeather(zip) {
    return function(dispatch) {
        dispatch(fetchWeatherRequestAction());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=d6b9360935e2a70e78415cab05de828e`)
            .then(res => {
                dispatch(fetchWeatherSuccessAction(res.data))
            })
            .catch(error => {
                //error.message is the error description
                dispatch(fetchWeatherFailureAction(error.message))
            })
    }
};
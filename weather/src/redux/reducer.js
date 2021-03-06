import {FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE} from "./actions";

//example from openweathermap.org
const defaultState = {
    loading: false,
    error: "",
    weather:
    {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
    },
    main: {
        temp: 282.55,
        feels_like: 281.86,
        temp_min: 280.37,
        temp_max: 284.26,
        pressure: 1023,
        humidity: 100
    },
    visibility: 16093,
    windspeed: 1.5,
    country: "US",
    name: "Mountain View"
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_WEATHER_REQUEST:
            return {
                ... state,
                loading: true
            }
        case FETCH_WEATHER_SUCCESS:
;            return {
                loading: false,
                error: "",
                ...action.payload
                
            }
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }


}

export default reducer;
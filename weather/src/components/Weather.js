import React from 'react';
import { connect } from "react-redux";
import { fetchWeather } from "../redux/actions";
import "./weather.css";

// const mapDispatchToProps = {
//     fetchWeather: () => (fetchWeather)
// }; 

const mapStateToProps = state => {
    return {
        weather: state.weather.main,
        description: state.weather.description,
        temp: state.main.temp,
        feels_like: state.main.feels_like,
        temp_min: state.main.temp_min,
        temp_max: state.main.temp_max,
        pressure: state.main.pressure,
        humidity: state.main.humidity,
        visibility: state.visibility,
        windspeed: state.windspeed,
        country: state.country,
        name: state.name
    }
}

const Weather = ({weather, description, temp, feels_like, temp_min, temp_max, pressure, humidity, visibility, windspeed, country, name, fetchWeather}) => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        fetchWeather(event.target[0].value);

    };


    return (
        <div className = "weather">
            <h1 className = "weather-h1">Weather</h1>
            <h3>Found out the weather in your area!</h3>
            <form className = "weather-form" onSubmit = {onSubmitHandler}>
                <label htmlFor = "zip">Enter a zip code: </label>
                <input 
                    type = "text"
                    name = "zip"
                />
                <button type = "submit">Update</button>
            </form>
            <h2>Weather Report</h2>
            <div className = "weather-result">
                <h4>Main: </h4>
                <p>{weather}</p>
                <h4>Description: </h4>
                <p>{description}</p>
                <h4>Temperature: </h4>
                <p>{temp}</p>
                <h4>Feels_like: </h4>
                <p>{feels_like}</p>
                <h4>Temp_min: </h4>
                <p>{temp_min}</p>
                <h4>Temp_max: </h4>
                <p>{temp_max}</p>
                <h4>Pressure: </h4>
                <p>{pressure}</p>
                <h4>Humidity: </h4>
                <p>{humidity}</p>
                <h4>Visibility: </h4>
                <p>{visibility}</p>
                <h4>Windspeed: </h4>
                <p>{windspeed}</p>
                <h4>Country: </h4>
                <p>{country}</p>
                <h4>Name: </h4>
                <p>{name}</p>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         zip: state.zip
//     }
// }
const mapDispatchToProps = {
    fetchWeather
} 

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchWeather: () => dispatch(fetchWeather)
//     }
// }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather);

// export default connect(
//     mapStateToProps
// )(Weather);

//export default Weather;
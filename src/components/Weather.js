import React from "react";

const Weather = props => {
    return(
        <div className="infoWeath">
        { props.city_name && 
            <div>
                <p>Местоположение: {props.city_name}, {props.country}</p>
                <p>Температура: {props.temp}°C</p>
                <p>Восход солнца: {props.sunrise}</p>
                <p>Заход солнца: {props.sunset}</p>
            </div>
        }

        <p className="error">{props.error}</p>     
        </div>
    )
}

export default Weather;
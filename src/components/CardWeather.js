import { useState } from "react";
import useFetchWeat from "../hooks/useFetchWeat";

const CardWeather = () => {
    
    const [{name, sys, main, weather, wind}, isLoading] = useFetchWeat();
    const [degrees, setDegrees] = useState(true);
    const changeDegrees = () => setDegrees(!degrees);

    return (
        <div className="card-weather">
        {isLoading ? (
            <div className="loader"> </div>
            ) : (
                <>
                <div className="info-weather">
                <h2>{name},{sys?.country}</h2> 
                {
                degrees ? (<p>{(main?.temp)?.toFixed(1)}°C</p>) 
                : (<p>{((main?.temp) * 9/5 + 32)?.toFixed(1)}°F</p>)
                }
            </div>    

            <div className="info-temp">
                {degrees ? (
                    <>
                    <p><i className="fas fa-temperature-high"></i> Temp-Max: <b>{(main?.temp_max)?.toFixed(1)}°C</b></p>
                    <p><i className="fas fa-temperature-low"></i> Temp-Min: <b>{(main?.temp_min)?.toFixed(1)}°C</b></p>
                    </>
                ) : (
                    <>
                    <p><i className="fas fa-temperature-high"></i> Temp-Max: <b>{((main?.temp_max) * 9/5 + 32)?.toFixed(1)}°F</b></p>
                    <p><i className="fas fa-temperature-low"></i> Temp-Min: <b>{((main?.temp_min) * 9/5 + 32)?.toFixed(1)}°F</b></p>
                    </>
                )}
                <p><i className="fas fa-tint"></i> Humedad: <b>{main?.humidity}%</b></p>
                <p><i className="fas fa-wind"></i> Viento: <b>{(wind?.speed * 3.6).toFixed(1)} Km/h</b></p>
            </div>
            <div className="img-weather">
                <img src={`http://openweathermap.org/img/wn/${weather?.[0].icon}@4x.png`} alt="" />
                <span>- {weather?.[0].description} -</span>
            </div>
            <a className="btn-unidad" onClick={changeDegrees}>Cambiar a °F/°C</a>  
            </> 
            ) }
                   
        </div>
    );
};

export default CardWeather;
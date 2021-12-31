import {useEffect, useState} from 'react';
import {get} from 'axios';

const useFetchWeat = () => {

    const [dataweather, setDataWeather] = useState({});
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
     const getPosition = (position) => 
        {     
          let latitude = position.coords.latitude;
          let longitud = position.coords.longitude;
            get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitud}&units=metric&appid=18e9c99c48e378ca15c3dd6b64298328&lang=es`)
            .then(res => {setDataWeather(res.data)
                setIsLoading(false)
            });
        }
          navigator.geolocation.getCurrentPosition(getPosition, handlerError)
     }, [ ]) 
    
    const handlerError = (error) => alert("Se necesita dar permisos de Ubicacion, Error: "+ error);
  

    return [dataweather, isLoading];
};

export default useFetchWeat;
import {useEffect, useState} from 'react';
import {get} from 'axios';

const useFetchWeat = () => {

    // const [longitud, setLongitud] = useState(0);
    // const [latitude, setLatitude] = useState(0);
    const [dataweather, setDataWeather] = useState({});
   
    useEffect(() => {
     const getPosition = (position) => 
        {    
          // setLongitud(position.coords.longitude);
          // setLatitude(position.coords.latitude); 
          let latitude = position.coords.latitude;
          let longitud = position.coords.longitude;
            get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitud}&units=metric&appid=18e9c99c48e378ca15c3dd6b64298328&lang=es`)
            .then(res => {setDataWeather(res.data)
            console.log(res.data);
            });
        }
          navigator.geolocation.getCurrentPosition(getPosition, handlerError)
     }, [ ]) 
    
    const handlerError = (error) => alert("Se necesita dar permisos de Ubicacion, Error: "+ error);
  

    return dataweather;
};

export default useFetchWeat;
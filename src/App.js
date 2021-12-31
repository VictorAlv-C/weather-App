import Styles from './styles/Styles.css';
import CardWeather from './components/CardWeather';
import useFetchWeat from './hooks/useFetchWeat';


function App() {

  const  {weather} = useFetchWeat();
  let code = weather?.[0].id;
  let background;

  switch(code){
    case (code >= 200 && code < 300): background = "thunderstorm"; 
      break;
    case (code >= 300 && code < 500): background = "drizzle";
      break;
    case (code >= 500 && code < 600): background = "rain";
      break; 
    case (code >= 600 && code < 700): background = "snow";
      break;
    case (code >= 700 && code < 800): background = "mist";    
      break;
    case (code > 800): background = "clouds";
    break;
    default: background = "clear"
  }
  

  return (
    <div className={`App ${background}`}>
      <div className="app-name">
        <h1><i className="fas fa-cloud"></i> Tu ClimaNow-App</h1>
      </div>
      <CardWeather />
    </div>
  );
}

export default App;

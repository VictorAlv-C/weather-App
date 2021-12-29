import Styles from './styles/Styles.css';
import CardWeather from './components/CardWeather';


function App() {
  return (
    <div className="App">
      <div className="app-name">
        <h1><i className="fas fa-cloud"></i> Tu ClimaNow-App</h1>
      </div>
      <CardWeather />
    </div>
  );
}

export default App;

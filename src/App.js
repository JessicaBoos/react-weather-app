import "./App.css";
import "./styles.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <p>
        <a href="https://github.com/JessicaBoos/react-weather-app">
          Open sourced code
        </a>
        , by <a href="https://github.com/JessicaBoos">Jessica Boos</a> for{" "}
        <a href="https://www.shecodes.io/graduates/104550-jessica-boos">
          SheCodes
        </a>
        .
      </p>
    </div>
  );
}

export default App;

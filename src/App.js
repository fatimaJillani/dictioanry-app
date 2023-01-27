import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="Hello" />
        <footer className="text-center">
          This website was coded by Fatima Jillani and is{" "}
          <a href="https://github.com/fatimaJillani/WeatherApp">
            open-sorced on GitHub
          </a>{" "}
          and hosted by Netlify
        </footer>
      </div>
    </div>
  );
}

export default App;

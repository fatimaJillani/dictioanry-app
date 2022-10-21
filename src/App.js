import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="Hello" />
        <footer className="text-center">Coded by Fatima Jillani</footer>
      </div>
    </div>
  );
}

export default App;

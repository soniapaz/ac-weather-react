import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <main className="App">
      <div className="container">
        <Weather initialLocation="Málaga" />
      </div>
    </main>
  );
}

export default App;

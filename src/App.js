import "./App.css";

import { ChartMap } from "./components";

function App() {
  const empl_data = [
    {
      latitude: 5.9597,
      longitude: 10.14597,
      title: "Bamenda: 4",
    },
    {
      latitude: 3.86667,
      longitude: 11.51667,
      title: "Yaoundé: 6",
    },
    {
      latitude: 4.04827,
      longitude: 9.70428,
      title: "Douala: 10",
    },
    {
      latitude: 4.15342,
      longitude: 9.24231,
      title: "Buea: 60",
    },
    {
      latitude: 52.52437,
      longitude: 13.41053,
      title: "Berlin: 2",
    },
    {
      latitude: 48.13743,
      longitude: 11.57549,
      title: "Munich: 2",
    },
    {
      latitude: 47.77435,
      longitude: 7.64142,
      title: "Feldberg (Black Forest)",
    },
  ];
  return (
    <div className="App">
      <header className="App-header h-screen">
        <ChartMap marker_data={empl_data} projection="Miller" />
        {/* <Map /> */}
      </header>
    </div>
  );
}

export default App;

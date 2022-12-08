import "./App.css";

import { ChartMap } from "./components";
import am4geodata_cameroonLow from "@amcharts/amcharts4-geodata/cameroonLow";
import am4geodata_germanyLow from "@amcharts/amcharts4-geodata/germanyLow";

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

  // example of code geodata to be sent to component
  const code_geodata = [
    { code: "DE", geodata: am4geodata_cameroonLow },
    { code: "CM", geodata: am4geodata_germanyLow },
  ];
  return (
    <div className="App">
      <header className="App-header h-screen">
        <ChartMap
          marker_data={empl_data}
          projection="Miller"
          code_geodata={code_geodata}
        />
        {/* <Map /> */}
      </header>
    </div>
  );
}

export default App;

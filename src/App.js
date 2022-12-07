import "./App.css";

import { ChartMap, Map } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header h-screen">
        {/* <div className="w-[20%] h-screen overflow-y-scroll">
          {map_list.map((country, index) => {
            const country_name = country[1];
            return (
              <div
                className="bg-[#442312] hover:bg-[#272d11] py-1 my-2 rounded-md hover:cursor-pointer"
                onClick={() => {
                  setCountry(country);
                }}
              >
                {country_name}
              </div>
            );
          })}
        </div> */}
        <ChartMap />
        {/* <Map /> */}
      </header>
    </div>
  );
}

export default App;

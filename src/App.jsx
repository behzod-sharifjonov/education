import React from "react";
import Header from "./components/Header";
import Service from "./components/Service";
import Corusel from "./components/Corusel";
import Additional from "./components/Additional";

function App() {
  return (
    <div>
      <Header />
      <Service />
      <div className="corusel-container flex align">
        <Corusel />
      </div>
      <Additional />
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import React from "react";
import Tours from "./Component/Tours";
import data from "./data";

const App = () => {
  const [tours, Settours] = useState(data);

  function removeTour(id) {
    // Filter out the tour that has the id passed
    const newTours = tours.filter((tour) => tour.id !== id);
    Settours(newTours);
  }

  if (tours.length === 0) {
    return ( 
      <div className="refresh">
        <h1> No Tours Left </h1>
        <button className="btn-white" onClick={() => Settours(data)}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;

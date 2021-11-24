import React from "react";
import "./style.css";
import Cards from "./cards/Cards";
import StartOver from './start_over/StartOver';


function App() {
  return (
    <div className="container">

    <h1  className='header'>
        Memory Game
    </h1>
    <StartOver />
    <Cards />
    
    </div>
  );
}

export default App;

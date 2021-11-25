import React, { useRef, useState } from "react";
import "./style.css";
import Cards from "./cards/Cards";
import StartOver from "./start_over/StartOver";
import { createArrayOfCards, newShuffle } from "../utils/funcHandlers";

function App() {
  let cards = useRef(newShuffle(createArrayOfCards(24)));

  const [counter, setCounter] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [flag, setFlag] = useState([]);

  return (
    <div className="container">
      <h1 className="header">Memory Game</h1>
      <StartOver />
      <Cards
        cards={cards.current}
        flag={flag}
        setFlag={setFlag}
        counter={counter}
        setCounter={setCounter}
        clicked={clicked}
        setClicked={setClicked}
      />
    </div>
  );
}

export default App;

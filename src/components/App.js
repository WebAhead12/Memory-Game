import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import Cards from "./cards/Cards";
import StartOver from "./start_over/StartOver";
import { createArrayOfCards, newShuffle } from "../utils/funcHandlers";

function App() {
  let cards = useRef(newShuffle(createArrayOfCards(24)));

  const [counter, setCounter] = useState(0); //on card click counter++
  const [clicked, setClicked] = useState([]); //always contains only 2 items
  const [flag, setFlag] = useState([]); //contains the matching photos
  const [isActive, setActive] = useState(false); //not used yet, to add a class onClick
  const [restart, setRestart] = useState(false); //to startOver

  useEffect(() => {
    //onClick => StartOver => every state resets
    cards.current = newShuffle(createArrayOfCards(24));
    setActive(false);
    setFlag([]);
    setClicked([]);
    setCounter(0);
  }, [restart]);

  return (
    <div className="container">
      <h1 className="header">Memory Game</h1>

      {/* button to reset the game */}
      <StartOver restart={restart} setRestart={setRestart} />

      {/* contains all the cards on the page */}
      <Cards
        cards={cards.current}
        flag={flag}
        setFlag={setFlag}
        counter={counter}
        setCounter={setCounter}
        clicked={clicked}
        setClicked={setClicked}
        isActive={isActive}
        setActive={setActive}
      />
    </div>
  );
}

export default App;

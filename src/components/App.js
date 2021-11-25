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
  const [isActive, setActive] = useState(false);
  const [restart, setRestart] = useState(false);

  React.useEffect(() => {
    cards.current = newShuffle(createArrayOfCards(24));
    setActive(false);
    setFlag([]);
    setClicked([]);
    setCounter(0);
  }, [restart]);

  return (
    <div className="container">
      <h1 className="header">Memory Game</h1>
      <StartOver restart={restart} setRestart={setRestart} />
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

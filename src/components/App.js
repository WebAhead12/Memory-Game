import React, { useEffect, useRef } from "react";
import "./style.css";
import Cards from "./cards/Cards";
import StartOver from "./start_over/StartOver";
import { createArrayOfCards, newShuffle } from "../utils/funcHandlers";

function App() {
  let cards = useRef(newShuffle(createArrayOfCards(24)));
  console.log(cards);

  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [selectedImg, setSelectedImg] = React.useState(null);
  const [answers, setAnswers] = React.useState([]); // [7]

  return (
    <div className="container">
      <h1 className="header">Memory Game</h1>
      <StartOver />
      <Cards
        cards={cards.current}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        answers={answers}
        setAnswers={setAnswers}
      />
    </div>
  );
}

export default App;

import React, { useEffect, useRef } from "react";
import "./style.css";
import Cards from "./cards/Cards";
import StartOver from "./start_over/StartOver";
import { createArrayOfCards, newShuffle } from "../utils/funcHnadlers";

function App() {
  let cards = useRef(newShuffle(createArrayOfCards(24)));
  console.log(cards);

  const [imgID, setImgID] = React.useState(null);
  const [selectedImg, setSelectedImg] = React.useState(null);
  const [answers, setAnswers] = React.useState([]);

  return (
    <div className="container">
      <h1 className="header">Memory Game</h1>
      <StartOver />
      <Cards
        cards={cards.current}
        imgID={imgID}
        setImgID={setImgID}
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        answers={answers}
        setAnswers={setAnswers}
      />
    </div>
  );
}

export default App;

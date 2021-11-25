import React from "react";
import "./style.css";

function StartOver(props) {
  return (
    <button
      className="startOver"
      onClick={() => props.setRestart(!props.restart)}
    >
      Start Over
    </button>
  );
}

export default StartOver;

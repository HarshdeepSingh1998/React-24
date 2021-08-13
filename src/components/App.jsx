import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hi");

  const [isMousedOver, setMousedOver] = useState(false);

  function handleClick() {
    // console.log("clicked")
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    // console.log("Moused Over");
    setMousedOver(true);
  }

  function handleMouseOut() {
    setMousedOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

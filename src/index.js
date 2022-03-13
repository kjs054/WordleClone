import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css"

const WORD_LENGTH = 5;

const App = () => {

  const guess = useGuess();

  return (
    <div id="container">
      <div id="header">
        <h1>Wordle Max</h1>
      </div>
      <div id="gameBoard">
        <WordRow></WordRow>
        <WordRow></WordRow>
        <WordRow></WordRow>
        <WordRow></WordRow>
        <WordRow></WordRow>
        <WordRow></WordRow>
      </div>
      <KeyBoard></KeyBoard>
    </div>
  );
}

const LetterBox = () => {
  return (
    <div class="letterbox">
      
    </div>
  );
}

const WordRow = () => {
  return (
    <div class="wordRow">
      <LetterBox></LetterBox>
      <LetterBox></LetterBox>
      <LetterBox></LetterBox>
      <LetterBox></LetterBox>
      <LetterBox></LetterBox>
    </div>
  )
}

const KeyBoard = () => {
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "ENTER",
    "L",
    "Z",
    "X",
    "C",
    "Backspace",
    "V",
    "B",
    "N",
    "M",
  ]

  return (<div id="keyboard">
    {keys.map((key) => (
      <button class="keyBox">{key}</button>
    ))}
  </div>)
};

function useGuess() {
  
  const [guess, setGuess] = useState("");
  useEffect(() => {
    const onKeyDown = ({ key }) => {
      setGuess((curGuess) => {
        if (curGuess.length == WORD_LENGTH) {
          return curGuess
        } else {
          return curGuess + key
        }
      })
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onkeydown)
    }
  }, [])  
}

ReactDOM.render(<App />, document.getElementById("root"))
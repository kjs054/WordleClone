import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css"

const WORD_LENGTH = 5;
const ANSWER = "hello"
const MAX_GUESSES = 6
const ALLOWED_KEYS = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "Enter",
  "l",
  "z",
  "x",
  "c",
  "Backspace",
  "v",
  "b",
  "n",
  "m",
]

const App = () => {
  
  const [guess] = useGuess();

  return (
    <div id="container">
      <div id="header">
        <h1>Infinitordle</h1>
      </div>
      <div id="gameBoard">
        {
          Array(MAX_GUESSES).fill(0).map(() => (
            <WordRow guess={guess}></WordRow>
          ))
        }
      </div>
      <KeyBoard></KeyBoard>
    </div>
  );
}

const LetterBox = ({ value }) => {
  return (
    <div class="letterbox">{value}</div>
  );
}

const WordRow = ({guess = ""}) => {
  const lettersRemain = WORD_LENGTH - guess.length;
  const letters = guess.split("").concat(Array(lettersRemain).fill(""))
  return (
    <div class="wordRow">
      {letters.map((letter) => (
        <LetterBox value={letter}></LetterBox>
      ))}
    </div>
  )
}

const KeyBoard = () => {
  return (<div id="keyboard">
    {ALLOWED_KEYS.map((key) => (
      <button class="keyBox">{key.toUpperCase()}</button>
    ))}
  </div>)
};



function useGuess() {
  const [guess, setGuess] = useState("");
  useEffect(() => {
    const onKeyDown = ({ key }) => {
      if (!ALLOWED_KEYS.includes(key)){
        console.log(key)
        return
      }
      setGuess((curGuess) => {
        if (key == "Backspace") {
          return curGuess.slice(0, -1)
        }
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
  return [guess];
}

ReactDOM.render(<App />, document.getElementById("root"))
import "./App.css";
import React, { useRef, useState } from "react";

const App = () => {
  const input = useRef(null);
  const output = useRef(null);
  const [result, setResult] = useState(0);

  // Addition
  const addition = (e) => {
    e.preventDefault();
    setResult((result) => {
      return result + Number(input.current.value);
    });
  };

  // Subtraction
  const subtraction = (e) => {
    e.preventDefault();
    setResult((result) => {
      return result - Number(input.current.value);
    });
  };

  // Multiplication
  const multiplication = (e) => {
    e.preventDefault();
    setResult((result) => {
      return result * Number(input.current.value);
    });
  };

  // Division
  const division = (e) => {
    e.preventDefault();
    setResult((result) => {
      return result / Number(input.current.value);
    });
  };

  // Reset input field
  const resetInput = (e) => {
    e.preventDefault();
    input.current.value = " ";
  };

  // Reset Result
  const resetResult = (e) => {
    e.preventDefault();
    setResult((result) => result * 0);
    input.current.value = " ";
  };

  return (
    <div id="main">
      <h1> Simplest Working Calculator </h1>
      <form>
        <p ref={output}>Result: {result}</p>
        <input
          type="text"
          ref={input}
          name="number"
          id="number"
          pattern="[0-9]"
          placeholder="Enter a number"
        />
        <br />
        <button onClick={addition} id="btn">
          Add
        </button>{" "}
        <button onClick={subtraction} id="btn">
          Subtract
        </button>{" "}
        <button onClick={multiplication} id="btn">
          Multiply
        </button>{" "}
        <button onClick={division} id="btn">
          Divide
        </button>{" "}
        <button onClick={resetInput} id="btn1">
          Reset Input
        </button>{" "}
        <button onClick={resetResult} id="btn1">
          Reset Result
        </button>
      </form>
    </div>
  );
};

export default App;

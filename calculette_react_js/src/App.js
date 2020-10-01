import React, { useState } from "react";
import "./assets/css/app.css";
import Ecran from "./components/Ecran";
import EqualTouch from "./components/EqualTouch";
import MemoryTouch from "./components/MemoryTouch";
import NumericTouch from "./components/NumericTouch";
import OperandTouch from "./components/OperandTouch";

function App() {
  const [result, setResult] = useState("0");
  return (
    <div className="App">
      <div className="calculette">
        <div className="ecran">
          <Ecran result={result} />
        </div>
        <div className="touches">
          <div className="ligne">
            <MemoryTouch value="M+" functionnalite={memoryPlus} />
            <MemoryTouch value="M-" functionnalite={memoryMinus} />
            <MemoryTouch value="MR" functionnalite={memoryRead} />
            <MemoryTouch value="MC" functionnalite={memoryClear} />
          </div>
          <div className="ligne">
            <NumericTouch value={7} functionnalite={insertNumber} />
            <NumericTouch value={8} functionnalite={insertNumber} />
            <NumericTouch value={9} functionnalite={insertNumber} />
            <OperandTouch value="/" functionnalite={divideNumber} />
          </div>
          <div className="ligne">
            <NumericTouch value={4} functionnalite={insertNumber} />
            <NumericTouch value={5} functionnalite={insertNumber} />
            <NumericTouch value={6} functionnalite={insertNumber} />
            <OperandTouch value="*" functionnalite={multiplyNumber} />
          </div>
          <div className="ligne">
            <NumericTouch value={1} functionnalite={insertNumber} />
            <NumericTouch value={2} functionnalite={insertNumber} />
            <NumericTouch value={3} functionnalite={insertNumber} />
            <OperandTouch value="-" functionnalite={substractNumber} />
          </div>
          <div className="ligne">
            <NumericTouch value="-/" functionnalite={negativeNumber} />
            <NumericTouch value={0} functionnalite={insertNumber} />
            <NumericTouch value="." functionnalite={commaNumber} />
            <OperandTouch value="+" functionnalite={addNumber} />
          </div>
          <div className="total">
            <EqualTouch value="=" functionnalite={equalResult} />
          </div>
        </div>
      </div>
    </div>
  );
  function insertNumber(e) {
    let value = e.target.textContent;
    setResult(result + value);
  }

  function addNumber(e) {
    console.log(e.target.textContent);
  }

  function substractNumber(e) {
    console.log(e.target.textContent);
  }

  function divideNumber(e) {
    console.log(e.target.textContent);
  }

  function multiplyNumber(e) {
    console.log(e.target.textContent);
  }

  function memoryPlus(e) {
    console.log(e.target.textContent);
  }

  function memoryMinus(e) {
    console.log(e.target.textContent);
  }

  function memoryRead(e) {
    console.log(e.target.textContent);
  }

  function memoryClear(e) {
    console.log(e.target.textContent);
  }

  function equalResult(e) {
    console.log(e.target.textContent);
  }

  function negativeNumber(e) {
    console.log(e.target.textContent);
  }

  function commaNumber(e) {
    console.log(e.target.textContent);
  }
}

export default App;

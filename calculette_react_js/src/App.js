import React, { useState } from "react";
import "./assets/css/app.css";
import Ecran from "./components/Ecran";
import EqualTouch from "./components/EqualTouch";
import NumericTouch from "./components/NumericTouch";
import OperandTouch from "./components/OperandTouch";
import Touche from "./components/Touche";

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
            <Touche
              value="M+"
              cName="touch memoricTouch"
              functionnalite={memoryPlus}
            />
            <Touche
              value="M-"
              cName="touch memoricTouch"
              functionnalite={memoryMinus}
            />
            <Touche
              value="MR"
              cName="touch memoricTouch"
              functionnalite={memoryRead}
            />
            <Touche
              value="MC"
              cName="touch memoricTouch"
              functionnalite={memoryClear}
            />
          </div>
          <div className="ligne">
            <NumericTouch value={7} functionnalite={insertNumber} />
            <NumericTouch value={8} functionnalite={insertNumber} />
            <NumericTouch value={9} functionnalite={insertNumber} />
            <OperandTouch
              value="/"
              cName="touch operandTouch"
              functionnalite={divideNumber}
            />
          </div>
          <div className="ligne">
            <NumericTouch value={4} functionnalite={insertNumber} />
            <NumericTouch value={5} functionnalite={insertNumber} />
            <NumericTouch value={6} functionnalite={insertNumber} />
            <OperandTouch
              value="*"
              cName="touch operandTouch"
              functionnalite={multiplyNumber}
            />
          </div>
          <div className="ligne">
            <NumericTouch value={1} functionnalite={insertNumber} />
            <NumericTouch value={2} functionnalite={insertNumber} />
            <NumericTouch value={3} functionnalite={insertNumber} />
            <OperandTouch
              value="-"
              cName="touch operandTouch"
              functionnalite={substractNumber}
            />
          </div>
          <div className="ligne">
            <NumericTouch value="-/" functionnalite={negativeNumber} />
            <NumericTouch value={0} functionnalite={insertNumber} />
            <NumericTouch value="." functionnalite={commaNumber} />
            <OperandTouch
              value="+"
              cName="touch operandTouch"
              functionnalite={addNumber}
            />
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

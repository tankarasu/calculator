import React, { useState } from "react";
import "./assets/css/app.css";
import Ecran from "./components/Ecran";
import EqualTouch from "./components/EqualTouch";
import MemoryTouch from "./components/MemoryTouch";
import NumericTouch from "./components/NumericTouch";
import OperandTouch from "./components/OperandTouch";

let firstOperand = true;

function App() {
  const [displayToScreen, setDisplayToScreen] = useState("0");
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState("");
  const [numberInMemory, setNumberInMemory] = useState(0);

  return (
    <div className="App">
      <div className="calculette">
        <div className="ecran">
          <Ecran displayToScreen={displayToScreen} />
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
            <NumericTouch value="-/_" functionnalite={negativeNumber} />
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
    setDisplayToScreen((displayToScreen + value) * 1);
  }

  function addNumber() {
    if (firstOperand) {
      firstOperand = false;
      setResult(displayToScreen);
      setDisplayToScreen("0");
      setOperator("+");
    } else {
      setResult(result + displayToScreen);
      setDisplayToScreen("0");
      setOperator("+");
    }
  }

  function substractNumber() {
    if (firstOperand) {
      firstOperand = false;
      setResult(displayToScreen);
      setDisplayToScreen("0");
      setOperator("-");
    } else {
      setResult(result - displayToScreen);
      setDisplayToScreen("0");
      setOperator("-");
    }
  }

  function divideNumber() {
    if (firstOperand) {
      firstOperand = false;
      setResult(displayToScreen);
      setDisplayToScreen("0");
      setOperator("/");
    } else {
      setResult(result / displayToScreen);
      setDisplayToScreen("0");
      setOperator("/");
    }
  }

  function multiplyNumber(e) {
    if (firstOperand) {
      firstOperand = false;
      setResult(displayToScreen);
      setDisplayToScreen("0");
      setOperator("*");
    } else {
      setResult(result * displayToScreen);
      setDisplayToScreen("0");
      setOperator("*");
    }
  }

  function memoryPlus(e) {
    setNumberInMemory(numberInMemory + displayToScreen);
    setDisplayToScreen(0);
  }

  function memoryMinus(e) {
    setNumberInMemory(numberInMemory - displayToScreen);
    setDisplayToScreen(0);
  }

  function memoryRead(e) {
    setDisplayToScreen(numberInMemory);
  }

  function memoryClear(e) {
    setNumberInMemory(0);
    setDisplayToScreen(0);
  }

  function equalResult(e) {
    firstOperand = true;
    setDisplayToScreen(eval(`${result}${operator}${displayToScreen}`));
  }

  function negativeNumber(e) {
    setDisplayToScreen(displayToScreen * -1);
    console.log(e.target.textContent);
  }

  function commaNumber(e) {
    if (displayToScreen.toString().indexOf(".") === -1) {
      let value = e.target.textContent;
      setDisplayToScreen(displayToScreen + value);
    }
  }
}

export default App;

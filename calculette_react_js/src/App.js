import React, { useState } from "react";
import "./assets/css/app.css";
import Ecran from "./components/Ecran";
import Touche from "./components/Touche";

function App() {
  const [result, setResult] = useState(0);
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
              functionnalite={example}
            />
            <Touche value="M-" cName="touch memoricTouch" />
            <Touche value="MR" cName="touch memoricTouch" />
            <Touche value="MC" cName="touch memoricTouch" />
          </div>
          <div className="ligne">
            <Touche value={7} cName="touch numericTouch" />
            <Touche value={8} cName="touch numericTouch" />
            <Touche value={9} cName="touch numericTouch" />
            <Touche value="/" cName="touch operandTouch" />
          </div>
          <div className="ligne">
            <Touche value={4} cName="touch numericTouch" />
            <Touche value={5} cName="touch numericTouch" />
            <Touche value={6} cName="touch numericTouch" />
            <Touche value="*" cName="touch operandTouch" />
          </div>
          <div className="ligne">
            <Touche value={1} cName="touch numericTouch" />
            <Touche value={2} cName="touch numericTouch" />
            <Touche value={3} cName="touch numericTouch" />
            <Touche value="-" cName="touch operandTouch" />
          </div>
          <div className="ligne">
            <Touche value="-/" cName="touch numericTouch" />
            <Touche value={0} cName="touch numericTouch" />
            <Touche value="." cName="touch numericTouch" />
            <Touche value="+" cName="touch operandTouch" />
          </div>
          <div className="total">
            <Touche value="=" cName="equalTouch" />
          </div>
        </div>
      </div>
    </div>
  );
}

function example() {
  console.log("hello");
}

export default App;

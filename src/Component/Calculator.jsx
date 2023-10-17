import * as Btn from './Button'
import BeautifulScreen from './Screen'
import React, { useState } from "react";


function Calculator() {
    const listStyle = {
        display: 'inline-flex',
        margin: '0px',
        padding: '0px',
        gap: '2px'
    }
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("0");

    const handleNumberClick = (number) => {
        setExpression((prevExpression) => prevExpression + number);
      };
      

      const handleOperatorClick = (operator) => {
        setExpression((prevExpression) => prevExpression + operator);
      };
      
      const handleEqualClick = () => {
        try {
          const evalResult = eval(expression);
          const result = parseFloat(evalResult).toString(); // Convert the result to string
          setResult(result);
        } catch (error) {
          setResult("Error");
        }
      };

      const handleClearClick = () => {
        setExpression("");
        setResult("0");
      };

      const handleDecimalClick = () => {
        if (!expression.includes(".")) {
          setExpression((prevExpression) => prevExpression + ".");
        }
      };

      const handleBackspaceClick = () => {
        setExpression((prevExpression) => prevExpression.slice(0, -1));
      };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: "2px" }}>
            <div>
                <BeautifulScreen calcul={expression} result={result}></BeautifulScreen>
            </div>
            <ul style={{ ...listStyle }}>
                <li><Btn.Operator op="%" onClick={() => handleOperatorClick("%")}/></li>
                <li><Btn.Operator op="c" onClick={() => handleClearClick()} /></li>
                <li><Btn.Operator op="÷" onClick={() => handleOperatorClick("/")}/></li>
                <li><Btn.Logo logo="0" onClick={handleBackspaceClick}/></li>
            </ul>
            <ul style={{ ...listStyle }}>
                <li><Btn.Number nb="7" onClick={() => handleNumberClick("7")}/></li>
                <li><Btn.Number nb="8" onClick={() => handleNumberClick("8")}/></li>
                <li><Btn.Number nb="9" onClick={() => handleNumberClick("9")}/></li>
                <li><Btn.Operator op="x" onClick={() => handleOperatorClick("*")}/></li>
            </ul>
            <ul style={{ ...listStyle }}>
                <li><Btn.Number nb="4" onClick={() => handleNumberClick("4")}/></li>
                <li><Btn.Number nb="5" onClick={() => handleNumberClick("5")}/></li>
                <li><Btn.Number nb="6" onClick={() => handleNumberClick("6")}/></li>
                <li><Btn.Operator op="-" onClick={() => handleOperatorClick("-")}/></li>
            </ul>
            <ul style={{ ...listStyle }}>
                <li><Btn.Number nb="1"onClick={() => handleNumberClick("1")} /></li>
                <li><Btn.Number nb="2" onClick={() => handleNumberClick("2")}/></li>
                <li><Btn.Number nb="3" onClick={() => handleNumberClick("3")}/></li>
                <li><Btn.Operator op="+" onClick={() => handleOperatorClick("+")}/></li>
            </ul>
            <ul style={{ ...listStyle }}>
                <li><Btn.Number nb="H" /></li>
                <li><Btn.Number nb="0" onClick={() => handleNumberClick("0")}/></li>
                <li><Btn.Number nb="." onClick={handleDecimalClick} /></li>
                <li><Btn.Equal eq="=" onClick={handleEqualClick} /></li>
            </ul>
        </div>
    )
}

export default Calculator
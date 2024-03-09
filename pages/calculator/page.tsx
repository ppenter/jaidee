import React from "react";
import './page.css';

const CalButton = (props: any) => {
  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded text-xl"
    onClick={props.onClick}>{props.children}</button>
  )
}

// Calculalor Page
export default function Page(props: any) {
  const [result, setResult] = React.useState(0);
  const [input, setInput] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [prevInput, setPrevInput] = React.useState("");

  const handleNumber = (number: string) => {
    setInput(input + number);
  }

  const handleOperator = (operator: string) => {
    if (input) {
      setOperator(operator);
      setPrevInput(input);
      setInput("");
    }
  }

  const handleCalculate = () => {
    if (prevInput && input) {
      switch (operator) {
        case "+":
          setResult(parseFloat(prevInput) + parseFloat(input));
          break;
        case "-":
          setResult(parseFloat(prevInput) - parseFloat(input));
          break;
        case "*":
          setResult(parseFloat(prevInput) * parseFloat(input));
          break;
        case "/":
          setResult(parseFloat(prevInput) / parseFloat(input));
          break;
      }
    }
  }

  const handleClear = () => {
    setResult(0);
    setInput("");
    setOperator("");
    setPrevInput("");
  }


  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Calculator</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-row justify-center items-center gap-2">
        <input type="text" value={input} readOnly />
        <input type="text" value={operator} readOnly />
        <input type="text" value={prevInput} readOnly />
        <input type="text" value={result} readOnly />
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <CalButton onClick={() => handleNumber("1")}>1</CalButton>
          <CalButton onClick={() => handleNumber("2")}>2</CalButton>
          <CalButton onClick={() => handleNumber("3")}>3</CalButton>
          <CalButton onClick={() => handleOperator("+")}>+</CalButton>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <CalButton onClick={() => handleNumber("4")}>4</CalButton>
          <CalButton onClick={() => handleNumber("5")}>5</CalButton>
          <CalButton onClick={() => handleNumber("6")}>6</CalButton>
          <CalButton onClick={() => handleOperator("-")}>-</CalButton>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <CalButton onClick={() => handleNumber("7")}>7</CalButton>
          <CalButton onClick={() => handleNumber("8")}>8</CalButton>
          <CalButton onClick={() => handleNumber("9")}>9</CalButton>
          <CalButton onClick={() => handleOperator("*")}>*</CalButton>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <CalButton onClick={() => handleNumber("0")}>0</CalButton>
          <CalButton onClick={() => handleClear()}>C</CalButton>
          <CalButton onClick={() => handleCalculate()}>=</CalButton>
          <CalButton onClick={() => handleOperator("/")}>/</CalButton>
        </div>
      </div>
    </div>
  )
}
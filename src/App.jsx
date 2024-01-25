import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const App = () => {

  const [sum, setSum] = useState("0");
  const buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "/", "="];

const handleClick = (string) => {
  if (string === "=") {
    try {
      let expression = sum;
      setSum(evaluate(expression));
    } catch (error) {
      //  display an error message if calculation is invalid
      setSum("Error");
    }
  } else if (string === "C") {
    setSum("0");
  } else {
    setSum((prevSum) => (prevSum === "0" ? string : prevSum + string));
  }
};

  return (
    <div className='container'>
      <p>Kalkulata</p>
      <h1 className='inputBox'>{sum}</h1>
      <div className='buttonGroup'>
        {
          buttons.map((button, index) => {
            return (
              <button className='buttons' key={index} onClick={() => handleClick(button)}>{button}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
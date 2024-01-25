import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const App = () => {

  const [sum, setSum] = useState("");
  const buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "/", "="];

  const handleClick = (string) => {
    if(string === "="){
      let expression = sum;      
      setSum(evaluate(expression))
    } else if(string === "C"){
        setSum("")     
    } else {
        setSum(sum + string)
    }
  }

  return (
    <div className='centre'>
      <h4 className='inputBox'>{sum}</h4>
      <div className='buttonWrap'>
        {
          buttons.map((button, index) => {
            return (
              <button key={index} onClick={() => handleClick(button)} className={`button-${button}`}>{button}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
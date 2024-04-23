import "./App.css"
import { useState } from "react"


function App() {

  const [firstNum, setFirstNum] = useState('0')
  const [secondNum, setSecondNum] = useState('0')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('0')


  function handleFirstNum(e) {
    if (e.target.innerText === "Clear") {
      setFirstNum('0')
      return
    }
    if (Number(firstNum) === 0) {
    setFirstNum(e.target.innerText)
    } else {
      setFirstNum(firstNum + e.target.innerText)
    }
    if (e.target.innerText === ".") {
      if (firstNum.includes('.')) {
        return
      } else {
        setFirstNum(firstNum + e.target.innerText)
      }
    }
  }
  // console.log(firstNum, typeof (firstNum))
  
    function handleSecondNum(e) {
    if (e.target.innerText === "Clear") {
      setSecondNum('0')
      return
    }
    if (Number(secondNum) === 0) {
    setSecondNum(e.target.innerText)
    } else {
      setSecondNum(secondNum + e.target.innerText)
    }
    if (e.target.innerText === ".") {
      if (secondNum.includes('.')) {
        return
      } else {
        setSecondNum(secondNum + e.target.innerText)
      }
    }
  }

  function handleOperation(e) {
    setOperator(e.target.innerText)
  }



  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers">
          <button onClick={handleFirstNum}>1</button>
          <button onClick={handleFirstNum}>2</button>
          <button onClick={handleFirstNum}>3</button>
          <button onClick={handleFirstNum}>4</button>
          <button onClick={handleFirstNum}>5</button>
          <button onClick={handleFirstNum}>6</button>
          <button onClick={handleFirstNum}>7</button>
          <button onClick={handleFirstNum}>8</button>
          <button onClick={handleFirstNum}>9</button>
          <button onClick={handleFirstNum}>0</button>
          <button onClick={handleFirstNum}>.</button>
          <button onClick={handleFirstNum}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleOperation}>+</button>
          <button onClick={handleOperation}>-</button>
          <button onClick={handleOperation}>*</button>
          <button onClick={handleOperation}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
          <button onClick={handleSecondNum}>1</button>
          <button onClick={handleSecondNum}>2</button>
          <button onClick={handleSecondNum}>3</button>
          <button onClick={handleSecondNum}>4</button>
          <button onClick={handleSecondNum}>5</button>
          <button onClick={handleSecondNum}>6</button>
          <button onClick={handleSecondNum}>7</button>
          <button onClick={handleSecondNum}>8</button>
          <button onClick={handleSecondNum}>9</button>
          <button onClick={handleSecondNum}>0</button>
          <button onClick={handleSecondNum}>.</button>
          <button onClick={handleSecondNum}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>0</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App

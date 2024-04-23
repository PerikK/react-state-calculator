import "./App.css"
import { useState } from "react"


function App() {

  const [firstNum, setFirstNum] = useState('0')
  const [secondNum, setSecondNum] = useState('0')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('0')


  function handleFirstNum(e) {
    if (e.target.innerText === "Clear") {
      setFirstNum(0)
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
    console.log(firstNum,typeof(firstNum))

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
        <p>+</p>
        <div className="numbers">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>0</p>
        <div className="numbers">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
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

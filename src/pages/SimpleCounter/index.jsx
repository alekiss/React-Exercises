import React, { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import "./styles.css"

const SimpleCounter = () => {

  const [count, setCount] = useState(0)

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className="counter_container">
        <div className="counter_number">
          <h1>{count}</h1>
        </div>
        <div className="counter_button">
          <button onClick={handleMinus}>
            <AiOutlineMinus />
          </button>
          <button onClick={handlePlus}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </>
  )
}

export default SimpleCounter
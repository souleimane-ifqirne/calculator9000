import Title from './Component/Title'
import Calculator from './Component/Calculator'
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import './CSS/App.css'


function App() {

  const [handleDisplay, setHandleDisplay] = useState("block");

const closeCalculator = () => {
  setHandleDisplay("none")
}

  const dispStyle = {
    display: handleDisplay
  }

  return (
    <>
      <Draggable handle="strong">
        <div className="calcBox" style={dispStyle}>
          <Title closeCalculator={closeCalculator}text="0"></Title>
          <Calculator></Calculator>
        </div>
      </Draggable>
    </>
  )
}

export default App

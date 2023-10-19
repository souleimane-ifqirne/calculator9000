import Title from './Component/Title'
import Calculator from './Component/Calculator'
import React from 'react';
import Draggable from 'react-draggable';
import './CSS/App.css'


function App() {
  return (
    <>
      <Draggable handle="strong">
        <div className="calcBox">
          <Title text="0"></Title>
          <Calculator></Calculator>
        </div>
      </Draggable>
    </>
  )
}

export default App

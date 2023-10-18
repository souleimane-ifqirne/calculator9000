import Title from './Component/Title'
import Calculator from './Component/Calculator'
import React from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import './App.css'

function App() {

  const TitleStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '15px',
    margin: '0px',
    gap: '3px',
    color: '#cdd1d1'
}

  const calcStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgb(26, 35, 32)',
    width: '280px',
    height: '380px',
    borderRadius: '5px'
  }

  return (
    <Draggable handle="strong">
          <div style={{ ...calcStyle }}>
            <strong style={{...TitleStyle}}><Title text="0"></Title></strong>
            <Calculator></Calculator>
          </div>
    </Draggable>
  )
}

export default App
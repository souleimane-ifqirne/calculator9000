import { useState } from 'react'
import Title from './Component/Title'
import Calculator from './Component/Calculator'
import './App.css'

function App() {
  const calcStyle = {
    display: 'flex',
    justifyContent: 'center' 
  }

  return (
    <body style={{}}>
      <div>
        <Title text="Calculator9000"></Title>
      </div>
      <div style={{...calcStyle}}>
        <Calculator></Calculator>
      </div>
    </body>

  )
}

export default App
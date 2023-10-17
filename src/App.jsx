import Title from './Component/Title'
import Calculator from './Component/Calculator'
import './App.css'
function App() {
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
    <body className="calculator">
      <div style={{ ...calcStyle }}>
        <Title text="0"></Title>
        <Calculator></Calculator>
      </div>
    </body>

  )
}

export default App
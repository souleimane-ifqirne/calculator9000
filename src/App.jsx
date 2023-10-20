import Title from './Component/Title'
import Calculator from './Component/Calculator'
import React, { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './CSS/App.css'


function App() {

  const [handleDisplay, setHandleDisplay] = useState(true);
  const [divWidth, setDivWidth] = useState(330);
  const [divHeight, setDivHeight] = useState(460);
  const [isLarge, setLarge] = useState(true)
  const [isTop, setIsTop] = useState("50px")
  const [isLeft, setIsLeft] = useState("50px")


  const divRef = useRef(null);

  useEffect(() => {
    // Function to update div width and height when resized
    const updateSize = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setDivWidth(rect.width);
        console.log("🚀 ~ file: App.jsx:26 ~ updateSize ~ setDivWidth(rect.width);:", setDivWidth(rect.width))
        setDivHeight(rect.height);
        console.log("🚀 ~ file: App.jsx:28 ~ updateSize ~ setDivHeight(rect.height);:", setDivHeight(rect.height))
      }
    };
    // Add a resize event listener
    window.addEventListener('resize', updateSize);

    // Call the updateSize function initially
    updateSize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  const hideCalculator = () => {
    setHandleDisplay(!handleDisplay)
  }

  const closeCalculator = () => {
    setHandleDisplay(!handleDisplay)
  }

  const largeScreen = () => {
    setLarge(!isLarge)
    if (isLarge == true) {
      setIsTop("initial")
      setIsLeft("initial")
    } else {
      setIsTop("50px")
      setIsLeft("50px")
    }

  }

  const dispStyle = {
    position: "absolute",
    display: handleDisplay ? "block" : "none",
    width: !isLarge ? "100%" : divWidth,
    height: !isLarge ? "100%" : divHeight,
  }

  const bodyStyle = {
    top: isTop,
    left: isLeft
  }

  return (
    <body className="bodyCalc" style={bodyStyle}>
      <Draggable handle="strong">
        <div className="calcBox" style={dispStyle}>
          <Title hideCalculator={hideCalculator} closeCalculator={closeCalculator} largeScreen={largeScreen} text="0"></Title>
          <Calculator></Calculator>
        </div>
      </Draggable>
    </body>
  )
}

export default App

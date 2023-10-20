import { RemoveOutline } from 'react-ionicons'
import { SquareOutline } from 'react-ionicons'
import { CloseOutline } from 'react-ionicons'
import React, { useState } from "react";
import '../CSS/Title.css'




const TitleBar = (props) => {

  return <div className="title-bar" onClick={props.closeCalculator}>{props.children == "cross" &&
    (<CloseOutline
      color={'#ffffff'}
      className="barPosition"
      height="17x"
      width="20px"
    />)}
    {props.children == "size" && (<SquareOutline
      className="barPosition"
      color={'#ffffff'}
      height="17px"
      width="12px"
    />
    )}
    {props.children == "hide" && (<RemoveOutline
      className="barPosition"
      color={'#ffffff'}
      height="20px"
      width="20px"
    />)}</div>;
}

export default TitleBar
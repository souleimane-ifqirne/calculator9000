import { useState } from "react";

const Logo = () => {
    return (<div style={{backgroundColor: '#2d3534', ...btnStyle}}></div>)
}

const Number = (props) => {
    
    return(<div style={{backgroundColor: '#363e3d', ...btnStyle}}><p style={{...inBtnStyle}}>{props.nb}</p></div>)
}

const Operator = (props) => {
    return (<div style={{backgroundColor: '#2d3534', ...btnStyle}}><p style={{...inBtnStyle}}>{props.op}</p></div>)
}

const Equal = (props) => {
    return (<div style={{backgroundColor: '#d59adf', ...btnStyle}}><p style={{...inBtnStyle}}>{props.eq}</p></div>)
}

const inBtnStyle = {
    display: 'flex',
     alignItems: 'center'
}

const btnStyle = {
    color : "white",
    fontWeight:"bold",
    display: 'flex',
    justifyContent: 'center',
    width: '4em',
    height: '3em',
    borderRadius: '5px'
}

export { Number, Equal, Operator, Logo }

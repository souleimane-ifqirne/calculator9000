import { CalculatorOutline } from 'react-ionicons'
import React, { useState } from "react";
import TitleBar from './TitleBar'
import '../CSS/Title.css'

const Title = (props) => {
    return (
        <div className="titleDiv">
            <strong>
                <div>{props.text == 0 && (<CalculatorOutline
                    color={'#ffffff'}
                    height="15px"
                    width="15px"
                    style={{
                        marginTop: '5px',
                        marginLeft: '10px',
                        marginRight: '5px'
                    }}
                />)} Calculator</div>
            </strong>
            <div className="titleBar" >
                    <TitleBar children="hide" hideCalculator={props.hideCalculator}/>
                    <TitleBar children="size" largeScreen={props.largeScreen} />
                    <TitleBar className="cross" children="cross" closeCalculator={props.closeCalculator}/>
                </div>
        </div>
    )
}
export default Title

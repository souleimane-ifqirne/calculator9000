import * as Btn from './Button'
import BeautifulScreen from './Screen'
import { BackspaceOutline } from 'react-ionicons'


function Calculator() {
    const listStyle = {
        display: 'inline-flex',
        margin: '0px',
        padding: '0px',
        gap: '2px' 
    }
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: "2px" }}>
             <div>
                <BeautifulScreen calcul="12 + 52" result="64"></BeautifulScreen>
            </div>
            <ul style={{...listStyle}}>
                <li><Btn.Number nb="%">uyho</Btn.Number></li>
                <li><Btn.Number nb="c"></Btn.Number></li>
                <li><Btn.Operator op="÷"></Btn.Operator></li>
                <li><Btn.Logo logo="0"></Btn.Logo></li>
            </ul>
            <ul style={{...listStyle}}>
                <li><Btn.Number nb="7"></Btn.Number></li>
                <li><Btn.Number nb="8"></Btn.Number></li>
                <li><Btn.Number nb="9"></Btn.Number></li>
                <li><Btn.Operator op="x"></Btn.Operator></li>
            </ul>
            <ul style={{...listStyle}}>
                <li><Btn.Number nb="4"></Btn.Number></li>
                <li><Btn.Number nb="5"></Btn.Number></li>
                <li><Btn.Number nb="6"></Btn.Number></li>
                <li><Btn.Operator op="-"></Btn.Operator></li>
            </ul>
            <ul style={{...listStyle}}>
                <li><Btn.Number nb="1"></Btn.Number></li>
                <li><Btn.Number nb="2"></Btn.Number></li>
                <li><Btn.Number nb="3"></Btn.Number></li>
                <li><Btn.Operator op="+"></Btn.Operator></li>
            </ul>
            <ul style={{...listStyle}}>
                <li><Btn.Number nb="."></Btn.Number></li>
                <li><Btn.Number nb="0"></Btn.Number></li>
                <li><Btn.Number nb=","></Btn.Number></li>
                <li><Btn.Equal eq="="></Btn.Equal></li>
            </ul>
        </div>
    )
}

export default Calculator
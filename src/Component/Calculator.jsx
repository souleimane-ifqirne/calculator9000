import * as Btn from './Button'
import { BackspaceOutline } from 'react-ionicons'
import BeautifulScreen from './Screen'

function Calculator() {
    const listStyle = {
        display: 'inline-flex',
        margin: '0px',
        padding: '0px',
        gap: '2px' 
    }
    /*const [state, setState] = React.useState({})*/
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: "2px" }}>
            <ul style={{...listStyle}}>
                <li><Btn.Number nb="%">uyho</Btn.Number></li>
                <li><Btn.Number nb="c"></Btn.Number></li>
                <li><span><Btn.Logo><BackspaceOutline
                    color={'red'}
                    height="20px"
                    width="20px"
                /></Btn.Logo></span></li>
                <li><Btn.Operator op="÷"></Btn.Operator></li>
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
            {/*<BackspaceOutline
                    color={'black'}
                    height="20px"
                    width="20px"
                />*/}
        </div>
    )
}

export default Calculator
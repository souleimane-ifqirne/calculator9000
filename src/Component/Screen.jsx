import { useState } from "react";

const BeautifulScreen = (props) => {
    const ScreenStyle = {
        display: 'flex',
        width: '261.5px',
        height: '100px',
        backgroundColor: 'rgb(26, 35, 32)',
        borderRadius: '5px',
        flexDirection: 'column',
        color: 'white'
    }

    const inBtnStyle = {
        display: "flex",
        alignItems: "center",
        marginRight: '6px'
    };

    return (<div style={{ ...ScreenStyle }}>
        <div style={{display: 'flex', justifyContent: 'flex-end', height: '30px', width: '100%', borderRadius: '5px'}}>
            <p style={{color: '#8d9191', ...inBtnStyle }}>{props.calcul}</p>
        </div>
        <div style={{display: 'flex', height: '70px', justifyContent: 'flex-end', width: '100%', borderRadius: '0px 0px 5px 5px'}}>
            <p style={{fontSize: '36px', ...inBtnStyle}}>{props.result}</p>
        </div>
    </div>)
}

export default BeautifulScreen
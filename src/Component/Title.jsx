import { useState } from 'react'


const Title = (props) => {
    const TitleStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'    
    }
    return (
        <h1 style={{...TitleStyle}}>{props.text}</h1>
    )
}


export default Title

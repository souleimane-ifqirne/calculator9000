import { CalculatorOutline } from 'react-ionicons'

<CalculatorOutline
  color={'#ffffff'} 
  height="250px"
  width="250px"
/>


const Title = (props) => {
    const TitleStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '15px',
        margin: '0px',
        gap: '3px',
        color: '#cdd1d1'
    }
    return (
            <p style={{...TitleStyle}}>{props.text == 0 && (<CalculatorOutline
                color={'#ffffff'} 
                height="15px"
                width="15px"
                style={{marginLeft: '5px'}}
              />)} Calculator</p>
    )
}


export default Title

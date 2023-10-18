import { CalculatorOutline } from 'react-ionicons'

const Title = (props) => {

    return (
            <p >{props.text == 0 && (<CalculatorOutline
                color={'#ffffff'} 
                height="15px"
                width="15px"
                style={{marginLeft: '5px'}}
              />)} Calculator</p>
    )
}


export default Title

import { CalculatorOutline } from 'react-ionicons'
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
                        marginLeft: '5px'
                    }}
                />)} Calculator</div>
            </strong>
        </div>
    )
}
export default Title

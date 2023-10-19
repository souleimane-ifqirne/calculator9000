import { BackspaceOutline } from "react-ionicons";
import { CaretBackCircleOutline } from 'react-ionicons'
import '../CSS/Button.css'

const Logo = (props) => {
    return (
        <div className="operator" onClick={props.onClick}>
            <p className="btnPosition">
                {props.logo == 0 && (<BackspaceOutline className="btnPosition" color={"white"} height="20px" width="20px" />)}
                {props.logo == 1 && (<CaretBackCircleOutline color={"white"} height="20px" width="20px" />)}
            </p>
        </div>
    );
};

const Number = (props) => {
    return (
        <div className="number" onClick={props.onClick}>
            <p className="btnPosition">{props.nb}</p>
        </div>
    );
};

const Operator = (props) => {
    return (
        <div className="operator" onClick={props.onClick}>
            <p className="btnPosition">{props.op}</p>
        </div>
    );
};

const Equal = (props) => {
    return (
        <div className="equal" onClick={props.onClick}>
            <p className="btnPosition"
            >{props.eq}</p>
        </div>
    );
};

export { Number, Equal, Operator, Logo };

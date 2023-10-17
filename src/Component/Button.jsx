import { BackspaceOutline } from "react-ionicons";
import { CaretBackCircleOutline } from 'react-ionicons'

const Logo = (props) => {
    return (
        <div style={{ backgroundColor: "#2d3534", ...btnStyle }} onClick={props.onClick}>
            <p style={{ ...inBtnStyle }}>
                {props.logo == 0 && (<BackspaceOutline style={{ ...inBtnStyle }} color={"white"} height="20px" width="20px" />)}
                {props.logo == 1 && (<CaretBackCircleOutline color={"white"} height="20px" width="20px" />)}
            </p>
        </div>
    );
};

const Number = (props) => {
    return (
        <div className="number" style={{...btnStyle }} onClick={props.onClick}>
            <p style={{ ...inBtnStyle }}>{props.nb}</p>
        </div>
    );
};

const Operator = (props) => {
    return (
        <div style={{ backgroundColor: "#2d3534", ...btnStyle }} onClick={props.onClick}>
            <p style={{ ...inBtnStyle }}>{props.op}</p>
        </div>
    );
};

const Equal = (props) => {
    return (
        <div style={{ backgroundColor: "#d59adf", ...btnStyle }} onClick={props.onClick}>
            <p style={{ ...inBtnStyle }}
            >{props.eq}</p>
        </div>
    );
};

const inBtnStyle = {
    display: "flex",
    alignItems: "center",
};

const btnStyle = {
    color: "white",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    width: "4em",
    height: "3em",
    borderRadius: "5px",
};
export { Number, Equal, Operator, Logo };

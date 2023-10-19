import '../CSS/Screen.css'

const BeautifulScreen = (props) => {

    return (<div className="screenDiv">
        <div className="calculDiv">
            <p>{props.calcul}</p>
        </div>
        <div className="resultDiv">
            <p>{props.result}</p>
        </div>
    </div>)
}

export default BeautifulScreen
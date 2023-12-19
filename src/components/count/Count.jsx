

import './Count.scss'
import IconUp from "../../assets/img/icons/icon-up.svg";
import IconDown from "../../assets/img/icons/icon-down.svg";


const Count = ({count, increase, decrease, changeValue, id}) => {
    return (
        <div className="count">
            <div className="count__box">
                <input onChange={(e) => {changeValue(id, +e.target.value)}} type="number" className="count__input" min="1" max="100" value={count}/>
            </div>
            <div className="count__controls">
                <button type="button" className="count__up" onClick={() => {increase(id)}}>
                    <img src={IconUp} alt="Increase"/>
                </button>
                <button type="button" className="count__down" onClick={() => {decrease(id)}}>
                    <img src={IconDown} alt="Decrease"/>
                </button>
            </div>
        </div>
    )
}

export default Count
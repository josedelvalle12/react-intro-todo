import { FaCheck } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => <FaCheck className="Icon-svg" fill={color}></FaCheck>,
    "delete": (color) => <RiDeleteBack2Fill className="Icon-svg" fill={color}></RiDeleteBack2Fill>,
};

function TodoIcon({ type, color, onClick }) {
    return(
        <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }; 
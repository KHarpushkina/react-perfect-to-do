import "./ToDoCheckbox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ToDoCheckbox = () => (
  <label className="td-checkbox">
    <input type="checkbox" className="td-checkbox__input" />
    <div className="td-checkbox__container">
      <FontAwesomeIcon icon={faCheck} className="td-checkbox__tick" />
    </div>
  </label>
);

export default ToDoCheckbox;

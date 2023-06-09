import "./ToDoListItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToDoCheckbox from "../../atoms/ToDoCheckbox/ToDoCheckbox";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ToDoList() {
  return (
    <div className="td-list-item d-flex pt-4 pb-4 ps-3 pe-3">
      <div className="td-list-item__checkbox d-flex justify-content-center align-items-center">
        <ToDoCheckbox />
      </div>
      <div className="td-list-item__text fs-4">
        <span>Test item</span>
      </div>
      <div className="td-list-item__clear-button d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
}

export default ToDoList;

import "./ToDoBoard.scss";
import ToDoList from "@/molecules/ToDoList/ToDoList";
import CreateToDoItemForm from "@/molecules/CreateToDoItemForm/CreateToDoItemForm";

function ToDoBoard() {
  return (
    <div className="td-board__overlay w-100 h-100 position-fixed d-flex justify-content-center align-items-center">
      <div className="td-board__content position-absolute">
        <div className="td-board__content__create-item-from pb-4">
          <CreateToDoItemForm></CreateToDoItemForm>
        </div>
        <ToDoList></ToDoList>
      </div>
    </div>
  );
}

export default ToDoBoard;

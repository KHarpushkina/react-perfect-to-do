import "./ToDoList.scss";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import ToDoListFooter from "../ToDoListFooter/ToDoListFooter";

function ToDoList() {
  const toDoItems = [
    { title: "Buy garlic", id: 1 },
    { title: "Pay bills", id: 2 },
    { title: "Cook dinner", id: 3 },
  ];

  const listItems = toDoItems.map((item) => (
    <ToDoListItem
      key={item.id}
      style={{
        color: item.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </ToDoListItem>
  ));

  return (
    <div className="td-list d-flex flex-column justify-content-between">
      <div className="td-list__table">
        <div>
          <ToDoListItem ></ToDoListItem>
        </div>
      </div>
      <div className="td-list__footer">
        <ToDoListFooter></ToDoListFooter>
      </div>
    </div>
  );
}

export default ToDoList;

import "./ToDoListFooter.scss";

function ToDoListFooter() {
  return (
    <div className="td-list-footer d-flex w-100">
      <div className="td-list-footer__info">
        <span>5 items left</span>
      </div>
      <div className="td-list-footer__filters d-flex">
        <span>5 items left</span>
        <span>5 items left</span>
        <span>5 items left</span>
      </div>
      <div className="td-list-footer__actions">
        <span>5 items left</span>
      </div>
    </div>
  );
}

export default ToDoListFooter;

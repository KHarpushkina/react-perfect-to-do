import "./PerfectToDo.scss";
import ToDoBoard from "@/organisms/ToDoBoard/ToDoBoard";

function PerfectToDo() {
  return (
    <div className="td-background d-flex flex-column justify-content-center align-items-center">
      <div className="td-background__top w-100"></div>
      <ToDoBoard />
    </div>
  );
}

export default PerfectToDo;

import "./App.scss";
import PerfectToDo from "./templates/PerfectToDo/PerfectToDo";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faXmark, faCheck);

function App() {
  return (
    <div className="App">
      <PerfectToDo />
    </div>
  );
}

export default App;

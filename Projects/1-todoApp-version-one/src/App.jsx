import "./style.css";
import TodoHeading from "./components/todoHeading";
import TodoMain from "./components/todoMain";
import TodoItem1 from "./components/todoItem1";
import TodoItem2 from "./components/todoItem2";


function App() {
  return (
    <center>
      <h1>hello react</h1>
     <TodoHeading />
      <TodoMain />
      <TodoItem1/>
      <TodoItem2/>
    </center>
  );
}

export default App;

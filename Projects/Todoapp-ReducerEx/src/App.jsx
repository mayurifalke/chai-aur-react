import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHeading from "./components/TodoHeading";
import TodoMain from "./components/TodoMain";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import TododataContextProvider from "../store/todo-items-context";

function App() {
  return (
    <TododataContextProvider>
      <center className="container">
        <TodoHeading />
        <TodoMain />
        {/* Conditional Rendering */}
        <WelcomeMsg />
        <TodoItems />
      </center>
      </TododataContextProvider>
  );
}

export default App;

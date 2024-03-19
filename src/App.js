import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1>My Todo List</h1>
      <TodoList/>
    </>
  );
}

export default App;

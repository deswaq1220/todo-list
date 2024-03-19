import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3", "todo4"]);
  const [content,setContent] = useState('')


  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }

  const submit = () =>{
    let newTodos = [...todos,content]
    setTodos(newTodos)
  }

  return (
    <div>
      <AddTodo content={content} handleChangeContent={handleChangeContent} submit={submit}/>
      {todos.map((todo, index) => (
        <TodoItem title={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoList;

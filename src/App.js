import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditid] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updateTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updateTodos);
      setEditid(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: uuidv4(), todo }, ...todos]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setTodo(editTodo.todo);
    setEditid(id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Feelin' productive today?</h1>
        <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId={editId} />
        <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;

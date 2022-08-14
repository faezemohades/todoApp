import React from 'react'

function TodoForm({handleSubmit,todo,setTodo,editId}) {
  return (
         <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">{editId ? "Edit" : "add"}</button>
        </form>
  )
}

export default TodoForm

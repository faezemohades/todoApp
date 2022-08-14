import React from 'react'

function TodoList({todos,handleDelete,handleEdit}) {
  return (
    <ul>
    {todos.map((t) => (
      <li>
        <span key={t.id}>{t.todo}</span>
        <button onClick={() => handleEdit(t.id)}>Edit</button>
        <button onClick={() => handleDelete(t.id)}>Delete</button>
      </li>
    ))}
  </ul>
  )
}

export default TodoList

import React, { useState } from 'react'
import "./TodoInput.css"
import { GrFormAdd } from "react-icons/gr";

function TodoInput({handleTodoSubmit}) {
  const [todo, setTodo] = useState("");

  const handleTodo = () => {
    handleTodoSubmit(todo)
    setTodo("")
  }

  return (
    <div className='todo-input'>
        <div className='border'>
        <input type='text' placeholder='Enter new todo....' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={handleTodo}>+</button>
        </div>
    </div>
  )
}

export default TodoInput
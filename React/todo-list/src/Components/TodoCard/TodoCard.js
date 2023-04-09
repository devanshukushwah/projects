import React from 'react'
import "./TodoCard.css"
import { MdDelete } from "react-icons/md";

function TodoCard({todo, idx, handleTodoDelete}) {
  return (
    <div className='todo-card'>
        <p>{todo}</p>
        <button onClick={()=> handleTodoDelete(idx)}><MdDelete fill='white' size={22}/></button>
    </div>
  )
}

export default TodoCard
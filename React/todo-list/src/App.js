import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import TodoCard from './Components/TodoCard/TodoCard';
import TodoInput from './Components/TodoInput/TodoInput';

function App() {
  const [todoList, setTodoList] = useState([])

  const handleTodoSubmit = (todo) => {
    setTodoList([...todoList, todo])
  }

  const handleTodoDelete = (key) => {
    const newTodoList = [];
    for(let i=0;i<todoList.length ; i++){
      if(i !== key) {
        newTodoList.push(todoList.at(i))
      }
    }
    setTodoList([...newTodoList])
  }

  return <>
  <Header />
  <TodoInput handleTodoSubmit={handleTodoSubmit} />
  <div className='todo-card-list'>

  {
    todoList.map((item, idx) => <TodoCard todo={item} idx={idx} handleTodoDelete={handleTodoDelete}/>)
  }
  </div>
  </>
}

export default App;

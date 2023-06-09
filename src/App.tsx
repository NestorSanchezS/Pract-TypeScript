import { useState } from 'react'
import { Todo } from './components/Todo';
import './App.css'

function App() {

interface TodoType {
  id: number;
  text: string;
  date: string;
  isDone: boolean;
}
  
const [todoList, setTodoList] = useState<Array<TodoType>>([
  {
    id: 1,
    text: "Lo que sea mi paisano",
    date: new Date().toLocaleDateString(),
    isDone: false,
  },
  {
    id: 2,
    text: "Pa las que sea",
    date: new Date().toLocaleDateString(),
    isDone: false,
  },
  {
    id: 3,
    text: "Como fué como fué",
    date: new Date().toLocaleDateString(),
    isDone: false,
  }
])
  return (
    <>
    <h2>Todo List - TS</h2>
      <ul>
        <Todo todoData={todoList} />
      </ul>
    </>
  )
}

export default App

import { useState } from 'react'
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
      <ul>
        {
          todoList.map((todo) => (
            <li key={todo.id}>
              <h3>{todo.text}</h3> 
              <p>{todo.date}</p>
            </li>
           ))
        }
      </ul>
    </>
  )
}

export default App

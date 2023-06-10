import { useState, useReducer } from 'react'
import {v4 as uuidv4} from "uuid";
import { Todo } from './components/Todo';
import { Form } from './components/Form';
import { TodoType, TodoAction } from './types/types';
import './App.css'



const todosReducer = (state: Array<TodoType>, action: TodoAction): Array<TodoType> => {
  switch (action.type){
    case "ADD":
      return [
        ...state,
        {
          id: uuidv4(),
          text:action.payload.text,
          date: new Date().toLocaleDateString(),
          isDone:false
        },
      ];
    case "DELETE":
      return state.filter(oneTodo => oneTodo.id === action.payload.id);
    case "UPDATE":
      return state.map(oneTodo => {
        if ( oneTodo.id === action.payload.id) {
          return oneTodo.isDone ? {...oneTodo, isDone: false} : {...oneTodo, isDone: true}
        }
        return oneTodo;
      })
  }
}

function App() {
  const INITIAL_STATE: Array<TodoType>= [
    {
      id: "1",
      text: "Lo que sea mi paisano",
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
    {
      id:" 2",
      text: "Pa las que sea",
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
    {
      id: "3",
      text: "Como fué como fué",
      date: new Date().toLocaleDateString(),
      isDone: false,
    }
  ]

const [todoList, setTodoList] = useState<Array<TodoType>>([
  {
    id: "1",
    text: "Lo que sea mi paisano",
    date: new Date().toLocaleDateString(),
    isDone: false,
  },
  {
    id: "2",
    text: "Pa las que sea",
    date: new Date().toLocaleDateString(),
    isDone: false,
  },
  {
    id: "3",
    text: "Como fué como fué",
    date: new Date().toLocaleDateString(),
    isDone: false,
  }
]);

const [todos, dispatch] = useReducer(todosReducer, INITIAL_STATE);

console.log(todos)


  return (
    <>
    <button type="button" onClick={()=> dispatch({type: "ADD", payload: {
      text: "La mondá pelua njda!"
    } })}>Add TODO</button>
    <h2>Todo List - TS</h2>
    <Form />
      <ul>
        <Todo todoData={todoList} />
      </ul>
    </>
  )
}

export default App

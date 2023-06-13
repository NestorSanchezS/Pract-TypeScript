import { Todo } from './components/Todo';
import { Form } from './components/Form';
import './App.css';

//Hook
import { useTodoHook } from './hooks/useTodoHook';



function App() {

const [todos, dispatch] = useTodoHook();

const createTodoHandler = (newTodoText: string): void => {
  dispatch({
    type: "ADD",
    payload: {
      text: newTodoText
    }
  })
}

const deleteTodoHandler = (id: string): void => {
  dispatch({
    type: "DELETE",
    payload: {
      id: id
    }
  })
}

  return (
    <>
    <h2>Todo List - TS</h2>
    <Form createTodoHandler={createTodoHandler} />
      <ul>
        <Todo todoData={todos}  deleteTodoHandler={deleteTodoHandler} />
      </ul>
    </>
  )
}

export default App

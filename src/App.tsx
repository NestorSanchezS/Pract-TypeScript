import { Todo } from './components/Todo';
import { Form } from './components/Form';
import './App.css';

//Hook
import { useTodoHook } from './hooks/useTodoHook';



function App() {

const [todos, dispatch] = useTodoHook();

const createTodo = (newTodoText: string): void => {
  dispatch({
    type: "ADD",
    payload: {
      text: newTodoText
    }
  })
}

  return (
    <>
    <h2>Todo List - TS</h2>
    <Form createTodo={createTodo} />
      <ul>
        <Todo todoData={todos} />
      </ul>
    </>
  )
}

export default App

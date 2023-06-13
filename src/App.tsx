
import { Todo } from './components/Todo';
import { Form } from './components/Form';
import './App.css';

//Hook
import { useTodoHook } from './hooks/useTodoHook';


function App() {

const [todos, dispatch] = useTodoHook()

  return (
    <>
    <button type="button" onClick={()=> dispatch({type: "ADD", payload: {
      text: "La mondá pelua njda!"
    } })}>Add TODO</button>
    <h2>Todo List - TS</h2>
    <Form />
      <ul>
        <Todo todoData={todos} />
      </ul>
    </>
  )
}

export default App

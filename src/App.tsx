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


const updateOrDeleteTodoHandler = (id: string, isDone?: boolean): void => {
  if (isDone !== undefined) {
      return dispatch({
          type: "UPDATE",
          payload: { id },
      });
  }

  dispatch({
      type: "DELETE",
      payload: { id },
  });
};



  return (
    <>
    <h2>Todo List - TS</h2>
    <Form createTodoHandler={createTodoHandler} />
      <ul>
        <Todo todoData={todos}  updateOrDeleteTodoHandler={updateOrDeleteTodoHandler} />
      </ul>
    </>
  )
}

export default App

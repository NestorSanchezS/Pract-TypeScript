import { TodoType } from "../types/types"

interface TodoProps {
    todoData: Array<TodoType>
    updateOrDeleteTodoHandler: (id: string, isDone?: boolean) => void;
}


export const Todo = ({todoData, updateOrDeleteTodoHandler}: TodoProps) => {

  if(todoData.length === 0){
    return <h2>Not Todo Found!</h2>
  }

  return (
    <>
        {
          todoData.map((todo) => (
            <li key={todo.id}>
              <h3>{todo.text}</h3> 
              <p>{todo.date}</p>
              <button onClick={() => updateOrDeleteTodoHandler(todo.id, todo.isDone)}>Mark as {todo.isDone ? "undone" : "done"}</button>
                            {todo.isDone && (
                                <button onClick={() => updateOrDeleteTodoHandler(todo.id)}>
                                    Delete
                                </button>
                            )}
            </li>
           ))
        }
    </>
  )
}

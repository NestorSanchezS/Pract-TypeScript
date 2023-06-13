import { TodoType } from "../types/types"

interface TodoProps {
    todoData: Array<TodoType>
    deleteTodoHandler: (id: string) => void
}


export const Todo = ({todoData, deleteTodoHandler}: TodoProps) => {

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
              <button onClick={() => deleteTodoHandler(todo.id)}>DELETE</button>
            </li>
           ))
        }
    </>
  )
}

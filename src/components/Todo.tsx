import { TodoType } from "../types/types"

interface TodoProps {
    todoData: Array<TodoType>
}


export const Todo = ({todoData}: TodoProps) => {
  return (
    <>
        {
          todoData.map((todo) => (
            <li key={todo.id}>
              <h3>{todo.text}</h3> 
              <p>{todo.date}</p>
            </li>
           ))
        }
    </>
  )
}

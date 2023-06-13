import { useState } from 'react';

interface TodoProps {
  createTodo: (text: string ) => void;
}

export const Form = ({createTodo}: TodoProps) => {

    const [todoText, setTodoText] = useState<string>("")

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        createTodo(todoText)
    }

    const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setTodoText(e.currentTarget.value)
    }

  return (
    <form onSubmit={submitHandler}>
        <input type="text" name="newTodoText" onChange={changeHandler} />
        <button type="submit">Create Todo</button>
    </form>
  )
}

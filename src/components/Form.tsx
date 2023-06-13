import { useState } from 'react';

interface TodoProps {
  createTodoHandler: (text: string ) => void;
}

export const Form = ({createTodoHandler}: TodoProps) => {

    const [todoText, setTodoText] = useState<string>("")

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(todoText === "") return;
        createTodoHandler(todoText)
        e.currentTarget.reset();
        setTodoText("")
    }

    const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setTodoText(e.currentTarget.value)
    }

  return (
    <form onSubmit={submitHandler}>
        <input type="text" name="newTodoText" onChange={changeHandler} />
        <button type="submit" disabled={!todoText}>Create Todo</button>
    </form>
  )
}

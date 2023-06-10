import { useState } from 'react';

export const Form = () => {
    const [todoText, setTodoText] = useState<string>("")

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
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

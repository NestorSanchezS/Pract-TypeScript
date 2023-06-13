import { useReducer } from 'react';
import {v4 as uuidv4} from "uuid";
import { TodoType, TodoAction } from '../types/types';

const todosReducer = (state: Array<TodoType>, action: TodoAction): Array<TodoType> => {
    switch (action.type){
      case "ADD":
        return [
          ...state,
          {
            id: uuidv4(),
            text:action.payload.text,
            date: new Date().toLocaleDateString(),
            isDone:false
          },
        ];
      case "DELETE":
        return state.filter(oneTodo => oneTodo.id !== action.payload.id);
      case "UPDATE":
        return state.map(oneTodo => {
          if ( oneTodo.id === action.payload.id) {
            return oneTodo.isDone ? {...oneTodo, isDone: false} : {...oneTodo, isDone: true}
          }
          return oneTodo;
        });
        default:
            return state;
    }
  }

  const INITIAL_STATE: Array<TodoType>= [
    {
      id: "1",
      text: "Lo que sea mi paisano",
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
    {
      id:" 2",
      text: "Pa las que sea",
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
    {
      id: "3",
      text: "Como fué como fué",
      date: new Date().toLocaleDateString(),
      isDone: false,
    }
  ]


  export const useTodoHook = () => useReducer(todosReducer, INITIAL_STATE)
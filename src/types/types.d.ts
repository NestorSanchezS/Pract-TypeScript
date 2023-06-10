
export interface TodoType {
    id: string;
    text: string;
    date: string;
    isDone: boolean;
  }
    

  export type TodoAction = 
  {
    type: "ADD";
    payload: {
      text: string;
    }
  } | {
    type: "DELETE" | "UPDATE",
    payload: {
      id:string;
    }
  }
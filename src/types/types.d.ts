
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
    type: "DELETE",
    payload: {
      id:string;
    }
  } | {
    type: "UPDATE",
    payload: {
      text:string;
    }
  }
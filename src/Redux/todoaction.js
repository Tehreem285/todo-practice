import { addtodo, deletetodo, updatetodo } from "./todoslice";

export const addTodoAction = (title, description) => (dispatch , getState) => {
  const newtodo = {
    id: Date.now(),                
    title,
    description,
    createdAt: new Date().toLocaleString(),
  };

  dispatch(addtodo(newtodo));  
  localStorage.setItem("todos", JSON.stringify(getState().todos));     
};


export const deleteTodoAction = (id) => (dispatch , getState) => {
  dispatch(deletetodo(id));      
   localStorage.setItem("todos", JSON.stringify(getState().todos));   
};


export const updateTodoAction = (updatedtodo) => (dispatch , getState) => {
  const todos = getState().todos;
  const originaltodo = todos.find(todo => todo.id === updatedtodo.id)

  const todotoupdate = {
    ...originaltodo,
    ...updatedtodo,
    updatedAt: new Date().toLocaleString(),
  };

  dispatch(updatetodo(todotoupdate));
  localStorage.setItem("todos", JSON.stringify(getState().todos));
};
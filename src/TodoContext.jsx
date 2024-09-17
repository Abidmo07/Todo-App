/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {  todo, completed: false };
    setTodos([...todos, newTodo]);
  };    
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  const toggleTodo=(index)=>{
   const completedTodos=todos.map((todo,i)=>{
    if(i===index){
        return {...todo,completed:!todo.completed}
    }
    return todo
   })
   setTodos(completedTodos);
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo,toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

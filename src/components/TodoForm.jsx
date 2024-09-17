import { useContext, useState } from "react"
import { TodoContext } from "../TodoContext"

export default function TodoForm() {
    const {todos,removeTodo,addTodo,toggleTodo}=useContext(TodoContext);
    const [todo,setTodo]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todo.trim()){
            addTodo(todo);
            setTodo("")
        }
    }
  return (
<div className="max-w-xl p-10 mx-auto space-y-8 border border-gray-500 shadow-md bg-slate-50 rounded-2xl">
  <form onSubmit={handleSubmit} className="flex items-center justify-center w-full" action="">
    <input
      type="text"
      name="todo"
      placeholder="Enter your todo"
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    />
    <button
      className="px-5 text-white bg-green-500 rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      type="submit"
    >
      Add Todo
    </button>
  </form>
  <div>
    <ul className="space-y-4 " >
        {todos.map((todo,index)=>(
            
            
            <li  className={`flex items-center justify-between p-3 border border-gray-500 rounded-lg `} key={index}>
            
            <div className={`flex items-center ${todo.completed ? 'line-through' : ''}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(index)}
          className="mr-3"
        />
        {todo.todo}
      </div>

            
            <button className="p-2 text-white bg-red-600 rounded-lg"  onClick={()=>removeTodo(index)}>Delete</button>
            </li>
        ))}
    </ul>
  </div>

  
  
</div>

  )
}

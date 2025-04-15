import { memo } from "react";
const TodoList= memo(({todos,deleteTodo})=> {
  console.log("todolist renderings");
  
  return(
    <>
    <ol>
      {todos.map ((item) => (
        <li key={item.id}>{item.text}<button onClick={()=>deleteTodo(item.id)}>Delete</button></li>
      ))}
    </ol>
    </>
  )

})
export default TodoList
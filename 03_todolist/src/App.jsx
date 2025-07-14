import { useCallback, useMemo, useState} from "react"
import TodoList from './Todolist'
import AddTodo from'./Addtodo'






function App(){
  console.log('app rendering');
  

  const [todos,setTodos]=useState([])

  const [search,setsearch]=useState("")

  const appendTodo=useCallback((text)=>{
    console.log('appendtodo');
    
    setTodos(previousTodos => [...previousTodos,{text:text}])

  },[])

  const deleteTodo=useCallback((id)=>{
    setTodos(todos.filter(item=> item.id != id))
  },[])


  const searchedTodo=useMemo(()=> { return todos.filter( item=> item.text.toLowerCase().includes(search.toLowerCase()))},[todos,search])


  return(
    <>
    <h1>Todo App</h1>
    <AddTodo appendtodo={appendTodo}/>
    <br></br>
    <input type="text" placeholder="search tasks" onChange={ e =>setsearch(e.target.value)}></input>
    <TodoList todos={searchedTodo} deleteTodo={deleteTodo} />
    </>
  )
}
export default App
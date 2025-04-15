import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { addUser,removeUser} from "./slicer/reducer"

function App() {
  const users=useSelector(state => state.users)
   console.log( users)
  const dispatch=useDispatch()
  const [user,setUser]=useState({name:"",email:""})
  const handleSubmit =()=>{
    dispatch(addUser({id:Date.now(), ...user}))
    setUser({name:"",email:""})
    
  }
  
  const handleDelete=(id)=>{
    // console.log(id);
    dispatch(removeUser(id))
  }

  return (
      <>
      <div>
        <h1>AddUser</h1>
        <input type="name" placeholder="name" onChange={e => setUser({...user,name:e.target.value} )}value={user.name}></input>
        <input type="email" placeholder="email" onChange={e =>setUser({...user,email:e.target.value})}value={user.email}></input>
        <button onClick={handleSubmit}>AddUser</button>
        </div>
      {users.map (user =>(
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={()=>handleDelete(user.id)}>Delete</button>
        </div>
      ))}
      

       
      </>
  )
}

export default App

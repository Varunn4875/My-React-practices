// import { useEffect } from "react"
// import { useDispatch,useSelector}from "react-redux"
// import { fetchUsers } from "./redux/userSlice"


// const UserList=()=>{
//     const dispatch=useDispatch()
//     const {list,loading,error}=useSelector( state=> state.users)

//     useEffect( ()=>{
//        dispatch(fetchUsers()).then(
//         response =>{
//                console.log(list)
//         }
//        )

//     },[])
     
//    return(
//         <div>
//             <h1>UserList</h1>
//             <ul className="list-group">
//                 {list.map ((user) =>(
//                     <li key={user.id} className="list-group-item">{user.name} ({user.email})</li>
//                 ))}
//             </ul>

//         </div>
//     )
// }
// export default UserList
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./redux/userSlice"
import { removeUser } from "./redux/userSlice"

const UserList = ({onEditUser}) => {
    const dispatch = useDispatch();
    const  { list, loading, error } = useSelector( state => state.users )

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    const handleDelete=(id)=>{
        dispatch(removeUser(id))
    }



    // return( 
    //     <div>
    //         <h2>User List</h2>
    //         <ul className="list-group">
    //             { list.map( user => (
    //                 <li key={user.id} className="list-group-item">{user.name} ({user.email})<button onClick={()=>handleDelete(user.id)} className="btn btn-primary">Delete</button></li>
    //             ))}
    //         </ul>
    //     </div>
    // )
    return (
        <div>
          <h2>User List</h2>
          <ul className="list-group">
            {list.map((user) => (
              <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{user.name}</strong> - {user.email} <button onClick={()=>handleDelete(user.id)} className="btn btn-primary">Delete</button>
                </div>
                
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => onEditUser(user)} // Call the edit handler with the selected user
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
}

export default UserList
import { useParams } from "react-router-dom"

const User=()=>{
    const {id}=useParams()
    console.log({id}); //this params get the id of the respected page
    
    return(
        <>
        <h1>User Page</h1>
        <p>{id}</p>
        </>
    )
}
export default User
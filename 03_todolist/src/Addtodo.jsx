import { memo, useState } from "react"

const AddTodo= memo(({appendtodo})=>{
    console.log('addtolist rendering');
    
    const [text,setText]=useState("")
    const handleSubmit=()=>{
         
        appendtodo(text)
         setText("")
    
    }
    return(
        <div>
            <input type="text" onChange={(event)=> setText(event.target.value)} value={text}/>
            <button onClick={handleSubmit} >Add</button>
        </div>

    ) 
})
export default AddTodo
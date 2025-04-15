import {  useEffect,useState } from "react"

const SimpleEffect=()=>{
    const [count,setCount]=useState(0)
    const [color,setColor]=useState("black")
     
          useEffect(()=>{
            console.log('component is rendering')
            
          },[count])

        //if we declared empty array as dependency
        //it only works once a pageloaded
        //and it wont do re rendering

    return(
        <>
        <div>Count:{count}</div>
        <button onClick={()=> setCount(count+1)}>Increment</button>
         <div>{color}</div>
         <button onClick={()=>setColor("wh9te")}>changecolor</button>
        </>
       
    )
}
export default SimpleEffect
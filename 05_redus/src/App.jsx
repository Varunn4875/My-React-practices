import { use } from 'react'
import { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'


function App() {
  const count =useSelector(state => state.count)
  console.log(count)
  const dispatch=useDispatch()
  const incrementCount=()=>{
    dispatch({type: "INCREMENT"})

  }

  return (
    <>
     <h1>Redux Counter:{count.current_value}</h1>
     <button onClick={incrementCount}>increment</button>
    </>
  )
}

export default App

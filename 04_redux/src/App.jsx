import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from './story/reducer';


function App() {
  const count =useSelector(state =>state.count)
  console.log(count);
  
  const dispatch=useDispatch()

  const incrementValue=()=>{
    dispatch(increment(5))

  }
  const decrementValue=()=>{
    dispatch(decrement(6))
  }


  return (
    
    
    <>
      <h1>Redux :{count.current_value}</h1>
      <button onClick={incrementValue}>increment</button>
      <button onClick={decrementValue}>decrement</button>
      
    </>
  )
}

export default App
